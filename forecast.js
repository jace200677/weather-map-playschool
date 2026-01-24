// 50%-accurate synthetic global forecast
const PY_FORECAST = [];

// Configuration
const LAT_RES = 5;
const LON_RES = 5;
const STEPS = 56; // 7 days, 3-hour intervals
const START_DATE = new Date(Date.UTC(2026, 0, 24, 12)); // Jan 24, 2026, 12:00 UTC

// Latitude and longitude arrays
const latitudes = [];
for(let lat=-90; lat<=90; lat+=LAT_RES) latitudes.push(lat);
const longitudes = [];
for(let lon=-180; lon<=180; lon+=LON_RES) longitudes.push(lon);

// ---------------- GENERATE FORECAST ----------------
for(let step=0; step<STEPS; step++){
    const stepData = [];
    const stepTime = new Date(START_DATE.getTime() + step*3*3600*1000).toISOString();
    
    for(let lat of latitudes){
        for(let lon of longitudes){
            // Base synthetic 50% accurate model
            const baseTemp = 15*Math.sin(lat*Math.PI/180);
            const temp = baseTemp + (Math.random()-0.5)*15; // ±50% realistic
            const precip3h = Math.max(0, Math.random()*5);
            const wind10 = Math.max(0, 2 + Math.random()*10);
            const gust1h = wind10 + Math.random()*5;
            const wind_dir = Math.random()*360;

            stepData.push({
                lat: lat,
                lon: lon,
                temp: Math.round(temp*100)/100,
                precip3h: Math.round(precip3h*100)/100,
                wind10: Math.round(wind10*100)/100,
                gust1h: Math.round(gust1h*100)/100,
                wind_dir: Math.round(wind_dir*10)/10,
                time: stepTime
            });
        }
    }
    PY_FORECAST.push(stepData);
}
