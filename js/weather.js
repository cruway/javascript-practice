const API_KEY = "ec6f206231e3a8acc036f7e06dcbc0c5";

const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json().then(data => {
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }));
}

function onGeoError() {
    city.innerText = "場所の情報取得失敗";
    weather.innerText = "天気の情報取得失敗";
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
