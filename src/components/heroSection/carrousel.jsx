
import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";

import './Responsive.css'; // Assurez-vous d'importer votre fichier CSS ici

// Default theme
import '@splidejs/react-splide/css';

export default function Carrousel() {
  const slidesData = [
    {
      imgUrl: "https://res.cloudinary.com/dqrs3xyic/image/upload/v1712914072/Banner%20publicite/banner_1_ajtal6.jpg",
      // iconUrl: "",
      // text: "BIENVENUE SUR AGROCONNECT ",
      // button: "Aller au Marche",
     
      // sommaire: "l'agriculture de demain",
      // description: "lorem ipsum"
    },
    {
      imgUrl: "https://res.cloudinary.com/dqrs3xyic/image/upload/v1712914072/Banner%20publicite/banner_2_zwpsoa.jpg",
      // title: "",
      // sommaire: "",
      // description: ""
    },
    {
      imgUrl: "https://res.cloudinary.com/dqrs3xyic/image/upload/v1712914072/Banner%20publicite/banner_2_2_ly9udz.jpg",
      // title: "",
      // sommaire: "",
      // descrihttps://res.cloudinary.com/dqrs3xyic/image/upload/v1712914072/Banner%20publicite/banner_1_ajtal6.jpgption: ""
    },
    // {
    //   imgUrl: "",
    //   // title: "",
    //   // sommaire: "",
    //   // description: ""
    // }
  ];

  return (
    <Splide
      options={{
        rewind: true,
        autoplay: true,
        interval: 4500,
        arrows: false
      }}>
      {slidesData.map((slide, index) => (
        <SplideSlide key={index}>
          <div className="relative ">
            <img src={slide.imgUrl} alt={`Image ${index + 1}`}/>
          
            <div className="absolute flex-col top-0 left-0 right-0 bottom-0 flex justify-center items-center  text-white">

            <div className=' text-justify h-56 flex flex-col justify-center -mt-28 -ml-[49%] absolute'>
            <p className=" text-xs absolute -mt-48">{slide.text}</p>

            <p className=" text-6xl font-bold mt-5">{slide.sommaire}</p>
            <img src={slide.iconUrl} className='absolute -mt-[17%] ml-[52%] size-24' />
            </div>
              {/* <button  className='bg-yellow-btn p-2 rounded w-36 absolute  font-thin mt-[57%] -ml-[60%]'>{slide.button}</button> */}
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}

