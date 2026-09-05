/**
 * Interactive Study Area & Sample Map Component
 * Accurately calibrated to real coordinates (11 Areas, 110 Certified Samples)
 */
const AreaMap = {
  areas: [
  {
    "id": 1,
    "name": "Shivaji Nagar",
    "ward": "Ward 1",
    "x": 624,
    "y": 230,
    "lat": 19.8016,
    "lon": 72.7605,
    "samples": 10,
    "sources": "Municipal Tap, Borewell, Well, Community Tap",
    "tds": {
      "min": 342.0,
      "avg": 385.6,
      "max": 433.0
    },
    "ph": {
      "min": 7.28,
      "avg": 7.51,
      "max": 7.83
    },
    "turb": {
      "min": 0.91,
      "avg": 1.67,
      "max": 2.71
    },
    "hard": {
      "min": 168.0,
      "avg": 192.5,
      "max": 226.0
    },
    "ec": {
      "min": 684.0,
      "avg": 767.6,
      "max": 861.0
    },
    "status": "Good Drinking Quality",
    "color": "emerald",
    "obs": "Tested across 10 certified sites. Average TDS is 385.6 mg/L (max 433), pH is 7.51, Turbidity is 1.67 NTU.",
    "rec": "Routine boiling or candle filtration recommended."
  },
  {
    "id": 2,
    "name": "Salwad",
    "ward": "Ward 2",
    "x": 400,
    "y": 162,
    "lat": 19.8075,
    "lon": 72.753,
    "samples": 10,
    "sources": "Municipal Tap, Borewell, Well, Community Tap",
    "tds": {
      "min": 368.0,
      "avg": 412.3,
      "max": 463.0
    },
    "ph": {
      "min": 7.29,
      "avg": 7.54,
      "max": 7.82
    },
    "turb": {
      "min": 1.03,
      "avg": 1.93,
      "max": 3.14
    },
    "hard": {
      "min": 176.0,
      "avg": 206.8,
      "max": 245.0
    },
    "ec": {
      "min": 718.0,
      "avg": 822.3,
      "max": 936.0
    },
    "status": "Good Drinking Quality",
    "color": "emerald",
    "obs": "Tested across 10 certified sites. Average TDS is 412.3 mg/L (max 463), pH is 7.54, Turbidity is 1.93 NTU.",
    "rec": "Routine boiling or candle filtration recommended."
  },
  {
    "id": 3,
    "name": "Katkar",
    "ward": "Ward 3",
    "x": 582,
    "y": 97,
    "lat": 19.8131,
    "lon": 72.7591,
    "samples": 10,
    "sources": "Municipal Tap, Borewell, Well, Community Tap",
    "tds": {
      "min": 394.0,
      "avg": 446.3,
      "max": 503.0
    },
    "ph": {
      "min": 7.28,
      "avg": 7.55,
      "max": 7.88
    },
    "turb": {
      "min": 1.24,
      "avg": 2.23,
      "max": 3.47
    },
    "hard": {
      "min": 195.0,
      "avg": 228.1,
      "max": 268.0
    },
    "ec": {
      "min": 781.0,
      "avg": 888.5,
      "max": 1012.0
    },
    "status": "Borderline TDS Peak (503 mg/L)",
    "color": "rose",
    "obs": "Tested across 10 certified sites. Average TDS is 446.3 mg/L (max 503), pH is 7.55, Turbidity is 2.23 NTU.",
    "rec": "Dual-stage filtration recommended for high-mineral borewell sources."
  },
  {
    "id": 4,
    "name": "Mahavir Nagar",
    "ward": "Ward 4",
    "x": 443,
    "y": 289,
    "lat": 19.7965,
    "lon": 72.7544,
    "samples": 10,
    "sources": "Municipal Tap, Borewell, Well, Community Tap",
    "tds": {
      "min": 351.0,
      "avg": 397.0,
      "max": 451.0
    },
    "ph": {
      "min": 7.34,
      "avg": 7.59,
      "max": 7.91
    },
    "turb": {
      "min": 0.86,
      "avg": 1.74,
      "max": 2.98
    },
    "hard": {
      "min": 171.0,
      "avg": 197.8,
      "max": 237.0
    },
    "ec": {
      "min": 699.0,
      "avg": 782.7,
      "max": 906.0
    },
    "status": "Good Drinking Quality",
    "color": "emerald",
    "obs": "Tested across 10 certified sites. Average TDS is 397.0 mg/L (max 451), pH is 7.59, Turbidity is 1.74 NTU.",
    "rec": "Routine boiling or candle filtration recommended."
  },
  {
    "id": 5,
    "name": "Bhandarwada",
    "ward": "Ward 5",
    "x": 653,
    "y": 370,
    "lat": 19.7895,
    "lon": 72.7614,
    "samples": 10,
    "sources": "Municipal Tap, Borewell, Well, Community Tap",
    "tds": {
      "min": 378.0,
      "avg": 433.3,
      "max": 498.0
    },
    "ph": {
      "min": 7.26,
      "avg": 7.52,
      "max": 7.86
    },
    "turb": {
      "min": 1.17,
      "avg": 2.26,
      "max": 3.61
    },
    "hard": {
      "min": 194.0,
      "avg": 224.2,
      "max": 267.0
    },
    "ec": {
      "min": 752.0,
      "avg": 859.2,
      "max": 1004.0
    },
    "status": "Moderate Turbidity (2.3 NTU)",
    "color": "amber",
    "obs": "Tested across 10 certified sites. Average TDS is 433.3 mg/L (max 498), pH is 7.52, Turbidity is 2.26 NTU.",
    "rec": "Routine boiling or candle filtration recommended."
  },
  {
    "id": 6,
    "name": "Betegaon",
    "ward": "Ward 6",
    "x": 550,
    "y": 451,
    "lat": 19.7825,
    "lon": 72.758,
    "samples": 10,
    "sources": "Municipal Tap, Borewell, Well, Community Tap",
    "tds": {
      "min": 326.0,
      "avg": 365.4,
      "max": 418.0
    },
    "ph": {
      "min": 7.42,
      "avg": 7.64,
      "max": 7.87
    },
    "turb": {
      "min": 0.74,
      "avg": 1.48,
      "max": 2.67
    },
    "hard": {
      "min": 154.0,
      "avg": 176.4,
      "max": 211.0
    },
    "ec": {
      "min": 641.0,
      "avg": 717.3,
      "max": 823.0
    },
    "status": "Good Drinking Quality",
    "color": "emerald",
    "obs": "Tested across 10 certified sites. Average TDS is 365.4 mg/L (max 418), pH is 7.64, Turbidity is 1.48 NTU.",
    "rec": "Routine boiling or candle filtration recommended."
  },
  {
    "id": 7,
    "name": "Awadh Nagar",
    "ward": "Ward 7",
    "x": 466,
    "y": 343,
    "lat": 19.7918,
    "lon": 72.7552,
    "samples": 10,
    "sources": "Municipal Tap, Borewell, Well, Community Tap",
    "tds": {
      "min": 338.0,
      "avg": 398.0,
      "max": 465.0
    },
    "ph": {
      "min": 7.18,
      "avg": 7.57,
      "max": 8.02
    },
    "turb": {
      "min": 0.92,
      "avg": 1.84,
      "max": 3.02
    },
    "hard": {
      "min": 158.0,
      "avg": 197.2,
      "max": 241.0
    },
    "ec": {
      "min": 651.0,
      "avg": 787.3,
      "max": 948.0
    },
    "status": "Good Drinking Quality",
    "color": "emerald",
    "obs": "Tested across 10 certified sites. Average TDS is 398.0 mg/L (max 465), pH is 7.57, Turbidity is 1.84 NTU.",
    "rec": "Routine boiling or candle filtration recommended."
  },
  {
    "id": 8,
    "name": "Pam",
    "ward": "Ward 8",
    "x": 149,
    "y": 165,
    "lat": 19.8072,
    "lon": 72.7446,
    "samples": 10,
    "sources": "Municipal Tap, Borewell, Well, Community Tap",
    "tds": {
      "min": 369.0,
      "avg": 443.0,
      "max": 523.0
    },
    "ph": {
      "min": 7.12,
      "avg": 7.55,
      "max": 8.08
    },
    "turb": {
      "min": 0.88,
      "avg": 2.1,
      "max": 3.42
    },
    "hard": {
      "min": 172.0,
      "avg": 217.5,
      "max": 267.0
    },
    "ec": {
      "min": 712.0,
      "avg": 870.4,
      "max": 1061.0
    },
    "status": "Borderline TDS Peak (523 mg/L)",
    "color": "rose",
    "obs": "Tested across 10 certified sites. Average TDS is 443.0 mg/L (max 523), pH is 7.55, Turbidity is 2.10 NTU.",
    "rec": "Dual-stage filtration recommended for high-mineral borewell sources."
  },
  {
    "id": 9,
    "name": "Ganesh Nagar",
    "ward": "Ward 9",
    "x": 358,
    "y": 79,
    "lat": 19.8146,
    "lon": 72.7516,
    "samples": 10,
    "sources": "Municipal Tap, Borewell, Well, Community Tap",
    "tds": {
      "min": 351.0,
      "avg": 423.8,
      "max": 508.0
    },
    "ph": {
      "min": 7.16,
      "avg": 7.56,
      "max": 8.01
    },
    "turb": {
      "min": 0.76,
      "avg": 2.0,
      "max": 3.27
    },
    "hard": {
      "min": 169.0,
      "avg": 208.9,
      "max": 260.0
    },
    "ec": {
      "min": 682.0,
      "avg": 833.7,
      "max": 1034.0
    },
    "status": "Borderline TDS Peak (508 mg/L)",
    "color": "amber",
    "obs": "Tested across 10 certified sites. Average TDS is 423.8 mg/L (max 508), pH is 7.56, Turbidity is 2.00 NTU.",
    "rec": "Dual-stage filtration recommended for high-mineral borewell sources."
  },
  {
    "id": 10,
    "name": "Yadav Nagar",
    "ward": "Ward 10",
    "x": 567,
    "y": 195,
    "lat": 19.8046,
    "lon": 72.7586,
    "samples": 10,
    "sources": "Municipal Tap, Borewell, Well, Community Tap",
    "tds": {
      "min": 342.0,
      "avg": 413.1,
      "max": 496.0
    },
    "ph": {
      "min": 7.19,
      "avg": 7.57,
      "max": 7.97
    },
    "turb": {
      "min": 0.82,
      "avg": 1.98,
      "max": 3.36
    },
    "hard": {
      "min": 162.0,
      "avg": 203.0,
      "max": 255.0
    },
    "ec": {
      "min": 665.0,
      "avg": 813.7,
      "max": 1007.0
    },
    "status": "Good Drinking Quality",
    "color": "emerald",
    "obs": "Tested across 10 certified sites. Average TDS is 413.1 mg/L (max 496), pH is 7.57, Turbidity is 1.98 NTU.",
    "rec": "Routine boiling or candle filtration recommended."
  },
  {
    "id": 11,
    "name": "Azad Nagar",
    "ward": "Ward 11",
    "x": 284,
    "y": 375,
    "lat": 19.7891,
    "lon": 72.7491,
    "samples": 10,
    "sources": "Municipal Tap, Borewell, Well, Community Tap",
    "tds": {
      "min": 337.0,
      "avg": 411.6,
      "max": 509.0
    },
    "ph": {
      "min": 7.15,
      "avg": 7.57,
      "max": 8.04
    },
    "turb": {
      "min": 0.73,
      "avg": 1.93,
      "max": 3.29
    },
    "hard": {
      "min": 160.0,
      "avg": 202.4,
      "max": 258.0
    },
    "ec": {
      "min": 653.0,
      "avg": 811.8,
      "max": 1040.0
    },
    "status": "Borderline TDS Peak (509 mg/L)",
    "color": "amber",
    "obs": "Tested across 10 certified sites. Average TDS is 411.6 mg/L (max 509), pH is 7.57, Turbidity is 1.93 NTU.",
    "rec": "Dual-stage filtration recommended for high-mineral borewell sources."
  }
],
  samples: [
  {
    "id": "JLC-01-001",
    "area": "Shivaji Nagar",
    "source": "Municipal Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-03",
    "tds": 342.0,
    "ph": 7.31,
    "turb": 1.12,
    "hard": 168.0,
    "ec": 684.0,
    "lat": 19.801324,
    "lon": 72.760214,
    "x": 616,
    "y": 233
  },
  {
    "id": "JLC-01-002",
    "area": "Shivaji Nagar",
    "source": "Borewell",
    "icon": "\u26cf\ufe0f",
    "date": "2026-07-05",
    "tds": 378.0,
    "ph": 7.48,
    "turb": 1.76,
    "hard": 192.0,
    "ec": 752.0,
    "lat": 19.801721,
    "lon": 72.760841,
    "x": 635,
    "y": 228
  },
  {
    "id": "JLC-01-003",
    "area": "Shivaji Nagar",
    "source": "Well",
    "icon": "\ud83e\udea3",
    "date": "2026-07-07",
    "tds": 401.0,
    "ph": 7.62,
    "turb": 2.14,
    "hard": 205.0,
    "ec": 811.0,
    "lat": 19.801143,
    "lon": 72.760392,
    "x": 622,
    "y": 235
  },
  {
    "id": "JLC-01-004",
    "area": "Shivaji Nagar",
    "source": "Community Tap",
    "icon": "\ud83d\udca7",
    "date": "2026-07-09",
    "tds": 356.0,
    "ph": 7.44,
    "turb": 0.91,
    "hard": 176.0,
    "ec": 701.0,
    "lat": 19.802031,
    "lon": 72.760673,
    "x": 630,
    "y": 225
  },
  {
    "id": "JLC-01-005",
    "area": "Shivaji Nagar",
    "source": "Municipal Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-11",
    "tds": 389.0,
    "ph": 7.57,
    "turb": 1.43,
    "hard": 198.0,
    "ec": 778.0,
    "lat": 19.801562,
    "lon": 72.759981,
    "x": 609,
    "y": 230
  },
  {
    "id": "JLC-01-006",
    "area": "Shivaji Nagar",
    "source": "Borewell",
    "icon": "\u26cf\ufe0f",
    "date": "2026-07-13",
    "tds": 421.0,
    "ph": 7.28,
    "turb": 2.36,
    "hard": 218.0,
    "ec": 836.0,
    "lat": 19.801894,
    "lon": 72.760517,
    "x": 626,
    "y": 226
  },
  {
    "id": "JLC-01-007",
    "area": "Shivaji Nagar",
    "source": "Well",
    "icon": "\ud83e\udea3",
    "date": "2026-07-15",
    "tds": 365.0,
    "ph": 7.69,
    "turb": 1.08,
    "hard": 171.0,
    "ec": 723.0,
    "lat": 19.800982,
    "lon": 72.761102,
    "x": 643,
    "y": 237
  },
  {
    "id": "JLC-01-008",
    "area": "Shivaji Nagar",
    "source": "Community Tap",
    "icon": "\ud83d\udca7",
    "date": "2026-07-17",
    "tds": 397.0,
    "ph": 7.52,
    "turb": 1.67,
    "hard": 187.0,
    "ec": 789.0,
    "lat": 19.801447,
    "lon": 72.760334,
    "x": 620,
    "y": 232
  },
  {
    "id": "JLC-01-009",
    "area": "Shivaji Nagar",
    "source": "Municipal Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-19",
    "tds": 433.0,
    "ph": 7.83,
    "turb": 2.71,
    "hard": 226.0,
    "ec": 861.0,
    "lat": 19.802115,
    "lon": 72.760756,
    "x": 633,
    "y": 224
  },
  {
    "id": "JLC-01-010",
    "area": "Shivaji Nagar",
    "source": "Borewell",
    "icon": "\u26cf\ufe0f",
    "date": "2026-07-21",
    "tds": 374.0,
    "ph": 7.39,
    "turb": 1.55,
    "hard": 184.0,
    "ec": 741.0,
    "lat": 19.801678,
    "lon": 72.759852,
    "x": 606,
    "y": 229
  },
  {
    "id": "JLC-02-001",
    "area": "Salwad",
    "source": "Municipal Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-23",
    "tds": 368.0,
    "ph": 7.35,
    "turb": 1.03,
    "hard": 176.0,
    "ec": 718.0,
    "lat": 19.807421,
    "lon": 72.752781,
    "x": 393,
    "y": 162
  },
  {
    "id": "JLC-02-002",
    "area": "Salwad",
    "source": "Borewell",
    "icon": "\u26cf\ufe0f",
    "date": "2026-07-25",
    "tds": 411.0,
    "ph": 7.51,
    "turb": 1.82,
    "hard": 201.0,
    "ec": 805.0,
    "lat": 19.807843,
    "lon": 72.753214,
    "x": 406,
    "y": 158
  },
  {
    "id": "JLC-02-003",
    "area": "Salwad",
    "source": "Well",
    "icon": "\ud83e\udea3",
    "date": "2026-07-27",
    "tds": 439.0,
    "ph": 7.66,
    "turb": 2.37,
    "hard": 219.0,
    "ec": 867.0,
    "lat": 19.807162,
    "lon": 72.753491,
    "x": 415,
    "y": 165
  },
  {
    "id": "JLC-02-004",
    "area": "Salwad",
    "source": "Community Tap",
    "icon": "\ud83d\udca7",
    "date": "2026-07-29",
    "tds": 382.0,
    "ph": 7.47,
    "turb": 1.21,
    "hard": 188.0,
    "ec": 756.0,
    "lat": 19.808021,
    "lon": 72.752913,
    "x": 397,
    "y": 156
  },
  {
    "id": "JLC-02-005",
    "area": "Salwad",
    "source": "Municipal Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-31",
    "tds": 401.0,
    "ph": 7.58,
    "turb": 1.64,
    "hard": 196.0,
    "ec": 789.0,
    "lat": 19.807533,
    "lon": 72.753084,
    "x": 403,
    "y": 161
  },
  {
    "id": "JLC-02-006",
    "area": "Salwad",
    "source": "Borewell",
    "icon": "\u26cf\ufe0f",
    "date": "2026-08-02",
    "tds": 452.0,
    "ph": 7.29,
    "turb": 2.88,
    "hard": 232.0,
    "ec": 914.0,
    "lat": 19.806921,
    "lon": 72.752672,
    "x": 390,
    "y": 168
  },
  {
    "id": "JLC-02-007",
    "area": "Salwad",
    "source": "Well",
    "icon": "\ud83e\udea3",
    "date": "2026-08-04",
    "tds": 397.0,
    "ph": 7.71,
    "turb": 1.46,
    "hard": 207.0,
    "ec": 821.0,
    "lat": 19.807692,
    "lon": 72.753366,
    "x": 411,
    "y": 159
  },
  {
    "id": "JLC-02-008",
    "area": "Salwad",
    "source": "Community Tap",
    "icon": "\ud83d\udca7",
    "date": "2026-08-06",
    "tds": 421.0,
    "ph": 7.54,
    "turb": 2.02,
    "hard": 214.0,
    "ec": 846.0,
    "lat": 19.808174,
    "lon": 72.752584,
    "x": 388,
    "y": 154
  },
  {
    "id": "JLC-02-009",
    "area": "Salwad",
    "source": "Municipal Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-08-08",
    "tds": 463.0,
    "ph": 7.82,
    "turb": 3.14,
    "hard": 245.0,
    "ec": 936.0,
    "lat": 19.806784,
    "lon": 72.753018,
    "x": 401,
    "y": 170
  },
  {
    "id": "JLC-02-010",
    "area": "Salwad",
    "source": "Borewell",
    "icon": "\u26cf\ufe0f",
    "date": "2026-08-10",
    "tds": 389.0,
    "ph": 7.43,
    "turb": 1.69,
    "hard": 190.0,
    "ec": 771.0,
    "lat": 19.807348,
    "lon": 72.752741,
    "x": 392,
    "y": 163
  },
  {
    "id": "JLC-03-001",
    "area": "Katkar",
    "source": "Municipal Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-04",
    "tds": 394.0,
    "ph": 7.28,
    "turb": 1.47,
    "hard": 195.0,
    "ec": 781.0,
    "lat": 19.812721,
    "lon": 72.758632,
    "x": 569,
    "y": 101
  },
  {
    "id": "JLC-03-002",
    "area": "Katkar",
    "source": "Borewell",
    "icon": "\u26cf\ufe0f",
    "date": "2026-07-06",
    "tds": 432.0,
    "ph": 7.45,
    "turb": 2.16,
    "hard": 218.0,
    "ec": 856.0,
    "lat": 19.813214,
    "lon": 72.759187,
    "x": 586,
    "y": 95
  },
  {
    "id": "JLC-03-003",
    "area": "Katkar",
    "source": "Well",
    "icon": "\ud83e\udea3",
    "date": "2026-07-08",
    "tds": 468.0,
    "ph": 7.61,
    "turb": 2.73,
    "hard": 236.0,
    "ec": 923.0,
    "lat": 19.812863,
    "lon": 72.759421,
    "x": 593,
    "y": 99
  },
  {
    "id": "JLC-03-004",
    "area": "Katkar",
    "source": "Community Tap",
    "icon": "\ud83d\udca7",
    "date": "2026-07-10",
    "tds": 415.0,
    "ph": 7.52,
    "turb": 1.24,
    "hard": 207.0,
    "ec": 824.0,
    "lat": 19.813542,
    "lon": 72.758774,
    "x": 573,
    "y": 92
  },
  {
    "id": "JLC-03-005",
    "area": "Katkar",
    "source": "Municipal Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-12",
    "tds": 447.0,
    "ph": 7.69,
    "turb": 1.91,
    "hard": 228.0,
    "ec": 889.0,
    "lat": 19.812486,
    "lon": 72.759052,
    "x": 582,
    "y": 104
  },
  {
    "id": "JLC-03-006",
    "area": "Katkar",
    "source": "Borewell",
    "icon": "\u26cf\ufe0f",
    "date": "2026-07-14",
    "tds": 489.0,
    "ph": 7.34,
    "turb": 3.21,
    "hard": 251.0,
    "ec": 976.0,
    "lat": 19.813071,
    "lon": 72.759633,
    "x": 599,
    "y": 97
  },
  {
    "id": "JLC-03-007",
    "area": "Katkar",
    "source": "Well",
    "icon": "\ud83e\udea3",
    "date": "2026-07-16",
    "tds": 421.0,
    "ph": 7.73,
    "turb": 1.68,
    "hard": 216.0,
    "ec": 838.0,
    "lat": 19.812658,
    "lon": 72.758941,
    "x": 578,
    "y": 102
  },
  {
    "id": "JLC-03-008",
    "area": "Katkar",
    "source": "Community Tap",
    "icon": "\ud83d\udca7",
    "date": "2026-07-18",
    "tds": 456.0,
    "ph": 7.57,
    "turb": 2.42,
    "hard": 239.0,
    "ec": 914.0,
    "lat": 19.813387,
    "lon": 72.759284,
    "x": 589,
    "y": 93
  },
  {
    "id": "JLC-03-009",
    "area": "Katkar",
    "source": "Municipal Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-20",
    "tds": 503.0,
    "ph": 7.88,
    "turb": 3.47,
    "hard": 268.0,
    "ec": 1012.0,
    "lat": 19.812934,
    "lon": 72.758521,
    "x": 566,
    "y": 99
  },
  {
    "id": "JLC-03-010",
    "area": "Katkar",
    "source": "Borewell",
    "icon": "\u26cf\ufe0f",
    "date": "2026-07-22",
    "tds": 438.0,
    "ph": 7.41,
    "turb": 2.05,
    "hard": 223.0,
    "ec": 872.0,
    "lat": 19.813682,
    "lon": 72.759114,
    "x": 583,
    "y": 90
  },
  {
    "id": "JLC-04-001",
    "area": "Mahavir Nagar",
    "source": "Municipal Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-05",
    "tds": 351.0,
    "ph": 7.41,
    "turb": 1.08,
    "hard": 171.0,
    "ec": 699.0,
    "lat": 19.796214,
    "lon": 72.754173,
    "x": 435,
    "y": 292
  },
  {
    "id": "JLC-04-002",
    "area": "Mahavir Nagar",
    "source": "Borewell",
    "icon": "\u26cf\ufe0f",
    "date": "2026-07-07",
    "tds": 382.0,
    "ph": 7.57,
    "turb": 1.63,
    "hard": 189.0,
    "ec": 758.0,
    "lat": 19.796741,
    "lon": 72.754628,
    "x": 449,
    "y": 286
  },
  {
    "id": "JLC-04-003",
    "area": "Mahavir Nagar",
    "source": "Well",
    "icon": "\ud83e\udea3",
    "date": "2026-07-09",
    "tds": 417.0,
    "ph": 7.68,
    "turb": 2.14,
    "hard": 207.0,
    "ec": 817.0,
    "lat": 19.796392,
    "lon": 72.754911,
    "x": 457,
    "y": 290
  },
  {
    "id": "JLC-04-004",
    "area": "Mahavir Nagar",
    "source": "Community Tap",
    "icon": "\ud83d\udca7",
    "date": "2026-07-11",
    "tds": 364.0,
    "ph": 7.52,
    "turb": 0.86,
    "hard": 176.0,
    "ec": 713.0,
    "lat": 19.797024,
    "lon": 72.754382,
    "x": 441,
    "y": 283
  },
  {
    "id": "JLC-04-005",
    "area": "Mahavir Nagar",
    "source": "Municipal Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-13",
    "tds": 395.0,
    "ph": 7.63,
    "turb": 1.41,
    "hard": 194.0,
    "ec": 776.0,
    "lat": 19.796581,
    "lon": 72.754741,
    "x": 452,
    "y": 288
  },
  {
    "id": "JLC-04-006",
    "area": "Mahavir Nagar",
    "source": "Borewell",
    "icon": "\u26cf\ufe0f",
    "date": "2026-07-15",
    "tds": 438.0,
    "ph": 7.34,
    "turb": 2.67,
    "hard": 221.0,
    "ec": 861.0,
    "lat": 19.796873,
    "lon": 72.753984,
    "x": 430,
    "y": 285
  },
  {
    "id": "JLC-04-007",
    "area": "Mahavir Nagar",
    "source": "Well",
    "icon": "\ud83e\udea3",
    "date": "2026-07-17",
    "tds": 407.0,
    "ph": 7.76,
    "turb": 1.55,
    "hard": 203.0,
    "ec": 798.0,
    "lat": 19.795961,
    "lon": 72.754519,
    "x": 446,
    "y": 295
  },
  {
    "id": "JLC-04-008",
    "area": "Mahavir Nagar",
    "source": "Community Tap",
    "icon": "\ud83d\udca7",
    "date": "2026-07-19",
    "tds": 376.0,
    "ph": 7.58,
    "turb": 1.19,
    "hard": 182.0,
    "ec": 734.0,
    "lat": 19.796827,
    "lon": 72.754862,
    "x": 456,
    "y": 285
  },
  {
    "id": "JLC-04-009",
    "area": "Mahavir Nagar",
    "source": "Municipal Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-21",
    "tds": 451.0,
    "ph": 7.91,
    "turb": 2.98,
    "hard": 237.0,
    "ec": 906.0,
    "lat": 19.796144,
    "lon": 72.753892,
    "x": 427,
    "y": 293
  },
  {
    "id": "JLC-04-010",
    "area": "Mahavir Nagar",
    "source": "Borewell",
    "icon": "\u26cf\ufe0f",
    "date": "2026-07-23",
    "tds": 389.0,
    "ph": 7.46,
    "turb": 1.84,
    "hard": 198.0,
    "ec": 765.0,
    "lat": 19.796532,
    "lon": 72.754295,
    "x": 439,
    "y": 289
  },
  {
    "id": "JLC-05-001",
    "area": "Bhandarwada",
    "source": "Municipal Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-06",
    "tds": 378.0,
    "ph": 7.26,
    "turb": 1.39,
    "hard": 194.0,
    "ec": 752.0,
    "lat": 19.789214,
    "lon": 72.761231,
    "x": 647,
    "y": 373
  },
  {
    "id": "JLC-05-002",
    "area": "Bhandarwada",
    "source": "Borewell",
    "icon": "\u26cf\ufe0f",
    "date": "2026-07-08",
    "tds": 419.0,
    "ph": 7.43,
    "turb": 2.04,
    "hard": 216.0,
    "ec": 827.0,
    "lat": 19.789742,
    "lon": 72.761684,
    "x": 661,
    "y": 367
  },
  {
    "id": "JLC-05-003",
    "area": "Bhandarwada",
    "source": "Well",
    "icon": "\ud83e\udea3",
    "date": "2026-07-10",
    "tds": 452.0,
    "ph": 7.59,
    "turb": 2.81,
    "hard": 234.0,
    "ec": 891.0,
    "lat": 19.789461,
    "lon": 72.761917,
    "x": 668,
    "y": 370
  },
  {
    "id": "JLC-05-004",
    "area": "Bhandarwada",
    "source": "Community Tap",
    "icon": "\ud83d\udca7",
    "date": "2026-07-12",
    "tds": 397.0,
    "ph": 7.48,
    "turb": 1.17,
    "hard": 201.0,
    "ec": 784.0,
    "lat": 19.790021,
    "lon": 72.761392,
    "x": 652,
    "y": 364
  },
  {
    "id": "JLC-05-005",
    "area": "Bhandarwada",
    "source": "Municipal Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-14",
    "tds": 431.0,
    "ph": 7.62,
    "turb": 1.76,
    "hard": 223.0,
    "ec": 851.0,
    "lat": 19.789573,
    "lon": 72.761743,
    "x": 662,
    "y": 369
  },
  {
    "id": "JLC-05-006",
    "area": "Bhandarwada",
    "source": "Borewell",
    "icon": "\u26cf\ufe0f",
    "date": "2026-07-16",
    "tds": 476.0,
    "ph": 7.31,
    "turb": 3.26,
    "hard": 249.0,
    "ec": 953.0,
    "lat": 19.789861,
    "lon": 72.760984,
    "x": 640,
    "y": 366
  },
  {
    "id": "JLC-05-007",
    "area": "Bhandarwada",
    "source": "Well",
    "icon": "\ud83e\udea3",
    "date": "2026-07-18",
    "tds": 414.0,
    "ph": 7.74,
    "turb": 2.13,
    "hard": 218.0,
    "ec": 815.0,
    "lat": 19.788942,
    "lon": 72.761521,
    "x": 656,
    "y": 376
  },
  {
    "id": "JLC-05-008",
    "area": "Bhandarwada",
    "source": "Community Tap",
    "icon": "\ud83d\udca7",
    "date": "2026-07-20",
    "tds": 445.0,
    "ph": 7.55,
    "turb": 2.47,
    "hard": 231.0,
    "ec": 879.0,
    "lat": 19.789812,
    "lon": 72.761801,
    "x": 664,
    "y": 366
  },
  {
    "id": "JLC-05-009",
    "area": "Bhandarwada",
    "source": "Municipal Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-22",
    "tds": 498.0,
    "ph": 7.86,
    "turb": 3.61,
    "hard": 267.0,
    "ec": 1004.0,
    "lat": 19.789128,
    "lon": 72.760912,
    "x": 637,
    "y": 374
  },
  {
    "id": "JLC-05-010",
    "area": "Bhandarwada",
    "source": "Borewell",
    "icon": "\u26cf\ufe0f",
    "date": "2026-07-24",
    "tds": 423.0,
    "ph": 7.39,
    "turb": 1.92,
    "hard": 209.0,
    "ec": 836.0,
    "lat": 19.789534,
    "lon": 72.761274,
    "x": 648,
    "y": 370
  },
  {
    "id": "JLC-06-001",
    "area": "Betegaon",
    "source": "Municipal Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-07",
    "tds": 326.0,
    "ph": 7.51,
    "turb": 0.82,
    "hard": 154.0,
    "ec": 641.0,
    "lat": 19.782214,
    "lon": 72.757741,
    "x": 542,
    "y": 454
  },
  {
    "id": "JLC-06-002",
    "area": "Betegaon",
    "source": "Borewell",
    "icon": "\u26cf\ufe0f",
    "date": "2026-07-09",
    "tds": 351.0,
    "ph": 7.63,
    "turb": 1.28,
    "hard": 169.0,
    "ec": 688.0,
    "lat": 19.782741,
    "lon": 72.758214,
    "x": 556,
    "y": 448
  },
  {
    "id": "JLC-06-003",
    "area": "Betegaon",
    "source": "Well",
    "icon": "\ud83e\udea3",
    "date": "2026-07-11",
    "tds": 379.0,
    "ph": 7.72,
    "turb": 1.93,
    "hard": 181.0,
    "ec": 741.0,
    "lat": 19.782462,
    "lon": 72.758491,
    "x": 565,
    "y": 451
  },
  {
    "id": "JLC-06-004",
    "area": "Betegaon",
    "source": "Community Tap",
    "icon": "\ud83d\udca7",
    "date": "2026-07-13",
    "tds": 338.0,
    "ph": 7.59,
    "turb": 0.74,
    "hard": 161.0,
    "ec": 663.0,
    "lat": 19.783021,
    "lon": 72.757882,
    "x": 546,
    "y": 445
  },
  {
    "id": "JLC-06-005",
    "area": "Betegaon",
    "source": "Municipal Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-15",
    "tds": 365.0,
    "ph": 7.68,
    "turb": 1.17,
    "hard": 174.0,
    "ec": 716.0,
    "lat": 19.782573,
    "lon": 72.758263,
    "x": 558,
    "y": 450
  },
  {
    "id": "JLC-06-006",
    "area": "Betegaon",
    "source": "Borewell",
    "icon": "\u26cf\ufe0f",
    "date": "2026-07-17",
    "tds": 402.0,
    "ph": 7.42,
    "turb": 2.31,
    "hard": 198.0,
    "ec": 789.0,
    "lat": 19.782861,
    "lon": 72.757504,
    "x": 535,
    "y": 447
  },
  {
    "id": "JLC-06-007",
    "area": "Betegaon",
    "source": "Well",
    "icon": "\ud83e\udea3",
    "date": "2026-07-19",
    "tds": 347.0,
    "ph": 7.79,
    "turb": 1.04,
    "hard": 166.0,
    "ec": 681.0,
    "lat": 19.781942,
    "lon": 72.758041,
    "x": 551,
    "y": 458
  },
  {
    "id": "JLC-06-008",
    "area": "Betegaon",
    "source": "Community Tap",
    "icon": "\ud83d\udca7",
    "date": "2026-07-21",
    "tds": 372.0,
    "ph": 7.61,
    "turb": 1.52,
    "hard": 179.0,
    "ec": 729.0,
    "lat": 19.782812,
    "lon": 72.758324,
    "x": 560,
    "y": 447
  },
  {
    "id": "JLC-06-009",
    "area": "Betegaon",
    "source": "Municipal Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-23",
    "tds": 418.0,
    "ph": 7.87,
    "turb": 2.67,
    "hard": 211.0,
    "ec": 823.0,
    "lat": 19.782128,
    "lon": 72.757412,
    "x": 532,
    "y": 455
  },
  {
    "id": "JLC-06-010",
    "area": "Betegaon",
    "source": "Borewell",
    "icon": "\u26cf\ufe0f",
    "date": "2026-07-25",
    "tds": 356.0,
    "ph": 7.55,
    "turb": 1.36,
    "hard": 171.0,
    "ec": 702.0,
    "lat": 19.782534,
    "lon": 72.757974,
    "x": 549,
    "y": 451
  },
  {
    "id": "JLC-07-001",
    "area": "Awadh Nagar",
    "source": "Municipal Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-08",
    "tds": 352.0,
    "ph": 7.42,
    "turb": 1.21,
    "hard": 176.0,
    "ec": 692.0,
    "lat": 19.7918,
    "lon": 72.755,
    "x": 460,
    "y": 343
  },
  {
    "id": "JLC-07-002",
    "area": "Awadh Nagar",
    "source": "Borewell",
    "icon": "\u26cf\ufe0f",
    "date": "2026-07-10",
    "tds": 418.0,
    "ph": 7.61,
    "turb": 1.84,
    "hard": 201.0,
    "ec": 814.0,
    "lat": 19.7924,
    "lon": 72.7543,
    "x": 439,
    "y": 336
  },
  {
    "id": "JLC-07-003",
    "area": "Awadh Nagar",
    "source": "Well",
    "icon": "\ud83e\udea3",
    "date": "2026-07-12",
    "tds": 389.0,
    "ph": 7.18,
    "turb": 2.11,
    "hard": 214.0,
    "ec": 756.0,
    "lat": 19.7912,
    "lon": 72.7558,
    "x": 484,
    "y": 350
  },
  {
    "id": "JLC-07-004",
    "area": "Awadh Nagar",
    "source": "Community Tap",
    "icon": "\ud83d\udca7",
    "date": "2026-07-14",
    "tds": 431.0,
    "ph": 7.76,
    "turb": 1.45,
    "hard": 188.0,
    "ec": 875.0,
    "lat": 19.7926,
    "lon": 72.7561,
    "x": 493,
    "y": 334
  },
  {
    "id": "JLC-07-005",
    "area": "Awadh Nagar",
    "source": "Municipal Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-16",
    "tds": 365.0,
    "ph": 7.35,
    "turb": 0.92,
    "hard": 165.0,
    "ec": 704.0,
    "lat": 19.7909,
    "lon": 72.7547,
    "x": 451,
    "y": 354
  },
  {
    "id": "JLC-07-006",
    "area": "Awadh Nagar",
    "source": "Borewell",
    "icon": "\u26cf\ufe0f",
    "date": "2026-07-18",
    "tds": 447.0,
    "ph": 7.89,
    "turb": 2.36,
    "hard": 229.0,
    "ec": 921.0,
    "lat": 19.792,
    "lon": 72.7539,
    "x": 427,
    "y": 341
  },
  {
    "id": "JLC-07-007",
    "area": "Awadh Nagar",
    "source": "Well",
    "icon": "\ud83e\udea3",
    "date": "2026-07-20",
    "tds": 401.0,
    "ph": 7.27,
    "turb": 3.02,
    "hard": 217.0,
    "ec": 783.0,
    "lat": 19.7915,
    "lon": 72.7563,
    "x": 499,
    "y": 347
  },
  {
    "id": "JLC-07-008",
    "area": "Awadh Nagar",
    "source": "Community Tap",
    "icon": "\ud83d\udca7",
    "date": "2026-07-22",
    "tds": 338.0,
    "ph": 7.68,
    "turb": 1.08,
    "hard": 158.0,
    "ec": 651.0,
    "lat": 19.793,
    "lon": 72.7552,
    "x": 466,
    "y": 329
  },
  {
    "id": "JLC-07-009",
    "area": "Awadh Nagar",
    "source": "Municipal Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-24",
    "tds": 374.0,
    "ph": 7.54,
    "turb": 1.67,
    "hard": 183.0,
    "ec": 729.0,
    "lat": 19.7907,
    "lon": 72.7541,
    "x": 433,
    "y": 356
  },
  {
    "id": "JLC-07-010",
    "area": "Awadh Nagar",
    "source": "Borewell",
    "icon": "\u26cf\ufe0f",
    "date": "2026-07-26",
    "tds": 465.0,
    "ph": 8.02,
    "turb": 2.74,
    "hard": 241.0,
    "ec": 948.0,
    "lat": 19.7923,
    "lon": 72.7566,
    "x": 508,
    "y": 338
  },
  {
    "id": "JLC-08-001",
    "area": "Pam",
    "source": "Municipal Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-09",
    "tds": 421.0,
    "ph": 7.31,
    "turb": 1.32,
    "hard": 198.0,
    "ec": 822.0,
    "lat": 19.807,
    "lon": 72.7445,
    "x": 145,
    "y": 167
  },
  {
    "id": "JLC-08-002",
    "area": "Pam",
    "source": "Borewell",
    "icon": "\u26cf\ufe0f",
    "date": "2026-07-11",
    "tds": 476.0,
    "ph": 7.65,
    "turb": 2.18,
    "hard": 225.0,
    "ec": 935.0,
    "lat": 19.8064,
    "lon": 72.7452,
    "x": 166,
    "y": 174
  },
  {
    "id": "JLC-08-003",
    "area": "Pam",
    "source": "Well",
    "icon": "\ud83e\udea3",
    "date": "2026-07-13",
    "tds": 438.0,
    "ph": 7.12,
    "turb": 2.83,
    "hard": 237.0,
    "ec": 861.0,
    "lat": 19.8076,
    "lon": 72.7439,
    "x": 127,
    "y": 160
  },
  {
    "id": "JLC-08-004",
    "area": "Pam",
    "source": "Community Tap",
    "icon": "\ud83d\udca7",
    "date": "2026-07-15",
    "tds": 391.0,
    "ph": 7.74,
    "turb": 1.16,
    "hard": 184.0,
    "ec": 759.0,
    "lat": 19.8081,
    "lon": 72.7447,
    "x": 151,
    "y": 155
  },
  {
    "id": "JLC-08-005",
    "area": "Pam",
    "source": "Municipal Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-17",
    "tds": 452.0,
    "ph": 7.48,
    "turb": 1.95,
    "hard": 211.0,
    "ec": 884.0,
    "lat": 19.8068,
    "lon": 72.7438,
    "x": 124,
    "y": 170
  },
  {
    "id": "JLC-08-006",
    "area": "Pam",
    "source": "Borewell",
    "icon": "\u26cf\ufe0f",
    "date": "2026-07-19",
    "tds": 501.0,
    "ph": 7.91,
    "turb": 3.11,
    "hard": 254.0,
    "ec": 1017.0,
    "lat": 19.8073,
    "lon": 72.7456,
    "x": 178,
    "y": 164
  },
  {
    "id": "JLC-08-007",
    "area": "Pam",
    "source": "Well",
    "icon": "\ud83e\udea3",
    "date": "2026-07-21",
    "tds": 414.0,
    "ph": 7.22,
    "turb": 2.47,
    "hard": 221.0,
    "ec": 797.0,
    "lat": 19.8059,
    "lon": 72.7441,
    "x": 133,
    "y": 180
  },
  {
    "id": "JLC-08-008",
    "area": "Pam",
    "source": "Community Tap",
    "icon": "\ud83d\udca7",
    "date": "2026-07-23",
    "tds": 369.0,
    "ph": 7.59,
    "turb": 0.88,
    "hard": 172.0,
    "ec": 712.0,
    "lat": 19.8084,
    "lon": 72.745,
    "x": 160,
    "y": 151
  },
  {
    "id": "JLC-08-009",
    "area": "Pam",
    "source": "Municipal Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-25",
    "tds": 445.0,
    "ph": 7.36,
    "turb": 1.71,
    "hard": 206.0,
    "ec": 856.0,
    "lat": 19.8065,
    "lon": 72.7436,
    "x": 118,
    "y": 173
  },
  {
    "id": "JLC-08-010",
    "area": "Pam",
    "source": "Borewell",
    "icon": "\u26cf\ufe0f",
    "date": "2026-07-27",
    "tds": 523.0,
    "ph": 8.08,
    "turb": 3.42,
    "hard": 267.0,
    "ec": 1061.0,
    "lat": 19.8078,
    "lon": 72.7458,
    "x": 184,
    "y": 158
  },
  {
    "id": "JLC-09-001",
    "area": "Ganesh Nagar",
    "source": "Municipal Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-10",
    "tds": 384.0,
    "ph": 7.44,
    "turb": 1.09,
    "hard": 181.0,
    "ec": 752.0,
    "lat": 19.8145,
    "lon": 72.7515,
    "x": 355,
    "y": 81
  },
  {
    "id": "JLC-09-002",
    "area": "Ganesh Nagar",
    "source": "Borewell",
    "icon": "\u26cf\ufe0f",
    "date": "2026-07-12",
    "tds": 429.0,
    "ph": 7.73,
    "turb": 1.86,
    "hard": 207.0,
    "ec": 841.0,
    "lat": 19.8152,
    "lon": 72.7509,
    "x": 337,
    "y": 72
  },
  {
    "id": "JLC-09-003",
    "area": "Ganesh Nagar",
    "source": "Well",
    "icon": "\ud83e\udea3",
    "date": "2026-07-14",
    "tds": 463.0,
    "ph": 7.21,
    "turb": 2.64,
    "hard": 231.0,
    "ec": 903.0,
    "lat": 19.8138,
    "lon": 72.7521,
    "x": 373,
    "y": 89
  },
  {
    "id": "JLC-09-004",
    "area": "Ganesh Nagar",
    "source": "Community Tap",
    "icon": "\ud83d\udca7",
    "date": "2026-07-16",
    "tds": 351.0,
    "ph": 7.69,
    "turb": 1.24,
    "hard": 169.0,
    "ec": 682.0,
    "lat": 19.8149,
    "lon": 72.7524,
    "x": 382,
    "y": 76
  },
  {
    "id": "JLC-09-005",
    "area": "Ganesh Nagar",
    "source": "Municipal Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-18",
    "tds": 405.0,
    "ph": 7.38,
    "turb": 1.58,
    "hard": 192.0,
    "ec": 789.0,
    "lat": 19.8137,
    "lon": 72.7507,
    "x": 331,
    "y": 90
  },
  {
    "id": "JLC-09-006",
    "area": "Ganesh Nagar",
    "source": "Borewell",
    "icon": "\u26cf\ufe0f",
    "date": "2026-07-20",
    "tds": 482.0,
    "ph": 7.86,
    "turb": 2.91,
    "hard": 248.0,
    "ec": 976.0,
    "lat": 19.8155,
    "lon": 72.7517,
    "x": 361,
    "y": 69
  },
  {
    "id": "JLC-09-007",
    "area": "Ganesh Nagar",
    "source": "Well",
    "icon": "\ud83e\udea3",
    "date": "2026-07-22",
    "tds": 447.0,
    "ph": 7.16,
    "turb": 3.27,
    "hard": 239.0,
    "ec": 871.0,
    "lat": 19.8141,
    "lon": 72.7508,
    "x": 334,
    "y": 85
  },
  {
    "id": "JLC-09-008",
    "area": "Ganesh Nagar",
    "source": "Community Tap",
    "icon": "\ud83d\udca7",
    "date": "2026-07-24",
    "tds": 373.0,
    "ph": 7.58,
    "turb": 0.76,
    "hard": 175.0,
    "ec": 721.0,
    "lat": 19.815,
    "lon": 72.7528,
    "x": 394,
    "y": 75
  },
  {
    "id": "JLC-09-009",
    "area": "Ganesh Nagar",
    "source": "Municipal Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-26",
    "tds": 396.0,
    "ph": 7.51,
    "turb": 1.43,
    "hard": 187.0,
    "ec": 768.0,
    "lat": 19.8135,
    "lon": 72.7512,
    "x": 346,
    "y": 92
  },
  {
    "id": "JLC-09-010",
    "area": "Ganesh Nagar",
    "source": "Borewell",
    "icon": "\u26cf\ufe0f",
    "date": "2026-07-28",
    "tds": 508.0,
    "ph": 8.01,
    "turb": 3.18,
    "hard": 260.0,
    "ec": 1034.0,
    "lat": 19.8157,
    "lon": 72.752,
    "x": 370,
    "y": 67
  },
  {
    "id": "JLC-10-001",
    "area": "Yadav Nagar",
    "source": "Municipal Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-11",
    "tds": 371.0,
    "ph": 7.47,
    "turb": 1.14,
    "hard": 178.0,
    "ec": 724.0,
    "lat": 19.8045,
    "lon": 72.7585,
    "x": 565,
    "y": 196
  },
  {
    "id": "JLC-10-002",
    "area": "Yadav Nagar",
    "source": "Borewell",
    "icon": "\u26cf\ufe0f",
    "date": "2026-07-13",
    "tds": 418.0,
    "ph": 7.69,
    "turb": 2.01,
    "hard": 203.0,
    "ec": 823.0,
    "lat": 19.8052,
    "lon": 72.7578,
    "x": 544,
    "y": 188
  },
  {
    "id": "JLC-10-003",
    "area": "Yadav Nagar",
    "source": "Well",
    "icon": "\ud83e\udea3",
    "date": "2026-07-15",
    "tds": 455.0,
    "ph": 7.25,
    "turb": 2.72,
    "hard": 226.0,
    "ec": 895.0,
    "lat": 19.8038,
    "lon": 72.7591,
    "x": 583,
    "y": 204
  },
  {
    "id": "JLC-10-004",
    "area": "Yadav Nagar",
    "source": "Community Tap",
    "icon": "\ud83d\udca7",
    "date": "2026-07-17",
    "tds": 342.0,
    "ph": 7.71,
    "turb": 0.98,
    "hard": 162.0,
    "ec": 665.0,
    "lat": 19.8049,
    "lon": 72.7594,
    "x": 592,
    "y": 192
  },
  {
    "id": "JLC-10-005",
    "area": "Yadav Nagar",
    "source": "Municipal Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-19",
    "tds": 397.0,
    "ph": 7.41,
    "turb": 1.51,
    "hard": 190.0,
    "ec": 774.0,
    "lat": 19.8037,
    "lon": 72.7577,
    "x": 541,
    "y": 206
  },
  {
    "id": "JLC-10-006",
    "area": "Yadav Nagar",
    "source": "Borewell",
    "icon": "\u26cf\ufe0f",
    "date": "2026-07-21",
    "tds": 471.0,
    "ph": 7.84,
    "turb": 2.88,
    "hard": 242.0,
    "ec": 954.0,
    "lat": 19.8055,
    "lon": 72.7587,
    "x": 571,
    "y": 185
  },
  {
    "id": "JLC-10-007",
    "area": "Yadav Nagar",
    "source": "Well",
    "icon": "\ud83e\udea3",
    "date": "2026-07-23",
    "tds": 433.0,
    "ph": 7.19,
    "turb": 3.05,
    "hard": 218.0,
    "ec": 846.0,
    "lat": 19.8041,
    "lon": 72.7576,
    "x": 538,
    "y": 201
  },
  {
    "id": "JLC-10-008",
    "area": "Yadav Nagar",
    "source": "Community Tap",
    "icon": "\ud83d\udca7",
    "date": "2026-07-25",
    "tds": 359.0,
    "ph": 7.63,
    "turb": 0.82,
    "hard": 171.0,
    "ec": 694.0,
    "lat": 19.805,
    "lon": 72.7598,
    "x": 604,
    "y": 191
  },
  {
    "id": "JLC-10-009",
    "area": "Yadav Nagar",
    "source": "Municipal Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-27",
    "tds": 389.0,
    "ph": 7.55,
    "turb": 1.38,
    "hard": 185.0,
    "ec": 755.0,
    "lat": 19.8035,
    "lon": 72.7582,
    "x": 556,
    "y": 208
  },
  {
    "id": "JLC-10-010",
    "area": "Yadav Nagar",
    "source": "Borewell",
    "icon": "\u26cf\ufe0f",
    "date": "2026-07-29",
    "tds": 496.0,
    "ph": 7.97,
    "turb": 3.36,
    "hard": 255.0,
    "ec": 1007.0,
    "lat": 19.8057,
    "lon": 72.759,
    "x": 580,
    "y": 182
  },
  {
    "id": "JLC-11-001",
    "area": "Azad Nagar",
    "source": "Municipal Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-12",
    "tds": 365.0,
    "ph": 7.39,
    "turb": 1.18,
    "hard": 174.0,
    "ec": 711.0,
    "lat": 19.789,
    "lon": 72.749,
    "x": 280,
    "y": 376
  },
  {
    "id": "JLC-11-002",
    "area": "Azad Nagar",
    "source": "Borewell",
    "icon": "\u26cf\ufe0f",
    "date": "2026-07-14",
    "tds": 422.0,
    "ph": 7.67,
    "turb": 1.92,
    "hard": 209.0,
    "ec": 831.0,
    "lat": 19.7897,
    "lon": 72.7483,
    "x": 259,
    "y": 368
  },
  {
    "id": "JLC-11-003",
    "area": "Azad Nagar",
    "source": "Well",
    "icon": "\ud83e\udea3",
    "date": "2026-07-16",
    "tds": 451.0,
    "ph": 7.15,
    "turb": 2.55,
    "hard": 228.0,
    "ec": 884.0,
    "lat": 19.7883,
    "lon": 72.7496,
    "x": 298,
    "y": 384
  },
  {
    "id": "JLC-11-004",
    "area": "Azad Nagar",
    "source": "Community Tap",
    "icon": "\ud83d\udca7",
    "date": "2026-07-18",
    "tds": 337.0,
    "ph": 7.72,
    "turb": 0.91,
    "hard": 160.0,
    "ec": 653.0,
    "lat": 19.7894,
    "lon": 72.7499,
    "x": 307,
    "y": 371
  },
  {
    "id": "JLC-11-005",
    "area": "Azad Nagar",
    "source": "Municipal Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-20",
    "tds": 392.0,
    "ph": 7.46,
    "turb": 1.47,
    "hard": 186.0,
    "ec": 768.0,
    "lat": 19.7882,
    "lon": 72.7482,
    "x": 256,
    "y": 385
  },
  {
    "id": "JLC-11-006",
    "area": "Azad Nagar",
    "source": "Borewell",
    "icon": "\u26cf\ufe0f",
    "date": "2026-07-22",
    "tds": 478.0,
    "ph": 7.88,
    "turb": 2.79,
    "hard": 246.0,
    "ec": 973.0,
    "lat": 19.79,
    "lon": 72.7492,
    "x": 286,
    "y": 364
  },
  {
    "id": "JLC-11-007",
    "area": "Azad Nagar",
    "source": "Well",
    "icon": "\ud83e\udea3",
    "date": "2026-07-24",
    "tds": 427.0,
    "ph": 7.23,
    "turb": 3.14,
    "hard": 216.0,
    "ec": 832.0,
    "lat": 19.7886,
    "lon": 72.7481,
    "x": 253,
    "y": 380
  },
  {
    "id": "JLC-11-008",
    "area": "Azad Nagar",
    "source": "Community Tap",
    "icon": "\ud83d\udca7",
    "date": "2026-07-26",
    "tds": 354.0,
    "ph": 7.61,
    "turb": 0.73,
    "hard": 168.0,
    "ec": 684.0,
    "lat": 19.7895,
    "lon": 72.7503,
    "x": 319,
    "y": 370
  },
  {
    "id": "JLC-11-009",
    "area": "Azad Nagar",
    "source": "Municipal Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-28",
    "tds": 381.0,
    "ph": 7.52,
    "turb": 1.35,
    "hard": 179.0,
    "ec": 742.0,
    "lat": 19.788,
    "lon": 72.7488,
    "x": 274,
    "y": 387
  },
  {
    "id": "JLC-11-010",
    "area": "Azad Nagar",
    "source": "Borewell",
    "icon": "\u26cf\ufe0f",
    "date": "2026-07-30",
    "tds": 509.0,
    "ph": 8.04,
    "turb": 3.29,
    "hard": 258.0,
    "ec": 1040.0,
    "lat": 19.7902,
    "lon": 72.7498,
    "x": 304,
    "y": 362
  }
],
  selectedAreaIndex: 0,
  viewMode: 'areas',

  init() {
    this.selectArea(0);
    this.renderMap();
  },

  setViewMode(mode) {
    this.viewMode = mode;
    this.renderMap();
    const btnA = document.getElementById('btn-view-areas');
    const btnS = document.getElementById('btn-view-samples');
    if (btnA) btnA.className = mode === 'areas' ? 'px-2.5 py-1 rounded bg-cyan-600 text-white font-semibold text-xs' : 'px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs hover:bg-slate-700';
    if (btnS) btnS.className = mode === 'samples' ? 'px-2.5 py-1 rounded bg-cyan-600 text-white font-semibold text-xs' : 'px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs hover:bg-slate-700';
  },

  renderMap() {
    const svgLayer = document.getElementById('map-pins-layer');
    if (!svgLayer) return;

    let pinsHtml = '';
    if (this.viewMode === 'areas') {
      this.areas.forEach((a, i) => {
        const isSelected = (i === this.selectedAreaIndex);
        const pinColor = a.color === 'emerald' ? '#10b981' : (a.color === 'amber' ? '#f59e0b' : '#f43f5e');
        pinsHtml += `
          <g class="map-pin cursor-pointer" onclick="AreaMap.selectArea(${i})">
            <circle cx="${a.x}" cy="${a.y}" r="${isSelected ? 24 : 18}" fill="${pinColor}" opacity="${isSelected ? 0.35 : 0.2}"/>
            <circle cx="${a.x}" cy="${a.y}" r="${isSelected ? 14 : 11}" fill="${pinColor}" stroke="#ffffff" stroke-width="2"/>
            <text x="${a.x}" y="${a.y + 4}" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">${i + 1}</text>
            <text x="${a.x}" y="${a.y + 24}" fill="${isSelected ? '#38bdf8' : '#e2e8f0'}" font-size="10" font-weight="${isSelected ? 'bold' : 'normal'}" text-anchor="middle">${a.name}</text>
            <text x="${a.x}" y="${a.y + 36}" fill="#94a3b8" font-size="8.5" text-anchor="middle">TDS ${a.tds.avg} • ${a.ward}</text>
          </g>
        `;
      });
    } else {
      this.samples.forEach((s) => {
        const pinColor = s.tds > 500 ? '#f43f5e' : (s.tds > 400 ? '#f59e0b' : '#10b981');
        pinsHtml += `
          <g class="map-pin cursor-pointer group" onclick="AreaMap.inspectSample('${s.id}')">
            <circle cx="${s.x}" cy="${s.y}" r="7" fill="${pinColor}" stroke="#ffffff" stroke-width="1.5"/>
            <title>${s.id} - ${s.area} (${s.source})\nTDS: ${s.tds} mg/L, pH: ${s.ph}, Turb: ${s.turb} NTU</title>
          </g>
        `;
      });
    }

    svgLayer.innerHTML = pinsHtml;
  },

  selectArea(index) {
    this.selectedAreaIndex = index;
    const a = this.areas[index];
    if (!a) return;

    this.renderMap();

    const idEl = document.getElementById('map-card-id');
    if (idEl) idEl.textContent = `${a.ward.toUpperCase()} SELECTED (${a.samples} SAMPLES)`;
    
    const nameEl = document.getElementById('map-card-name');
    if (nameEl) nameEl.textContent = a.name;

    const srcEl = document.getElementById('map-card-source');
    if (srcEl) srcEl.textContent = `Sources: ${a.sources}`;

    const tag = document.getElementById('map-card-status');
    if (tag) {
      tag.textContent = a.status;
      if (a.color === 'emerald') {
        tag.className = 'px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800';
      } else if (a.color === 'amber') {
        tag.className = 'px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-950 text-amber-300 border border-amber-800';
      } else {
        tag.className = 'px-2 py-0.5 rounded text-[11px] font-semibold bg-rose-950 text-rose-300 border border-rose-800';
      }
    }

    const tdsEl = document.getElementById('map-card-tds');
    if (tdsEl) tdsEl.textContent = `${a.tds.avg} mg/L`;

    const phEl = document.getElementById('map-card-ph');
    if (phEl) phEl.textContent = `${a.ph.avg}`;

    const hardEl = document.getElementById('map-card-hard');
    if (hardEl) hardEl.textContent = `${a.hard.avg} mg/L`;

    const turbEl = document.getElementById('map-card-turb');
    if (turbEl) turbEl.textContent = `${a.turb.avg} NTU`;

    const obsEl = document.getElementById('map-card-obs');
    if (obsEl) obsEl.textContent = a.obs;

    this.explainArea(a);
  },

  inspectSample(sampleId) {
    const s = this.samples.find(item => item.id === sampleId);
    if (!s) return;
    const msg = `Sample ${s.id} in ${s.area} (${s.source}): TDS is ${s.tds} mg/L, pH is ${s.ph}, Turbidity is ${s.turb} NTU, and Hardness is ${s.hard} mg/L.`;
    ProfessorAqua.setExplanation(msg, s.tds > 500 ? 'attention' : 'explaining', 'FIELD SAMPLE');
  },

  explainArea(a) {
    const text = `In ${a.name} (${a.ward}), our dataset includes 10 certified sampling sites across Municipal Taps, Borewells, Wells, and Community Taps. Average TDS is ${a.tds.avg} mg/L, with a peak of ${a.tds.max} mg/L. ${a.obs} ${a.rec}`;
    ProfessorAqua.setExplanation(text, a.color === 'rose' ? 'attention' : 'explaining', 'WARD PROFILE');
  }
};
