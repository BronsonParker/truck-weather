const url = "https://api.open-meteo.com/v1/forecast?latitude=30.26715&longitude=-97.74306&current=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch&timeformat=unixtime";
const button = document.getElementById("check-btn");
const weatherArea = document.getElementById("weather");

async function getWeather() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    weatherArea.textContent="";
    const temp = document.createElement("p");
        temp.className="fs-4";
        temp.textContent="Temperature: " + data.current.temperature_2m + " " + data.current_units.temperature_2m;
        weatherArea.appendChild(temp);
    const precip = document.createElement("p");
        precip.className="fs-4";
        precip.textContent="Precipitation: " + data.current.precipitation + " " + data.current_units.precipitation;
        weatherArea.appendChild(precip);
    const wind = document.createElement("p");
        wind.className="fs-4";
        wind.textContent="Wind Speed: " + data.current.wind_speed_10m + " " + data.current_units.wind_speed_10m;
        weatherArea.appendChild(wind);
}

button.addEventListener("click", getWeather);