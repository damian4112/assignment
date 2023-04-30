const city = document.querySelector('#city');
const weather = document.querySelector('#weather_now');
const temp = document.querySelector('#temp');

const API_KEY = "700f2dbd53ee9028dbe5bded25de3d25";

function geoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}`;
        temp.innerText = Math.round(`${data.main.temp}`);
    });
}

function geoError () {
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(geoOk, geoError);
