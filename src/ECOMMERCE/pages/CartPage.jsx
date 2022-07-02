import React from "react";
import styled from "styled-components";
import NavbarComp from "../components/NavbarComp";
import AnnouncementComp from "../components/AnnouncementComp";
import FooterComp from "../components/FooterComp";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 18px;
`;

const Title = styled.h1`
  font-weight: 400;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px;
`;

const TopButton = styled.button`
  cursor: pointer;
  font-weight: 600;
  padding: 8px;
  border: ${(props) => props.type === "full" && "none"};
  background-color: ${(props) =>
    props.type === "full" ? "black" : "transparent"};
  color: ${(props) => props.type === "full" && "white"};
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  margin: 0px 8px;
  cursor: pointer;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 180px;
`;

const Details = styled.div`
  padding: 18px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #c7c7c7;
  border: none;
  height: 2px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 400;
`;

const SummItem = styled.div`
  margin: 28px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "400"};
  font-size: ${(props) => props.type === "total" && "20px"};
`;

const SummItemText = styled.span``;

const SummItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const CartPage = () => {
  return (
    <Container>
      <AnnouncementComp />
      <NavbarComp />

      <Wrapper>
        <Title>YOUR items</Title>
        <Top>
          <TopButton>CONTINUE</TopButton>
          <TopTexts>
            <TopText>Shopping.. items(2)</TopText>
            <TopText> Wishlist (1)</TopText>
          </TopTexts>
          <TopButton type="full">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://m.media-amazon.com/images/I/81ue5-58RmL._AC_UX679_.jpg" />
                <Details>
                  <ProductName>
                    <b>Product:</b> SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 258963444
                  </ProductId>
                  <ProductColor color="blue" />
                  <ProductSize>
                    <b>Size:</b> 33.50
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon />
                  <ProductAmount>2</ProductAmount>
                  <RemoveIcon />
                </ProductAmountContainer>
                <ProductPrice>$ 25</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://m.media-amazon.com/images/I/61L+xygbp0S._AC_UX569_.jpg" />
                <Details>
                  <ProductName>
                    <b>Product:</b> T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 147852369
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon />
                  <ProductAmount>1</ProductAmount>
                  <RemoveIcon />
                </ProductAmountContainer>
                <ProductPrice>$ 9</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle> SUMMARY</SummaryTitle>
            <SummItem>
              <SummItemText>totall</SummItemText>
              <SummItemPrice>$ 60</SummItemPrice>
            </SummItem>
            <SummItem>
              <SummItemText> Shipping</SummItemText>
              <SummItemPrice>$ 4.99</SummItemPrice>
            </SummItem>
            <SummItem>
              <SummItemText> Discount</SummItemText>
              <SummItemPrice>$ -5.90</SummItemPrice>
            </SummItem>
            <SummItem type="total">
              <SummItemText>Total</SummItemText>
              <SummItemPrice>$ 70</SummItemPrice>
            </SummItem>
            <Button>CHECKOUT</Button>
          </Summary>
        </Bottom>
      </Wrapper>

      <FooterComp />
    </Container>
  );
};

export default CartPage;
