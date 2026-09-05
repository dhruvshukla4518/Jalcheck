# ■ JALCHECK
### Water Quality Analysis & Community Awareness Platform
> *"Know Your Water. Understand Your Community."*

**Community Engagement Project (CEP) — Complete Working Implementation**

---

## 🌊 Overview

**JalCheck** is an interactive web platform combining laboratory water-quality analysis, geographical community mapping, citizen science surveys, statistical analytics, and an animated virtual educator—**Professor Aqua**—with Web Speech API voice narration.

This version is engineered **100% without React or Node.js**, using modular modern **Vanilla JavaScript (ES6+ Components)**, **Tailwind CSS**, and **HTML5**, supported by a robust **Python FastAPI**, **SQLite**, and **Pandas/NumPy** backend.

---

## 🚀 Quickstart (One-Command Launch)

You don't need `npm`, Node.js, or complex bundlers. Simply run:

```bash
python run.py
```

### What this does automatically:
1. Verifies/creates the local SQLite database schemas (`backend/data/jalcheck.db`).
2. Pre-populates certified laboratory water samples across 6 municipal study wards (148 samples) and 394 citizen survey responses.
3. Launches the FastAPI web server at `http://localhost:8000`.
4. Automatically launches your default web browser to the live platform!

---

## 🏛️ System Architecture

```
jalcheck/
├── backend/
│   ├── app/
│   │   ├── main.py                  # FastAPI server & static file mount
│   │   ├── database/
│   │   │   ├── connection.py        # SQLite connection manager
│   │   │   └── models.py            # SQLite schema (areas, samples, parameters, surveys, standards)
│   │   ├── routes/
│   │   │   ├── areas.py             # GET /api/areas
│   │   │   ├── samples.py           # GET /api/samples, POST /api/samples
│   │   │   ├── analytics.py         # GET /api/analytics/summary (Pandas min/avg/max)
│   │   │   ├── analyzer.py          # POST /api/analyzer/diagnose (WQI calculation)
│   │   │   ├── survey.py            # GET /api/survey/stats, POST /api/survey/submit
│   │   │   ├── reports.py           # GET /api/reports/{area_id}
│   │   │   └── professor.py         # POST /api/professor/explain
│   │   └── services/
│   │       ├── wqi_calculator.py    # Weighted Water Quality Index (WA-WQI) engine
│   │       └── professor_engine.py  # Context-aware educational explanation generator
│   └── data/
│       ├── seed_data.py             # Pre-populates 148 verified samples & 394 surveys
│       └── jalcheck.db              # Persistent SQLite database
├── frontend/
│   ├── index.html                   # Responsive Single-Page Application (SPA)
│   ├── css/
│   │   └── styles.css               # Environmental-tech styling & animations
│   └── js/
│       ├── api.js                   # REST client for FastAPI endpoints
│       ├── professorAqua.js         # Animated avatar & Web Speech API voice synthesis
│       ├── map.js                   # Vector GIS map with clickable ward pins
│       ├── dashboard.js             # SVG bar charts with Min/Avg/Max whiskers & click drawer
│       ├── analyzer.js              # Real-time multi-parameter diagnostic sliders
│       ├── survey.js                # Household survey & live dynamic awareness charts
│       ├── report.js                # Structured report card renderer (window.print())
│       └── app.js                   # Main application router & state manager
├── requirements.txt                 # Python dependencies (fastapi, uvicorn, pandas, numpy)
├── run.py                           # Single-click launcher
└── README.md                        # Documentation
```

---

## 🧪 Scientific & Environmental Standards

All diagnostic evaluations, observation cards, and report dossiers are benchmarked strictly against:
- **Bureau of Indian Standards: BIS IS 10500:2012** (Specification for Drinking Water)
- **World Health Organization (WHO)** Guidelines for Drinking-water Quality

| Parameter | Desirable Limit | Permissible Limit | Health / Aesthetic Significance |
| :--- | :--- | :--- | :--- |
| **TDS** | $\le 500	ext{ mg/L}$ | $2000	ext{ mg/L}$ | Palatability, dissolved mineral salts, scaling |
| **pH** | $6.5 - 8.5$ | $6.5 - 8.5$ | Corrosivity vs alkaline scaling |
| **Turbidity** | $\le 1.0	ext{ NTU}$ | $5.0	ext{ NTU}$ | Particulate matter, microbial sheltering |
| **Hardness** | $\le 200	ext{ mg/L}$ | $600	ext{ mg/L}$ | Calcium/Magnesium carbonates, soap lathering |
| **EC** | $\le 750\ \mu	ext{S/cm}$ | $1500\ \mu	ext{S/cm}$ | Ionic conductivity indicator |

---

## 👨‍🔬 Professor Aqua — Universal "Explain This" Engine

Professor Aqua translates complex chemistry into plain English:
- **States**: `idle`, `greeting`, `explaining`, `thinking`, `attention`, `confirmation`.
- **Audio**: Full Web Speech API voice narration with speech toggle, play, and mute.
- **Context-Aware Trigger**: Tap any map marker, chart bar, or metric card to receive an immediate explanation grounded in standard guidelines.

---

## 📄 License
Academic Community Engagement Project (CEP) Specification & Prototype.
