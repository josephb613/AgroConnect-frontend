import React from "react";
// ** import components
import Footer from "../components/Footer/footer";
import Testimonial from "../components/home components/Testimonial/Testimony";
import Carousel from "../components/heroSection/carrousel";
import BannerHeroSction from "../components/heroSection/BannerHeroSction";
import FaqsList from "../components/FaqsList";




export default function Home() {
  return (
    <div className="p-0 b-0 m-0">
      <Carousel />
      <BannerHeroSction />
      <Testimonial />
      <FaqsList />

    </div>
  );
}
