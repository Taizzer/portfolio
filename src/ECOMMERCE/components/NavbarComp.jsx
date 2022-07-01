import React from "react";
import styled from "styled-components";
// import material ui icons
import SearchIcon from "@mui/icons-material/Search";
//https://mui.com/material-ui/react-badge/
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

//making styled components for NavbarComp. Capital
const ContainerStyle = styled.div`
  height: 60px;
  background-color: #ffffff;
  border-bottom: 1px solid #000000;
`;
const WrapperNavbar = styled.div`
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
`;
//as creating 3 divs to split nav into 3 section
// Left Section of Navbar
const Left = styled.div`
  //width: 33.33%;
  //expand as you want flex 1 added nav responsive
  flex: 1;
  display: flex;
  align-items: center;
`;
const Languages = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #d5d4d4;
  margin-left: 10px;
  padding: 2px;
`;
const Input = styled.input`
  border: none;
  outline: none;
`;
// center Section of Navbar
const Center = styled.div`
  //width: 33.33%;
  flex: 1;
  /* added flex may not need it */
  display: flex;

  justify-content: center;
`;

const Logo = styled.h2`
  font-weight: 100;
  cursor: pointer;
`;

// right Section of Navbar
const Right = styled.div`
  //width: 33.33%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  margin-left: 25px;
  font-size: 14px;
  cursor: pointer;
`;
const NavbarComp = () => {
  return (
    <ContainerStyle>
      <WrapperNavbar>
        {/* <h2 style={{ color: "white", border: "1px solid yellow" }}>
          NavbarComp
        </h2> */}
        <Left>
          {/* //span languages */}
          <Languages>EN</Languages>
          {/* //div for search input */}
          <SearchContainer>
            <Input />
            <SearchIcon style={{ color: "C7c7c7", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Logo</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign in</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              {/* <MailIcon color="action" /> */}
              <ShoppingCartOutlinedIcon />
            </Badge>{" "}
          </MenuItem>
        </Right>
      </WrapperNavbar>
    </ContainerStyle>
  );
};

export default NavbarComp;
