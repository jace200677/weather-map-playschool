import numpy as np
from datetime import datetime, timedelta

# ---------------- CONFIG ----------------
START_TIME = datetime(2026, 1, 24, 12, 0)  # Forecast start
STEPS = 56  # 7 days, 3-hour intervals
LAT_RES = 5
LON_RES = 5

# Optional: placeholder for GFS data (if you have xarray Dataset)
gfs_ds = None  # Replace with xarray.open_dataset("gfs_file.nc") if available

# ---------------- CUSTOM 50% ACCURATE MODEL ----------------
def custom_model(lat, lon, step, gfs_ds=None):
    """
    Generates 50% accurate weather:
    - If gfs_ds is provided, interpolate GFS values and apply 50% variation
    - Else, generate synthetic plausible values
    """
    if gfs_ds is not None:
        # Example interpolation (replace variable names as per your dataset)
        temp = float(gfs_ds['tmp2m'].interp(lat=lat, lon=lon))
        precip3h = float(gfs_ds['apcpsfc'].interp(lat=lat, lon=lon))
        wind10 = float(gfs_ds['wspd10m'].interp(lat=lat, lon=lon))
        gust1h = float(gfs_ds['gust10m'].interp(lat=lat, lon=lon))
        wind_dir = float(np.random.rand()*360)
        # Apply 50% realistic variation
        temp += np.random.randn()*abs(temp)*0.5
        precip3h += np.random.randn()*abs(precip3h)*0.5
        wind10 += np.random.randn()*abs(wind10)*0.5
        gust1h += np.random.randn()*abs(gust1h)*0.5
    else:
        # Synthetic forecast
        base_temp = 15*np.sin(np.radians(lat))
        base_precip = max(0, np.random.rand()*2)
        base_wind = max(0, np.random.rand()*10 + 2)
        base_gust = base_wind + np.random.rand()*5
        wind_dir = np.random.rand()*360

        temp = base_temp + np.random.randn()*7.5
        precip3h = max(0, base_precip + np.random.randn()*1)
        wind10 = max(0, base_wind + np.random.randn()*5)
        gust1h = max(0, base_gust + np.random.randn()*2)

    return {
        "lat": float(lat),
        "lon": float(lon),
        "temp": float(round(temp,2)),
        "precip3h": float(round(precip3h,2)),
        "wind10": float(round(wind10,2)),
        "gust1h": float(round(gust1h,2)),
        "wind_dir": float(round(wind_dir,1)),
        "time": (START_TIME + timedelta(hours=step*3)).isoformat() + "Z"
    }

# ---------------- GENERATE FORECAST IN MEMORY ----------------
latitudes = np.arange(-90, 91, LAT_RES)
longitudes = np.arange(-180, 181, LON_RES)

forecast_all = []

for step in range(STEPS):
    step_data = []
    for lat in latitudes:
        for lon in longitudes:
            step_data.append(custom_model(lat, lon, step, gfs_ds=gfs_ds))
    forecast_all.append(step_data)
    print(f"Step {step+1}/{STEPS} done, points: {len(step_data)}")

# ---------------- NOW forecast_all IS IN MEMORY ----------------
# You can use it directly in your Python program or inject into a web page
# Example: access first step, first point
print(forecast_all[0][0])
