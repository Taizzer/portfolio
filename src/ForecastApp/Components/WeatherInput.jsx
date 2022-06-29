import React, { useState, useEffect, useRef } from "react";
import "../ForecastApp.css";
import axios from "axios";

const WeatherInput = () => {
  // auto select weather input when render
  const refFocusInput = useRef(null);
  // null = false, keep the state false untill data fetched first
  //if null removed yes still works good,but dont remove null.
  const [weather2, setWeather2] = useState(null);
  const [weatherInput, setWeatherInput] = useState("");
  //const [weatherClick, setWeatherClick] = useState("finland");
  //const query2 = "texas";
  // console.log("we input");
  // console.log(weather2);
  // load default data
  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=finland&days=2&aqi=no`
      )
      .then((data) => {
        setWeather2(data.data);
      })
      .catch((err) => console.log(err));
    refFocusInput.current.focus();
  }, []);

  const weatherQuery = (e) => {
    setWeatherInput(e.target.value);
    // console.log(e.target.value);
  };

  const weatherSub = () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=${weatherInput}&days=2&aqi=no`
      )
      .then((data) => {
        setWeather2(data.data);
      })
      .catch((err) => console.log(err));
    setWeatherInput("");
  };
  return (
    <div className="ForecastApp3">
      <div className="forecastContainer">
        {/* <p>forecastapp</p> */}
        {/* weather is true then && render the 2nd  {true && render this} */}
        <div className="weatherWrap input-weatherWrap-modify  ">
          <div className="weather-input">
            <input
              placeholder="finland"
              onChange={weatherQuery}
              value={weatherInput}
              ref={refFocusInput}
              type="text"
            />
            <button onClick={weatherSub}>search</button>
          </div>

          {weather2 && (
            <div className="weatherWrapInside  ">
              {/* <input type="text" /> */}
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
