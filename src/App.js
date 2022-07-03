import React, { useState } from "react";
// import Add from "./Add/Add.js";
import "./styles.css";
import Add from "./AddApp/Add";
import "./style.scss";
import "./styleDark.scss";
import Colors from "./Colors";
import ToggleBtn from "./ToggleBtn";
import { Switch, Route } from "react-router-dom";
import TrackShopApp from "./TrackShopApp/TrackShopApp";
import MainNav from "./components/AppNav/AppNav";
import TestAppDel from "./TestAppDel";
import TestAppDelHome from "./TestAppDelHome";
import ForecastApp from "./ForecastApp/ForecastApp";
import FoodApp from "./FoodApp/FoodApp";
import ECOMMERCEAPP from "./ECOMMERCE/ECOMMERCEAPP";
//rfc shortcut page starter or rafce
const App = () => {
  return (
    <div className="App">
      <div className="App-Container">
        <MainNav />
        {/* <Add /> */}
        {/* <ECOMMERCEAPP /> */}
        {/* <FoodApp /> */}
        <Switch>
          <Route path="/" exact>
            <TrackShopApp />
          </Route>

          <Route path="/weatherapi">
            <ForecastApp />
          </Route>

          {/* TEST */}
          <Route path="/foodApp">
            <FoodApp />
          </Route>
          {/* TEST */}

          {/* TEST */}
          <Route path="/ecommerce">
            <ECOMMERCEAPP />
          </Route>
        </Switch>
        {/* TEST */}
      </div>
    </div>
  );
};
export default App;
