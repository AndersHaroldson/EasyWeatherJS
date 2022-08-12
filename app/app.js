async function getWeather() {

    // Get city & preferred unit from user
    var city = document.getElementById("cityInput").value;
    var unit = document.getElementById("unitSelect").value;
    var unitSymbol;
    var unitSymbolWind;

    // Get if wanted unit is imperial or metric
    if (unit == "imperial") {
        unitSymbol = "°F";
        unitSymbolWind = "mph";
    }
    else if (unit == "metric") {
        unitSymbol = "°C";
        unitSymbolWind = "kph";
    }

    //console.log(city);

    const key = "YOUR_KEY_HERE";
    
    // OpenWeatherMap API
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${unit}`);

    const data = await response.json();

    //console.log(data);

    // Getting & displaying all values to the user
    var cityName = document.getElementById("cityName").innerHTML = data.name + ", " + data.sys.country;
    var temp = document.getElementById("temp").innerHTML = "Temperature: " + Math.floor(data.main.temp) + unitSymbol;
    var feelsLike = document.getElementById("feelsLike").innerHTML = "Feels Like: " + Math.floor(data.main.feels_like) + unitSymbol;
    var weatherStatus = document.getElementById("weatherStatus").innerHTML = data.weather[0].main;
    var iconCode = data.weather[0].icon;
    var icon = document.getElementById("icon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    var wind = document.getElementById("wind").innerHTML = "Wind Speed: " + Math.floor(data.wind.speed) + " " + unitSymbolWind;
    
    // Change the background according to the current city
    document.body.style.backgroundImage = `url(https://source.unsplash.com/1920x1080/?${data.name})`;


    return data;

}



