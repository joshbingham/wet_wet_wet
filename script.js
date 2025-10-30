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

