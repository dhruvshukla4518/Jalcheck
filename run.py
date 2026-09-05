"""
Single-Click Launcher for JalCheck Platform
Seeds SQLite DB if empty and starts FastAPI web server at http://localhost:8000
"""
import sys
import os
import webbrowser
import subprocess
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
sys.path.insert(0, str(BASE_DIR))

from backend.data.seed_data import seed
from backend.app.database.models import init_db

def main():
    print("=" * 65)
    print(" ■ JALCHECK — Water Quality Analysis & Community Awareness Platform")
    print(" Tagline: 'Know Your Water. Understand Your Community.'")
    print("=" * 65)
    
    # 1. Initialize & Seed DB
    init_db()
    seed()

    # 2. Open browser automatically after a short pause
    url = "http://localhost:8000"
    print(f"\nStarting server on {url} ...")
    print("Press Ctrl+C to stop the server.\n")

    try:
        import uvicorn
        # Open browser in a separate thread or call
        import threading
        import time
        def open_browser():
            time.sleep(1.5)
            webbrowser.open(url)
        threading.Thread(target=open_browser, daemon=True).start()

        uvicorn.run("backend.app.main:app", host="127.0.0.1", port=8000, reload=True)
    except KeyboardInterrupt:
        print("\nJalCheck server stopped.")

if __name__ == "__main__":
    main()
