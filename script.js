/*
import { WEATHERSTACK_API_KEY as apiKey } from './config.js';

const city = "London";
const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(`Weather in ${data.location.name}: ${data.current.temperature}°C`);
    console.log(`Conditions: ${data.current.weather_descriptions[0]}`);
  })
  .catch(err => console.error(err));

*/

// Note: The above code is commented out for future use.

// Current functionality is focused on static content display.


// Call the function to display weather info

document.addEventListener('DOMContentLoaded', () => {
    const weatherDiv = document.getElementById('weather-result');
    const button = document.getElementById('button');

    function displayWeatherInfo() {
        weatherDiv.innerHTML = 
            `<h2>Current Weather</h2>
            <p>Temperature: 15°C</p>
            <p>Conditions: Partly Cloudy</p>`;
    }

    button.addEventListener('click', (event) => {
        event.preventDefault();
        displayWeatherInfo();
    });
});
