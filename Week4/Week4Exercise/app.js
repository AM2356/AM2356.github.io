// Step 1: Get your API key from OpenWeatherMap.
const apiKey = "0a053b431fb2c93051102a5a9e59c951";

// Step 2: Create variables to store references to your input field, button, and weather info div.
const cityInput = document.getElementById("cityInput");
const btn = document.getElementById("btn");
const weatherInfo = document.getElementById("weather-info");

// Step 3: Add an event listener to the button to detect when it is clicked.
btn.addEventListener("click", () => {
  // Step 4: Inside the event listener, get the value of the input field.
  const cityName = cityInput.value;

  if (cityName === "") {
    alert("Please enter a city name.");
    return;
  }

  // Step 5: Make an HTTP request to the OpenWeatherMap API to fetch the weather data.
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP Status Code Error");
      }
      return response.json();
    })
    .then((data) => {
      // Step 7: Update the weather info div with the weather details.
      const weatherDescription = data.weather[0].description;
      const mainTemperature = data.main.temp;
      const windSpeed = data.wind.speed;
      
      weatherInfo.innerHTML = `
        <p>Weather Description: ${weatherDescription}</p>
        <p>Main Temperature: ${mainTemperature}°C</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
      `;
    })
    .catch((error) => {
      if (error.message === "HTTP Status Code Error") {
        alert("City not found. Please enter a valid city name.");
      } else {
        alert("An error occurred while fetching data. Please try again later.");
      }
    });
});
