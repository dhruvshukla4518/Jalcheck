/**
 * Interactive Study Area & Sample Map Component
 * Accurately calibrated to real Boisar/Palghar coordinates (11 Areas, 110 Certified Samples)
 */
const AreaMap = {
  areas: [
  {
    "id": 1,
    "name": "Shivaji Nagar",
    "ward": "Ward 1",
    "x": 562.2,
    "y": 237.6,
    "lat": 19.804566,
    "lon": 72.753556,
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
    "obs": "Tested across 10 certified sites. Average TDS is 385.6 mg/L (max 433.0), pH is 7.51, Turbidity is 1.67 NTU.",
    "rec": "Routine boiling or candle filtration recommended."
  },
  {
    "id": 2,
    "name": "Salwad",
    "ward": "Ward 2",
    "x": 149.8,
    "y": 334.5,
    "lat": 19.79597,
    "lon": 72.73759,
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
    "color": "cyan",
    "obs": "Tested across 10 certified sites. Average TDS is 412.3 mg/L (max 463.0), pH is 7.54, Turbidity is 1.93 NTU.",
    "rec": "Routine boiling or candle filtration recommended."
  },
  {
    "id": 3,
    "name": "Katkar",
    "ward": "Ward 3",
    "x": 139.5,
    "y": 110.5,
    "lat": 19.81585,
    "lon": 72.73719,
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
    "status": "Peak TDS 503.0 mg/L",
    "color": "amber",
    "obs": "Tested across 10 certified sites. Average TDS is 446.3 mg/L (max 503.0), pH is 7.55, Turbidity is 2.23 NTU.",
    "rec": "Dual-stage filtration or RO recommended for high TDS borewell points."
  },
  {
    "id": 4,
    "name": "Mahavir Nagar",
    "ward": "Ward 4",
    "x": 578.2,
    "y": 331.8,
    "lat": 19.796214,
    "lon": 72.754173,
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
    "obs": "Tested across 10 certified sites. Average TDS is 397.0 mg/L (max 451.0), pH is 7.59, Turbidity is 1.74 NTU.",
    "rec": "Routine boiling or candle filtration recommended."
  },
  {
    "id": 5,
    "name": "Bhandarwada",
    "ward": "Ward 5",
    "x": 760.5,
    "y": 410.6,
    "lat": 19.789214,
    "lon": 72.761231,
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
    "status": "Good Drinking Quality",
    "color": "cyan",
    "obs": "Tested across 10 certified sites. Average TDS is 433.3 mg/L (max 498.0), pH is 7.52, Turbidity is 2.26 NTU.",
    "rec": "Routine boiling or candle filtration recommended."
  },
  {
    "id": 6,
    "name": "Betegaon",
    "ward": "Ward 6",
    "x": 670.3,
    "y": 489.5,
    "lat": 19.782214,
    "lon": 72.757741,
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
    "obs": "Tested across 10 certified sites. Average TDS is 365.4 mg/L (max 418.0), pH is 7.64, Turbidity is 1.48 NTU.",
    "rec": "Routine boiling or candle filtration recommended."
  },
  {
    "id": 7,
    "name": "Awadh Nagar",
    "ward": "Ward 7",
    "x": 599.5,
    "y": 381.5,
    "lat": 19.7918,
    "lon": 72.755,
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
    "obs": "Tested across 10 certified sites. Average TDS is 398.0 mg/L (max 465.0), pH is 7.57, Turbidity is 1.84 NTU.",
    "rec": "Routine boiling or candle filtration recommended."
  },
  {
    "id": 8,
    "name": "Pam",
    "ward": "Ward 8",
    "x": 328.3,
    "y": 210.2,
    "lat": 19.807,
    "lon": 72.7445,
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
    "status": "Peak TDS 523.0 mg/L",
    "color": "amber",
    "obs": "Tested across 10 certified sites. Average TDS is 443.0 mg/L (max 523.0), pH is 7.55, Turbidity is 2.1 NTU.",
    "rec": "Dual-stage filtration or RO recommended for high TDS borewell points."
  },
  {
    "id": 9,
    "name": "Ganesh Nagar",
    "ward": "Ward 9",
    "x": 509.1,
    "y": 125.7,
    "lat": 19.8145,
    "lon": 72.7515,
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
    "status": "Peak TDS 508.0 mg/L",
    "color": "amber",
    "obs": "Tested across 10 certified sites. Average TDS is 423.8 mg/L (max 508.0), pH is 7.56, Turbidity is 2.0 NTU.",
    "rec": "Dual-stage filtration or RO recommended for high TDS borewell points."
  },
  {
    "id": 10,
    "name": "Yadav Nagar",
    "ward": "Ward 10",
    "x": 689.9,
    "y": 238.4,
    "lat": 19.8045,
    "lon": 72.7585,
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
    "color": "cyan",
    "obs": "Tested across 10 certified sites. Average TDS is 413.1 mg/L (max 496.0), pH is 7.57, Turbidity is 1.98 NTU.",
    "rec": "Routine boiling or candle filtration recommended."
  },
  {
    "id": 11,
    "name": "Azad Nagar",
    "ward": "Ward 11",
    "x": 444.6,
    "y": 413.0,
    "lat": 19.789,
    "lon": 72.749,
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
    "status": "Peak TDS 509.0 mg/L",
    "color": "amber",
    "obs": "Tested across 10 certified sites. Average TDS is 411.6 mg/L (max 509.0), pH is 7.57, Turbidity is 1.93 NTU.",
    "rec": "Dual-stage filtration or RO recommended for high TDS borewell points."
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
    "lat": 19.804566,
    "lon": 72.753556,
    "x": 586.2,
    "y": 237.6
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
    "lat": 19.804566,
    "lon": 72.753556,
    "x": 576.8,
    "y": 248.2
  },
  {
    "id": "JLC-01-003",
    "area": "Shivaji Nagar",
    "source": "Well",
    "icon": "\ud83c\udffa",
    "date": "2026-07-07",
    "tds": 401.0,
    "ph": 7.62,
    "turb": 2.14,
    "hard": 205.0,
    "ec": 811.0,
    "lat": 19.804566,
    "lon": 72.753556,
    "x": 569.6,
    "y": 260.4
  },
  {
    "id": "JLC-01-004",
    "area": "Shivaji Nagar",
    "source": "Community Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-09",
    "tds": 356.0,
    "ph": 7.44,
    "turb": 0.91,
    "hard": 176.0,
    "ec": 701.0,
    "lat": 19.804566,
    "lon": 72.753556,
    "x": 556.6,
    "y": 254.7
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
    "lat": 19.804566,
    "lon": 72.753556,
    "x": 542.8,
    "y": 251.7
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
    "lat": 19.804566,
    "lon": 72.753556,
    "x": 544.2,
    "y": 237.6
  },
  {
    "id": "JLC-01-007",
    "area": "Shivaji Nagar",
    "source": "Well",
    "icon": "\ud83c\udffa",
    "date": "2026-07-15",
    "tds": 365.0,
    "ph": 7.69,
    "turb": 1.08,
    "hard": 171.0,
    "ec": 723.0,
    "lat": 19.804566,
    "lon": 72.753556,
    "x": 542.8,
    "y": 223.5
  },
  {
    "id": "JLC-01-008",
    "area": "Shivaji Nagar",
    "source": "Community Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-17",
    "tds": 397.0,
    "ph": 7.52,
    "turb": 1.67,
    "hard": 187.0,
    "ec": 789.0,
    "lat": 19.804566,
    "lon": 72.753556,
    "x": 556.6,
    "y": 220.5
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
    "lat": 19.804566,
    "lon": 72.753556,
    "x": 569.6,
    "y": 214.8
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
    "lat": 19.804566,
    "lon": 72.753556,
    "x": 576.8,
    "y": 227.0
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
    "lat": 19.79597,
    "lon": 72.73759,
    "x": 173.8,
    "y": 334.5
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
    "lat": 19.79597,
    "lon": 72.73759,
    "x": 164.4,
    "y": 345.1
  },
  {
    "id": "JLC-02-003",
    "area": "Salwad",
    "source": "Well",
    "icon": "\ud83c\udffa",
    "date": "2026-07-27",
    "tds": 439.0,
    "ph": 7.66,
    "turb": 2.37,
    "hard": 219.0,
    "ec": 867.0,
    "lat": 19.79597,
    "lon": 72.73759,
    "x": 157.2,
    "y": 357.3
  },
  {
    "id": "JLC-02-004",
    "area": "Salwad",
    "source": "Community Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-29",
    "tds": 382.0,
    "ph": 7.47,
    "turb": 1.21,
    "hard": 188.0,
    "ec": 756.0,
    "lat": 19.79597,
    "lon": 72.73759,
    "x": 144.2,
    "y": 351.6
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
    "lat": 19.79597,
    "lon": 72.73759,
    "x": 130.4,
    "y": 348.6
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
    "lat": 19.79597,
    "lon": 72.73759,
    "x": 131.8,
    "y": 334.5
  },
  {
    "id": "JLC-02-007",
    "area": "Salwad",
    "source": "Well",
    "icon": "\ud83c\udffa",
    "date": "2026-08-04",
    "tds": 397.0,
    "ph": 7.71,
    "turb": 1.46,
    "hard": 207.0,
    "ec": 821.0,
    "lat": 19.79597,
    "lon": 72.73759,
    "x": 130.4,
    "y": 320.4
  },
  {
    "id": "JLC-02-008",
    "area": "Salwad",
    "source": "Community Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-08-06",
    "tds": 421.0,
    "ph": 7.54,
    "turb": 2.02,
    "hard": 214.0,
    "ec": 846.0,
    "lat": 19.79597,
    "lon": 72.73759,
    "x": 144.2,
    "y": 317.4
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
    "lat": 19.79597,
    "lon": 72.73759,
    "x": 157.2,
    "y": 311.7
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
    "lat": 19.79597,
    "lon": 72.73759,
    "x": 164.4,
    "y": 323.9
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
    "lat": 19.81585,
    "lon": 72.73719,
    "x": 163.5,
    "y": 110.5
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
    "lat": 19.81585,
    "lon": 72.73719,
    "x": 154.1,
    "y": 121.1
  },
  {
    "id": "JLC-03-003",
    "area": "Katkar",
    "source": "Well",
    "icon": "\ud83c\udffa",
    "date": "2026-07-08",
    "tds": 468.0,
    "ph": 7.61,
    "turb": 2.73,
    "hard": 236.0,
    "ec": 923.0,
    "lat": 19.81585,
    "lon": 72.73719,
    "x": 146.9,
    "y": 133.3
  },
  {
    "id": "JLC-03-004",
    "area": "Katkar",
    "source": "Community Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-10",
    "tds": 415.0,
    "ph": 7.52,
    "turb": 1.24,
    "hard": 207.0,
    "ec": 824.0,
    "lat": 19.81585,
    "lon": 72.73719,
    "x": 133.9,
    "y": 127.6
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
    "lat": 19.81585,
    "lon": 72.73719,
    "x": 120.1,
    "y": 124.6
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
    "lat": 19.81585,
    "lon": 72.73719,
    "x": 121.5,
    "y": 110.5
  },
  {
    "id": "JLC-03-007",
    "area": "Katkar",
    "source": "Well",
    "icon": "\ud83c\udffa",
    "date": "2026-07-16",
    "tds": 421.0,
    "ph": 7.73,
    "turb": 1.68,
    "hard": 216.0,
    "ec": 838.0,
    "lat": 19.81585,
    "lon": 72.73719,
    "x": 120.1,
    "y": 96.4
  },
  {
    "id": "JLC-03-008",
    "area": "Katkar",
    "source": "Community Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-18",
    "tds": 456.0,
    "ph": 7.57,
    "turb": 2.42,
    "hard": 239.0,
    "ec": 914.0,
    "lat": 19.81585,
    "lon": 72.73719,
    "x": 133.9,
    "y": 93.4
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
    "lat": 19.81585,
    "lon": 72.73719,
    "x": 146.9,
    "y": 87.7
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
    "lat": 19.81585,
    "lon": 72.73719,
    "x": 154.1,
    "y": 99.9
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
    "x": 602.2,
    "y": 331.8
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
    "lat": 19.796214,
    "lon": 72.754173,
    "x": 592.8,
    "y": 342.4
  },
  {
    "id": "JLC-04-003",
    "area": "Mahavir Nagar",
    "source": "Well",
    "icon": "\ud83c\udffa",
    "date": "2026-07-09",
    "tds": 417.0,
    "ph": 7.68,
    "turb": 2.14,
    "hard": 207.0,
    "ec": 817.0,
    "lat": 19.796214,
    "lon": 72.754173,
    "x": 585.6,
    "y": 354.6
  },
  {
    "id": "JLC-04-004",
    "area": "Mahavir Nagar",
    "source": "Community Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-11",
    "tds": 364.0,
    "ph": 7.52,
    "turb": 0.86,
    "hard": 176.0,
    "ec": 713.0,
    "lat": 19.796214,
    "lon": 72.754173,
    "x": 572.6,
    "y": 348.9
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
    "lat": 19.796214,
    "lon": 72.754173,
    "x": 558.8,
    "y": 345.9
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
    "lat": 19.796214,
    "lon": 72.754173,
    "x": 560.2,
    "y": 331.8
  },
  {
    "id": "JLC-04-007",
    "area": "Mahavir Nagar",
    "source": "Well",
    "icon": "\ud83c\udffa",
    "date": "2026-07-17",
    "tds": 407.0,
    "ph": 7.76,
    "turb": 1.55,
    "hard": 203.0,
    "ec": 798.0,
    "lat": 19.796214,
    "lon": 72.754173,
    "x": 558.8,
    "y": 317.7
  },
  {
    "id": "JLC-04-008",
    "area": "Mahavir Nagar",
    "source": "Community Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-19",
    "tds": 376.0,
    "ph": 7.58,
    "turb": 1.19,
    "hard": 182.0,
    "ec": 734.0,
    "lat": 19.796214,
    "lon": 72.754173,
    "x": 572.6,
    "y": 314.7
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
    "lat": 19.796214,
    "lon": 72.754173,
    "x": 585.6,
    "y": 309.0
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
    "lat": 19.796214,
    "lon": 72.754173,
    "x": 592.8,
    "y": 321.2
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
    "x": 784.5,
    "y": 410.6
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
    "lat": 19.789214,
    "lon": 72.761231,
    "x": 775.1,
    "y": 421.2
  },
  {
    "id": "JLC-05-003",
    "area": "Bhandarwada",
    "source": "Well",
    "icon": "\ud83c\udffa",
    "date": "2026-07-10",
    "tds": 452.0,
    "ph": 7.59,
    "turb": 2.81,
    "hard": 234.0,
    "ec": 891.0,
    "lat": 19.789214,
    "lon": 72.761231,
    "x": 767.9,
    "y": 433.4
  },
  {
    "id": "JLC-05-004",
    "area": "Bhandarwada",
    "source": "Community Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-12",
    "tds": 397.0,
    "ph": 7.48,
    "turb": 1.17,
    "hard": 201.0,
    "ec": 784.0,
    "lat": 19.789214,
    "lon": 72.761231,
    "x": 754.9,
    "y": 427.7
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
    "lat": 19.789214,
    "lon": 72.761231,
    "x": 741.1,
    "y": 424.7
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
    "lat": 19.789214,
    "lon": 72.761231,
    "x": 742.5,
    "y": 410.6
  },
  {
    "id": "JLC-05-007",
    "area": "Bhandarwada",
    "source": "Well",
    "icon": "\ud83c\udffa",
    "date": "2026-07-18",
    "tds": 414.0,
    "ph": 7.74,
    "turb": 2.13,
    "hard": 218.0,
    "ec": 815.0,
    "lat": 19.789214,
    "lon": 72.761231,
    "x": 741.1,
    "y": 396.5
  },
  {
    "id": "JLC-05-008",
    "area": "Bhandarwada",
    "source": "Community Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-20",
    "tds": 445.0,
    "ph": 7.55,
    "turb": 2.47,
    "hard": 231.0,
    "ec": 879.0,
    "lat": 19.789214,
    "lon": 72.761231,
    "x": 754.9,
    "y": 393.5
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
    "lat": 19.789214,
    "lon": 72.761231,
    "x": 767.9,
    "y": 387.8
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
    "lat": 19.789214,
    "lon": 72.761231,
    "x": 775.1,
    "y": 400.0
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
    "x": 694.3,
    "y": 489.5
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
    "lat": 19.782214,
    "lon": 72.757741,
    "x": 684.9,
    "y": 500.1
  },
  {
    "id": "JLC-06-003",
    "area": "Betegaon",
    "source": "Well",
    "icon": "\ud83c\udffa",
    "date": "2026-07-11",
    "tds": 379.0,
    "ph": 7.72,
    "turb": 1.93,
    "hard": 181.0,
    "ec": 741.0,
    "lat": 19.782214,
    "lon": 72.757741,
    "x": 677.7,
    "y": 512.3
  },
  {
    "id": "JLC-06-004",
    "area": "Betegaon",
    "source": "Community Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-13",
    "tds": 338.0,
    "ph": 7.59,
    "turb": 0.74,
    "hard": 161.0,
    "ec": 663.0,
    "lat": 19.782214,
    "lon": 72.757741,
    "x": 664.7,
    "y": 506.6
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
    "lat": 19.782214,
    "lon": 72.757741,
    "x": 650.9,
    "y": 503.6
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
    "lat": 19.782214,
    "lon": 72.757741,
    "x": 652.3,
    "y": 489.5
  },
  {
    "id": "JLC-06-007",
    "area": "Betegaon",
    "source": "Well",
    "icon": "\ud83c\udffa",
    "date": "2026-07-19",
    "tds": 347.0,
    "ph": 7.79,
    "turb": 1.04,
    "hard": 166.0,
    "ec": 681.0,
    "lat": 19.782214,
    "lon": 72.757741,
    "x": 650.9,
    "y": 475.4
  },
  {
    "id": "JLC-06-008",
    "area": "Betegaon",
    "source": "Community Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-21",
    "tds": 372.0,
    "ph": 7.61,
    "turb": 1.52,
    "hard": 179.0,
    "ec": 729.0,
    "lat": 19.782214,
    "lon": 72.757741,
    "x": 664.7,
    "y": 472.4
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
    "lat": 19.782214,
    "lon": 72.757741,
    "x": 677.7,
    "y": 466.7
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
    "lat": 19.782214,
    "lon": 72.757741,
    "x": 684.9,
    "y": 478.9
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
    "x": 623.5,
    "y": 381.5
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
    "lat": 19.7918,
    "lon": 72.755,
    "x": 614.1,
    "y": 392.1
  },
  {
    "id": "JLC-07-003",
    "area": "Awadh Nagar",
    "source": "Well",
    "icon": "\ud83c\udffa",
    "date": "2026-07-12",
    "tds": 389.0,
    "ph": 7.18,
    "turb": 2.11,
    "hard": 214.0,
    "ec": 756.0,
    "lat": 19.7918,
    "lon": 72.755,
    "x": 606.9,
    "y": 404.3
  },
  {
    "id": "JLC-07-004",
    "area": "Awadh Nagar",
    "source": "Community Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-14",
    "tds": 431.0,
    "ph": 7.76,
    "turb": 1.45,
    "hard": 188.0,
    "ec": 875.0,
    "lat": 19.7918,
    "lon": 72.755,
    "x": 593.9,
    "y": 398.6
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
    "lat": 19.7918,
    "lon": 72.755,
    "x": 580.1,
    "y": 395.6
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
    "lat": 19.7918,
    "lon": 72.755,
    "x": 581.5,
    "y": 381.5
  },
  {
    "id": "JLC-07-007",
    "area": "Awadh Nagar",
    "source": "Well",
    "icon": "\ud83c\udffa",
    "date": "2026-07-20",
    "tds": 401.0,
    "ph": 7.27,
    "turb": 3.02,
    "hard": 217.0,
    "ec": 783.0,
    "lat": 19.7918,
    "lon": 72.755,
    "x": 580.1,
    "y": 367.4
  },
  {
    "id": "JLC-07-008",
    "area": "Awadh Nagar",
    "source": "Community Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-22",
    "tds": 338.0,
    "ph": 7.68,
    "turb": 1.08,
    "hard": 158.0,
    "ec": 651.0,
    "lat": 19.7918,
    "lon": 72.755,
    "x": 593.9,
    "y": 364.4
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
    "lat": 19.7918,
    "lon": 72.755,
    "x": 606.9,
    "y": 358.7
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
    "lat": 19.7918,
    "lon": 72.755,
    "x": 614.1,
    "y": 370.9
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
    "x": 352.3,
    "y": 210.2
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
    "lat": 19.807,
    "lon": 72.7445,
    "x": 342.9,
    "y": 220.8
  },
  {
    "id": "JLC-08-003",
    "area": "Pam",
    "source": "Well",
    "icon": "\ud83c\udffa",
    "date": "2026-07-13",
    "tds": 438.0,
    "ph": 7.12,
    "turb": 2.83,
    "hard": 237.0,
    "ec": 861.0,
    "lat": 19.807,
    "lon": 72.7445,
    "x": 335.7,
    "y": 233.0
  },
  {
    "id": "JLC-08-004",
    "area": "Pam",
    "source": "Community Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-15",
    "tds": 391.0,
    "ph": 7.74,
    "turb": 1.16,
    "hard": 184.0,
    "ec": 759.0,
    "lat": 19.807,
    "lon": 72.7445,
    "x": 322.7,
    "y": 227.3
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
    "lat": 19.807,
    "lon": 72.7445,
    "x": 308.9,
    "y": 224.3
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
    "lat": 19.807,
    "lon": 72.7445,
    "x": 310.3,
    "y": 210.2
  },
  {
    "id": "JLC-08-007",
    "area": "Pam",
    "source": "Well",
    "icon": "\ud83c\udffa",
    "date": "2026-07-21",
    "tds": 414.0,
    "ph": 7.22,
    "turb": 2.47,
    "hard": 221.0,
    "ec": 797.0,
    "lat": 19.807,
    "lon": 72.7445,
    "x": 308.9,
    "y": 196.1
  },
  {
    "id": "JLC-08-008",
    "area": "Pam",
    "source": "Community Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-23",
    "tds": 369.0,
    "ph": 7.59,
    "turb": 0.88,
    "hard": 172.0,
    "ec": 712.0,
    "lat": 19.807,
    "lon": 72.7445,
    "x": 322.7,
    "y": 193.1
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
    "lat": 19.807,
    "lon": 72.7445,
    "x": 335.7,
    "y": 187.4
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
    "lat": 19.807,
    "lon": 72.7445,
    "x": 342.9,
    "y": 199.6
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
    "x": 533.1,
    "y": 125.7
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
    "lat": 19.8145,
    "lon": 72.7515,
    "x": 523.7,
    "y": 136.3
  },
  {
    "id": "JLC-09-003",
    "area": "Ganesh Nagar",
    "source": "Well",
    "icon": "\ud83c\udffa",
    "date": "2026-07-14",
    "tds": 463.0,
    "ph": 7.21,
    "turb": 2.64,
    "hard": 231.0,
    "ec": 903.0,
    "lat": 19.8145,
    "lon": 72.7515,
    "x": 516.5,
    "y": 148.5
  },
  {
    "id": "JLC-09-004",
    "area": "Ganesh Nagar",
    "source": "Community Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-16",
    "tds": 351.0,
    "ph": 7.69,
    "turb": 1.24,
    "hard": 169.0,
    "ec": 682.0,
    "lat": 19.8145,
    "lon": 72.7515,
    "x": 503.5,
    "y": 142.8
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
    "lat": 19.8145,
    "lon": 72.7515,
    "x": 489.7,
    "y": 139.8
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
    "lat": 19.8145,
    "lon": 72.7515,
    "x": 491.1,
    "y": 125.7
  },
  {
    "id": "JLC-09-007",
    "area": "Ganesh Nagar",
    "source": "Well",
    "icon": "\ud83c\udffa",
    "date": "2026-07-22",
    "tds": 447.0,
    "ph": 7.16,
    "turb": 3.27,
    "hard": 239.0,
    "ec": 871.0,
    "lat": 19.8145,
    "lon": 72.7515,
    "x": 489.7,
    "y": 111.6
  },
  {
    "id": "JLC-09-008",
    "area": "Ganesh Nagar",
    "source": "Community Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-24",
    "tds": 373.0,
    "ph": 7.58,
    "turb": 0.76,
    "hard": 175.0,
    "ec": 721.0,
    "lat": 19.8145,
    "lon": 72.7515,
    "x": 503.5,
    "y": 108.6
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
    "lat": 19.8145,
    "lon": 72.7515,
    "x": 516.5,
    "y": 102.9
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
    "lat": 19.8145,
    "lon": 72.7515,
    "x": 523.7,
    "y": 115.1
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
    "x": 713.9,
    "y": 238.4
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
    "lat": 19.8045,
    "lon": 72.7585,
    "x": 704.5,
    "y": 249.0
  },
  {
    "id": "JLC-10-003",
    "area": "Yadav Nagar",
    "source": "Well",
    "icon": "\ud83c\udffa",
    "date": "2026-07-15",
    "tds": 455.0,
    "ph": 7.25,
    "turb": 2.72,
    "hard": 226.0,
    "ec": 895.0,
    "lat": 19.8045,
    "lon": 72.7585,
    "x": 697.3,
    "y": 261.2
  },
  {
    "id": "JLC-10-004",
    "area": "Yadav Nagar",
    "source": "Community Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-17",
    "tds": 342.0,
    "ph": 7.71,
    "turb": 0.98,
    "hard": 162.0,
    "ec": 665.0,
    "lat": 19.8045,
    "lon": 72.7585,
    "x": 684.3,
    "y": 255.5
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
    "lat": 19.8045,
    "lon": 72.7585,
    "x": 670.5,
    "y": 252.5
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
    "lat": 19.8045,
    "lon": 72.7585,
    "x": 671.9,
    "y": 238.4
  },
  {
    "id": "JLC-10-007",
    "area": "Yadav Nagar",
    "source": "Well",
    "icon": "\ud83c\udffa",
    "date": "2026-07-23",
    "tds": 433.0,
    "ph": 7.19,
    "turb": 3.05,
    "hard": 218.0,
    "ec": 846.0,
    "lat": 19.8045,
    "lon": 72.7585,
    "x": 670.5,
    "y": 224.3
  },
  {
    "id": "JLC-10-008",
    "area": "Yadav Nagar",
    "source": "Community Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-25",
    "tds": 359.0,
    "ph": 7.63,
    "turb": 0.82,
    "hard": 171.0,
    "ec": 694.0,
    "lat": 19.8045,
    "lon": 72.7585,
    "x": 684.3,
    "y": 221.3
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
    "lat": 19.8045,
    "lon": 72.7585,
    "x": 697.3,
    "y": 215.6
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
    "lat": 19.8045,
    "lon": 72.7585,
    "x": 704.5,
    "y": 227.8
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
    "x": 468.6,
    "y": 413.0
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
    "lat": 19.789,
    "lon": 72.749,
    "x": 459.2,
    "y": 423.6
  },
  {
    "id": "JLC-11-003",
    "area": "Azad Nagar",
    "source": "Well",
    "icon": "\ud83c\udffa",
    "date": "2026-07-16",
    "tds": 451.0,
    "ph": 7.15,
    "turb": 2.55,
    "hard": 228.0,
    "ec": 884.0,
    "lat": 19.789,
    "lon": 72.749,
    "x": 452.0,
    "y": 435.8
  },
  {
    "id": "JLC-11-004",
    "area": "Azad Nagar",
    "source": "Community Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-18",
    "tds": 337.0,
    "ph": 7.72,
    "turb": 0.91,
    "hard": 160.0,
    "ec": 653.0,
    "lat": 19.789,
    "lon": 72.749,
    "x": 439.0,
    "y": 430.1
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
    "lat": 19.789,
    "lon": 72.749,
    "x": 425.2,
    "y": 427.1
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
    "lat": 19.789,
    "lon": 72.749,
    "x": 426.6,
    "y": 413.0
  },
  {
    "id": "JLC-11-007",
    "area": "Azad Nagar",
    "source": "Well",
    "icon": "\ud83c\udffa",
    "date": "2026-07-24",
    "tds": 427.0,
    "ph": 7.23,
    "turb": 3.14,
    "hard": 216.0,
    "ec": 832.0,
    "lat": 19.789,
    "lon": 72.749,
    "x": 425.2,
    "y": 398.9
  },
  {
    "id": "JLC-11-008",
    "area": "Azad Nagar",
    "source": "Community Tap",
    "icon": "\ud83d\udeb0",
    "date": "2026-07-26",
    "tds": 354.0,
    "ph": 7.61,
    "turb": 0.73,
    "hard": 168.0,
    "ec": 684.0,
    "lat": 19.789,
    "lon": 72.749,
    "x": 439.0,
    "y": 395.9
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
    "lat": 19.789,
    "lon": 72.749,
    "x": 452.0,
    "y": 390.2
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
    "lat": 19.789,
    "lon": 72.749,
    "x": 459.2,
    "y": 402.4
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
        const pinColor = a.color === 'emerald' ? '#10b981' : (a.color === 'amber' ? '#f59e0b' : '#38bdf8');
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
            <title>${s.id} - ${s.area} (${s.source})\nTDS: ${s.tds} mg/L, pH: ${s.ph}, Turb: ${s.turb} NTU\nCoords: ${s.lat}, ${s.lon}</title>
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
    if (srcEl) srcEl.textContent = `Sources: ${a.sources} | GPS: ${a.lat.toFixed(6)}°N, ${a.lon.toFixed(6)}°E`;

    const tag = document.getElementById('map-card-status');
    if (tag) {
      tag.textContent = a.status;
      if (a.color === 'emerald') {
        tag.className = 'px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800';
      } else if (a.color === 'amber') {
        tag.className = 'px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-950 text-amber-300 border border-amber-800';
      } else {
        tag.className = 'px-2 py-0.5 rounded text-[11px] font-semibold bg-cyan-950 text-cyan-300 border border-cyan-800';
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
    const msg = `Sample ${s.id} in ${s.area} (${s.source} at ${s.lat.toFixed(6)}°N, ${s.lon.toFixed(6)}°E): TDS is ${s.tds} mg/L, pH is ${s.ph}, Turbidity is ${s.turb} NTU, and Hardness is ${s.hard} mg/L.`;
    ProfessorAqua.setExplanation(msg, s.tds > 500 ? 'attention' : 'explaining', 'FIELD SAMPLE');
  },

  explainArea(a) {
    const text = `In ${a.name} (${a.ward} at ${a.lat.toFixed(6)}°N, ${a.lon.toFixed(6)}°E), our dataset includes 10 certified sampling sites. Average TDS is ${a.tds.avg} mg/L (min ${a.tds.min}, peak ${a.tds.max} mg/L). ${a.obs} ${a.rec}`;
    ProfessorAqua.setExplanation(text, a.color === 'amber' ? 'attention' : 'explaining', 'WARD PROFILE');
  }
};