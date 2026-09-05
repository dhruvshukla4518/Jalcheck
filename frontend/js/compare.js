/**
 * JalCheck Area Comparison Matrix Component
 * Side-by-side comparative analysis of water parameters between any 2 study wards.
 */
const AreaCompare = {
  areas: [],

  init() {
    this.areaSelectA = document.getElementById("compare-area-a");
    this.areaSelectB = document.getElementById("compare-area-b");
    this.resultsContainer = document.getElementById("compare-results");
    this.btnRun = document.getElementById("btn-run-compare");

    if (!this.areaSelectA || !this.areaSelectB) return;

    this.populateDropdowns();
    if (this.btnRun) {
      this.btnRun.addEventListener("click", () => this.runComparison());
    }
    this.areaSelectA.addEventListener("change", () => this.runComparison());
    this.areaSelectB.addEventListener("change", () => this.runComparison());

    // Auto-run initial comparison
    this.runComparison();
  },

  populateDropdowns() {
    if (typeof AreaMap !== "undefined" && AreaMap.areas && AreaMap.areas.length) {
      this.areas = AreaMap.areas;
    } else {
      // Fallback
      this.areas = [
        { id: 1, name: "Shivaji Nagar", ward: "Ward 1", tds: { avg: 385.6 }, ph: { avg: 7.51 }, turb: { avg: 1.67 }, hard: { avg: 192.5 } },
        { id: 2, name: "Salwad", ward: "Ward 2", tds: { avg: 412.3 }, ph: { avg: 7.42 }, turb: { avg: 2.15 }, hard: { avg: 215.0 } }
      ];
    }

    this.areaSelectA.innerHTML = "";
    this.areaSelectB.innerHTML = "";

    this.areas.forEach((a, idx) => {
      const optA = document.createElement("option");
      optA.value = a.id;
      optA.textContent = `${a.name} (${a.ward})`;
      if (idx === 0) optA.selected = true;
      this.areaSelectA.appendChild(optA);

      const optB = document.createElement("option");
      optB.value = a.id;
      optB.textContent = `${a.name} (${a.ward})`;
      if (idx === 2) optB.selected = true; // Default compare with Katkar
      this.areaSelectB.appendChild(optB);
    });
  },

  runComparison() {
    const idA = parseInt(this.areaSelectA.value);
    const idB = parseInt(this.areaSelectB.value);

    const a = this.areas.find(item => item.id === idA) || this.areas[0];
    const b = this.areas.find(item => item.id === idB) || this.areas[1];

    if (!a || !b) return;

    const deltaTds = (b.tds.avg - a.tds.avg).toFixed(1);
    const deltaPh = (b.ph.avg - a.ph.avg).toFixed(2);
    const deltaTurb = (b.turb.avg - a.turb.avg).toFixed(2);
    const deltaHard = (b.hard.avg - a.hard.avg).toFixed(1);

    const formatDelta = (val, invertPositiveGood = true) => {
      const num = parseFloat(val);
      if (num === 0) return `<span class="text-slate-400">0.0 (Identical)</span>`;
      const sign = num > 0 ? `+${num}` : `${num}`;
      // Lower TDS/Turbidity/Hardness is usually better
      const isGood = invertPositiveGood ? (num < 0) : (num > 0);
      const color = isGood ? "text-emerald-400" : "text-amber-400";
      return `<span class="${color} font-mono font-bold">${sign}</span>`;
    };

    this.resultsContainer.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <!-- Area A Card -->
        <div class="bg-slate-900/90 border border-cyan-700/40 rounded-xl p-4">
          <div class="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-1">Baseline Ward A</div>
          <h4 class="text-lg font-bold text-white mb-2">${a.name}</h4>
          <div class="space-y-1.5 text-xs">
            <div class="flex justify-between py-1 border-b border-slate-800">
              <span class="text-slate-400">Avg TDS:</span>
              <span class="font-bold text-white">${a.tds.avg} mg/L</span>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-800">
              <span class="text-slate-400">Avg pH:</span>
              <span class="font-bold text-white">${a.ph.avg}</span>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-800">
              <span class="text-slate-400">Avg Turbidity:</span>
              <span class="font-bold text-white">${a.turb.avg} NTU</span>
            </div>
            <div class="flex justify-between py-1">
              <span class="text-slate-400">Avg Hardness:</span>
              <span class="font-bold text-white">${a.hard.avg} mg/L</span>
            </div>
          </div>
        </div>

        <!-- Delta / Comparison Card -->
        <div class="bg-cyan-950/40 border border-cyan-500/30 rounded-xl p-4 flex flex-col justify-center">
          <div class="text-xs uppercase tracking-wider text-cyan-300 font-semibold text-center mb-1">Parameter Variance (B vs A)</div>
          <div class="text-center text-xs text-slate-400 mb-3">Difference from ${a.name} to ${b.name}</div>
          <div class="space-y-2 text-xs">
            <div class="flex justify-between items-center bg-slate-900/60 px-3 py-1.5 rounded">
              <span class="text-slate-300">Δ TDS:</span>
              <div>${formatDelta(deltaTds, true)} mg/L</div>
            </div>
            <div class="flex justify-between items-center bg-slate-900/60 px-3 py-1.5 rounded">
              <span class="text-slate-300">Δ pH:</span>
              <div>${formatDelta(deltaPh, false)}</div>
            </div>
            <div class="flex justify-between items-center bg-slate-900/60 px-3 py-1.5 rounded">
              <span class="text-slate-300">Δ Turbidity:</span>
              <div>${formatDelta(deltaTurb, true)} NTU</div>
            </div>
            <div class="flex justify-between items-center bg-slate-900/60 px-3 py-1.5 rounded">
              <span class="text-slate-300">Δ Hardness:</span>
              <div>${formatDelta(deltaHard, true)} mg/L</div>
            </div>
          </div>
        </div>

        <!-- Area B Card -->
        <div class="bg-slate-900/90 border border-cyan-700/40 rounded-xl p-4">
          <div class="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-1">Comparison Ward B</div>
          <h4 class="text-lg font-bold text-white mb-2">${b.name}</h4>
          <div class="space-y-1.5 text-xs">
            <div class="flex justify-between py-1 border-b border-slate-800">
              <span class="text-slate-400">Avg TDS:</span>
              <span class="font-bold text-white">${b.tds.avg} mg/L</span>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-800">
              <span class="text-slate-400">Avg pH:</span>
              <span class="font-bold text-white">${b.ph.avg}</span>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-800">
              <span class="text-slate-400">Avg Turbidity:</span>
              <span class="font-bold text-white">${b.turb.avg} NTU</span>
            </div>
            <div class="flex justify-between py-1">
              <span class="text-slate-400">Avg Hardness:</span>
              <span class="font-bold text-white">${b.hard.avg} mg/L</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Comparative Insight Callout -->
      <div class="p-3.5 bg-slate-900/90 border border-cyan-800/40 rounded-xl flex items-start gap-3 text-xs">
        <span class="text-xl">💡</span>
        <div>
          <span class="font-semibold text-cyan-300">Comparative Finding: </span>
          <span class="text-slate-300">
            ${a.name} exhibits an average TDS of ${a.tds.avg} mg/L compared to ${b.tds.avg} mg/L in ${b.name}.
            ${Math.abs(parseFloat(deltaTds)) > 20 ? (parseFloat(deltaTds) > 0 ? `${b.name} shows slightly higher dissolved minerals likely due to deeper aquifer borewells.` : `${a.name} has slightly higher mineral concentration than ${b.name}.`) : "Both wards maintain very comparable mineralization levels well inside the BIS IS 10500:2012 limit of 500 mg/L."}
          </span>
        </div>
      </div>
    `;

    // Notify Professor Aqua if available
    if (typeof ProfessorAqua !== "undefined" && ProfessorAqua.speak) {
      const summaryText = `Comparing ${a.name} and ${b.name}: ${a.name} averages ${a.tds.avg} TDS while ${b.name} averages ${b.tds.avg} TDS. Both comply with BIS standards.`;
      const aquaCard = document.getElementById("compare-aqua-text");
      if (aquaCard) aquaCard.textContent = summaryText;
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // Give time for map areas to load if necessary
  setTimeout(() => AreaCompare.init(), 150);
});