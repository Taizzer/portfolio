import React from "react";
import "./MainCenter.css";
import Cards from "../Cards/Cards";
import BasicTable from "../Table/Table";
const MainCenter = () => {
  return (
    <div className="MainCenter">
      {/* <h4>Dashboard</h4> */}
      <Cards />

      <BasicTable />
    </div>
  );
};

export default MainCenter;
