import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="food-Categories">
      <p
        style={{
          border: "1px solid red",
          borderRadius: "5px",
          padding: "5px",
          color: "red",
          fontWeight: 400,
          letterSpacing: "1px",
        }}
      >
        Filter By
      </p>
      {categories.map((category, index) => {
        return (
          <div key={index}>
            <button onClick={() => filterItems(category)}>{category}</button>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
