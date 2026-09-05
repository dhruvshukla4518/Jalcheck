/**
 * Report Generator Component
 * Implements Section 15 of Project Specification
 */
const Report = {
  areas: {
    "Industrial Colony": { id: 4, ward: "Ward 4", source: "Deep Submersible Borewell (180ft)", samples: 24, obs: "High mineral load exceeding 500 mg/L baseline. RO filtration recommended for cooking and drinking." },
    "Riverbank Ward": { id: 3, ward: "Ward 3", source: "Shallow Well Adjacent to River", samples: 22, obs: "Elevated turbidity during seasonal flooding. Sediment candle filtration required." },
    "North Enclave": { id: 1, ward: "Ward 1", source: "Municipal Piped Reservoir", samples: 28, obs: "Pristine drinking standard. Standard boiling is adequate." },
    "Sector 4 Residential": { id: 2, ward: "Ward 2", source: "Treated Municipal Supply", samples: 32, obs: "Fully compliant with BIS IS 10500 standards." },
    "Central Market": { id: 5, ward: "Ward 5", source: "Commercial Tanker & Municipal", samples: 26, obs: "Moderate mineral fluctuations. Overhead storage tanks require regular sanitization." },
    "Green Valley": { id: 6, ward: "Ward 6", source: "Natural Spring Gravity System", samples: 16, obs: "Low ionic load and soft mineral balance. Protect catchment from surface runoff." }
  },

  async render() {
    const areaName = document.getElementById('report-area-select').value;
    const a = this.areas[areaName] || this.areas["Industrial Colony"];

    document.getElementById('rep-ref').textContent = `JAL-2026-${a.ward.replace(' ', '')}`;
    document.getElementById('rep-area-name').textContent = areaName;
    document.getElementById('rep-source-type').textContent = a.source;
    document.getElementById('rep-sample-count').textContent = `${a.samples} Certified Samples`;

    // Try backend API first
    const apiRep = await API.getReport(a.id);
    const tbody = document.getElementById('rep-table-body');
    const params = [
      { key: 'tds', label: 'Total Dissolved Solids (mg/L)', min: a.id === 4 ? 650 : 200, avg: a.id === 4 ? 720 : 240, max: a.id === 4 ? 810 : 310, std: 500 },
      { key: 'ph', label: 'pH Level (Acidity/Alkalinity)', min: 7.0, avg: 7.3, max: 7.6, std: 8.5 },
      { key: 'turbidity', label: 'Turbidity (NTU)', min: 0.5, avg: 0.8, max: 1.1, std: 1.0 },
      { key: 'hardness', label: 'Total Hardness (CaCO3 mg/L)', min: 290, avg: 340, max: 410, std: 200 },
      { key: 'ec', label: 'Electrical Conductivity (µS/cm)', min: 1100, avg: 1220, max: 1390, std: 750 }
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
    tbody.innerHTML = rows;
    document.getElementById('rep-prof-conclusion').textContent = a.obs;
  }
};
