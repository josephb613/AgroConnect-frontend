
import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";

// Default theme
import '@splidejs/react-splide/css';

export default function CarrouselMarketPlace() {
  const slidesData = [
    {
      videoUrl: "https://res.cloudinary.com/dqrs3xyic/video/upload/v1712925298/Banner%20publicite/Mes_bannie%CC%80re_projet_Agroconnect_zp8xki.mp4",
      // iconUrl: "",
      // text: "",
      // title: "",
      // sommaire: "",
      // description: ""
    },
    {
      videoUrl: "https://res.cloudinary.com/dqrs3xyic/video/upload/v1712925298/Banner%20publicite/Mes_bannie%CC%80re_projet_Agroconnect_zp8xki.mp4",
      // title: "",
      // sommaire: "",
      // description: ""
    },

  ];

  return (
    <Splide
      options={{
        rewind: true,
        autoplay: true,
        interval: 3000,
        arrows: false,
      }}>
      {slidesData.map((slide, index) => (
        <SplideSlide key={index}>
          <div className="relative ">
            <video src={slide.videoUrl} alt={`Image ${index + 1}`} className="size_carousel" />
            <div className="absolute flex-col top-0 left-0 right-0 bottom-0 flex justify-center items-center  text-white">
            <div className=' text-justify h-56 flex flex-col justify-center -mt-28 -ml-[49%] absolute'>
            <p className=" text-xs absolute -mt-48">{slide.text}</p>
            <h2 className=" text-6xl font-bold  ">{slide.title}</h2>
            <p className=" text-6xl font-bold mt-5">{slide.sommaire}</p>
            <img src={slide.iconUrl} className='absolute -mt-[17%] ml-[52%] size-24' />
            </div>
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}

