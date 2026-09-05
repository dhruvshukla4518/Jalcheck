/**
 * Main Application Orchestrator
 * Connects Tabs, Initializes Components, and Binds Global Events
 */
const App = {
  currentTab: 'home',

  async init() {
    console.log("Initializing JalCheck Application...");
    ProfessorAqua.init();
    AreaMap.init();
    Dashboard.render();
    Analyzer.init();
    Survey.init();
    Report.render();

    await this.refreshLiveStats();
    console.log("JalCheck Application ready.");
  },

  switchTab(tabId) {
    this.currentTab = tabId;
    document.querySelectorAll('.tab-pane').forEach(el => el.classList.add('hidden'));
    const activePane = document.getElementById('tab-' + tabId);
    if (activePane) activePane.classList.remove('hidden');

    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.classList.remove('text-cyan-400', 'bg-slate-800/80', 'border', 'border-cyan-500/30');
      btn.classList.add('text-slate-300');
    });
    const activeBtn = document.getElementById('nav-btn-' + tabId);
    if (activeBtn) {
      activeBtn.classList.remove('text-slate-300');
      activeBtn.classList.add('text-cyan-400', 'bg-slate-800/80', 'border', 'border-cyan-500/30');
    }

    if (tabId === 'dashboard') {
      Dashboard.render();
      ProfessorAqua.explain('tab_dashboard');
    } else if (tabId === 'map') {
      ProfessorAqua.explain('tab_map');
    } else if (tabId === 'analyzer') {
      Analyzer.calculate();
      ProfessorAqua.explain('tab_analyzer');
    } else if (tabId === 'survey') {
      ProfessorAqua.explain('tab_survey');
    } else if (tabId === 'report') {
      Report.render();
      ProfessorAqua.explain('tab_report');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  async refreshLiveStats() {
    const stats = await API.getLiveStats();
    if (stats) {
      document.getElementById('top-stat-samples').textContent = stats.total_samples;
      document.getElementById('home-total-samples').textContent = stats.total_samples;
      document.getElementById('top-stat-areas').textContent = stats.areas_tested;
      document.getElementById('top-stat-surveyed').textContent = stats.citizens_surveyed;
      document.getElementById('home-survey-count').textContent = stats.citizens_surveyed;
      document.getElementById('top-stat-awareness').textContent = `${stats.tds_awareness_pct}%`;
    }
  }
};

window.addEventListener('DOMContentLoaded', () => {
  App.init();
});
