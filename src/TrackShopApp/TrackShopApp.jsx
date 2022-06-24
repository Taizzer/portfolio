import React from "react";
import "./css/TrackShopApp.css";
import Sidebar from "./components/Sidebar/Sidebar";
import MainCenter from "./components/MainCenter/MainCenter";
import RightSide from "./components/RightSide/RightSide";
const TrackShopApp = () => {
  return (
    <div className="TrackShopApp">
      <div className="Track-Container">
        <Sidebar />
        <MainCenter />
        <RightSide />
      </div>
    </div>
  );
};

export default TrackShopApp;
