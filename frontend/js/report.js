/**
 * Report Generator Component
 * Calibrated with all 11 Study Areas from the authentic dataset
 */
const Report = {
  areasList: [
  {
    "id": 1,
    "name": "Shivaji Nagar",
    "ward": "Ward 1",
    "x": 624,
    "y": 230,
    "lat": 19.8016,
    "lon": 72.7605,
    "samples": 10,
    "sources": "Municipal Tap, Borewell, Well, Community Tap",
    "tds": {
      "min": 342.0,
      "avg": 385.6,
      "max": 433.0
    },
    "ph": {
      "min": 7.28,
      "avg": 7.51,
      "max": 7.83
    },
    "turb": {
      "min": 0.91,
      "avg": 1.67,
      "max": 2.71
    },
    "hard": {
      "min": 168.0,
      "avg": 192.5,
      "max": 226.0
    },
    "ec": {
      "min": 684.0,
      "avg": 767.6,
      "max": 861.0
    },
    "status": "Good Drinking Quality",
    "color": "emerald",
    "obs": "Tested across 10 certified sites. Average TDS is 385.6 mg/L (max 433), pH is 7.51, Turbidity is 1.67 NTU.",
    "rec": "Routine boiling or candle filtration recommended."
  },
  {
    "id": 2,
    "name": "Salwad",
    "ward": "Ward 2",
    "x": 400,
    "y": 162,
    "lat": 19.8075,
    "lon": 72.753,
    "samples": 10,
    "sources": "Municipal Tap, Borewell, Well, Community Tap",
    "tds": {
      "min": 368.0,
      "avg": 412.3,
      "max": 463.0
    },
    "ph": {
      "min": 7.29,
      "avg": 7.54,
      "max": 7.82
    },
    "turb": {
      "min": 1.03,
      "avg": 1.93,
      "max": 3.14
    },
    "hard": {
      "min": 176.0,
      "avg": 206.8,
      "max": 245.0
    },
    "ec": {
      "min": 718.0,
      "avg": 822.3,
      "max": 936.0
    },
    "status": "Good Drinking Quality",
    "color": "emerald",
    "obs": "Tested across 10 certified sites. Average TDS is 412.3 mg/L (max 463), pH is 7.54, Turbidity is 1.93 NTU.",
    "rec": "Routine boiling or candle filtration recommended."
  },
  {
    "id": 3,
    "name": "Katkar",
    "ward": "Ward 3",
    "x": 582,
    "y": 97,
    "lat": 19.8131,
    "lon": 72.7591,
    "samples": 10,
    "sources": "Municipal Tap, Borewell, Well, Community Tap",
    "tds": {
      "min": 394.0,
      "avg": 446.3,
      "max": 503.0
    },
    "ph": {
      "min": 7.28,
      "avg": 7.55,
      "max": 7.88
    },
    "turb": {
      "min": 1.24,
      "avg": 2.23,
      "max": 3.47
    },
    "hard": {
      "min": 195.0,
      "avg": 228.1,
      "max": 268.0
    },
    "ec": {
      "min": 781.0,
      "avg": 888.5,
      "max": 1012.0
    },
    "status": "Borderline TDS Peak (503 mg/L)",
    "color": "rose",
    "obs": "Tested across 10 certified sites. Average TDS is 446.3 mg/L (max 503), pH is 7.55, Turbidity is 2.23 NTU.",
    "rec": "Dual-stage filtration recommended for high-mineral borewell sources."
  },
  {
    "id": 4,
    "name": "Mahavir Nagar",
    "ward": "Ward 4",
    "x": 443,
    "y": 289,
    "lat": 19.7965,
    "lon": 72.7544,
    "samples": 10,
    "sources": "Municipal Tap, Borewell, Well, Community Tap",
    "tds": {
      "min": 351.0,
      "avg": 397.0,
      "max": 451.0
    },
    "ph": {
      "min": 7.34,
      "avg": 7.59,
      "max": 7.91
    },
    "turb": {
      "min": 0.86,
      "avg": 1.74,
      "max": 2.98
    },
    "hard": {
      "min": 171.0,
      "avg": 197.8,
      "max": 237.0
    },
    "ec": {
      "min": 699.0,
      "avg": 782.7,
      "max": 906.0
    },
    "status": "Good Drinking Quality",
    "color": "emerald",
    "obs": "Tested across 10 certified sites. Average TDS is 397.0 mg/L (max 451), pH is 7.59, Turbidity is 1.74 NTU.",
    "rec": "Routine boiling or candle filtration recommended."
  },
  {
    "id": 5,
    "name": "Bhandarwada",
    "ward": "Ward 5",
    "x": 653,
    "y": 370,
    "lat": 19.7895,
    "lon": 72.7614,
    "samples": 10,
    "sources": "Municipal Tap, Borewell, Well, Community Tap",
    "tds": {
      "min": 378.0,
      "avg": 433.3,
      "max": 498.0
    },
    "ph": {
      "min": 7.26,
      "avg": 7.52,
      "max": 7.86
    },
    "turb": {
      "min": 1.17,
      "avg": 2.26,
      "max": 3.61
    },
    "hard": {
      "min": 194.0,
      "avg": 224.2,
      "max": 267.0
    },
    "ec": {
      "min": 752.0,
      "avg": 859.2,
      "max": 1004.0
    },
    "status": "Moderate Turbidity (2.3 NTU)",
    "color": "amber",
    "obs": "Tested across 10 certified sites. Average TDS is 433.3 mg/L (max 498), pH is 7.52, Turbidity is 2.26 NTU.",
    "rec": "Routine boiling or candle filtration recommended."
  },
  {
    "id": 6,
    "name": "Betegaon",
    "ward": "Ward 6",
    "x": 550,
    "y": 451,
    "lat": 19.7825,
    "lon": 72.758,
    "samples": 10,
    "sources": "Municipal Tap, Borewell, Well, Community Tap",
    "tds": {
      "min": 326.0,
      "avg": 365.4,
      "max": 418.0
    },
    "ph": {
      "min": 7.42,
      "avg": 7.64,
      "max": 7.87
    },
    "turb": {
      "min": 0.74,
      "avg": 1.48,
      "max": 2.67
    },
    "hard": {
      "min": 154.0,
      "avg": 176.4,
      "max": 211.0
    },
    "ec": {
      "min": 641.0,
      "avg": 717.3,
      "max": 823.0
    },
    "status": "Good Drinking Quality",
    "color": "emerald",
    "obs": "Tested across 10 certified sites. Average TDS is 365.4 mg/L (max 418), pH is 7.64, Turbidity is 1.48 NTU.",
    "rec": "Routine boiling or candle filtration recommended."
  },
  {
    "id": 7,
    "name": "Awadh Nagar",
    "ward": "Ward 7",
    "x": 466,
    "y": 343,
    "lat": 19.7918,
    "lon": 72.7552,
    "samples": 10,
    "sources": "Municipal Tap, Borewell, Well, Community Tap",
    "tds": {
      "min": 338.0,
      "avg": 398.0,
      "max": 465.0
    },
    "ph": {
      "min": 7.18,
      "avg": 7.57,
      "max": 8.02
    },
    "turb": {
      "min": 0.92,
      "avg": 1.84,
      "max": 3.02
    },
    "hard": {
      "min": 158.0,
      "avg": 197.2,
      "max": 241.0
    },
    "ec": {
      "min": 651.0,
      "avg": 787.3,
      "max": 948.0
    },
    "status": "Good Drinking Quality",
    "color": "emerald",
    "obs": "Tested across 10 certified sites. Average TDS is 398.0 mg/L (max 465), pH is 7.57, Turbidity is 1.84 NTU.",
    "rec": "Routine boiling or candle filtration recommended."
  },
  {
    "id": 8,
    "name": "Pam",
    "ward": "Ward 8",
    "x": 149,
    "y": 165,
    "lat": 19.8072,
    "lon": 72.7446,
    "samples": 10,
    "sources": "Municipal Tap, Borewell, Well, Community Tap",
    "tds": {
      "min": 369.0,
      "avg": 443.0,
      "max": 523.0
    },
    "ph": {
      "min": 7.12,
      "avg": 7.55,
      "max": 8.08
    },
    "turb": {
      "min": 0.88,
      "avg": 2.1,
      "max": 3.42
    },
    "hard": {
      "min": 172.0,
      "avg": 217.5,
      "max": 267.0
    },
    "ec": {
      "min": 712.0,
      "avg": 870.4,
      "max": 1061.0
    },
    "status": "Borderline TDS Peak (523 mg/L)",
    "color": "rose",
    "obs": "Tested across 10 certified sites. Average TDS is 443.0 mg/L (max 523), pH is 7.55, Turbidity is 2.10 NTU.",
    "rec": "Dual-stage filtration recommended for high-mineral borewell sources."
  },
  {
    "id": 9,
    "name": "Ganesh Nagar",
    "ward": "Ward 9",
    "x": 358,
    "y": 79,
    "lat": 19.8146,
    "lon": 72.7516,
    "samples": 10,
    "sources": "Municipal Tap, Borewell, Well, Community Tap",
    "tds": {
      "min": 351.0,
      "avg": 423.8,
      "max": 508.0
    },
    "ph": {
      "min": 7.16,
      "avg": 7.56,
      "max": 8.01
    },
    "turb": {
      "min": 0.76,
      "avg": 2.0,
      "max": 3.27
    },
    "hard": {
      "min": 169.0,
      "avg": 208.9,
      "max": 260.0
    },
    "ec": {
      "min": 682.0,
      "avg": 833.7,
      "max": 1034.0
    },
    "status": "Borderline TDS Peak (508 mg/L)",
    "color": "amber",
    "obs": "Tested across 10 certified sites. Average TDS is 423.8 mg/L (max 508), pH is 7.56, Turbidity is 2.00 NTU.",
    "rec": "Dual-stage filtration recommended for high-mineral borewell sources."
  },
  {
    "id": 10,
    "name": "Yadav Nagar",
    "ward": "Ward 10",
    "x": 567,
    "y": 195,
    "lat": 19.8046,
    "lon": 72.7586,
    "samples": 10,
    "sources": "Municipal Tap, Borewell, Well, Community Tap",
    "tds": {
      "min": 342.0,
      "avg": 413.1,
      "max": 496.0
    },
    "ph": {
      "min": 7.19,
      "avg": 7.57,
      "max": 7.97
    },
    "turb": {
      "min": 0.82,
      "avg": 1.98,
      "max": 3.36
    },
    "hard": {
      "min": 162.0,
      "avg": 203.0,
      "max": 255.0
    },
    "ec": {
      "min": 665.0,
      "avg": 813.7,
      "max": 1007.0
    },
    "status": "Good Drinking Quality",
    "color": "emerald",
    "obs": "Tested across 10 certified sites. Average TDS is 413.1 mg/L (max 496), pH is 7.57, Turbidity is 1.98 NTU.",
    "rec": "Routine boiling or candle filtration recommended."
  },
  {
    "id": 11,
    "name": "Azad Nagar",
    "ward": "Ward 11",
    "x": 284,
    "y": 375,
    "lat": 19.7891,
    "lon": 72.7491,
    "samples": 10,
    "sources": "Municipal Tap, Borewell, Well, Community Tap",
    "tds": {
      "min": 337.0,
      "avg": 411.6,
      "max": 509.0
    },
    "ph": {
      "min": 7.15,
      "avg": 7.57,
      "max": 8.04
    },
    "turb": {
      "min": 0.73,
      "avg": 1.93,
      "max": 3.29
    },
    "hard": {
      "min": 160.0,
      "avg": 202.4,
      "max": 258.0
    },
    "ec": {
      "min": 653.0,
      "avg": 811.8,
      "max": 1040.0
    },
    "status": "Borderline TDS Peak (509 mg/L)",
    "color": "amber",
    "obs": "Tested across 10 certified sites. Average TDS is 411.6 mg/L (max 509), pH is 7.57, Turbidity is 1.93 NTU.",
    "rec": "Dual-stage filtration recommended for high-mineral borewell sources."
  }
],

  async render() {
    const areaSelect = document.getElementById('report-area-select');
    const areaName = areaSelect ? areaSelect.value : "Shivaji Nagar";
    const a = this.areasList.find(item => item.name === areaName) || this.areasList[0];

    const refEl = document.getElementById('rep-ref');
    if (refEl) refEl.textContent = `JAL-2026-WD${a.id}`;

    const nameEl = document.getElementById('rep-area-name');
    if (nameEl) nameEl.textContent = a.name;

    const srcEl = document.getElementById('rep-source-type');
    if (srcEl) srcEl.textContent = a.sources;

    const countEl = document.getElementById('rep-sample-count');
    if (countEl) countEl.textContent = `${a.samples} Certified Samples`;

    const statusEl = document.getElementById('rep-status-tag');
    if (statusEl) statusEl.textContent = a.status;

    const tbody = document.getElementById('rep-table-body');
    const params = [
      { label: 'Total Dissolved Solids (mg/L)', min: a.tds.min, avg: a.tds.avg, max: a.tds.max, std: 500 },
      { label: 'pH Level (Acidity/Alkalinity)', min: a.ph.min, avg: a.ph.avg, max: a.ph.max, std: 8.5 },
      { label: 'Turbidity (NTU)', min: a.turb.min, avg: a.turb.avg, max: a.turb.max, std: 1.0 },
      { label: 'Total Hardness (CaCO3 mg/L)', min: a.hard.min, avg: a.hard.avg, max: a.hard.max, std: 200 },
      { label: 'Electrical Conductivity (µS/cm)', min: a.ec.min, avg: a.ec.avg, max: a.ec.max, std: 750 }
    ];

    let rows = '';
    params.forEach(p => {
      const isExceed = (p.avg > p.std);
      const compClass = isExceed ? 'text-amber-400 font-semibold' : 'text-emerald-400 font-semibold';
      const compText = isExceed ? '⚡ Permissible Limit' : '✓ Desirable Standard Met';

      rows += `
        <tr class="hover:bg-slate-800/40">
          <td class="p-2.5 font-medium text-white">${p.label}</td>
          <td class="p-2.5 text-slate-400">${p.min}</td>
          <td class="p-2.5 text-cyan-400 font-bold">${p.avg}</td>
          <td class="p-2.5 text-slate-400">${p.max}</td>
          <td class="p-2.5 text-slate-300">&le; ${p.std}</td>
          <td class="p-2.5 ${compClass}">${compText}</td>
        </tr>
      `;
    });
    if (tbody) tbody.innerHTML = rows;

    const conclEl = document.getElementById('rep-prof-conclusion');
    if (conclEl) conclEl.textContent = `${a.obs} For domestic drinking, ${a.rec}`;
  }
};
