/**
 * Interactive Study Area & Sample Map Component
 * Implements Section 4 of Project Specification
 */
const AreaMap = {
  areas: [],
  selectedAreaIndex: 3, // Default: Industrial Colony

  init(areas) {
    this.areas = areas || [
      { id: 1, name: "North Enclave", ward: "Ward 1", source: "Municipal Tap Water", samples: 28, tds: 210, ph: 7.5, hard: 135, turb: 0.5, status: "Good Quality", color: "emerald", obs: "Clean municipal reservoir supply. Safe for direct drinking." },
      { id: 2, name: "Sector 4 Residential", ward: "Ward 2", source: "Municipal Supply", samples: 32, tds: 265, ph: 7.4, hard: 175, turb: 0.6, status: "Good Quality", color: "emerald", obs: "Consistently conforms with BIS IS 10500 standards." },
      { id: 3, name: "Riverbank Ward", ward: "Ward 3", source: "Shallow Hand Pump", samples: 22, tds: 480, ph: 7.1, hard: 260, turb: 2.1, status: "Moderate Turbidity", color: "amber", obs: "Elevated turbidity during monsoon runoff. Filtration required." },
      { id: 4, name: "Industrial Colony", ward: "Ward 4", source: "Deep Aquifer Borewell (180ft)", samples: 24, tds: 720, ph: 7.3, hard: 340, turb: 0.8, status: "Elevated TDS", color: "rose", obs: "High mineral ions leaching from deep limestone aquifer. RO advised." },
      { id: 5, name: "Central Market", ward: "Ward 5", source: "Mixed Supply & Tanker", samples: 26, tds: 390, ph: 7.2, hard: 220, turb: 0.9, status: "Acceptable", color: "amber", obs: "Varying supply sources result in moderate mineral fluctuations." },
      { id: 6, name: "Green Valley", ward: "Ward 6", source: "Spring & Gravity Tank", samples: 16, tds: 175, ph: 7.6, hard: 105, turb: 0.4, status: "Pristine Natural", color: "emerald", obs: "Soft natural spring water with balanced mineral content." }
    ];
    this.selectArea(this.selectedAreaIndex);
  },

  selectArea(index) {
    this.selectedAreaIndex = index;
    const a = this.areas[index];
    if (!a) return;

    document.getElementById('map-card-id').textContent = `${a.ward.toUpperCase()} SELECTED`;
    document.getElementById('map-card-name').textContent = a.name;
    document.getElementById('map-card-source').textContent = `Primary Source: ${a.source || a.primary_source}`;
    document.getElementById('map-card-status').textContent = a.status || "Evaluated";

    const tag = document.getElementById('map-card-status');
    if (a.color === 'emerald') {
      tag.className = 'px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800';
    } else if (a.color === 'amber') {
      tag.className = 'px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-950 text-amber-300 border border-amber-800';
    } else {
      tag.className = 'px-2 py-0.5 rounded text-[11px] font-semibold bg-rose-950 text-rose-300 border border-rose-800';
    }

    document.getElementById('map-card-tds').textContent = `${a.tds} mg/L`;
    document.getElementById('map-card-ph').textContent = `${a.ph}`;
    document.getElementById('map-card-hard').textContent = `${a.hard} mg/L`;
    document.getElementById('map-card-turb').textContent = `${a.turb} NTU`;
    document.getElementById('map-card-obs').textContent = a.obs;

    this.explainArea(a);
  },

  explainArea(a) {
    const text = `In ${a.name} (${a.ward}), we tested ${a.samples} certified samples. Primary supply is ${a.source}. Average TDS is ${a.tds} mg/L, and pH is ${a.ph}. ${a.obs}`;
    ProfessorAqua.setExplanation(text, a.color === 'rose' ? 'attention' : 'explaining', 'WARD PROFILE');
  }
};
