from backend.app.database.connection import get_db_connection

def init_db():
    conn = get_db_connection()
    cursor = conn.cursor()

    # 1. areas: id, name, latitude, longitude, description, ward, primary_source
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS areas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        ward TEXT NOT NULL,
        latitude REAL NOT NULL,
        longitude REAL NOT NULL,
        description TEXT,
        primary_source TEXT NOT NULL
    )
    ''')

    # 2. water_samples: id, area_id, sample_code, source, collection_date, location
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS water_samples (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        area_id INTEGER NOT NULL,
        sample_code TEXT NOT NULL UNIQUE,
        source TEXT NOT NULL,
        collection_date TEXT NOT NULL,
        location TEXT,
        FOREIGN KEY (area_id) REFERENCES areas(id) ON DELETE CASCADE
    )
    ''')

    # 3. water_parameters: id, sample_id, ph, tds, turbidity, hardness, temperature, ec
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS water_parameters (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        sample_id INTEGER NOT NULL UNIQUE,
        ph REAL NOT NULL,
        tds REAL NOT NULL,
        turbidity REAL NOT NULL,
        hardness REAL NOT NULL,
        temperature REAL NOT NULL,
        ec REAL NOT NULL,
        FOREIGN KEY (sample_id) REFERENCES water_samples(id) ON DELETE CASCADE
    )
    ''')

    # 4. survey_responses: id, area_id, water_source, uses_purification, water_testing, tds_awareness, storage_practice
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS survey_responses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        area_id INTEGER NOT NULL,
        water_source TEXT NOT NULL,
        uses_purification TEXT NOT NULL,
        water_testing TEXT NOT NULL,
        tds_awareness TEXT NOT NULL,
        storage_practice TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (area_id) REFERENCES areas(id)
    )
    ''')

    # 5. standards: id, parameter, minimum_value, maximum_value, unit, source
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS standards (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        parameter TEXT NOT NULL UNIQUE,
        minimum_value REAL NOT NULL,
        maximum_value REAL NOT NULL,
        unit TEXT NOT NULL,
        source TEXT NOT NULL
    )
    ''')

    # 6. professor_explanations: id, element_type, context, explanation
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS professor_explanations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        element_type TEXT NOT NULL,
        context TEXT NOT NULL UNIQUE,
        explanation TEXT NOT NULL
    )
    ''')

    conn.commit()
    conn.close()
    print("Database tables verified/initialized successfully.")

if __name__ == "__main__":
    init_db()
