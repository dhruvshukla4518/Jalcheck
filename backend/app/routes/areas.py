from fastapi import APIRouter, Depends, HTTPException
from backend.app.database.connection import get_db_connection

router = APIRouter(prefix="/api/areas", tags=["Areas"])

@router.get("")
def list_areas():
    conn = get_db_connection()
    areas = conn.execute("""
        SELECT a.*, COUNT(s.id) as sample_count
        FROM areas a
        LEFT JOIN water_samples s ON a.id = s.area_id
        GROUP BY a.id
    """).fetchall()
    conn.close()
    return [dict(area) for area in areas]

@router.get("/{area_id}")
def get_area_detail(area_id: int):
    conn = get_db_connection()
    area = conn.execute("SELECT * FROM areas WHERE id = ?", (area_id,)).fetchone()
    if not area:
        conn.close()
        raise HTTPException(status_code=404, detail="Area not found")
    
    samples = conn.execute("""
        SELECT s.*, p.ph, p.tds, p.turbidity, p.hardness, p.temperature, p.ec
        FROM water_samples s
        JOIN water_parameters p ON s.id = p.sample_id
        WHERE s.area_id = ?
    """, (area_id,)).fetchall()
    conn.close()
    
    return {
        "area": dict(area),
        "samples": [dict(s) for s in samples]
    }
