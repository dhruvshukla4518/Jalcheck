"""
JalCheck Automated Integration & Regression Test Suite
Validates all endpoints, database state, health check, and CSV export.
"""
import sys
import unittest
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(BASE_DIR))

from fastapi.testclient import TestClient
from backend.app.main import app
from backend.app.database.models import init_db
from backend.data.seed_data import seed

class TestJalCheckPlatform(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        init_db()
        seed()
        cls.client = TestClient(app)

    def test_01_health_check(self):
        res = self.client.get("/health")
        self.assertEqual(res.status_code, 200)
        data = res.json()
        self.assertEqual(data["status"], "healthy")
        self.assertEqual(data["service"], "jalcheck")
        self.assertEqual(data["metrics"]["samples_count"], 110)
        self.assertEqual(data["metrics"]["areas_count"], 11)

    def test_02_areas_endpoint(self):
        res = self.client.get("/api/areas")
        self.assertEqual(res.status_code, 200)
        areas = res.json()
        self.assertEqual(len(areas), 11)
        area_names = [a["name"] for a in areas]
        self.assertIn("Shivaji Nagar", area_names)
        self.assertIn("Azad Nagar", area_names)

    def test_03_samples_endpoint(self):
        res = self.client.get("/api/samples")
        self.assertEqual(res.status_code, 200)
        samples = res.json()
        self.assertEqual(len(samples), 110)

    def test_04_analytics_summary(self):
        res = self.client.get("/api/analytics/summary")
        self.assertEqual(res.status_code, 200)
        data = res.json()
        self.assertIn("data", data)
        self.assertEqual(len(data["data"]), 11)

    def test_05_water_analyzer_diagnose(self):
        payload = {
            "ph": 7.4,
            "tds": 380,
            "turbidity": 1.5,
            "hardness": 190
        }
        res = self.client.post("/api/analyzer/diagnose", json=payload)
        self.assertEqual(res.status_code, 200)
        data = res.json()
        self.assertIn("analysis", data)
        self.assertIn("wqi_score", data["analysis"])

    def test_06_survey_stats(self):
        res = self.client.get("/api/survey/stats")
        self.assertEqual(res.status_code, 200)
        data = res.json()
        self.assertGreaterEqual(data["total_surveyed"], 394)

    def test_07_csv_dataset_export(self):
        res = self.client.get("/api/samples/export/csv")
        self.assertEqual(res.status_code, 200)
        self.assertIn("text/csv", res.headers.get("content-type", ""))
        lines = res.text.strip().splitlines()
        # Header + 110 samples = 111 rows
        self.assertEqual(len(lines), 111)
        self.assertTrue(lines[0].startswith("Sample ID,Area,Ward"))

if __name__ == "__main__":
    unittest.main()