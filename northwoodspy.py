from fastapi import FastAPI
import requests

app = FastAPI()

def weather_intensity(wind, gust, temp, precip, lightning, alerts):
    score = 0
    score += min(wind * 1.2, 25)
    score += min(gust * 1.5, 25)

    if temp < 32:
        score += min((32 - temp) * 0.8, 15)
    elif temp > 90:
        score += min((temp - 90) * 0.8, 15)

    score += min(precip * 10, 15)
    score += 10 if lightning else 0
    score += alerts * 8
    return min(round(score), 100)

@app.get("/weather_intensity")
def get_intensity():
    # Example NOAA station: Minneapolis, MN
    url = "https://api.weather.gov/stations/KMSP/observations/latest"
    headers = {"User-Agent": "NorthwoodsPlayschool (jacefink17@outlook.com)"}
    
    try:
        r = requests.get(url, headers=headers, timeout=5)
        data = r.json()
        properties = data['properties']
        
        wind = properties['windSpeed']['value'] * 2.23694 if properties['windSpeed']['value'] else 0  # m/s -> mph
        gust = properties['windGust']['value'] * 2.23694 if properties['windGust']['value'] else 0
        temp = properties['temperature']['value'] * 9/5 + 32 if properties['temperature']['value'] else 70
        precip = properties.get('precipitationLastHour', {}).get('value', 0) or 0
        lightning = False  # NOAA obs doesn’t provide this directly
        alerts = 0         # Optional: query /alerts endpoint

        score = weather_intensity(wind, gust, temp, precip, lightning, alerts)
        level = "Calm" if score < 30 else "Elevated" if score < 60 else "Severe"

        return {
            "score": score,
            "level": level,
            "summary": f"Wind: {wind:.0f} mph, Gust: {gust:.0f} mph, Temp: {temp:.0f}°F"
        }

    except Exception as e:
        return {"score": 0, "level": "Unavailable", "summary": "Error fetching data"}
