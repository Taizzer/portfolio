import React from "react";
import styled from "styled-components";

//making styled components for NavbarComp
const ContainerStyle = styled.div`
  height: 60px;
  background-color: #000000;
`;
const NavbarComp = () => {
  return (
    <ContainerStyle>
      <h2>NavbarComp</h2>
    </ContainerStyle>
  );
};

export default NavbarComp;
