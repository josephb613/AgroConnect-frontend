import React from "react";
import icon from "../assets/proposedValue/check.svg";
// ** import components
import Carousel from "../components/heroSection/carrousel";
import BannerHeroSction from "../components/heroSection/BannerHeroSction";
import Modal from "../components/modals/Modal";
import CardGrid from "../components/CardGrid";
import HomeCarrouselPromo from "../components/promotion/HomeCarrouselPromo";

export default function Home() {
  return (
    <div className="p-0 border b-0 m-0">
      <div>
        <Modal />
      </div>
      <Carousel />
      <BannerHeroSction />
      <br />
      <br />
      <div>

      <CardGrid  />
      <br />
      <HomeCarrouselPromo/>
      </div>
   
    </div>
  );
}

