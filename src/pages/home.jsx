
import React from "react";
import icon from "../assets/proposedValue/check.svg"
// ** import components
import Carousel from "../components/heroSection/carrousel";
import BannerHeroSction from "../components/heroSection/BannerHeroSction";
import Modal from "../components/modals/Modal";

export default function Home() {
  return (
    <div className="p-0 border b-0 m-0">
   
    <div>
   
    <Modal/>
    </div>
      <Carousel />
      <BannerHeroSction />
      <section className="mt-20 flex flex-col lg:flex-row justify-between  gap-20 p-10 w-full lg:w-3/4">
        <div className="w-full lg:w-2/3">
        </div>

        <div className="flex flex-col w-full lg:w-3/2 gap-5">
          <p className="text-6xl text-green font-sans font-serif mb-5">
            <span className="text-yellow-btn">Notre proposition</span> de valeurs
          </p>
          <div className="text-gray ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Deleniti cupiditate laborum nihil quos repudiandae! Non, <br />
              rem dolores voluptatum ipsum quas quis, modi eum perspiciatis <br />
              doloremque repellat eaque suscipit. Odio, animi!
            </p>
          </div>
          <div className="flex text-gray  mt-10 gap-20">
            <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712325592/icons/Icon4_wz0mvz.svg" alt="icon 1" />
            <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712325591/icons/icon1_onb3hw.svg" alt="icon 2" />
            <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712325590/icons/icon2_glr12q.svg" alt="icon 3" />
            <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712325589/icons/icon3_jbpmqj.svg" alt="icon 4" />
          </div>
          <div>
            <ul className="flex text-gray  flex-col gap-5">
              <li className="flex items-center gap-2"> <img src={icon} alt="" />Facilitant les transactions commerciales entre producteurs, transformateurs, distributeurs et consommateurs.</li>
              <li className="flex items-center gap-2"> <img src={icon} alt="" />Promouvant l'agriculture locale et durable en mettant en avant les produits de saison et en favorisant les échanges entre producteurs locaux et consommateurs</li>
              <li className="flex items-center gap-2"> <img src={icon} alt="" />les produits de saison et en favorisant les échanges entre producteurs locaux et consommateurs</li>
            </ul>
          </div>
          <button className="border p-5  rounded-lg text-white w-48 bg-green">Pour en savoir plus </button>
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-center relative justify-center">
          <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1714220251/Projet%20Agroconnect/Default_Imagine_a_scene_where_an_African_female_farmer_works_i_1_qngz89.jpg" alt="" className="w-[95%]" />
        </div>

       <div>
        <ul>

        </ul>
       </div>


      </section>
    </div>
  );
}
