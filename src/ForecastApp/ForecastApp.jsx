import React, { useState, useEffect } from "react";
import "./ForecastApp.css";
import axios from "axios";
import WeatherLondon from "./Components/WeatherLondon";
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
        <WeatherLondon propquery="romania" />
        <WeatherLondon propquery="london" />

        <WeatherLondon propquery="germany" />
        <WeatherLondon propquery="netherland" />
        <WeatherLondon propquery="france" />
        <WeatherLondon propquery="spain" />
        <WeatherLondon propquery="italy" />
        <WeatherLondon propquery="ireland" />
        <WeatherLondon propquery="sweden" />
        <WeatherLondon propquery="denmark" />
        <WeatherLondon propquery="belgium" />
        <WeatherLondon propquery="california" />
        <WeatherLondon propquery="miami" />
      </div>
    </div>
  );
};

export default ForecastApp;
