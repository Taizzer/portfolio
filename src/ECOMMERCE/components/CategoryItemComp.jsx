import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
//container parenst flex
// container flex:1
//child image width 100% height 100%

const Container = styled.div`
  /* if imgs are big i nned flex 1 with the other need down */
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  border: 1px solid white;
  max-width: 250px;
  max-height: 300px;
  background: white;
  border-radius: 12px;
`;

const Image = styled.img`
  /* width 100% is need for flex 1 above i removed it */
  /* width: 100%;
  height: 100%; */
  /* our max- */
  max-width: 250px;
  max-height: 300px;
  object-fit: cover;
  ${mobile({ height: "18vh" })}
`;

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  border: none;

  cursor: pointer;
  font-weight: 700;
  padding: 10px;
  background-color: white;
  color: gray;
  border-radius: 5px;
  border: 1px solid black;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  background: #fffefe7c;
  color: black;
  padding: 5px;
  border-radius: 5px;
`;

const CategoryItemComp = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItemComp;
