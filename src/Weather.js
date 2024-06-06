import React from "react";
import axios from "axios";

// footer links, how to make it look right without being functional?

export default function Weather() {
  return (
    <div className="Weather">
      <body>
        <div class="weather-app">
          <header>
            <form class="search-form" id="search-form">
              <input
                type="search"
                placeholder="Enter a city..."
                required
                id="search-form-input"
                class="search-form-input"
              />
              <input type="submit" value="Search" class="search-form-button" />
            </form>
          </header>

          <main>
            <div class="weather-app-data">
              <div>
                <h1 class="weather-app-city" id="city">
                  Auckland
                </h1>
                <p class="weather-app-details">
                  <span id="time"></span> <span id="description"></span>
                  <br />
                  Humidity: <strong id="humidity"></strong> Wind:
                  <strong id="wind-speed"></strong>
                </p>
              </div>
              <div class="weather-app-temperature-container">
                <div id="icon"></div>
                <div class="weather-app-temperature" id="temperature">
                  17
                </div>
                <div class="weather-app-unit">°C</div>
              </div>
            </div>
            <div class="weather-forecast" id="forecast"></div>
          </main>

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
              href="https://shecodes-vanilla-weather-app.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              on Netlify
            </a>
          </footer>
        </div>
      </body>
    </div>
  );
}
