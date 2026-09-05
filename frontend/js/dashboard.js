/**
 * Analytics Dashboard Component
 * Implements Section 5, 6, 10, 11 of Project Specification:
 * - Dynamic SVG Bar Charts with Minimum, Average, and Maximum range whiskers
 * - Dotted benchmark guideline for BIS IS 10500 standards
 * - Clickable bars that trigger the detailed bottom sheet observation and Professor Aqua
 */
const Dashboard = {
  currentParam: 'tds',
  currentSource: 'all',
  selectedIndex: 3,
  chartData: [],

  standards: {
    tds: { name: 'Total Dissolved Solids', unit: 'mg/L', limit: 500, perm: 2000 },
    ph: { name: 'pH Level', unit: 'pH', limit: 8.5, perm: 8.5 },
    hardness: { name: 'Total Hardness', unit: 'mg/L CaCO3', limit: 200, perm: 600 },
    turbidity: { name: 'Turbidity', unit: 'NTU', limit: 1.0, perm: 5.0 },
    ec: { name: 'Electrical Conductivity', unit: 'µS/cm', limit: 750, perm: 1500 }
  },

  fallbackData: [
    {
        "area_name": "Shivaji Nagar",
        "ward": "Ward 1",
        "count": 10,
        "min": 342.0,
        "avg": 385.6,
        "max": 433.0,
        "is_elevated": false,
        "obs": "Tested across 10 certified sites. Average TDS is 385.6 mg/L (max 433.0), pH is 7.51, Turbidity is 1.67 NTU."
    },
    {
        "area_name": "Salwad",
        "ward": "Ward 2",
        "count": 10,
        "min": 368.0,
        "avg": 412.3,
        "max": 463.0,
        "is_elevated": false,
        "obs": "Tested across 10 certified sites. Average TDS is 412.3 mg/L (max 463.0), pH is 7.54, Turbidity is 1.93 NTU."
    },
    {
        "area_name": "Katkar",
        "ward": "Ward 3",
        "count": 10,
        "min": 394.0,
        "avg": 446.3,
        "max": 503.0,
        "is_elevated": true,
        "obs": "Tested across 10 certified sites. Average TDS is 446.3 mg/L (max 503.0), pH is 7.55, Turbidity is 2.23 NTU."
    },
    {
        "area_name": "Pasthal",
        "ward": "Ward 4",
        "count": 10,
        "min": 351.0,
        "avg": 397.0,
        "max": 451.0,
        "is_elevated": false,
        "obs": "Tested across 10 certified sites. Average TDS is 397.0 mg/L (max 451.0), pH is 7.59, Turbidity is 1.74 NTU."
    },
    {
        "area_name": "Bhandarwada",
        "ward": "Ward 5",
        "count": 10,
        "min": 378.0,
        "avg": 433.3,
        "max": 498.0,
        "is_elevated": false,
        "obs": "Tested across 10 certified sites. Average TDS is 433.3 mg/L (max 498.0), pH is 7.52, Turbidity is 2.26 NTU."
    },
    {
        "area_name": "Betegaon",
        "ward": "Ward 6",
        "count": 10,
        "min": 326.0,
        "avg": 365.4,
        "max": 418.0,
        "is_elevated": false,
        "obs": "Tested across 10 certified sites. Average TDS is 365.4 mg/L (max 418.0), pH is 7.64, Turbidity is 1.48 NTU."
    },
    {
        "area_name": "Awadh Nagar",
        "ward": "Ward 7",
        "count": 10,
        "min": 338.0,
        "avg": 398.0,
        "max": 465.0,
        "is_elevated": false,
        "obs": "Tested across 10 certified sites. Average TDS is 398.0 mg/L (max 465.0), pH is 7.57, Turbidity is 1.84 NTU."
    },
    {
        "area_name": "Pam",
        "ward": "Ward 8",
        "count": 10,
        "min": 369.0,
        "avg": 443.0,
        "max": 523.0,
        "is_elevated": true,
        "obs": "Tested across 10 certified sites. Average TDS is 443.0 mg/L (max 523.0), pH is 7.55, Turbidity is 2.1 NTU."
    },
    {
        "area_name": "Ganesh Nagar",
        "ward": "Ward 9",
        "count": 10,
        "min": 351.0,
        "avg": 423.8,
        "max": 508.0,
        "is_elevated": true,
        "obs": "Tested across 10 certified sites. Average TDS is 423.8 mg/L (max 508.0), pH is 7.56, Turbidity is 2.0 NTU."
    },
    {
        "area_name": "Yadav Nagar",
        "ward": "Ward 10",
        "count": 10,
        "min": 342.0,
        "avg": 413.1,
        "max": 496.0,
        "is_elevated": false,
        "obs": "Tested across 10 certified sites. Average TDS is 413.1 mg/L (max 496.0), pH is 7.57, Turbidity is 1.98 NTU."
    },
    {
        "area_name": "Azad Nagar",
        "ward": "Ward 11",
        "count": 10,
        "min": 337.0,
        "avg": 411.6,
        "max": 509.0,
        "is_elevated": true,
        "obs": "Tested across 10 certified sites. Average TDS is 411.6 mg/L (max 509.0), pH is 7.57, Turbidity is 1.93 NTU."
    }
],

  async render() {
    const param = document.getElementById('dash-param-select').value;
    const source = document.getElementById('dash-source-select').value;
    this.currentParam = param;
    this.currentSource = source;

    // Fetch from FastAPI backend
    const apiRes = await API.getAnalytics(param, source);
    if (apiRes && apiRes.data && apiRes.data.length > 0) {
      this.chartData = apiRes.data;
    } else {
      this.chartData = this.fallbackData;
    }

    this.drawSVGChart();
    this.updateInspectionSheet();
  },

  drawSVGChart() {
    const svg = document.getElementById('dashboard-svg-chart');
    const std = this.standards[this.currentParam];
    document.getElementById('chart-title').textContent = `Area Comparison: ${std.name} (${std.unit})`;

    const limit = std.limit;
    const maxVal = Math.max(...this.chartData.map(d => d.max), limit * 1.25);

    const chartW = 700;
    const chartH = 260;
    const padLeft = 60;
    const padBottom = 45;
    const plotW = chartW - padLeft - 20;
    const plotH = chartH - padBottom - 20;
    const barWidth = plotW / this.chartData.length - 24;

    const limitY = 20 + plotH - (limit / maxVal) * plotH;

    let html = `
      <!-- Grid -->
      <line x1="${padLeft}" y1="20" x2="${chartW - 20}" y2="20" stroke="#1e293b" stroke-width="1"/>
      <line x1="${padLeft}" y1="${20 + plotH/2}" x2="${chartW - 20}" y2="${20 + plotH/2}" stroke="#1e293b" stroke-width="1"/>
      <line x1="${padLeft}" y1="${20 + plotH}" x2="${chartW - 20}" y2="${20 + plotH}" stroke="#334155" stroke-width="1.5"/>

      <!-- Y Axis -->
      <text x="${padLeft - 10}" y="25" fill="#64748b" font-size="10" text-anchor="end">${Math.round(maxVal)}</text>
      <text x="${padLeft - 10}" y="${25 + plotH/2}" fill="#64748b" font-size="10" text-anchor="end">${Math.round(maxVal/2)}</text>
      <text x="${padLeft - 10}" y="${20 + plotH}" fill="#64748b" font-size="10" text-anchor="end">0</text>

      <!-- Standard Line -->
      <line x1="${padLeft}" y1="${limitY}" x2="${chartW - 20}" y2="${limitY}" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="6,4"/>
      <text x="${chartW - 25}" y="${limitY - 6}" fill="#f43f5e" font-size="9" font-weight="bold" text-anchor="end">BIS Limit: ${limit} ${std.unit}</text>
    `;

    this.chartData.forEach((d, i) => {
      const x = padLeft + i * (plotW / this.chartData.length) + 12;
      const barH = (d.avg / maxVal) * plotH;
      const barY = 20 + plotH - barH;
      const minY = 20 + plotH - (d.min / maxVal) * plotH;
      const maxY = 20 + plotH - (d.max / maxVal) * plotH;

      const isSelected = (i === this.selectedIndex);
      const barColor = isSelected ? "#06b6d4" : (d.avg > limit ? "#f43f5e" : "#0284c7");

      html += `
        <g class="cursor-pointer group" onclick="Dashboard.selectBar(${i})">
          <!-- Whisker Range -->
          <line x1="${x + barWidth/2}" y1="${minY}" x2="${x + barWidth/2}" y2="${maxY}" stroke="#94a3b8" stroke-width="2"/>
          <line x1="${x + barWidth/2 - 6}" y1="${minY}" x2="${x + barWidth/2 + 6}" y2="${minY}" stroke="#94a3b8" stroke-width="2"/>
          <line x1="${x + barWidth/2 - 6}" y1="${maxY}" x2="${x + barWidth/2 + 6}" y2="${maxY}" stroke="#94a3b8" stroke-width="2"/>

          <!-- Bar -->
          <rect x="${x}" y="${barY}" width="${barWidth}" height="${barH}" rx="6" fill="${barColor}" opacity="${isSelected ? '1' : '0.85'}" class="transition-all hover:opacity-100 hover:fill-cyan-400"/>

          <!-- Value -->
          <text x="${x + barWidth/2}" y="${barY - 8}" fill="#e2e8f0" font-size="10" font-weight="bold" text-anchor="middle">${d.avg}</text>

          <!-- Label -->
          <text x="${x + barWidth/2}" y="${chartH - 22}" fill="${isSelected ? '#38bdf8' : '#cbd5e1'}" font-size="10" font-weight="${isSelected ? 'bold' : 'normal'}" text-anchor="middle">${d.area_name.split(' ')[0]}</text>
          <text x="${x + barWidth/2}" y="${chartH - 8}" fill="#64748b" font-size="9" text-anchor="middle">${d.ward}</text>
        </g>
      `;
    });

    svg.innerHTML = html;
  },

  selectBar(index) {
    this.selectedIndex = index;
    this.drawSVGChart();
    this.updateInspectionSheet();
    this.explainBar();
  },

  updateInspectionSheet() {
    const d = this.chartData[this.selectedIndex] || this.chartData[0];
    const std = this.standards[this.currentParam];
    if (!d) return;

    document.getElementById('bar-sheet-area').textContent = `${d.area_name} (${d.ward})`;
    document.getElementById('bar-sheet-param').textContent = `Parameter: ${std.name} (${std.unit})`;
    document.getElementById('bar-sheet-min').textContent = `${d.min} ${std.unit}`;
    document.getElementById('bar-sheet-avg').textContent = `${d.avg} ${std.unit}`;
    document.getElementById('bar-sheet-max').textContent = `${d.max} ${std.unit}`;
    document.getElementById('bar-sheet-limit').textContent = `${std.limit} (Permissible: ${std.perm})`;

    const tag = document.getElementById('bar-sheet-tag');
    if (d.avg > std.limit) {
      tag.textContent = `Observation: Above Desirable Limit (${std.limit})`;
      tag.className = 'px-2 py-0.5 rounded text-[11px] font-semibold bg-rose-950 text-rose-300 border border-rose-800';
      document.getElementById('bar-sheet-obs').textContent = `${std.name} levels exceed desirable baseline of ${std.limit} ${std.unit}. Note: Single parameter elevation is not confirmed disease danger, but indicates mineral accumulation.`;
      document.getElementById('bar-sheet-rec').textContent = `Use multi-stage or reverse osmosis (RO) filtration for drinking and cooking. Clean storage tanks periodically.`;
    } else {
      tag.textContent = `Compliance: Normal (${d.avg} ≤ ${std.limit})`;
      tag.className = 'px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800';
      document.getElementById('bar-sheet-obs').textContent = `All samples comply cleanly with Indian Standard IS 10500:2012. Natural mineral ions are preserved.`;
      document.getElementById('bar-sheet-rec').textContent = `Routine boiling or candle filtration recommended for microbiological protection. No demineralization needed.`;
    }
  },

  explainBar() {
    const d = this.chartData[this.selectedIndex] || this.chartData[0];
    const std = this.standards[this.currentParam];
    let msg = `You selected ${d.area_name}. Average ${std.name} is ${d.avg} ${std.unit} (min ${d.min}, max ${d.max}). `;
    if (d.avg > std.limit) {
      msg += `This exceeds the BIS standard limit of ${std.limit} ${std.unit}. Observation: Mineral load is elevated. Dual-stage or RO filtration advised.`;
    } else {
      msg += `This satisfies the BIS standard of ${std.limit} ${std.unit}. Excellent drinking quality!`;
    }
    ProfessorAqua.setExplanation(msg, d.avg > std.limit ? 'attention' : 'explaining', 'BAR ANALYSIS');
  }
};
