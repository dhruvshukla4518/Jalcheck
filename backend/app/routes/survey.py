from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional
from backend.app.database.connection import get_db_connection

router = APIRouter(prefix="/api/survey", tags=["Community Survey"])

class SurveySubmission(BaseModel):
    area_id: int
    water_source: str
    uses_purification: str
    water_testing: str
    tds_awareness: str
    storage_practice: Optional[str] = "Covered stainless steel / brass vessel"

@router.get("/stats")
def get_survey_statistics():
    conn = get_db_connection()
    total = conn.execute("SELECT COUNT(*) FROM survey_responses").fetchone()[0]
    if total == 0:
        conn.close()
        return {"total_surveyed": 0}

    # Sources breakdown
    sources = conn.execute("""
        SELECT water_source, COUNT(*) as count
        FROM survey_responses
        GROUP BY water_source
    """).fetchall()

    # Purification breakdown
    purification = conn.execute("""
        SELECT uses_purification, COUNT(*) as count
        FROM survey_responses
        GROUP BY uses_purification
    """).fetchall()

    # Testing awareness
    tested_count = conn.execute("SELECT COUNT(*) FROM survey_responses WHERE water_testing = 'yes'").fetchone()[0]
    tds_aware_count = conn.execute("SELECT COUNT(*) FROM survey_responses WHERE tds_awareness = 'yes'").fetchone()[0]

    conn.close()

    return {
        "total_surveyed": total,
        "tested_percentage": round((tested_count / total) * 100, 1),
        "tds_awareness_percentage": round((tds_aware_count / total) * 100, 1),
        "sources": [{"source": r["water_source"], "count": r["count"], "pct": round((r["count"]/total)*100, 1)} for r in sources],
        "purification": [{"method": r["uses_purification"], "count": r["count"], "pct": round((r["count"]/total)*100, 1)} for r in purification]
    }

@router.post("/submit")
def submit_survey(submission: SurveySubmission):
    conn = get_db_connection()
    try:
        cur = conn.cursor()
        cur.execute("""
            INSERT INTO survey_responses (area_id, water_source, uses_purification, water_testing, tds_awareness, storage_practice)
            VALUES (?, ?, ?, ?, ?, ?)
        """, (submission.area_id, submission.water_source, submission.uses_purification, submission.water_testing, submission.tds_awareness, submission.storage_practice))
        conn.commit()
        return {"status": "success", "message": "Survey recorded in JalCheck database."}
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=400, detail=str(e))
    finally:
        conn.close()
