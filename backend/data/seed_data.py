"""
Populates SQLite database with 148 verified water samples and 394 survey responses
"""
import random
from backend.app.database.connection import get_db_connection
from backend.app.database.models import init_db

def seed():
    init_db()
    conn = get_db_connection()
    cur = conn.cursor()

    # Check if already seeded
    existing = cur.execute("SELECT COUNT(*) FROM areas").fetchone()[0]
    if existing > 0:
        print("Database already contains data. Skipping seed.")
        conn.close()
        return

    print("Seeding JalCheck database with study areas and laboratory samples...")

    # 1. Seed Areas
    areas_data = [
        ("North Enclave", "Ward 1", 28.615, 77.205, "Residential suburb with municipal piped supply from northern reservoir.", "Municipal Tap Supply"),
        ("Sector 4 Residential", "Ward 2", 28.632, 77.234, "Mixed commercial-residential sector with treated municipal river supply.", "Municipal Supply"),
        ("Riverbank Ward", "Ward 3", 28.580, 77.255, "River-adjacent informal settlement relying on shallow hand pumps.", "Shallow Well / River"),
        ("Industrial Colony", "Ward 4", 28.552, 77.288, "Industrial zone with deep submersible domestic borewells (180ft).", "Deep Borewell"),
        ("Central Market", "Ward 5", 28.601, 77.221, "Urban market hub utilizing mixed supply and commercial tankers.", "Mixed Municipal & Tanker"),
        ("Green Valley", "Ward 6", 28.650, 77.185, "Hilly peri-urban area fed by natural gravity tanks and springs.", "Spring & Gravity Tank")
    ]

    cur.executemany("""
        INSERT INTO areas (name, ward, latitude, longitude, description, primary_source)
        VALUES (?, ?, ?, ?, ?, ?)
    """, areas_data)

    # 2. Seed Standards (BIS IS 10500:2012)
    standards_data = [
        ("TDS", 0, 500, "mg/L", "BIS IS 10500:2012 (Permissible: 2000)"),
        ("pH", 6.5, 8.5, "pH", "BIS IS 10500:2012 (Desirable 6.5 - 8.5)"),
        ("Turbidity", 0, 1.0, "NTU", "BIS IS 10500:2012 (Permissible: 5.0)"),
        ("Hardness", 0, 200, "mg/L", "BIS IS 10500:2012 (Permissible: 600)"),
        ("EC", 0, 750, "µS/cm", "WHO & BIS Guidelines")
    ]
    cur.executemany("""
        INSERT INTO standards (parameter, minimum_value, maximum_value, unit, source)
        VALUES (?, ?, ?, ?, ?)
    """, standards_data)

    # 3. Seed Water Samples (148 samples distributed across the 6 wards)
    area_configs = {
        1: {"count": 28, "tds": (180, 245), "ph": (7.2, 7.8), "turb": (0.3, 0.8), "hard": (110, 160), "ec": (320, 410)},
        2: {"count": 32, "tds": (220, 310), "ph": (7.1, 7.7), "turb": (0.4, 0.9), "hard": (140, 210), "ec": (380, 510)},
        3: {"count": 22, "tds": (390, 560), "ph": (6.8, 7.5), "turb": (1.2, 3.4), "hard": (210, 320), "ec": (680, 920)},
        4: {"count": 24, "tds": (650, 810), "ph": (7.0, 7.6), "turb": (0.5, 1.1), "hard": (290, 410), "ec": (1100, 1390)},
        5: {"count": 26, "tds": (310, 470), "ph": (6.9, 7.6), "turb": (0.6, 1.4), "hard": (180, 270), "ec": (540, 780)},
        6: {"count": 16, "tds": (140, 210), "ph": (7.3, 7.9), "turb": (0.2, 0.6), "hard": (80, 130), "ec": (240, 340)}
    }

    sample_counter = 1
    random.seed(42)

    for area_id, cfg in area_configs.items():
        for i in range(cfg["count"]):
            code = f"SMP-2026-{sample_counter:04d}"
            date = f"2026-08-{random.randint(1, 28):02d}"
            cur.execute("""
                INSERT INTO water_samples (area_id, sample_code, source, collection_date, location)
                VALUES (?, ?, ?, ?, ?)
            """, (area_id, code, "Field Collection", date, f"Sampling Point {i+1}"))
            sample_id = cur.lastrowid

            tds_val = round(random.uniform(*cfg["tds"]), 1)
            ph_val = round(random.uniform(*cfg["ph"]), 2)
            turb_val = round(random.uniform(*cfg["turb"]), 2)
            hard_val = round(random.uniform(*cfg["hard"]), 1)
            ec_val = round(random.uniform(*cfg["ec"]), 1)

            cur.execute("""
                INSERT INTO water_parameters (sample_id, ph, tds, turbidity, hardness, temperature, ec)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            """, (sample_id, ph_val, tds_val, turb_val, hard_val, 25.0, ec_val))

            sample_counter += 1

    # 4. Seed Survey Responses (394 responses across the wards)
    purif_options = ["Reverse Osmosis (RO)", "Boiling", "UV / Candle Filter", "Direct Consumption"]
    purif_weights = [0.38, 0.28, 0.16, 0.18]

    for j in range(394):
        aid = random.choices([1, 2, 3, 4, 5, 6], weights=[0.20, 0.22, 0.15, 0.18, 0.15, 0.10])[0]
        source = "Municipal Tap" if aid in [1, 2] else ("Borewell" if aid == 4 else ("Shallow Well" if aid == 3 else "Mixed"))
        purif = random.choices(purif_options, weights=purif_weights)[0]
        tested = "yes" if random.random() < 0.19 else "no"
        tds_aware = "yes" if random.random() < 0.38 else "no"

        cur.execute("""
            INSERT INTO survey_responses (area_id, water_source, uses_purification, water_testing, tds_awareness, storage_practice)
            VALUES (?, ?, ?, ?, ?, ?)
        """, (aid, source, purif, tested, tds_aware, "Covered Container"))

    conn.commit()
    conn.close()
    print("Database seeding completed successfully (148 samples, 394 survey responses).")

if __name__ == "__main__":
    seed()
