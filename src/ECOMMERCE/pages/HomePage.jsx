import React from "react";
import AnnouncementComp from "../components/AnnouncementComp";
import CategoriesComp from "../components/CategoriesComp";
import NavbarComp from "../components/NavbarComp";
import SliderComp from "../components/SliderComp";
const HomePage = () => {
  return (
    <div>
      <AnnouncementComp />
      <NavbarComp />
      <SliderComp />
      <CategoriesComp />
    </div>
  );
};

export default HomePage;
