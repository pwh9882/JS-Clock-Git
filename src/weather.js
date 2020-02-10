const weather = document.querySelector(".js-weather");

const API_KEY = "6642443638d2627753ce1fb7b79b4850";
const COORDS = "coords";

function getWeather(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric
    `)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json);
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature}*C @ ${place}`;
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    //   latitude: latitude,
    //   longitude: longitude
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  //   console.log(position); //확인용
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("Cannot access Geo.");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    // getWeather
    // console.log(loadedCoords);
    const parseCoords = JSON.parse(loadedCoords);
    // console.log(parseCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}
function init() {
  loadCoords();
}

init();
