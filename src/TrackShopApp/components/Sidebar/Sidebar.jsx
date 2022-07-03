import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../imgs/gimg.png";
//https://react-icons.github.io/react-icons/
import { FaBeer } from "react-icons/fa";
// https://iconscout.com/unicons/explore/line
//Note: you can add more than icon with ,
import {
  UilHome,
  UilEstate,
  UilSignOutAlt,
  UilBars,
} from "@iconscout/react-unicons";
import { SidebarData } from "../../../Data/Data";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expand, setExpand] = useState(true);
  return (
    <div className="div-side-container">
      <>
        <div className="bar">
          <UilBars
            onClick={() => setExpand(!expand)}
            style={{ cursor: "pointer", background: "" }}
          />
        </div>
        <div
          className={("Sidebar", expand ? "sidebarMobile" : "sidebarMoHide")}
        >
          {/* Logo */}
          <div className="logo">
            <img className="img24px" src={Logo} alt="" />
            <span>
              L<span>o</span>go
            </span>
          </div>

          {/* H menu */}
          <div className="menu">
            {SidebarData.map((item, index) => {
              return (
                <div
                  className={
                    selected === index ? "menuItem active" : "menuItem"
                  }
                  key={index}
                  onClick={() => setSelected(index)}
                >
                  <item.icon />
                  <span>{item.heading}</span>
                </div>
              );
            })}

            <div className="menuItem">{/* <UilSignOutAlt /> */}</div>

            {/* the bottom div for
div menu
div sidebar

 */}
          </div>
        </div>
      </>
    </div>
  );
};

export default Sidebar;
