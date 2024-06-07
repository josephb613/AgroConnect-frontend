import React from "react";


  export default function HomeCarrouselPromo() {
  return (
    <div className="flex rounded-sm rounded-xl relative overflow-hidden relative flex-col bg-green justify-center font-semibold text-white min-h-[349px]">
    
      <div className="flex rounded-sm relative flex-col items-start px-20 pt-10 pb-20 w-full rounded bg-neutral max-md:px-5 max-md:max-w-full">
        <div className="ml-16 text-xl leading-5 max-md:max-w-full">
          <span className="text-white">S'inscrire</span>
        </div>
        <div className="mt-11 ml-16  text-4xl font-bold leading-[52px] max-md:mt-10 max-md:max-w-full">
        15% de réduction sur tous 
          <br/>
          nos  produits 
        </div>
        <div className="justify-center  px-4 py-3 mt-8 mb-4 ml-16 text-base bg-[#F89C0E] leading-7 capitalize whitespace-nowrap bg-amber rounded-md shadow-lg max-md:pr-5 max-md:ml-2.5">
          Boutique
        </div>
      </div>
      <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1717787069/Frame_t4deys.png" alt="" className="w-[40rem] h-[30rem] ml-[58%] mt-[5%] z-50 absolute"/>
    </div>
  );
}