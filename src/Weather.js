import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [icon, setIcon] = useState(null);

  function showWeather(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather.description);
    setHumidity(response.data.main.humidity);
    setWindSpeed(response.data.wind.speed);
    setIcon(response.data.weather.icon);
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a05960e74660eda28aaa507eb0f43896&units=metric
  `;
  axios.get(url).then(showWeather);

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(
      <ul>
        <li>Temperature: {Math.round(temperature)}°C</li>
        <li>Description: {description}</li>
        <li>Humidity: {humidity}%</li>
        <li>Wind speed: {Math.round(windSpeed * 3.6)}kph</li>
        <li>{icon}</li>
      </ul>
    );
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search a city..."
          onChange={updateCity}
        />
        <input type="submit" value="Submit" />
      </form>
      <p>{message}</p>
      <footer>
        This project was coded by
        <a
          href="https://github.com/erinantonia"
          target="_blank"
          rel="noreferrer"
        >
          Erin Allen,
        </a>
        code hosted
        <a
          href="https://github.com/erinantonia/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          on Github
        </a>
        and website hosted
        <a
          href="https://master--react-weather-app-ea.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          on Netlify
        </a>
      </footer>
    </div>
  );
}
