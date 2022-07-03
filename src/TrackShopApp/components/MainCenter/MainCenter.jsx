import React from "react";
import "./MainCenter.css";
import Cards from "../Cards/Cards";
import BasicTable from "../Table/Table";
const MainCenter = () => {
  return (
    <div className="MainCenter">
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
          https://github.com/Taizzer/portfolio/tree/main/src/TrackShopApp
        </a>
      </code>
      <Cards />

      <BasicTable />
    </div>
  );
};

export default MainCenter;
