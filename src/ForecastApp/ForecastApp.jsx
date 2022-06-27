import React, { useState, useEffect } from "react";
import "./ForecastApp.css";
import axios from "axios";
import WeatherLondon from "./Components/WeatherLondon";
import WeatherInput from "./Components/WeatherInput";
const ForecastApp = () => {
  return (
    <div className="ForecastApp">
      <div>
        <p className="weatherWrap">
          github gggggggggfsdfsdfsdfsdgggggggssssssssss
        </p>
      </div>
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
  );
};

export default ForecastApp;
