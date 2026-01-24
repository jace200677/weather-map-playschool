// ---------------- 50%-ACCURATE SYNTHETIC GLOBAL FORECAST ----------------
const PY_FORECAST = [];

// Configuration
const LAT_RES = 5;           // Latitude resolution in degrees
const LON_RES = 5;           // Longitude resolution in degrees
const STEPS = 56;            // 7 days, 3-hour intervals
const START_DATE = new Date(Date.UTC(2026, 0, 24, 12)); // Jan 24, 2026, 12:00 UTC

// Generate latitude and longitude arrays
const latitudes = [];
for (let lat = -90; lat <= 90; lat += LAT_RES) latitudes.push(lat);

const longitudes = [];
for (let lon = -180; lon <= 180; lon += LON_RES) longitudes.push(lon);

// Utility: Random variation helper for ±50%
function randomVariation(value, factor=0.5){
    return value + (Math.random()*2 - 1) * value * factor;
}

// ---------------- GENERATE FORECAST ----------------
for (let step = 0; step < STEPS; step++) {
    const stepData = [];
    const stepTime = new Date(START_DATE.getTime() + step*3*3600*1000).toISOString(); // each step = 3 hours

    for (let lat of latitudes) {
        for (let lon of longitudes) {
            // Base synthetic 50%-accurate model
            const baseTemp = 15 * Math.sin(lat * Math.PI / 180);  // Temperature varies with latitude
            const temp = randomVariation(baseTemp, 0.5);          // ±50% variation
            const precip3h = Math.max(0, Math.random() * 5);       // 0–5 mm per 3h
            const wind10 = Math.max(0, 2 + Math.random() * 10);   // 2–12 m/s
            const gust1h = wind10 + Math.random() * 5;            // Wind gust
            const wind_dir = Math.random() * 360;                 // Wind direction in degrees

            stepData.push({
                lat: lat,
                lon: lon,
                temp: Math.round(temp * 100) / 100,
                precip3h: Math.round(precip3h * 100) / 100,
                wind10: Math.round(wind10 * 100) / 100,
                gust1h: Math.round(gust1h * 100) / 100,
                wind_dir: Math.round(wind_dir * 10) / 10,
                time: stepTime
            });
        }
    }

    PY_FORECAST.push(stepData);
}

// ---------------- EXAMPLE ACCESS ----------------
// Access step 0, first point
console.log(PY_FORECAST[0][0]);

// Optional: export PY_FORECAST to your HTML/Leaflet map
// Example: window.PY_FORECAST = PY_FORECAST;
