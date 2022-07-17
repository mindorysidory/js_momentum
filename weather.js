const API_KEY = "844457232d3761bfa99f3ffa58aa0c86";

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json()).then((data) => {
        const city = document.querySelector(".city");
        const temperature = document.querySelector(".temperature");
        city.innerText = `City : ${data.name}`;
        temperature.innerText = `Celsius temperature : ${data.main.temp}, ${data.weather[0].main}`;
    });
}

function onGeoError(){
    alert("Can't find you. No wadther for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);