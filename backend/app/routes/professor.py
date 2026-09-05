from fastapi import APIRouter
from pydantic import BaseModel
from typing import Optional, Dict, Any
from backend.app.services.professor_engine import generate_professor_explanation

router = APIRouter(prefix="/api/professor", tags=["Professor Aqua"])

class ExplainRequest(BaseModel):
    context_type: str
    context_data: Dict[str, Any]

@router.post("/explain")
def get_explanation(req: ExplainRequest):
    return generate_professor_explanation(req.context_type, req.context_data)
