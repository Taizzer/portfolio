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

const App = () => {
  return (
    <div className="App">
      <div className="App-Container">
        <MainNav />
        <Switch>
          {/* <Add /> */}
          <Route path="/shopapp">
            <TrackShopApp />
          </Route>

          {/* TEST */}
          <Route path="/del">
            <TestAppDel />
          </Route>
          {/* TEST */}

          {/* TEST */}
          <Route path="/" exact>
            <TestAppDelHome />
          </Route>
        </Switch>
        {/* TEST */}
      </div>
    </div>
  );
};
export default App;
