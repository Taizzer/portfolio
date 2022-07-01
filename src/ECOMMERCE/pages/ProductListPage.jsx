import React from "react";
import styled from "styled-components";
import NavbarComp from "../components/NavbarComp";
import AnnouncementComp from "../components/AnnouncementComp";
import FooterComp from "../components/FooterComp";
import NewsletterComp from "../components/NewsletterComp";
import ProductsComp from "../components/ProductsComp";

const Container = styled.div``;

const Title = styled.h1`
  margin: 18px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 18px;
`;

const FilterText = styled.span`
  font-size: 18px;
  font-weight: 400;
  margin-right: 18px;
`;

const Select = styled.select`
  padding: 8px;
  margin-right: 18px;
`;
const Option = styled.option``;
const ProductListPage = () => {
  return (
    <Container>
      <NavbarComp />
      <AnnouncementComp />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>FilterProducts:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>Blue</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Yellow</Option>
            <Option>Red</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>SortProducts:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price(asc)</Option>
            <Option>Price(desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <ProductsComp />
      <NewsletterComp />
      <FooterComp />
    </Container>
  );
};

export default ProductListPage;
