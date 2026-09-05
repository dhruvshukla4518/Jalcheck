/**
 * Interactive Water Analyzer Diagnostic Engine
 * Implements Section 9 of Project Specification
 */
const Analyzer = {
  presets: {
    muni: { ph: 7.4, tds: 240, turb: 0.5, hard: 140, ec: 390 },
    deep_bore: { ph: 7.6, tds: 850, turb: 0.7, hard: 380, ec: 1420 },
    ro_purified: { ph: 6.9, tds: 65, turb: 0.2, hard: 45, ec: 110 },
    river_runoff: { ph: 6.6, tds: 420, turb: 6.8, hard: 190, ec: 680 }
  },

  init() {
    this.calculate();
  },

  loadPreset(type) {
    const p = this.presets[type];
    if (!p) return;
    document.getElementById('input-ph').value = p.ph;
    document.getElementById('input-tds').value = p.tds;
    document.getElementById('input-turb').value = p.turb;
    document.getElementById('input-hard').value = p.hard;
    document.getElementById('input-ec').value = p.ec;
    this.calculate();
  },

  async calculate() {
    const ph = parseFloat(document.getElementById('input-ph').value);
    const tds = parseFloat(document.getElementById('input-tds').value);
    const turb = parseFloat(document.getElementById('input-turb').value);
    const hard = parseFloat(document.getElementById('input-hard').value);
    const ec = parseFloat(document.getElementById('input-ec').value);

    document.getElementById('val-ph-display').textContent = ph.toFixed(1);
    document.getElementById('val-tds-display').textContent = `${tds} mg/L`;
    document.getElementById('val-turb-display').textContent = `${turb.toFixed(1)} NTU`;
    document.getElementById('val-hard-display').textContent = `${hard} mg/L`;
    document.getElementById('val-ec-display').textContent = `${ec} µS/cm`;

    // Local calculation with backend fallback
    let penalties = Math.abs(ph - 7.3) * 12 + (tds > 500 ? ((tds - 500) / 1500) * 35 : 0) + (turb > 1.0 ? ((turb - 1.0) / 9.0) * 30 : 0) + (hard > 200 ? ((hard - 200) / 400) * 15 : 0);
    let wqi = Math.max(10, Math.min(99, Math.round((100 - penalties) * 10) / 10));

    document.getElementById('res-wqi').textContent = wqi.toFixed(1);
    const badge = document.getElementById('res-badge');
    const grade = document.getElementById('res-wqi-grade');
    const interp = document.getElementById('res-interpretation');

    if (wqi >= 85) {
      badge.textContent = "Potable / Excellent";
      badge.className = "px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-950 text-emerald-300 border border-emerald-800";
      grade.textContent = "Grade A: Excellent Drinking Water Quality";
      interp.textContent = "All parameters comply cleanly with BIS IS 10500:2012 desirable limits. Safe for direct drinking with basic biological filtration.";
    } else if (wqi >= 70) {
      badge.textContent = "Good / Acceptable";
      badge.className = "px-2.5 py-0.5 rounded-full text-xs font-bold bg-sky-950 text-sky-300 border border-sky-800";
      grade.textContent = "Grade B: Good Quality Drinking Water";
      interp.textContent = "Parameters are within permissible limits. Minor hardness or moderate TDS detected. Safe for drinking; standard boiling recommended.";
    } else if (wqi >= 50) {
      badge.textContent = "Moderate Observation";
      badge.className = "px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-950 text-amber-300 border border-amber-800";
      grade.textContent = "Grade C: Fair Quality (Purification Advised)";
      interp.textContent = "Noticeable elevation in either TDS, turbidity, or hardness. Multi-stage filtration (sediment + activated carbon or RO) advised.";
    } else {
      badge.textContent = "Action Required: Poor Quality";
      badge.className = "px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-950 text-rose-300 border border-rose-800";
      grade.textContent = "Grade D: High Ionic Load / Turbid";
      interp.textContent = "Water exceeds documented acceptable boundaries. Risk of scaling and microbial shielding. RO purification and source testing advised.";
    }

    document.getElementById('res-ph-tag').innerHTML = (ph >= 6.5 && ph <= 8.5) ? `<span class="text-emerald-400">✓ Desirable (${ph})</span>` : `<span class="text-rose-400">⚠ Out of Range (${ph})</span>`;
    document.getElementById('res-tds-tag').innerHTML = (tds <= 500) ? `<span class="text-emerald-400">✓ Desirable (${tds} mg/L)</span>` : (tds <= 2000 ? `<span class="text-amber-400">⚡ Permissible (${tds} mg/L)</span>` : `<span class="text-rose-400">⚠ Excessive (${tds} mg/L)</span>`);
    document.getElementById('res-turb-tag').innerHTML = (turb <= 1.0) ? `<span class="text-emerald-400">✓ Clear (${turb} NTU)</span>` : `<span class="text-amber-400">⚠ Elevated Turbidity (${turb} NTU)</span>`;
    document.getElementById('res-hard-tag').innerHTML = (hard <= 200) ? `<span class="text-emerald-400">✓ Soft-Medium (${hard} mg/L)</span>` : `<span class="text-amber-400">⚡ Hard Water (${hard} mg/L)</span>`;
  },

  explainDiagnosis() {
    const wqi = document.getElementById('res-wqi').textContent;
    const interp = document.getElementById('res-interpretation').textContent;
    ProfessorAqua.setExplanation(`Water Analyzer Result: Composite Water Quality Index is ${wqi}/100. ${interp}`, 'explaining', 'ANALYSIS COMPLETE');
  },

  async saveSample() {
    const id = document.getElementById('an-id').value;
    const ph = parseFloat(document.getElementById('input-ph').value);
    const tds = parseFloat(document.getElementById('input-tds').value);
    const turb = parseFloat(document.getElementById('input-turb').value);
    const hard = parseFloat(document.getElementById('input-hard').value);
    const ec = parseFloat(document.getElementById('input-ec').value);

    await API.diagnoseSample({ ph, tds, turbidity: turb, hardness: hard, ec, sample_label: id });
    alert(`Sample "${id}" successfully validated and stored into local database!`);
    App.refreshLiveStats();
  }
};
