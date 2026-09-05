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
    { area_name: "North Enclave", ward: "Ward 1", count: 28, min: 180, avg: 210, max: 245, is_elevated: false, obs: "Safe municipal tap water." },
    { area_name: "Sector 4", ward: "Ward 2", count: 32, min: 220, avg: 265, max: 310, is_elevated: false, obs: "Good mineral balance." },
    { area_name: "Riverbank", ward: "Ward 3", count: 22, min: 390, avg: 480, max: 560, is_elevated: false, obs: "River adjacent shallow well." },
    { area_name: "Industrial", ward: "Ward 4", count: 24, min: 650, avg: 720, max: 810, is_elevated: true, obs: "Elevated minerals from deep borewell." },
    { area_name: "Central", ward: "Ward 5", count: 26, min: 310, avg: 390, max: 470, is_elevated: false, obs: "Commercial mixed supply." },
    { area_name: "Green Valley", ward: "Ward 6", count: 16, min: 140, avg: 175, max: 210, is_elevated: false, obs: "Pristine natural mountain spring." }
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
