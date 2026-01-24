import numpy as np
import matplotlib.pyplot as plt
import cartopy.crs as ccrs
import cartopy.feature as cfeature
from datetime import datetime, timedelta

# ---------------- CONFIG ----------------
START_TIME = datetime(2026, 1, 24, 12, 0)  # Forecast start
STEPS = 56  # 7 days, 3-hour intervals
LAT_RES = 5
LON_RES = 5

# Generate grid
latitudes = np.arange(-90, 91, LAT_RES)
longitudes = np.arange(-180, 181, LON_RES)

# ---------------- CUSTOM 50% ACCURATE MODEL ----------------
def custom_model(lat, lon, step):
    base_temp = 15*np.sin(np.radians(lat))
    base_precip = max(0, np.random.rand()*2)
    base_wind = max(0, np.random.rand()*10 + 2)
    base_gust = base_wind + np.random.rand()*5
    wind_dir = np.random.rand()*360

    temp = base_temp + np.random.randn()*7.5
    precip3h = max(0, base_precip + np.random.randn()*1)
    wind10 = max(0, base_wind + np.random.randn()*5)
    gust1h = max(0, base_gust + np.random.randn()*2)

    return temp, precip3h, wind10, gust1h, wind_dir

# ---------------- GENERATE GRIDS ----------------
def generate_step_grids(step):
    temp_grid = np.zeros((len(latitudes), len(longitudes)))
    precip_grid = np.zeros_like(temp_grid)
    wind_grid = np.zeros_like(temp_grid)
    gust_grid = np.zeros_like(temp_grid)
    wind_dir_grid = np.zeros_like(temp_grid)

    for i, lat in enumerate(latitudes):
        for j, lon in enumerate(longitudes):
            temp, precip, wind, gust, wind_dir = custom_model(lat, lon, step)
            temp_grid[i, j] = temp
            precip_grid[i, j] = precip
            wind_grid[i, j] = wind
            gust_grid[i, j] = gust
            wind_dir_grid[i, j] = wind_dir

    return temp_grid, precip_grid, wind_grid, gust_grid, wind_dir_grid

# ---------------- PLOTTING FUNCTION ----------------
def plot_map(data_grid, title, cmap='coolwarm', units=''):
    fig = plt.figure(figsize=(12,6))
    ax = plt.axes(projection=ccrs.PlateCarree())
    ax.set_global()
    ax.coastlines()
    ax.add_feature(cfeature.BORDERS, linestyle=':')
    ax.gridlines(draw_labels=True)

    mesh = ax.pcolormesh(longitudes, latitudes, data_grid, transform=ccrs.PlateCarree(), cmap=cmap)
    plt.title(title)
    cbar = plt.colorbar(mesh, orientation='vertical', pad=0.02, shrink=0.7)
    cbar.set_label(units)
    plt.show()

# ---------------- EXAMPLE USAGE ----------------
step = 0  # first 3-hour forecast
temp_grid, precip_grid, wind_grid, gust_grid, wind_dir_grid = generate_step_grids(step)

plot_map(temp_grid, f"Temperature Forecast {START_TIME + timedelta(hours=step*3)}", cmap='coolwarm', units='°C')
plot_map(precip_grid, f"Precipitation (3h) Forecast {START_TIME + timedelta(hours=step*3)}", cmap='Blues', units='mm')
plot_map(wind_grid, f"Wind Speed Forecast {START_TIME + timedelta(hours=step*3)}", cmap='viridis', units='m/s')
