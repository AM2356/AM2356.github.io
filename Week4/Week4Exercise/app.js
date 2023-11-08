// Assiging a constant to the API key
const apiKey = "0a053b431fb2c93051102a5a9e59c951";

// Creating variables that will store information for city input, the button, and weather information.
const cityInput = document.getElementById("cityInput");
const btn = document.getElementById("btn");
const weatherInfo = document.getElementById("weather-info");

// Adding event listener to to detect the click action when button is clicked
btn.addEventListener("click", () => {
  // 'cityName' is assigned as the input value of the city
  const cityName = cityInput.value;

  // Giving message when no city name is entered
  if (cityName === "") {
    alert("Please enter a city name.");
    return;
  }

  // This constant makes an HTTP request to OpenWeatherMap to get the weather info.
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  
  //Error messages 
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP Status Code Error");
      }
      return response.json();
    })
    .then((data) => {
      //  Update the weather info div with the weather details.
      const weatherDescription = data.weather[0].description;
      const mainTemperature = data.main.temp;
      const windSpeed = data.wind.speed;
      
      const cityWeatherInfo = document.createElement("div");
      cityWeatherInfo.innerHTML = `
        <p>City: ${cityName}</p>
        <p>Weather Description: ${weatherDescription}</p>
        <p>Main Temperature: ${mainTemperature}°C</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
      `;
      // Append the new city's weather information to the weatherInfo container
      weatherInfo.appendChild(cityWeatherInfo);
    })
    .catch((error) => {
      if (error.message === "HTTP Status Code Error") {
        alert("City not found. Please enter a valid city name.");
      } else {
        alert("An error occurred while fetching data. Please try again later.");
      }
    });

  // Clear the input field after fetching weather information
  cityInput.value = "";
});
