// ---------------- 50%-ACCURATE GLOBAL FORECAST ----------------
const PY_FORECAST = [];
const LAT_RES = 5;
const LON_RES = 5;
const STEPS = 56; // 7 days, 3-hour intervals
const START_DATE = new Date(Date.UTC(2026, 0, 24, 12));

// Generate latitude and longitude arrays
const latitudes = [];
for(let lat=-90; lat<=90; lat+=LAT_RES) latitudes.push(lat);

const longitudes = [];
for(let lon=-180; lon<=180; lon+=LON_RES) longitudes.push(lon);

// Utility: ±50% random variation
function randomVariation(value, factor=0.5){
    return value + (Math.random()*2-1)*value*factor;
}

// Generate forecast for all steps
for(let step=0; step<STEPS; step++){
    const stepData = [];
    const stepTime = new Date(START_DATE.getTime() + step*3*3600*1000).toISOString();

    for(let lat of latitudes){
        for(let lon of longitudes){
            const baseTemp = 15 * Math.sin(lat * Math.PI / 180);
            const temp = randomVariation(baseTemp, 0.5);
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

// ---------------- INIT MAP ----------------
const map = L.map('map').setView([0,0],2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution:'&copy; OpenStreetMap contributors'
}).addTo(map);

let currentStep = 0;
let heatLayer = null;
let windMarkers = L.layerGroup().addTo(map);

// ---------------- VENTUSKY COLOR SCALES ----------------
const ventuskyColors = {
    temp: chroma.scale(['#08306b','#2171b5','#6baed6','#fee391','#fb6a4a','#cb181d']).domain([-30,50]),
    precip3h: chroma.scale(['#ffffff','#a6cee3','#1f78b4','#b2df8a','#33a02c','#fb9a99']).domain([0,20]),
    wind10: chroma.scale(['#f7fbff','#6baed6','#2171b5','#08306b']).domain([0,30]),
    gust1h: chroma.scale(['#fff5f0','#fcae91','#fb6a4a','#cb181d','#67000d']).domain([0,40])
};

// ---------------- DRAW FORECAST ----------------
function drawForecast(stepIndex){
    const data = PY_FORECAST[stepIndex];
    const variable = document.getElementById('variableSelect').value;

    // ----- HEATMAP -----
    const heatPoints = data.map(d=>{
        const val = d[variable];
        const domain = ventuskyColors[variable].domain();
        let intensity = (val-domain[0])/(domain[1]-domain[0]);
        intensity = Math.max(0,Math.min(1,intensity));
        return [d.lat,d.lon,intensity];
    });

    if(heatLayer) map.removeLayer(heatLayer);
    heatLayer = L.heatLayer(heatPoints,{
        radius: 25, blur: 15,
        gradient: buildGradient(variable)
    }).addTo(map);

    // ----- WIND ARROWS -----
    windMarkers.clearLayers();
    if(variable==='wind10' || variable==='gust1h'){
        data.forEach(d=>{
            const marker = L.marker([d.lat,d.lon],{
                icon: L.divIcon({
                    className: 'wind-arrow',
                    html: '&#8593;', // arrow up
                    iconSize: [20,20]
                }),
                rotationAngle: d.wind_dir,
                rotationOrigin: 'center center'
            });
            windMarkers.addLayer(marker);
        });
    }

    document.getElementById('timeLabel').innerText =
        `Time: ${data[0].time} | Variable: ${variable}`;
}

// Build gradient object for Leaflet.heat
function buildGradient(variable){
    const colors = ventuskyColors[variable].colors();
    const stops = colors.length;
    const gradient = {};
    colors.forEach((c,i)=> gradient[i/(stops-1)] = c);
    return gradient;
}

// ---------------- CONTROLS ----------------
function nextStep(){
    currentStep = (currentStep+1)%PY_FORECAST.length;
    drawForecast(currentStep);
}
function prevStep(){
    currentStep = (currentStep-1+PY_FORECAST.length)%PY_FORECAST.length;
    drawForecast(currentStep);
}

// Auto-play
setInterval(nextStep, 2000);

// Initial draw
drawForecast(currentStep);
