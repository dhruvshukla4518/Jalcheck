from fastapi import APIRouter, HTTPException
from backend.app.database.connection import get_db_connection
from backend.app.services.wqi_calculator import BIS_STANDARDS

router = APIRouter(prefix="/api/reports", tags=["Reports"])

@router.get("/{area_id}")
def generate_area_report(area_id: int):
    conn = get_db_connection()
    area = conn.execute("SELECT * FROM areas WHERE id = ?", (area_id,)).fetchone()
    if not area:
        conn.close()
        raise HTTPException(status_code=404, detail="Area not found")

    samples = conn.execute("""
        SELECT p.ph, p.tds, p.turbidity, p.hardness, p.ec
        FROM water_samples s
        JOIN water_parameters p ON s.id = p.sample_id
        WHERE s.area_id = ?
    """, (area_id,)).fetchall()

    survey_count = conn.execute("SELECT COUNT(*) FROM survey_responses WHERE area_id = ?", (area_id,)).fetchone()[0]
    conn.close()

    if not samples:
        raise HTTPException(status_code=404, detail="No samples recorded for this area")

    import numpy as np
    param_summary = {}
    for p in ["tds", "ph", "turbidity", "hardness", "ec"]:
        vals = [s[p] for s in samples if s[p] is not None]
        if vals:
            std = BIS_STANDARDS.get(p, {})
            avg_v = float(np.mean(vals))
            desirable = std.get("desirable_max", 500)
            param_summary[p] = {
                "min": round(float(np.min(vals)), 1),
                "avg": round(avg_v, 1),
                "max": round(float(np.max(vals)), 1),
                "unit": std.get("unit", ""),
                "desirable_limit": desirable,
                "is_compliant": avg_v <= desirable
            }

    return {
        "report_id": f"JAL-2026-WD{area['id']}",
        "date": "September 2026",
        "standard": "Bureau of Indian Standards IS 10500:2012",
        "area": dict(area),
        "total_samples": len(samples),
        "survey_participants": survey_count,
        "parameters": param_summary
    }
