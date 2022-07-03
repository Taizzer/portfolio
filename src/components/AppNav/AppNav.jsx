import React from "react";
import "./AppNav.css";
import Inav1 from "../../imgs/Inav1.PNG";
import weatherapi from "../../imgs/weatherapi.png";
import foodmenu from "../../imgs/foodmenu.png";
import trackchart from "../../imgs/trackchart.png";
import ecom from "../../imgs/ecom.png";
import { Link } from "react-router-dom";
const MainNav = () => {
  return (
    <div className="MainNav">
      <div className="MainNavWrap">
        <ul className="mainNavUl">
          <li>
            <img src={trackchart} alt="" />
            {/* <span>image1</span> */}
            <p>
              <Link to="/">Chart App</Link>
            </p>
          </li>

          <li>
            <img src={weatherapi} alt="" />
            {/* <span>image2</span> */}
            <p>
              <Link to="weatherapi">Weather Api</Link>
            </p>
          </li>
          <li>
            <img src={foodmenu} alt="" />
            {/* <span>image3</span> */}
            <p>
              <Link to="foodApp">Restaurant</Link>
            </p>
          </li>
          <li>
            <img src={ecom} alt="" />
            {/* <span>image4</span> */}
            <p>
              <Link to="ecommerce">E-Commerce</Link>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainNav;
