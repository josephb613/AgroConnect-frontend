
import React, { useState } from "react";

export default function HomeCard({ discount, title, price, oldPrice, image }) {
  const [showQRCode, setShowQRCode] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleQRCodeClick = () => {
    setShowQRCode(true);
  };

  const handleMouseLeaveQRCode = () => {
    setShowQRCode(false);
  };

  const handleMouseEnterTooltip = () => {
    setShowTooltip(true);
  };

  const handleMouseLeaveTooltip = () => {
    setShowTooltip(false);
  };

  return (
    <div className="relative  flex flex-col w-full sm:w-[300px] h-auto sm:h-[370px] gap-4 sm:gap-10 items-start p-4 sm:py-3.5 sm:pr-4 font-semibold bg-white rounded-lg shadow-[0_0.97px_2.914px_0_rgba(3,0,71,0.09)] transition-transform transform hover:scale-105">
      <div className="flex justify-between w-full px-4">
        <div className="rounded-full text-center text-xs p-2 text-white w-12 bg-[#F89C0E] font-thin">
          {discount}
        </div>
        <div
          className="relative cursor-pointer"
          onClick={handleQRCodeClick}
          onMouseEnter={handleMouseEnterTooltip}
          onMouseLeave={handleMouseLeaveTooltip}
        >
          <img
            src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1717882265/QR_Code_zjrzmm.png"
            alt="QR Icon"
            className="w-6 h-6"
          />
          {showTooltip && (
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-5 w-max text-center text-green text-[9px] rounded py-1 px-2">
              Cliquez pour <br /> voir le QR code
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center w-full">
        <img src={image} alt="" className="w-32 h-32 sm:w-40 sm:h-40" />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 font-light  text-sm w-full">
        <div className="flex flex-col items-start sm:ml-[2rem]">
          <div className="text-[#373F50] leading-[150%]">{title}</div>
          <div className="flex gap-2.5 mt-3.5 items-center whitespace-nowrap">
            <div className="grow text-red leading-[175%]">{price}</div>
            <div className="leading-[150%] text-gray">{oldPrice}</div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7576e001a6fb0f62486f2adfd87e77b953fc8d4c8725974bfcd9898cbf434091?"
          className="shrink-0 self-end mt-2 sm:ml-[1.5rem] sm:mt-5 w-7 border-lime-700 border-solid aspect-[1.04]"
        />
      </div>
      {showQRCode && (
        <div
          className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-100 transition-opacity"
          onMouseLeave={handleMouseLeaveQRCode}
        >
          <img
            src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1717882265/QR_Code_zjrzmm.png"
            alt="QR Code"
            className="w-32 h-32 mb-4"
          />
          <div className="text-center text-[#F89C0E] text-[9px] px-4">
            Scannez le QR code pour voir l'origine du produit
          </div>
        </div>
      )}
    </div>
  );
}

