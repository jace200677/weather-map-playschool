import numpy as np
import pandas as pd
import xarray as xr
import json
from datetime import datetime, timedelta
import requests
import os

# ---------------- CONFIG ----------------
START_TIME = datetime(2026, 1, 24, 12, 0)  # Forecast start 12 PM UTC
STEPS = 56  # 7 days, 3-hour intervals
LAT_RES = 5   # Latitude resolution
LON_RES = 5   # Longitude resolution
OUTPUT_JSON = "forecast.json"

# Custom adjustment factor (percent)
TEMP_ADJUST = 1.05      # 5% higher
PRECIP_ADJUST = 0.9     # 10% lower
WIND_ADJUST = 1.1       # 10% higher
GUST_ADJUST = 1.0       # no change

# ---------------- FETCH GFS DATA ----------------
def download_gfs(step_hour):
    """
    Downloads GFS data for the desired forecast hour.
    For simplicity, uses NOMADS OpenDAP server (example). 
    Replace with your preferred GFS source.
    """
    # Example GFS OpenDAP URL template (global 0.25°)
    base_url = "https://nomads.ncep.noaa.gov/dods/gfs_0p25/gfs{YYYY}{MM}{DD}/gfs_0p25_{HH}z"
    # Convert step_hour to GFS run time
    # For simplicity, you can download local NetCDF files manually and open with xarray
    return None  # Placeholder

# ---------------- CUSTOM MODEL ----------------
def custom_model(lat, lon, step, gfs_ds=None):
    """
    Fetch GFS data for lat/lon/step or use dummy if gfs_ds is None
    Apply custom adjustment factors
    """
    if gfs_ds is not None:
        # Example: interpolate GFS variables at lat/lon
        temp = float(gfs_ds['tmp2m'].interp(lat=lat, lon=lon))
        precip3h = float(gfs_ds['apcpsfc'].interp(lat=lat, lon=lon))
        wind10 = float(gfs_ds['wspd10m'].interp(lat=lat, lon=lon))
        gust1h = float(gfs_ds['gust10m'].interp(lat=lat, lon=lon))
    else:
        # Fallback dummy data
        temp = 15*np.sin(np.radians(lat)) + np.random.randn()
        precip3h = max(0, np.random.randn()*2 + 1)
        wind10 = np.random.rand()*15
        gust1h = wind10 + np.random.rand()*5

    # Apply custom adjustments
    temp *= TEMP_ADJUST
    precip3h *= PRECIP_ADJUST
    wind10 *= WIND_ADJUST
    gust1h *= GUST_ADJUST

    return {
        "temp": round(temp,2),
        "precip3h": round(precip3h,2),
        "wind10": round(wind10,2),
        "gust1h": round(gust1h,2)
    }

# ---------------- GENERATE FORECAST ----------------
latitudes = np.arange(-90, 91, LAT_RES)
longitudes = np.arange(-180, 181, LON_RES)

forecast_all = []

for step in range(STEPS):
    current_time = START_TIME + timedelta(hours=step*3)
    # Optional: load GFS dataset for this forecast hour
    gfs_ds = None  # Replace with xarray.open_dataset('your_gfs_file.nc') if available

    step_data = []
    for lat in latitudes:
        for lon in longitudes:
            vals = custom_model(lat, lon, step, gfs_ds=gfs_ds)
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
