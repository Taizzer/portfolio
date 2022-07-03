import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="Food-Menu">
      {items.map((item) => {
        const { category, price, id, title, desc, img } = item;
        return (
          <div className="food-div-wrap" key={id}>
            {/* <h2>{item.title}</h2> */}
            <img src={img} alt="no img" />
            <p className="food-title">{title}</p>
            <p className="category-detail">{category}</p>
            <p className="food-desc">{desc}</p>
            <p className="title-price">${price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
