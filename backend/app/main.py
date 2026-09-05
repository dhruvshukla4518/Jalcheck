from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path

from backend.app.routes import areas, samples, analytics, analyzer, survey, reports, professor
from backend.app.database.models import init_db

app = FastAPI(
    title="JalCheck API",
    description="Water Quality Analysis & Community Awareness Platform Backend",
    version="2.4.0"
)

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API Routers
app.include_router(areas.router)
app.include_router(samples.router)
app.include_router(analytics.router)
app.include_router(analyzer.router)
app.include_router(survey.router)
app.include_router(reports.router)
app.include_router(professor.router)

# Mount Frontend Static Files
FRONTEND_DIR = Path(__file__).resolve().parent.parent.parent / "frontend"
if FRONTEND_DIR.exists():
    app.mount("/", StaticFiles(directory=str(FRONTEND_DIR), html=True), name="frontend")

@app.on_event("startup")
def on_startup():
    init_db()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.app.main:app", host="127.0.0.1", port=8000, reload=True)
