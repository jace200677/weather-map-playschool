import numpy as np
import json
from datetime import datetime, timedelta

# ---------------- CONFIG ----------------
START_TIME = datetime(2026, 1, 24, 12, 0)  # Forecast start
STEPS = 56  # 7 days, 3-hour intervals
LAT_RES = 5
LON_RES = 5

# ---------------- CUSTOM “50% ACCURATE” MODEL ----------------
def custom_model(lat, lon, step):
    """
    Generates plausible weather data with ~50% accuracy effect:
    - Base pattern: sinusoidal temp, wind pattern by lat/lon
    - Random variation: ±50% of expected values
    """
    # Base patterns
    base_temp = 15*np.sin(np.radians(lat))  # colder at poles
    base_precip = np.clip(np.random.rand()*2, 0, 5)  # base precipitation
    base_wind = np.clip(np.random.rand()*10 + 2, 0, 20)  # wind speed
    base_gust = base_wind + np.random.rand()*5
    base_dir = np.random.rand()*360

    # Apply 50% realistic variability
    temp = base_temp + np.random.randn()*7.5  # ±50% of typical range (~15°C)
    precip3h = max(0, base_precip + np.random.randn()*1)
    wind10 = max(0, base_wind + np.random.randn()*5)
    gust1h = max(0, base_gust + np.random.randn()*2)
    wind_dir = (base_dir + np.random.randn()*30) % 360

    return {
        "lat": lat,
        "lon": lon,
        "temp": round(temp,2),
        "precip3h": round(precip3h,2),
        "wind10": round(wind10,2),
        "gust1h": round(gust1h,2),
        "wind_dir": round(wind_dir,1),
        "time": (START_TIME + timedelta(hours=step*3)).isoformat() + "Z"
    }

# ---------------- GENERATE FORECAST ----------------
latitudes = np.arange(-90, 91, LAT_RES)
longitudes = np.arange(-180, 181, LON_RES)

forecast_all = []

for step in range(STEPS):
    step_data = []
    for lat in latitudes:
        for lon in longitudes:
            step_data.append(custom_model(lat, lon, step))
    forecast_all.append(step_data)
    print(f"Step {step+1}/{STEPS} done, points: {len(step_data)}")

# ---------------- SAVE AS JS ----------------
with open("forecast.js", "w") as f:
    f.write("const PY_FORECAST = ")
    json.dump(forecast_all, f)
    f.write(";")

print("forecast.js created successfully with ~50% realistic variation!")
