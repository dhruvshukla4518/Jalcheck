# ■ JALCHECK
### Water Quality Analysis & Community Awareness Platform
> *"Know Your Water. Understand Your Community."*

[![JalCheck CI/CD Pipeline](https://github.com/dhruvshukla4518/Jalcheck/actions/workflows/ci.yml/badge.svg)](https://github.com/dhruvshukla4518/Jalcheck/actions)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.115+-009688.svg?logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![Python](https://img.shields.io/badge/Python-3.13+-3776AB.svg?logo=python&logoColor=white)](https://python.org)
[![Deploy on Render](https://img.shields.io/badge/Render-Deploy%20Ready-46E3B7.svg?logo=render&logoColor=white)](https://render.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**Community Engagement Project (CEP) — Complete Working Implementation**

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/dhruvshukla4518/Jalcheck)

---

## 🌊 Overview

**JalCheck** is an interactive web platform combining laboratory water-quality analysis, geographical community mapping, citizen science surveys, statistical analytics, and an animated virtual educator—**Professor Aqua**—with Web Speech API voice narration.

This platform is engineered **100% without React or Node.js**, using modular modern **Vanilla JavaScript (ES6+ Components)**, **Tailwind CSS**, and **HTML5**, supported by a robust **Python FastAPI**, **SQLite**, and **Pandas/NumPy** backend.

---

## 🚀 Quickstart (One-Command Launch)

You don't need `npm`, Node.js, or complex bundlers. Simply run:

```bash
python run.py
```

### What this does automatically:
1. Verifies/creates the local SQLite database schemas (`backend/data/jalcheck.db`).
2. Pre-populates all **110 certified water samples** across **11 municipal study areas** and **394 citizen survey responses**.
3. Launches the FastAPI web server at `http://localhost:8050`.
4. Automatically opens your default web browser to the live platform!

---

## 🌟 Key Features

- **Interactive GIS Area Map**: Calibrated to real Boisar/Palghar coordinates ($19.780^\circ - 19.818^\circ\text{N}$, $72.742^\circ - 72.764^\circ\text{E}$) with 11 Ward Hubs and all 110 individual sample collection markers.
- **Side-by-Side Area Comparison Matrix**: Compare any two study areas with real-time parameter deltas ($\Delta\text{TDS}$, $\Delta\text{pH}$, $\Delta\text{Turbidity}$, $\Delta\text{Hardness}$).
- **CSV Dataset Exporter**: 1-click download of all 110 laboratory samples with GPS coordinates (`/api/samples/export/csv`).
- **Interactive Water Quality Analyzer**: Weighted Arithmetic WQI scoring engine with instant BIS IS 10500:2012 compliance diagnostics.
- **Analytics Dashboard**: Dynamic SVG charts with min/avg/max whiskers and clickable inspection drawers.
- **Citizen Science Survey**: Live auto-aggregating community survey tracking water sources, purification methods, and testing habits.
- **Professor Aqua AI Virtual Educator**: Voice-narrated conversational educator with universal "Explain This" context receiver.
- **Dossier Report Generator**: Evaluator-ready printable/PDF water quality audit reports.
- **Render Zero-Downtime Health Check**: `/health` and `/api/health` probes reporting database connectivity, sample counts, and container uptime.

---

## ☁️ Deployment

### 1-Click Deploy to Render
Click the button below to deploy your own instance of JalCheck directly on Render:

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/dhruvshukla4518/Jalcheck)

### Manual Render Setup:
1. Go to [Render Dashboard](https://dashboard.render.com) and click **New+ $\\rightarrow$ Web Service**.
2. Connect your GitHub repository `https://github.com/dhruvshukla4518/Jalcheck`.
3. Render will automatically detect `render.yaml` and set:
   - **Environment**: `Python`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn backend.app.main:app --host 0.0.0.0 --port $PORT`
   - **Health Check Path**: `/health`

---

## 🏛️ System Architecture

```
jalcheck/
├── .github/
│   └── workflows/
│       └── ci.yml                   # Automated GitHub Actions CI/CD Pipeline
├── backend/
│   ├── app/
│   │   ├── main.py                  # FastAPI server, static mount, and /health route
│   │   ├── database/
│   │   │   ├── connection.py        # SQLite connection manager
│   │   │   └── models.py            # SQLite schema (areas, samples, parameters, surveys, standards)
│   │   ├── routes/
│   │   │   ├── areas.py             # GET /api/areas
│   │   │   ├── samples.py           # GET /api/samples, POST /api/samples
│   │   │   ├── analytics.py         # GET /api/analytics/summary (min/avg/max)
│   │   │   ├── analyzer.py          # POST /api/analyzer/diagnose (WQI calculation)
│   │   │   ├── survey.py            # GET /api/survey/stats, POST /api/survey/submit
│   │   │   ├── reports.py           # GET /api/reports/{area_id}
│   │   │   ├── professor.py         # POST /api/professor/explain
│   │   │   └── export.py            # GET /api/samples/export/csv (CSV download)
│   │   └── services/
│   │       ├── professor_engine.py  # Context-aware chemistry explanation generator
│   │       └── wqi_calculator.py    # Weighted Water Quality Index calculation engine
│   └── data/
│       ├── seed_data.py             # 110 authentic samples across 11 wards + 394 surveys
│       └── jalcheck.db              # SQLite persistent database
├── frontend/
│   ├── index.html                   # High-performance SPA with 8 tabbed views
│   ├── css/
│   │   └── styles.css               # Environmental tech visual styling & print CSS
│   └── js/
│       ├── api.js                   # REST API client
│       ├── professorAqua.js         # Voice synthesis & animated avatar
│       ├── map.js                   # Dual-mode GIS map (11 Area hubs + 110 pins)
│       ├── dashboard.js             # SVG bar charts with BIS standard thresholds
│       ├── compare.js               # Side-by-Side Area Comparison Matrix
│       ├── analyzer.js              # Real-time WQI calculator UI
│       ├── survey.js                # Community awareness survey handler
│       ├── report.js                # Printable water quality dossier generator
│       └── app.js                   # Application state & tab router
├── tests/
│   └── test_ci.py                   # Automated CI integration & regression test suite
├── Dockerfile                       # Production container specification
├── Procfile                         # Heroku/Railway process file
├── render.yaml                      # Render Blueprint with /health probe
├── requirements.txt                 # Python dependencies
├── run.py                           # Single-click launcher (port 8050)
└── README.md                        # Documentation & Badges
```

---

## 🧪 Scientific & Environmental Standards

All diagnostic evaluations, observation cards, and report dossiers are benchmarked strictly against:
- **Bureau of Indian Standards: BIS IS 10500:2012** (Specification for Drinking Water)
- **World Health Organization (WHO)** Guidelines for Drinking-water Quality

| Parameter | Desirable Limit | Permissible Limit | Significance |
| :--- | :--- | :--- | :--- |
| **TDS** | $\le 500	ext{ mg/L}$ | $2000	ext{ mg/L}$ | Palatability, dissolved mineral salts, scaling |
| **pH** | $6.5 - 8.5$ | $6.5 - 8.5$ | Corrosivity vs alkaline scaling |
| **Turbidity** | $\le 1.0	ext{ NTU}$ | $5.0	ext{ NTU}$ | Particulate matter, microbial sheltering |
| **Hardness** | $\le 200	ext{ mg/L}$ | $600	ext{ mg/L}$ | Calcium/Magnesium carbonates, soap lathering |
| **EC** | $\le 750\ \mu	ext{S/cm}$ | $1500\ \mu	ext{S/cm}$ | Ionic conductivity indicator |

---

## 📄 License
Academic Community Engagement Project (CEP) Specification & Prototype. Released under the MIT License.