import React from "react";
import "./AppNav.css";
import Inav1 from "../../imgs/Inav1.PNG";
import { Link } from "react-router-dom";
const MainNav = () => {
  return (
    <div className="MainNav">
      <div className="MainNavWrap">
        <ul className="mainNavUl">
          <li>
            <img src={Inav1} alt="" />
            {/* <span>image1</span> */}
            <p>
              <Link to="/">Home1</Link>
            </p>
          </li>

          <li>
            <img src={Inav1} alt="" />
            {/* <span>image2</span> */}
            <p>
              <Link to="del">del</Link>
            </p>
          </li>
          <li>
            <img src={Inav1} alt="" />
            {/* <span>image3</span> */}
            <p>
              <Link to="shopapp">3</Link>
            </p>
          </li>
          <li>
            <img src={Inav1} alt="" />
            {/* <span>image4</span> */}
            <p>
              <Link to="">4</Link>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainNav;
