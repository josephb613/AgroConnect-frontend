// import React from "react";
// export default function HomeCard({ discount, title, price, oldPrice, image }) {
//   return (
//     <div className="flex relative flex-col  w-[286px] h-[370px] gap-10 items-start py-3.5 pr-4 font-semibold bg-white rounded-lg shadow-[0_0.97px_2.914px_0_rgba(3,0,71,0.09)] transition-transform transform hover:scale-105">
//       <div className="  rounded-full text-center text-xs p-2 text-white ml-[2rem]  w-12  bg-[#F89C0E] font-thin">
//       {discount} %
//       </div>
//       <div className="">
//         <img src=  {image} alt="" className="w-40 ml-[4rem] absolute h-40" />
      
//       </div>
//       <div className="flex gap-5 font-light   mt-[10rem] ml-[2rem] text-sm">
//         <div className="flex flex-col ">
//           <div className="text-[#373F50] leading-[150%]">{title}</div>
//           <div className="flex gap-2.5 mt-3.5 items-center whitespace-nowrap">
//             <div className="grow text-red leading-[175%]">{price}</div>
//             <div className="leading-[150%] text-gray">{oldPrice}</div>
//           </div>
//         </div>
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/7576e001a6fb0f62486f2adfd87e77b953fc8d4c8725974bfcd9898cbf434091?"
//           className="shrink-0 self-end ml-[5rem] mt-5 w-7  border-lime-700 border-solid aspect-[1.04]"
//         />
//       </div>
//     </div>
//   );
// }


import React from "react";

export default function HomeCard({ discount, title, price, oldPrice, image }) {
  return (
    <div className="flex relative flex-col w-[286px] h-[370px] gap-10 items-start py-3.5 pr-4 font-semibold bg-white rounded-lg shadow-[0_0.97px_2.914px_0_rgba(3,0,71,0.09)] transition-transform transform hover:scale-105">
      <div className="rounded-full text-center text-xs p-2 text-white ml-[2rem] w-12 bg-[#F89C0E] font-thin">
        {discount} %
      </div>
      <div className="">
        <img src={image} alt="" className="w-40 ml-[4rem] absolute h-40" />
      </div>
      <div className="flex gap-5 font-light mt-[10rem] ml-[2rem] text-sm">
        <div className="flex flex-col">
          <div className="text-[#373F50] leading-[150%]">{title}</div>
          <div className="flex gap-2.5 mt-3.5 items-center whitespace-nowrap">
            <div className="grow text-red leading-[175%]">
              {price}
              {oldPrice !== null && (
                <span className="text-gray line-through ml-2">{oldPrice}</span>
              )}
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7576e001a6fb0f62486f2adfd87e77b953fc8d4c8725974bfcd9898cbf434091?"
          className="shrink-0 self-end ml-[5rem] mt-5 w-7  border-lime-700 border-solid aspect-[1.04]"
        />
      </div>
    </div>
  );
}
