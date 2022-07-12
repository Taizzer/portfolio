import React, { useState, useEffect } from "react";
import "../ForecastApp.css";
import axios from "axios";

const WeatherAll = ({ propquery }) => {
  // null = false, keep the state false untill data fetched first
  //if null removed yes still works good,but dont remove null.
  const [weather, setWeather] = useState(null);
  //const query = "london";

  useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=${propquery}&days=2&aqi=no`
      )
      .then((data) => {
        setWeather(data.data);
        // console.log("data", data);
        // console.log("data2", data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="ForecastApp2">
      <div className="forecastContainer">
        {/* <p>forecastapp</p> */}
        {/* weather is true then && render the 2nd  {true && render this} */}
        <div className="weatherWrap   ">
          {weather && (
            <div className="weatherWrapInside  ">
              <div className="headLocation-div">
                <span className="headLocation">
                  {weather.location.country},{" "}
                </span>
                <span className="headLocation weather-city">
                  {weather.location.name}
                </span>
              </div>

              {/* empty div */}
              <div className="div-temp">
                <span className="temp-span"> {weather.current.temp_f} F</span>
                <img src={weather.current.condition.icon} alt="" />
              </div>

              <p className="details12">{weather.current.condition.text}</p>
              <p className="details12">
                Humidity{" "}
                <span className="humidity-temp">
                  {weather.current.humidity}
                </span>{" "}
              </p>
              <p className="details12">Local {weather.location.localtime}</p>
              {/* <p>{propquery}</p> */}
            </div>
          )}
        </div>
        {/* weather wrap end */}
      </div>
    </div>
  );
};

export default WeatherAll;
