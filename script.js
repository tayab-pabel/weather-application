function getWeatherData() {
  let cityName = document.getElementById("cityName").value;

  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=246a47f2ea04c09eabf878f64f6884d1"
  )
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("city").innerHTML =
        data.name + ", " + data.sys.country;
      document.getElementById("des").innerHTML = data.weather[0].description;
      document.getElementById("hum").innerHTML = data.main.humidity;
      document.getElementById("temp").innerHTML =
        Math.ceil(data.main.temp - 273.15) + " °C";
      document
        .getElementById("image")
        .setAttribute(
          "src",
          `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        );
    })

    .catch((error) => alert("Enter a valid city name."));
}
