import React from "react";
import AnnouncementComp from "../components/AnnouncementComp";
import CategoriesComp from "../components/CategoriesComp";
import FooterComp from "../components/FooterComp";
import NavbarComp from "../components/NavbarComp";
import NewsletterComp from "../components/NewsletterComp";
import ProductsComp from "../components/ProductsComp";
import SliderComp from "../components/SliderComp";
const HomePage = () => {
  return (
    <div>
      <AnnouncementComp />
      <NavbarComp />
      <SliderComp />
      <CategoriesComp />
      <ProductsComp />
      <NewsletterComp />
      <FooterComp />
    </div>
  );
};

export default HomePage;
