import numpy as np
import pandas as pd
import xarray as xr
from datetime import datetime, timedelta

# ---------------- CONFIG ----------------
START_TIME = datetime(2026, 1, 24, 12, 0)  # Forecast start 12 PM UTC
STEPS = 56  # 7 days, 3-hour intervals
LAT_RES = 5
LON_RES = 5

# Custom adjustment factors
TEMP_ADJUST = 1.05
PRECIP_ADJUST = 0.9
WIND_ADJUST = 1.1
GUST_ADJUST = 1.0

# ---------------- CUSTOM MODEL ----------------
def custom_model(lat, lon, step, gfs_ds=None):
    if gfs_ds is not None:
        temp = float(gfs_ds['tmp2m'].interp(lat=lat, lon=lon))
        precip3h = float(gfs_ds['apcpsfc'].interp(lat=lat, lon=lon))
        wind10 = float(gfs_ds['wspd10m'].interp(lat=lat, lon=lon))
        gust1h = float(gfs_ds['gust10m'].interp(lat=lat, lon=lon))
    else:
        temp = 15*np.sin(np.radians(lat)) + np.random.randn()
        precip3h = max(0, np.random.randn()*2 + 1)
        wind10 = np.random.rand()*15
        gust1h = wind10 + np.random.rand()*5

    # Apply adjustments
    temp *= TEMP_ADJUST
    precip3h *= PRECIP_ADJUST
    wind10 *= WIND_ADJUST
    gust1h *= GUST_ADJUST

    return temp, precip3h, wind10, gust1h

# ---------------- GENERATE FORECAST IN MEMORY ----------------
latitudes = np.arange(-90, 91, LAT_RES)
longitudes = np.arange(-180, 181, LON_RES)

# Use xarray Dataset to hold all data
forecast_ds = xr.Dataset(
    {
        'temp': (('time','lat','lon'), np.zeros((STEPS, len(latitudes), len(longitudes)))),
        'precip3h': (('time','lat','lon'), np.zeros((STEPS, len(latitudes), len(longitudes)))),
        'wind10': (('time','lat','lon'), np.zeros((STEPS, len(latitudes), len(longitudes)))),
        'gust1h': (('time','lat','lon'), np.zeros((STEPS, len(latitudes), len(longitudes))))
    },
    coords={
        'time': [START_TIME + timedelta(hours=step*3) for step in range(STEPS)],
        'lat': latitudes,
        'lon': longitudes
    }
)

# Fill Dataset
for t_idx, step in enumerate(range(STEPS)):
    current_time = START_TIME + timedelta(hours=step*3)
    gfs_ds = None  # Replace with xarray.open_dataset(...) if available

    for lat_idx, lat in enumerate(latitudes):
        for lon_idx, lon in enumerate(longitudes):
            temp, precip3h, wind10, gust1h = custom_model(lat, lon, step, gfs_ds=gfs_ds)
            forecast_ds['temp'][t_idx, lat_idx, lon_idx] = temp
            forecast_ds['precip3h'][t_idx, lat_idx, lon_idx] = precip3h
            forecast_ds['wind10'][t_idx, lat_idx, lon_idx] = wind10
            forecast_ds['gust1h'][t_idx, lat_idx, lon_idx] = gust1h

print("Forecast generated in memory as xarray Dataset:")
print(forecast_ds)
