import React from "react";
import "./RightSide.css";
import RecentUpdate from "../RecentUpdate/RecentUpdate";

const RightSide = () => {
  return (
    <div className="RightSide">
      <h4>Updates</h4>
      <RecentUpdate />
    </div>
  );
};

export default RightSide;
