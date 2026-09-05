/**
 * Community Survey & Awareness Analytics Component
 * Implements Section 12 & 13 of Project Specification
 */
const Survey = {
  totalSurveyed: 394,

  async init() {
    await this.refreshStats();
  },

  async refreshStats() {
    const stats = await API.getSurveyStats();
    if (stats && stats.total_surveyed) {
      this.totalSurveyed = stats.total_surveyed;
      document.getElementById('survey-count-text').textContent = stats.total_surveyed;
      document.getElementById('top-stat-surveyed').textContent = stats.total_surveyed;
      document.getElementById('home-survey-count').textContent = stats.total_surveyed;
      document.getElementById('pct-tested').textContent = `${stats.tested_percentage}%`;
      document.getElementById('bar-tested').style.width = `${stats.tested_percentage}%`;
      document.getElementById('pct-aware').textContent = `${stats.tds_awareness_percentage}%`;
      document.getElementById('bar-aware').style.width = `${stats.tds_awareness_percentage}%`;
    }
  },

  async submit(e) {
    e.preventDefault();
    const areaId = 4; // Default to current ward
    const source = document.getElementById('srv-source').value;
    const purif = document.getElementById('srv-purification').value;
    const tested = document.querySelector('input[name="tested"]:checked').value;
    const aware = document.querySelector('input[name="tds_aware"]:checked').value;

    await API.submitSurvey({
      area_id: areaId,
      water_source: source,
      uses_purification: purif,
      water_testing: tested,
      tds_awareness: aware
    });

    this.totalSurveyed++;
    document.getElementById('survey-count-text').textContent = this.totalSurveyed;
    document.getElementById('top-stat-surveyed').textContent = this.totalSurveyed;
    document.getElementById('home-survey-count').textContent = this.totalSurveyed;

    alert("Thank you! Your survey responses have been added to the CEP Community Awareness database.");
    ProfessorAqua.setExplanation("Thank you for participating! Your responses help identify community water testing habits.", "greeting", "SURVEY RECORDED");
  }
};
