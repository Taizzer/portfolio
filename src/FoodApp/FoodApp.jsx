import React, { useState } from "react";
import Categories from "./Components/Categories";
import Menu from "./Components/Menu";
// export by default  we name it items as we want.
import items from "./data";
import "./FoodApp.css";

//new set()  give me unique value remove repeated names also it will give reutn an object.
//const allCategories = items.map((item) => item.category);
//console.log(allCategories);
//it was this with array [] when we used new set() return {} object.

//[ 'all',...spread operator]
const allCategories = ["All", ...new Set(items.map((item) => item.category))];

console.log(allCategories);

const FoodApp = () => {
  // not this useState([items]); (nu)
  //the correct useState(items);
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategoreis] = useState(allCategories);
  // what ever i pass into (category) return
  const filterItems = (category) => {
    if (category === "All") {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);

    setMenuItems(newItems);
  };
  return (
    <div className="FoodApp">
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

      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </div>
  );
};

export default FoodApp;
