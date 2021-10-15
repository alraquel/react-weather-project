import "./App.css";
import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handelSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "caaf369f7f0bcc9de1bbbacc5ba83369";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div weather-app>
            <form className="search-form">
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Type a city..."
                    autofocus="on"
                    autocomplete="off"
                    id="city-input"
                    className="form-control shadow-sm"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="form-control btn btn-primary shadow-sm"
                  />
                </div>
              </div>
            </form>
          </div>

          <img src={weatherData.imgUrl} alt="clear" />

          <p id="sunny"></p>

          <h1> {response.data.name} </h1>

          <h2> {weatherData.date}</h2>

          <div className="row">
            <div className="clearfix">
              <span></span>
            </div>

            <div className="float-right">
              <span className="units"> {response.data.main.temp} </span>
            </div>
          </div>

          <ul>
            <li>
              Humidity: <span></span> {response.data.main.humidity}
            </li>
            <li>
              Wind: <span></span> {response.data.wind.speed}
            </li>
          </ul>

          <p className="day"></p>

          <div className="forecast"></div>
        </div>

        <p className="coded">
          <a href="https://github.com/alraquel"> Coded</a>
          by Raquel
        </p>
      </div>
    );
  }
}
