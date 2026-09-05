from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional
from backend.app.database.connection import get_db_connection

router = APIRouter(prefix="/api/samples", tags=["Samples"])

class NewSampleRequest(BaseModel):
    area_id: int
    sample_code: str
    source: str
    collection_date: str
    location: Optional[str] = "Field Site"
    ph: float
    tds: float
    turbidity: float
    hardness: float
    temperature: Optional[float] = 25.0
    ec: Optional[float] = 500.0

@router.get("")
def list_samples(area_id: Optional[int] = None, limit: int = 100):
    conn = get_db_connection()
    if area_id:
        rows = conn.execute("""
            SELECT s.*, a.name as area_name, a.ward, p.ph, p.tds, p.turbidity, p.hardness, p.temperature, p.ec
            FROM water_samples s
            JOIN areas a ON s.area_id = a.id
            JOIN water_parameters p ON s.id = p.sample_id
            WHERE s.area_id = ?
            ORDER BY s.id DESC LIMIT ?
        """, (area_id, limit)).fetchall()
    else:
        rows = conn.execute("""
            SELECT s.*, a.name as area_name, a.ward, p.ph, p.tds, p.turbidity, p.hardness, p.temperature, p.ec
            FROM water_samples s
            JOIN areas a ON s.area_id = a.id
            JOIN water_parameters p ON s.id = p.sample_id
            ORDER BY s.id DESC LIMIT ?
        """, (limit,)).fetchall()
    conn.close()
    return [dict(r) for r in rows]

@router.post("")
def add_sample(payload: NewSampleRequest):
    conn = get_db_connection()
    try:
        cur = conn.cursor()
        cur.execute("""
            INSERT INTO water_samples (area_id, sample_code, source, collection_date, location)
            VALUES (?, ?, ?, ?, ?)
        """, (payload.area_id, payload.sample_code, payload.source, payload.collection_date, payload.location))
        sample_id = cur.lastrowid

        cur.execute("""
            INSERT INTO water_parameters (sample_id, ph, tds, turbidity, hardness, temperature, ec)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        """, (sample_id, payload.ph, payload.tds, payload.turbidity, payload.hardness, payload.temperature, payload.ec))

        conn.commit()
        return {"status": "success", "sample_id": sample_id, "sample_code": payload.sample_code}
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=400, detail=str(e))
    finally:
        conn.close()
