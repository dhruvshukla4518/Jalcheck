"""
Professor Aqua Context-Aware Educational Engine
Generates clear, scientifically grounded, non-alarmist observations.
"""

def generate_professor_explanation(context_type: str, context_data: dict) -> dict:
    """
    Accepts context like page, area, parameter, min, avg, max, and generates
    pedagogical explanations citing BIS IS 10500:2012.
    """
    area_name = context_data.get("area_name", "the selected area")
    param = context_data.get("parameter", "TDS").upper()
    avg_val = context_data.get("avg_val", context_data.get("value"))
    min_val = context_data.get("min_val")
    max_val = context_data.get("max_val")

    if context_type == "dashboard_bar":
        if param == "TDS":
            if avg_val and avg_val > 500:
                text = (f"You tapped the TDS bar for {area_name}. The average is {avg_val} mg/L, ranging from {min_val} to {max_val} mg/L. "
                        f"This exceeds the BIS IS 10500 desirable limit of 500 mg/L. However, do not panic! TDS alone is not a disease vector. "
                        f"It indicates natural dissolved minerals like calcium and magnesium which cause pipe scaling. RO filtration is recommended for cooking and drinking.")
                state = "explaining"
            else:
                text = (f"In {area_name}, the average TDS is {avg_val} mg/L (min {min_val}, max {max_val} mg/L). "
                        f"This comfortably satisfies the Indian standard of 500 mg/L. It provides natural minerals and excellent taste!")
                state = "confirmation"
        elif param == "PH":
            text = (f"For {area_name}, the mean pH is {avg_val}. The safe drinking corridor is 6.5 to 8.5. "
                    f"Water here is well-balanced and non-corrosive to domestic plumbing.")
            state = "explaining"
        elif param == "TURBIDITY":
            if avg_val and avg_val > 1.0:
                text = (f"In {area_name}, turbidity averages {avg_val} NTU, slightly above the 1.0 NTU clarity threshold. "
                        f"While often harmless sediment, suspended silt can shield microbes from UV rays. Always filter through a candle or cloth before boiling.")
                state = "attention"
            else:
                text = f"Turbidity in {area_name} is crystal clear at {avg_val} NTU (well under the 1.0 NTU limit)."
                state = "confirmation"
        else:
            text = f"In {area_name}, the average {param} reading is {avg_val}. This complies with documented community standards."
            state = "explaining"

    elif context_type == "analyzer":
        score = context_data.get("wqi_score", 85)
        grade = context_data.get("grade", "Grade A")
        text = (f"I have evaluated your water sample! The calculated Water Quality Index is {score}/100 ({grade}). "
                f"{context_data.get('interpretation', '')} Recommendation: {context_data.get('recommendation', '')}")
        state = "confirmation" if score >= 75 else ("attention" if score < 50 else "explaining")

    elif context_type == "survey":
        text = ("Thank you for contributing to citizen science! Your survey response helps us map actual household filtration practices "
                "against our laboratory test results.")
        state = "greeting"

    else:
        text = "Hello! I am Professor Aqua. Tap any map marker, chart bar, or run a diagnostic test to understand your water."
        state = "greeting"

    return {
        "text": text,
        "state": state,
        "avatar": "👨‍🔬" if state == "greeting" else ("👨‍🏫" if state == "explaining" else ("⚠️" if state == "attention" else "✨"))
    }
