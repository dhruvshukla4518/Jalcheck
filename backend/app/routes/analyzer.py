from fastapi import APIRouter
from pydantic import BaseModel
from typing import Optional
from backend.app.services.wqi_calculator import calculate_wqi
from backend.app.services.professor_engine import generate_professor_explanation

router = APIRouter(prefix="/api/analyzer", tags=["Water Analyzer"])

class AnalyzerInput(BaseModel):
    ph: float
    tds: float
    turbidity: float
    hardness: float
    ec: Optional[float] = 450.0
    sample_label: Optional[str] = "User Test Sample"

@router.post("/diagnose")
def diagnose_sample(data: AnalyzerInput):
    result = calculate_wqi(
        ph=data.ph,
        tds=data.tds,
        turbidity=data.turbidity,
        hardness=data.hardness,
        ec=data.ec
    )

    prof_explanation = generate_professor_explanation("analyzer", {
        "wqi_score": result["wqi_score"],
        "grade": result["grade"],
        "interpretation": result["interpretation"],
        "recommendation": result["recommendation"]
    })

    return {
        "sample_label": data.sample_label,
        "analysis": result,
        "professor_aqua": prof_explanation
    }
