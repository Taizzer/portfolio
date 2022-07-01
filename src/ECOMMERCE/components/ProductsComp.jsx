import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import ProductComp from "./ProductComp";

const Container = styled.div`
  padding: 18px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
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
