import numpy as np
import json
from datetime import datetime, timedelta

# ---------------- CONFIG ----------------
START_TIME = datetime(2026, 1, 24, 12, 0)  # Start forecast 12 PM UTC
STEPS = 56  # 7 days, 3-hour intervals
LAT_RES = 5   # Latitude resolution
LON_RES = 5   # Longitude resolution
OUTPUT_JSON = "forecast.json"

# ---------------- CUSTOM MODEL ----------------
def custom_model(lat, lon, step):
    """
    Replace this with your real forecast logic.
    Must return dict with:
        - temp: 2m temperature (°C)
        - precip3h: 3-hour precipitation (mm)
        - wind10: 10m wind speed (m/s)
        - gust1h: 1-hour gust (m/s)
    """
    # Example: sinusoidal temperature + random precipitation/wind
    temp = 15*np.sin(np.radians(lat)) + np.random.randn()
    precip3h = max(0, np.random.randn()*2 + 1)
    wind10 = np.random.rand()*15
    gust1h = wind10 + np.random.rand()*5
    return {"temp": round(temp,2), "precip3h": round(precip3h,2),
            "wind10": round(wind10,2), "gust1h": round(gust1h,2)}

# ---------------- GENERATE FORECAST ----------------
latitudes = np.arange(-90, 91, LAT_RES)
longitudes = np.arange(-180, 181, LON_RES)

forecast_all = []

for step in range(STEPS):
    current_time = START_TIME + timedelta(hours=step*3)
    step_data = []
    for lat in latitudes:
        for lon in longitudes:
            vals = custom_model(lat, lon, step)
            vals["lat"] = lat
            vals["lon"] = lon
            vals["time"] = current_time.isoformat()
            step_data.append(vals)
    forecast_all.append(step_data)
    print(f"Step {step+1}/{STEPS} done, {len(step_data)} points")

# ---------------- SAVE JSON ----------------
with open(OUTPUT_JSON, "w") as f:
    json.dump(forecast_all, f)

print(f"Forecast saved to {OUTPUT_JSON}")
