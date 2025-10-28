// API key
require('dotenv').config({ path: './weather.env' });
const apiKey = process.env.WEATHERSTACK_API_KEY;

const fetch = require('node-fetch'); // only needed if using Node.js <18

const city = "London";
const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(`Weather in ${data.location.name}: ${data.current.temperature}°C`);
    console.log(`Conditions: ${data.current.weather_descriptions[0]}`);
  })
  .catch(err => console.error("Error fetching weather:", err));