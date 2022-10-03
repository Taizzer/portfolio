import React from "react";
import { useSelector } from "react-redux";
const WelcomeNav = () => {
  const name = useSelector((state) => state.user.name);
  return (
    <div>
      <p>
        Welcome {""}
        <span
          style={{
            fontWeight: "bold",
            color: "black",
            textTransform: "uppercase",
          }}
        >
          {name}
        </span>
      </p>
    </div>
  );
};

export default WelcomeNav;
