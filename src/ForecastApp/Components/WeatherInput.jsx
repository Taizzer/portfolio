import React, { useState, useEffect } from "react";
import "../ForecastApp.css";
import axios from "axios";

//const api = http://api.weatherapi.com/v1/current.json?key=cf686a274556414c876174526222606&q=London&aqi=no

//http://api.weatherapi.com/v1/forecast.json?key=cf686a274556414c876174526222606&q=London&days=2&aqi=no&alerts=no
const WeatherInput = () => {
  // null = false, keep the state false untill data fetched first
  //if null removed yes still works good,but dont remove null.
  const [weather2, setWeather2] = useState(null);
  const query2 = "texas";
  console.log("we input");
  console.log(weather2);
  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=cf686a274556414c876174526222606&q=${query2}&days=2&aqi=no`
      )
      .then((data) => {
        setWeather2(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="ForecastApp3">
      <div className="forecastContainer">
        {/* <p>forecastapp</p> */}
        {/* weather is true then && render the 2nd  {true && render this} */}
        <div className="weatherWrap   ">
          {weather2 && (
            <div className="weatherWrapInside  ">
              <div className="headLocation-div">
                <span className="headLocation">
                  {weather2.location.country},{" "}
                </span>
                <span className="headLocation weather-city">
                  {weather2.location.name}
                </span>
              </div>

              <div className="div-temp">
                <span className="temp-span"> {weather2.current.temp_f} F</span>
                <img src={weather2.current.condition.icon} alt="" />
              </div>

              <p className="details12">{weather2.current.condition.text}</p>
              <p className="details12">
                Humidity{" "}
                <span className="humidity-temp">
                  {weather2.current.humidity}
                </span>{" "}
              </p>
              <p className="details12">Local {weather2.location.localtime}</p>
              {/* <p>{propquery}</p> */}
            </div>
          )}
        </div>
        {/* weather wrap end */}
      </div>
    </div>
  );
};

export default WeatherInput;
