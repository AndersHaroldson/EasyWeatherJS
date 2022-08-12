async function getWeather() {

    var city = document.getElementById("cityInput").value;
    var unit = document.getElementById("unitSelect").value;
    var unitSymbol;
    var unitSymbolWind;

    if (unit == "imperial") {
        unitSymbol = "°F";
        unitSymbolWind = "mph";
    }
    else if (unit == "metric") {
        unitSymbol = "°C";
        unitSymbolWind = "kph";
    }

    console.log(city);

    const key = "YOUR_KEY_HERE";

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${unit}`);

    const data = await response.json();

    console.log(data);

    var cityName = document.getElementById("cityName").innerHTML = data.name + ", " + data.sys.country;
    var temp = document.getElementById("temp").innerHTML = "Temperature: " + Math.floor(data.main.temp) + unitSymbol;
    var feelsLike = document.getElementById("feelsLike").innerHTML = "Feels Like: " + Math.floor(data.main.feels_like) + unitSymbol;
    var weatherStatus = document.getElementById("weatherStatus").innerHTML = data.weather[0].main;
    var iconCode = data.weather[0].icon;
    var icon = document.getElementById("icon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    var wind = document.getElementById("wind").innerHTML = "Wind Speed: " + Math.floor(data.wind.speed) + " " + unitSymbolWind;

    document.body.style.backgroundImage = `url(https://source.unsplash.com/1920x1080/?${data.name})`;


    return data;

}



