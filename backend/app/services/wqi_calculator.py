"""
Weighted Arithmetic Water Quality Index (WA-WQI) & BIS IS 10500 Evaluation Engine
"""

BIS_STANDARDS = {
    "ph": {"desirable_min": 6.5, "desirable_max": 8.5, "permissible_min": 6.5, "permissible_max": 8.5, "unit": "pH"},
    "tds": {"desirable_min": 0, "desirable_max": 500, "permissible_min": 0, "permissible_max": 2000, "unit": "mg/L"},
    "turbidity": {"desirable_min": 0, "desirable_max": 1.0, "permissible_min": 0, "permissible_max": 5.0, "unit": "NTU"},
    "hardness": {"desirable_min": 0, "desirable_max": 200, "permissible_min": 0, "permissible_max": 600, "unit": "mg/L"},
    "ec": {"desirable_min": 0, "desirable_max": 750, "permissible_min": 0, "permissible_max": 1500, "unit": "µS/cm"}
}

def calculate_wqi(ph: float, tds: float, turbidity: float, hardness: float, ec: float = None):
    """
    Calculates composite WQI (0-100) and provides parameter-by-parameter evaluation.
    Higher score (closer to 100) means superior drinking water quality.
    """
    penalties = 0.0

    # pH penalty (Ideal is 7.2 - 7.5)
    if ph < 6.5:
        penalties += min(35, (6.5 - ph) * 20)
    elif ph > 8.5:
        penalties += min(35, (ph - 8.5) * 18)
    else:
        penalties += abs(ph - 7.3) * 4

    # TDS penalty (Desirable < 500 mg/L)
    if tds > 2000:
        penalties += 35.0
    elif tds > 500:
        penalties += ((tds - 500) / 1500) * 30.0

    # Turbidity penalty (Desirable < 1.0 NTU)
    if turbidity > 5.0:
        penalties += 25.0
    elif turbidity > 1.0:
        penalties += ((turbidity - 1.0) / 4.0) * 20.0

    # Hardness penalty (Desirable < 200 mg/L)
    if hardness > 600:
        penalties += 20.0
    elif hardness > 200:
        penalties += ((hardness - 200) / 400) * 15.0

    raw_score = 100.0 - penalties
    score = round(max(10.0, min(99.0, raw_score)), 1)

    if score >= 85:
        grade = "Grade A"
        status = "Excellent"
        status_color = "emerald"
        interpretation = "All measured parameters strictly comply with BIS IS 10500:2012 desirable drinking limits. Safe for direct consumption with routine biological disinfection."
        recommendation = "Standard boiling or candle filtration is adequate for microbial safety. No heavy demineralization needed."
    elif score >= 70:
        grade = "Grade B"
        status = "Good / Potable"
        status_color = "sky"
        interpretation = "Parameters are within acceptable domestic limits. Slight mineral hardness or moderate TDS detected, posing no documented health hazard."
        recommendation = "Simple carbon filtration or boiling recommended. Safe for drinking and cooking."
    elif score >= 50:
        grade = "Grade C"
        status = "Moderate Observation"
        status_color = "amber"
        interpretation = "One or more parameters exceed desirable thresholds (such as elevated mineral ions or seasonal turbidity). Palatability may be affected."
        recommendation = "Multi-stage filtration (sediment + activated carbon or RO) advised. Check storage tank cleanliness."
    else:
        grade = "Grade D"
        status = "Potential Concern / Sub-standard"
        status_color = "rose"
        interpretation = "Water exceeds standard permissible baseline. Risk of scale accumulation and microbial shelter. Not recommended for direct unpurified ingestion."
        recommendation = "Reverse osmosis (RO) purification with remineralization, followed by microbial disinfection. Test alternate sources."

    compliance = {
        "ph": {"value": ph, "status": "Desirable" if 6.5 <= ph <= 8.5 else "Out of Range", "is_compliant": 6.5 <= ph <= 8.5},
        "tds": {"value": tds, "status": "Desirable (<500)" if tds <= 500 else ("Permissible (500-2000)" if tds <= 2000 else "Excessive"), "is_compliant": tds <= 2000},
        "turbidity": {"value": turbidity, "status": "Clear (<1.0 NTU)" if turbidity <= 1.0 else ("Permissible" if turbidity <= 5.0 else "Cloudy / Excessive"), "is_compliant": turbidity <= 5.0},
        "hardness": {"value": hardness, "status": "Soft-Moderate (<200)" if hardness <= 200 else ("Hard (200-600)" if hardness <= 600 else "Very Hard"), "is_compliant": hardness <= 600}
    }

    return {
        "wqi_score": score,
        "grade": grade,
        "status": status,
        "status_color": status_color,
        "interpretation": interpretation,
        "recommendation": recommendation,
        "compliance": compliance
    }
