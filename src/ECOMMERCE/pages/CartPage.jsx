import React from "react";
import styled from "styled-components";
import NavbarComp from "../components/NavbarComp";
import AnnouncementComp from "../components/AnnouncementComp";
import FooterComp from "../components/FooterComp";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CartPage = () => {
  return (
    <Container>
      <NavbarComp />
      <AnnouncementComp />

      <FooterComp />
    </Container>
  );
};

export default CartPage;
