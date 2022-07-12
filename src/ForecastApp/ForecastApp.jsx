import React, { useState, useEffect } from "react";
import "./ForecastApp.css";
import axios from "axios";
import WeatherAll from "./Components/WeatherAll";
import WeatherInput from "./Components/WeatherInput";
const ForecastApp = () => {
  return (
    <div>
      <code
        style={{
          background: "white",
          padding: "0.3rem",
          borderRadius: "5px",
          marginLeft: "10px",
        }}
      >
        <a
          target="_blank"
          href="https://github.com/Taizzer/portfolio/tree/main/src/TrackShopApp"
        >
          https://github.com/Taizzer/portfolio/tree/main/src/ForecastApp
        </a>
      </code>
      <div className="ForecastApp">
        <div>{/* <p className="weatherWrap"></p> */}</div>
        <WeatherInput />
        <WeatherAll propquery="romania" />
        <WeatherAll propquery="london" />

        <WeatherAll propquery="germany" />
        <WeatherAll propquery="netherland" />
        <WeatherAll propquery="france" />
        <WeatherAll propquery="spain" />
        <WeatherAll propquery="italy" />
        <WeatherAll propquery="ireland" />
        <WeatherAll propquery="sweden" />
        <WeatherAll propquery="denmark" />
        <WeatherAll propquery="belgium" />
        <WeatherAll propquery="california" />
        <WeatherAll propquery="miami" />
      </div>
    </div>
  );
};

export default ForecastApp;
