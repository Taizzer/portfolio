import styled from "styled-components";
import React from "react";
import { categories } from "../data";
import CategoryItemComp from "./CategoryItemComp";

const Container = styled.div`
  color: red;
  display: flex;
  padding: 20px;
  justify-content: space-between;
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
