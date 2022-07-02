import React from "react";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductListPage from "./pages/ProductListPage";
import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";

//rfc shortcut page starter or rafce
const ECOMMERCEAPP = () => {
  return (
    <div style={{ paddingTop: 10 }}>
      {/* <HomePage /> */}
      {/* <ProductListPage /> */}
      {/* <ProductPage /> */}
      {/* <RegisterPage /> */}
      <LoginPage />
    </div>
  );
};

export default ECOMMERCEAPP;
