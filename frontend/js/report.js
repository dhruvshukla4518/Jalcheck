/**
 * Report Generator Component
 * Dynamically linked to AreaMap.areas for the certified Boisar/Palghar study wards.
 */
const Report = {
  get areasList() {
    return (typeof AreaMap !== 'undefined' && AreaMap.areas && AreaMap.areas.length) ? AreaMap.areas : [];
  },

  async render() {
    const areaSelect = document.getElementById('report-area-select');
    const areaName = areaSelect ? areaSelect.value : "Shivaji Nagar";
    const a = this.areasList.find(item => item.name === areaName) || this.areasList[0];
    if (!a) return;

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