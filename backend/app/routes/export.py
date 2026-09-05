"""
JalCheck Dataset Export Route
Provides one-click downloadable CSV dataset for academic and research use.
"""
import io
import csv
from fastapi import APIRouter
from fastapi.responses import Response
from backend.app.database.connection import get_db_connection

router = APIRouter(prefix="/api/samples", tags=["export"])

@router.get("/export/csv")
def export_samples_csv():
    conn = get_db_connection()
    cursor = conn.cursor()

    query = """
    SELECT 
        s.sample_code,
        a.name AS area_name,
        a.ward,
        s.source,
        s.collection_date,
        s.location,
        p.tds,
        p.ph,
        p.turbidity,
        p.hardness,
        p.ec
    FROM water_samples s
    JOIN areas a ON s.area_id = a.id
    JOIN water_parameters p ON s.id = p.sample_id
    ORDER BY s.id ASC
    """
    cursor.execute(query)
    rows = cursor.fetchall()
    conn.close()

    output = io.StringIO()
    writer = csv.writer(output)

    # Header row
    writer.writerow([
        "Sample ID",
        "Area",
        "Ward",
        "Water Source",
        "Date",
        "TDS (mg/L)",
        "pH",
        "Turbidity (NTU)",
        "Hardness (mg/L)",
        "EC (µS/cm)",
        "Latitude",
        "Longitude",
        "BIS IS 10500 Compliance"
    ])

    for r in rows:
        lat, lon = "", ""
        loc = r["location"]
        if loc and "," in loc:
            parts = loc.split(",")
            lat = parts[0].strip()
            lon = parts[1].strip()

        is_compliant = (
            6.5 <= r["ph"] <= 8.5 and
            r["tds"] <= 500 and
            r["turbidity"] <= 5 and
            r["hardness"] <= 300
        )
        status = "Within BIS Acceptable Limit" if is_compliant else "Requires Filtration / Boiling"

        writer.writerow([
            r["sample_code"],
            r["area_name"],
            r["ward"],
            r["source"],
            r["collection_date"],
            f"{r['tds']:.1f}",
            f"{r['ph']:.2f}",
            f"{r['turbidity']:.2f}",
            f"{r['hardness']:.1f}",
            f"{r['ec']:.1f}",
            lat,
            lon,
            status
        ])

    csv_content = output.getvalue()
    return Response(
        content=csv_content,
        media_type="text/csv",
        headers={
            "Content-Disposition": "attachment; filename=jalcheck_water_quality_dataset_2026.csv"
        }
    )