import React from "react";
// ** import components

import Footer from "../components/Footer/footer";
import Testimonial from "../components/home components/Testimonial/Testimony";
import CarouselSection from "../components/heroSection/carrousel";
import BannerHeroSction from "../components/heroSection/BannerHeroSction";
import FaqsList from "../components/FaqsList";
import Header from "../components/header/Header";

export default function Home() {
  return (
    <div className="p-0 b-0 m-0">
      <Header />
      <CarouselSection />
      <BannerHeroSction />
      <Testimonial />
      <FaqsList />
      <Footer />
    </div>
  );
}
