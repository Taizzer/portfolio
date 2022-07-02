import styled from "styled-components";
import React from "react";
import { categories } from "../data";
import CategoryItemComp from "./CategoryItemComp";
import { mobile } from "../responsive";
const Container = styled.div`
  color: red;
  display: flex;
  padding: 18px;
  justify-content: space-between;
  border: 3px solid #c3c3c3;
  border-radius: 12px;
  ${mobile({ padding: "0.1px", flexDirection: "column" })}
`;

const CategoriesComp = () => {
  return (
    <Container>
      {categories.map((item) => {
        return <CategoryItemComp key={item.id} item={item} />;
      })}
    </Container>
  );
};

export default CategoriesComp;
