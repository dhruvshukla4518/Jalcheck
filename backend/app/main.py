from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path

import os
import time
from backend.app.routes import areas, samples, analytics, analyzer, survey, reports, professor, export
from backend.app.database.models import init_db
from backend.app.database.connection import get_db_connection

START_TIME = time.time()

app = FastAPI(
    title="JalCheck API",
    description="Water Quality Analysis & Community Awareness Platform Backend",
    version="2.5.0"
)

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Render & CI Healthcheck Endpoint
@app.get("/health")
@app.get("/api/health")
def health_check():
    """Health check endpoint for Render zero-downtime health probes and monitoring."""
    try:
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute("SELECT COUNT(*) FROM water_samples")
        sample_count = cur.fetchone()[0]
        cur.execute("SELECT COUNT(*) FROM areas")
        area_count = cur.fetchone()[0]
        conn.close()
        db_status = "connected"
    except Exception as e:
        db_status = f"error: {str(e)}"
        sample_count = 0
        area_count = 0

    return {
        "status": "healthy" if db_status == "connected" else "degraded",
        "service": "jalcheck",
        "version": "2.5.0",
        "environment": "production" if os.environ.get("RENDER") else "development",
        "database": db_status,
        "metrics": {
            "samples_count": sample_count,
            "areas_count": area_count
        },
        "uptime_seconds": round(time.time() - START_TIME, 2)
    }

# Include API Routers
app.include_router(areas.router)
app.include_router(samples.router)
app.include_router(analytics.router)
app.include_router(analyzer.router)
app.include_router(survey.router)
app.include_router(reports.router)
app.include_router(professor.router)
app.include_router(export.router)

# Mount Frontend Static Files
FRONTEND_DIR = Path(__file__).resolve().parent.parent.parent / "frontend"
if FRONTEND_DIR.exists():
    app.mount("/", StaticFiles(directory=str(FRONTEND_DIR), html=True), name="frontend")

from backend.data.seed_data import seed
import os

@app.on_event("startup")
def on_startup():
    init_db()
    seed()

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8050))
    uvicorn.run("backend.app.main:app", host="0.0.0.0", port=port, reload=True)
