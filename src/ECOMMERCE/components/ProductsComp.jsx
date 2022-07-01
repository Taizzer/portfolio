import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import ProductComp from "./ProductComp";

const Container = styled.div``;
const ProductsComp = () => {
  return (
    <Container>
      {/* 2nd method no return   */}
      {popularProducts.map((item) => (
        <ProductComp item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default ProductsComp;
