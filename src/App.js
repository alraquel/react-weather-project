import "./App.css";
import React from "react";

export default function Weather() {
  let weatherData = {
    city: "Lisbon",
    date: "Tuesday 18:00",
    humidity: "0%",
    wind: "10 M/H",
    temperature: "25 ºC",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
  };
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

        <h1> {weatherData.city} </h1>

        <h2> {weatherData.date}</h2>

        <div className="row">
          <div className="clearfix">
            <span></span>
          </div>

          <div className="float-right">
            <span className="units"> {weatherData.temperature} </span>
          </div>
        </div>

        <ul>
          <li>
            Humidity: <span></span> {weatherData.humidity}
          </li>
          <li>
            Wind: <span></span> {weatherData.wind}
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
