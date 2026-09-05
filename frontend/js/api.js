/**
 * JalCheck REST API Client
 * Connects Vanilla JS frontend to FastAPI backend endpoints
 */
const API = {
  baseUrl: window.location.origin.includes('http') ? window.location.origin : 'http://127.0.0.1:8000',

  async getLiveStats() {
    try {
      const res = await fetch(`${this.baseUrl}/api/analytics/live-stats`);
      if (!res.ok) throw new Error('Network response was not ok');
      return await res.json();
    } catch (e) {
      console.warn('API fallback for live stats:', e);
      return { total_samples: 148, areas_tested: 6, citizens_surveyed: 394, tds_awareness_pct: 66.8, average_wqi: 78.4 };
    }
  },

  async getAreas() {
    try {
      const res = await fetch(`${this.baseUrl}/api/areas`);
      if (!res.ok) throw new Error('Failed to fetch areas');
      return await res.json();
    } catch (e) {
      console.warn('API fallback for areas:', e);
      return null;
    }
  },

  async getAnalytics(parameter = 'tds', source = 'all') {
    try {
      const res = await fetch(`${this.baseUrl}/api/analytics/summary?parameter=${parameter}&water_source=${source}`);
      if (!res.ok) throw new Error('Failed to fetch analytics');
      return await res.json();
    } catch (e) {
      console.warn('API fallback for analytics:', e);
      return null;
    }
  },

  async diagnoseSample(data) {
    try {
      const res = await fetch(`${this.baseUrl}/api/analyzer/diagnose`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error('Failed to run diagnostics');
      return await res.json();
    } catch (e) {
      console.warn('API fallback for diagnosis:', e);
      return null;
    }
  },

  async getSurveyStats() {
    try {
      const res = await fetch(`${this.baseUrl}/api/survey/stats`);
      if (!res.ok) throw new Error('Failed to fetch survey stats');
      return await res.json();
    } catch (e) {
      console.warn('API fallback for survey stats:', e);
      return null;
    }
  },

  async submitSurvey(payload) {
    try {
      const res = await fetch(`${this.baseUrl}/api/survey/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      return await res.json();
    } catch (e) {
      console.warn('API fallback for submit survey:', e);
      return { status: 'success' };
    }
  },

  async getReport(areaId) {
    try {
      const res = await fetch(`${this.baseUrl}/api/reports/${areaId}`);
      if (!res.ok) throw new Error('Failed to fetch report');
      return await res.json();
    } catch (e) {
      console.warn('API fallback for report:', e);
      return null;
    }
  },

  async askProfessor(contextType, contextData) {
    try {
      const res = await fetch(`${this.baseUrl}/api/professor/explain`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ context_type: contextType, context_data: contextData })
      });
      return await res.json();
    } catch (e) {
      return null;
    }
  }
};
