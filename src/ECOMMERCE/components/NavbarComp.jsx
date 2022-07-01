import React from "react";
import styled from "styled-components";

//making styled components for NavbarComp. Capital
const ContainerStyle = styled.div`
  height: 60px;
  background-color: #b4aaaa;
`;
const WrapperNavbar = styled.div`
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid red;
`;
//as creating 3 divs to split nav into 3 section
const Left = styled.div``;
const Center = styled.div``;
const Right = styled.div``;
const NavbarComp = () => {
  return (
    <ContainerStyle>
      <WrapperNavbar>
        {/* <h2 style={{ color: "white", border: "1px solid yellow" }}>
          NavbarComp
        </h2> */}
        <Left>Left</Left>
        <Center>Cetner</Center>
        <Right>right</Right>
      </WrapperNavbar>
    </ContainerStyle>
  );
};

export default NavbarComp;
