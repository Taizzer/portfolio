import styled from "styled-components";
import React from "react";
import { categories } from "../data";
import CategoryItemComp from "./CategoryItemComp";

const Container = styled.div`
  color: red;
  display: flex;
  padding: 18px;
  justify-content: space-between;
  border: 3px solid #c3c3c3;
  border-radius: 12px;
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
