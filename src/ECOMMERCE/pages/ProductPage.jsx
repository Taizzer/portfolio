import React from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import NavbarComp from "../components/NavbarComp";
import AnnouncementComp from "../components/AnnouncementComp";
import FooterComp from "../components/FooterComp";
import NewsletterComp from "../components/NewsletterComp";
import { mobile } from "../responsive";
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 46px;
  display: flex;
  ${mobile({ padding: "8px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 88vh;
  object-fit: cover;
  ${mobile({ height: "35vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 52px;
  ${mobile({ padding: "8px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Descr = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "95%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterHeader = styled.span`
  font-size: 22px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 21px;
  height: 21px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 4px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "98%" })}
`;

const AmountWrap = styled.div`
  display: flex;
  align-items: center;
  font-weight: 800;
`;

const Amount = styled.span`
  width: 31px;
  height: 31px;
  border-radius: 12px;
  border: 2px solid green;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 4px;
`;

const Button = styled.button`
  background-color: #d8d6d6;
  padding: 14px;
  border: 3px solid green;
  cursor: pointer;
  font-weight: 400;
  &:hover {
    background-color: #ebe5e5;
  }
`;

const ProductPage = () => {
  return (
    <Container>
      <AnnouncementComp />
      <NavbarComp />
      <Wrapper>
        <ImgContainer>
          <Image src="https://m.media-amazon.com/images/I/51a4RogKGnL._AC_UL1023_.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title> Pants</Title>
          <Descr>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint harum
            dolore veritatis aut nihil voluptatibus iure at tempora quis saepe.
          </Descr>
          <Price>$ 33</Price>
          <FilterContainer>
            <Filter>
              <FilterHeader>Color</FilterHeader>
              <FilterColor color="red" />
              <FilterColor color="green" />
              <FilterColor color="black" />
            </Filter>
            <Filter>
              <FilterHeader>Size</FilterHeader>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountWrap>
              <RemoveIcon />
              <Amount>1</Amount>
              <AddIcon />
            </AmountWrap>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsletterComp />
      <FooterComp />
    </Container>
  );
};

export default ProductPage;
