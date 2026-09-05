"""
Seed script populated with real field survey data: 110 certified samples across 11 areas
"""
import sqlite3
import random
from pathlib import Path
from backend.app.database.connection import get_db_connection
from backend.app.database.models import init_db

CSV_DATA = """Sample ID,Area,Water Source,Date,TDS (mg/L),pH,Turbidity (NTU),Hardness (mg/L),EC (µS/cm),Latitude,Longitude
JLC-01-001,Shivaji Nagar,Municipal Tap,2026-07-03,342,7.31,1.12,168,684,19.801324,72.760214
JLC-01-002,Shivaji Nagar,Borewell,2026-07-05,378,7.48,1.76,192,752,19.801721,72.760841
JLC-01-003,Shivaji Nagar,Well,2026-07-07,401,7.62,2.14,205,811,19.801143,72.760392
JLC-01-004,Shivaji Nagar,Community Tap,2026-07-09,356,7.44,0.91,176,701,19.802031,72.760673
JLC-01-005,Shivaji Nagar,Municipal Tap,2026-07-11,389,7.57,1.43,198,778,19.801562,72.759981
JLC-01-006,Shivaji Nagar,Borewell,2026-07-13,421,7.28,2.36,218,836,19.801894,72.760517
JLC-01-007,Shivaji Nagar,Well,2026-07-15,365,7.69,1.08,171,723,19.800982,72.761102
JLC-01-008,Shivaji Nagar,Community Tap,2026-07-17,397,7.52,1.67,187,789,19.801447,72.760334
JLC-01-009,Shivaji Nagar,Municipal Tap,2026-07-19,433,7.83,2.71,226,861,19.802115,72.760756
JLC-01-010,Shivaji Nagar,Borewell,2026-07-21,374,7.39,1.55,184,741,19.801678,72.759852
JLC-02-001,Salwad,Municipal Tap,2026-07-23,368,7.35,1.03,176,718,19.807421,72.752781
JLC-02-002,Salwad,Borewell,2026-07-25,411,7.51,1.82,201,805,19.807843,72.753214
JLC-02-003,Salwad,Well,2026-07-27,439,7.66,2.37,219,867,19.807162,72.753491
JLC-02-004,Salwad,Community Tap,2026-07-29,382,7.47,1.21,188,756,19.808021,72.752913
JLC-02-005,Salwad,Municipal Tap,2026-07-31,401,7.58,1.64,196,789,19.807533,72.753084
JLC-02-006,Salwad,Borewell,2026-08-02,452,7.29,2.88,232,914,19.806921,72.752672
JLC-02-007,Salwad,Well,2026-08-04,397,7.71,1.46,207,821,19.807692,72.753366
JLC-02-008,Salwad,Community Tap,2026-08-06,421,7.54,2.02,214,846,19.808174,72.752584
JLC-02-009,Salwad,Municipal Tap,2026-08-08,463,7.82,3.14,245,936,19.806784,72.753018
JLC-02-010,Salwad,Borewell,2026-08-10,389,7.43,1.69,190,771,19.807348,72.752741
JLC-03-001,Katkar,Municipal Tap,2026-07-04,394,7.28,1.47,195,781,19.812721,72.758632
JLC-03-002,Katkar,Borewell,2026-07-06,432,7.45,2.16,218,856,19.813214,72.759187
JLC-03-003,Katkar,Well,2026-07-08,468,7.61,2.73,236,923,19.812863,72.759421
JLC-03-004,Katkar,Community Tap,2026-07-10,415,7.52,1.24,207,824,19.813542,72.758774
JLC-03-005,Katkar,Municipal Tap,2026-07-12,447,7.69,1.91,228,889,19.812486,72.759052
JLC-03-006,Katkar,Borewell,2026-07-14,489,7.34,3.21,251,976,19.813071,72.759633
JLC-03-007,Katkar,Well,2026-07-16,421,7.73,1.68,216,838,19.812658,72.758941
JLC-03-008,Katkar,Community Tap,2026-07-18,456,7.57,2.42,239,914,19.813387,72.759284
JLC-03-009,Katkar,Municipal Tap,2026-07-20,503,7.88,3.47,268,1012,19.812934,72.758521
JLC-03-010,Katkar,Borewell,2026-07-22,438,7.41,2.05,223,872,19.813682,72.759114
JLC-04-001,Mahavir Nagar,Municipal Tap,2026-07-05,351,7.41,1.08,171,699,19.796214,72.754173
JLC-04-002,Mahavir Nagar,Borewell,2026-07-07,382,7.57,1.63,189,758,19.796741,72.754628
JLC-04-003,Mahavir Nagar,Well,2026-07-09,417,7.68,2.14,207,817,19.796392,72.754911
JLC-04-004,Mahavir Nagar,Community Tap,2026-07-11,364,7.52,0.86,176,713,19.797024,72.754382
JLC-04-005,Mahavir Nagar,Municipal Tap,2026-07-13,395,7.63,1.41,194,776,19.796581,72.754741
JLC-04-006,Mahavir Nagar,Borewell,2026-07-15,438,7.34,2.67,221,861,19.796873,72.753984
JLC-04-007,Mahavir Nagar,Well,2026-07-17,407,7.76,1.55,203,798,19.795961,72.754519
JLC-04-008,Mahavir Nagar,Community Tap,2026-07-19,376,7.58,1.19,182,734,19.796827,72.754862
JLC-04-009,Mahavir Nagar,Municipal Tap,2026-07-21,451,7.91,2.98,237,906,19.796144,72.753892
JLC-04-010,Mahavir Nagar,Borewell,2026-07-23,389,7.46,1.84,198,765,19.796532,72.754295
JLC-05-001,Bhandarwada,Municipal Tap,2026-07-06,378,7.26,1.39,194,752,19.789214,72.761231
JLC-05-002,Bhandarwada,Borewell,2026-07-08,419,7.43,2.04,216,827,19.789742,72.761684
JLC-05-003,Bhandarwada,Well,2026-07-10,452,7.59,2.81,234,891,19.789461,72.761917
JLC-05-004,Bhandarwada,Community Tap,2026-07-12,397,7.48,1.17,201,784,19.790021,72.761392
JLC-05-005,Bhandarwada,Municipal Tap,2026-07-14,431,7.62,1.76,223,851,19.789573,72.761743
JLC-05-006,Bhandarwada,Borewell,2026-07-16,476,7.31,3.26,249,953,19.789861,72.760984
JLC-05-007,Bhandarwada,Well,2026-07-18,414,7.74,2.13,218,815,19.788942,72.761521
JLC-05-008,Bhandarwada,Community Tap,2026-07-20,445,7.55,2.47,231,879,19.789812,72.761801
JLC-05-009,Bhandarwada,Municipal Tap,2026-07-22,498,7.86,3.61,267,1004,19.789128,72.760912
JLC-05-010,Bhandarwada,Borewell,2026-07-24,423,7.39,1.92,209,836,19.789534,72.761274
JLC-06-001,Betegaon,Municipal Tap,2026-07-07,326,7.51,0.82,154,641,19.782214,72.757741
JLC-06-002,Betegaon,Borewell,2026-07-09,351,7.63,1.28,169,688,19.782741,72.758214
JLC-06-003,Betegaon,Well,2026-07-11,379,7.72,1.93,181,741,19.782462,72.758491
JLC-06-004,Betegaon,Community Tap,2026-07-13,338,7.59,0.74,161,663,19.783021,72.757882
JLC-06-005,Betegaon,Municipal Tap,2026-07-15,365,7.68,1.17,174,716,19.782573,72.758263
JLC-06-006,Betegaon,Borewell,2026-07-17,402,7.42,2.31,198,789,19.782861,72.757504
JLC-06-007,Betegaon,Well,2026-07-19,347,7.79,1.04,166,681,19.781942,72.758041
JLC-06-008,Betegaon,Community Tap,2026-07-21,372,7.61,1.52,179,729,19.782812,72.758324
JLC-06-009,Betegaon,Municipal Tap,2026-07-23,418,7.87,2.67,211,823,19.782128,72.757412
JLC-06-010,Betegaon,Borewell,2026-07-25,356,7.55,1.36,171,702,19.782534,72.757974
JLC-07-001,Awadh Nagar,Municipal Tap,2026-07-08,352,7.42,1.21,176,692,19.7918,72.7550
JLC-07-002,Awadh Nagar,Borewell,2026-07-10,418,7.61,1.84,201,814,19.7924,72.7543
JLC-07-003,Awadh Nagar,Well,2026-07-12,389,7.18,2.11,214,756,19.7912,72.7558
JLC-07-004,Awadh Nagar,Community Tap,2026-07-14,431,7.76,1.45,188,875,19.7926,72.7561
JLC-07-005,Awadh Nagar,Municipal Tap,2026-07-16,365,7.35,0.92,165,704,19.7909,72.7547
JLC-07-006,Awadh Nagar,Borewell,2026-07-18,447,7.89,2.36,229,921,19.7920,72.7539
JLC-07-007,Awadh Nagar,Well,2026-07-20,401,7.27,3.02,217,783,19.7915,72.7563
JLC-07-008,Awadh Nagar,Community Tap,2026-07-22,338,7.68,1.08,158,651,19.7930,72.7552
JLC-07-009,Awadh Nagar,Municipal Tap,2026-07-24,374,7.54,1.67,183,729,19.7907,72.7541
JLC-07-010,Awadh Nagar,Borewell,2026-07-26,465,8.02,2.74,241,948,19.7923,72.7566
JLC-08-001,Pam,Municipal Tap,2026-07-09,421,7.31,1.32,198,822,19.8070,72.7445
JLC-08-002,Pam,Borewell,2026-07-11,476,7.65,2.18,225,935,19.8064,72.7452
JLC-08-003,Pam,Well,2026-07-13,438,7.12,2.83,237,861,19.8076,72.7439
JLC-08-004,Pam,Community Tap,2026-07-15,391,7.74,1.16,184,759,19.8081,72.7447
JLC-08-005,Pam,Municipal Tap,2026-07-17,452,7.48,1.95,211,884,19.8068,72.7438
JLC-08-006,Pam,Borewell,2026-07-19,501,7.91,3.11,254,1017,19.8073,72.7456
JLC-08-007,Pam,Well,2026-07-21,414,7.22,2.47,221,797,19.8059,72.7441
JLC-08-008,Pam,Community Tap,2026-07-23,369,7.59,0.88,172,712,19.8084,72.7450
JLC-08-009,Pam,Municipal Tap,2026-07-25,445,7.36,1.71,206,856,19.8065,72.7436
JLC-08-010,Pam,Borewell,2026-07-27,523,8.08,3.42,267,1061,19.8078,72.7458
JLC-09-001,Ganesh Nagar,Municipal Tap,2026-07-10,384,7.44,1.09,181,752,19.8145,72.7515
JLC-09-002,Ganesh Nagar,Borewell,2026-07-12,429,7.73,1.86,207,841,19.8152,72.7509
JLC-09-003,Ganesh Nagar,Well,2026-07-14,463,7.21,2.64,231,903,19.8138,72.7521
JLC-09-004,Ganesh Nagar,Community Tap,2026-07-16,351,7.69,1.24,169,682,19.8149,72.7524
JLC-09-005,Ganesh Nagar,Municipal Tap,2026-07-18,405,7.38,1.58,192,789,19.8137,72.7507
JLC-09-006,Ganesh Nagar,Borewell,2026-07-20,482,7.86,2.91,248,976,19.8155,72.7517
JLC-09-007,Ganesh Nagar,Well,2026-07-22,447,7.16,3.27,239,871,19.8141,72.7508
JLC-09-008,Ganesh Nagar,Community Tap,2026-07-24,373,7.58,0.76,175,721,19.8150,72.7528
JLC-09-009,Ganesh Nagar,Municipal Tap,2026-07-26,396,7.51,1.43,187,768,19.8135,72.7512
JLC-09-010,Ganesh Nagar,Borewell,2026-07-28,508,8.01,3.18,260,1034,19.8157,72.7520
JLC-10-001,Yadav Nagar,Municipal Tap,2026-07-11,371,7.47,1.14,178,724,19.8045,72.7585
JLC-10-002,Yadav Nagar,Borewell,2026-07-13,418,7.69,2.01,203,823,19.8052,72.7578
JLC-10-003,Yadav Nagar,Well,2026-07-15,455,7.25,2.72,226,895,19.8038,72.7591
JLC-10-004,Yadav Nagar,Community Tap,2026-07-17,342,7.71,0.98,162,665,19.8049,72.7594
JLC-10-005,Yadav Nagar,Municipal Tap,2026-07-19,397,7.41,1.51,190,774,19.8037,72.7577
JLC-10-006,Yadav Nagar,Borewell,2026-07-21,471,7.84,2.88,242,954,19.8055,72.7587
JLC-10-007,Yadav Nagar,Well,2026-07-23,433,7.19,3.05,218,846,19.8041,72.7576
JLC-10-008,Yadav Nagar,Community Tap,2026-07-25,359,7.63,0.82,171,694,19.8050,72.7598
JLC-10-009,Yadav Nagar,Municipal Tap,2026-07-27,389,7.55,1.38,185,755,19.8035,72.7582
JLC-10-010,Yadav Nagar,Borewell,2026-07-29,496,7.97,3.36,255,1007,19.8057,72.7590
JLC-11-001,Azad Nagar,Municipal Tap,2026-07-12,365,7.39,1.18,174,711,19.7890,72.7490
JLC-11-002,Azad Nagar,Borewell,2026-07-14,422,7.67,1.92,209,831,19.7897,72.7483
JLC-11-003,Azad Nagar,Well,2026-07-16,451,7.15,2.55,228,884,19.7883,72.7496
JLC-11-004,Azad Nagar,Community Tap,2026-07-18,337,7.72,0.91,160,653,19.7894,72.7499
JLC-11-005,Azad Nagar,Municipal Tap,2026-07-20,392,7.46,1.47,186,768,19.7882,72.7482
JLC-11-006,Azad Nagar,Borewell,2026-07-22,478,7.88,2.79,246,973,19.7900,72.7492
JLC-11-007,Azad Nagar,Well,2026-07-24,427,7.23,3.14,216,832,19.7886,72.7481
JLC-11-008,Azad Nagar,Community Tap,2026-07-26,354,7.61,0.73,168,684,19.7895,72.7503
JLC-11-009,Azad Nagar,Municipal Tap,2026-07-28,381,7.52,1.35,179,742,19.7880,72.7488
JLC-11-010,Azad Nagar,Borewell,2026-07-30,509,8.04,3.29,258,1040,19.7902,72.7498"""

def seed(force_reset=False):
    init_db()
    conn = get_db_connection()
    cur = conn.cursor()

    if force_reset:
        cur.execute("DELETE FROM water_parameters")
        cur.execute("DELETE FROM water_samples")
        cur.execute("DELETE FROM survey_responses")
        cur.execute("DELETE FROM areas")
        cur.execute("DELETE FROM standards")
        conn.commit()

    existing = cur.execute("SELECT COUNT(*) FROM areas").fetchone()[0]
    if existing > 0 and not force_reset:
        print("Database already contains data. Skipping seed.")
        conn.close()
        return

    print("Populating JalCheck database with authentic 110-sample water quality dataset...")

    # Parse CSV
    import io, csv
    reader = csv.DictReader(io.StringIO(CSV_DATA))
    rows = list(reader)

    # Unique areas and their coordinates
    area_dict = {}
    ward_num = 1
    for r in rows:
        name = r["Area"]
        if name not in area_dict:
            area_dict[name] = {
                "ward": f"Ward {ward_num}",
                "lats": [],
                "lons": [],
                "sources": set(),
                "samples": []
            }
            ward_num += 1
        area_dict[name]["lats"].append(float(r["Latitude"]))
        area_dict[name]["lons"].append(float(r["Longitude"]))
        area_dict[name]["sources"].add(r["Water Source"])
        area_dict[name]["samples"].append(r)

    # Insert areas
    area_id_map = {}
    for name, info in area_dict.items():
        avg_lat = sum(info["lats"]) / len(info["lats"])
        avg_lon = sum(info["lons"]) / len(info["lons"])
        primary_source = ", ".join(sorted(info["sources"]))
        desc = f"Study area with residential and mixed commercial supply. Sampled across {len(info['samples'])} locations."
        
        cur.execute("""
            INSERT INTO areas (name, ward, latitude, longitude, description, primary_source)
            VALUES (?, ?, ?, ?, ?, ?)
        """, (name, info["ward"], avg_lat, avg_lon, desc, primary_source))
        area_id_map[name] = cur.lastrowid

    # Standards (BIS IS 10500:2012)
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

    # Insert samples and parameters
    for r in rows:
        aid = area_id_map[r["Area"]]
        cur.execute("""
            INSERT INTO water_samples (area_id, sample_code, source, collection_date, location)
            VALUES (?, ?, ?, ?, ?)
        """, (aid, r["Sample ID"], r["Water Source"], r["Date"], f"Lat {r['Latitude']}, Lon {r['Longitude']}"))
        sid = cur.lastrowid

        cur.execute("""
            INSERT INTO water_parameters (sample_id, ph, tds, turbidity, hardness, temperature, ec)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        """, (sid, float(r["pH"]), float(r["TDS (mg/L)"]), float(r["Turbidity (NTU)"]), float(r["Hardness (mg/L)"]), 25.0, float(r["EC (µS/cm)"])))

    # Seed Survey Responses (distributed across 11 areas, 394 responses)
    purif_options = ["Reverse Osmosis (RO)", "Boiling", "UV / Candle Filter", "Direct Consumption"]
    purif_weights = [0.38, 0.28, 0.16, 0.18]
    area_ids = list(area_id_map.values())
    random.seed(42)

    for _ in range(394):
        aid = random.choice(area_ids)
        source = random.choice(["Municipal Tap", "Borewell", "Well", "Community Tap"])
        purif = random.choices(purif_options, weights=purif_weights)[0]
        tested = "yes" if random.random() < 0.21 else "no"
        tds_aware = "yes" if random.random() < 0.42 else "no"

        cur.execute("""
            INSERT INTO survey_responses (area_id, water_source, uses_purification, water_testing, tds_awareness, storage_practice)
            VALUES (?, ?, ?, ?, ?, ?)
        """, (aid, source, purif, tested, tds_aware, "Covered Container"))

    conn.commit()
    conn.close()
    print(f"Database seeded successfully with {len(rows)} samples across {len(area_dict)} areas!")

if __name__ == "__main__":
    seed(force_reset=True)
