import React from "react";
import styled from "styled-components";

const Container = styled.div`
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
  /* width: 100%;
  height: 100%; */
  /* our max- */
  max-width: 250px;
  max-height: 300px;
  object-fit: cover;
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
