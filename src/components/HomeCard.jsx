import React from 'react';

export default function HomeCard({ discount, title, price, oldPrice, image }) {
  return (
    <div className='main-container bordere w-[286.52px] h-[370.047px] bg-[#fff] rounded-[7.77px] relative overflow-hidden shadow-[0_0.97px_2.914px_0_rgba(3,0,71,0.09)] mx-auto my-0 transition-transform transform hover:scale-105'>
      <div className='h-[340.115px] absolute top-[11.478px] left-[9.053px] right-[60.218px] z-[6]'>
        <button className='w-[60px] h-[24px] bg-[#f29500] rounded-[16px] border-none relative pointer mt-0 mr-0 mb-0 ml-0'>
          <div className='w-[54px] h-[15px] relative overflow-hidden z-[1] mt-[5px] mr-0 mb-0 ml-[3px]'>
            <span className="flex w-[31px] h-[15px] justify-center items-center font-['Open_Sans'] text-[10px] font-semibold leading-[15px] text-[#fff] absolute top-0 left-[calc(50%-15px)] text-center whitespace-nowrap z-[2]">
              {discount} off
            </span>
          </div>
        </button>
        <div>
          <img src={image} alt={title} />
          <div>{title}</div>
        </div>
        <div className='w-[210.762px] h-[20.396px] relative overflow-hidden z-[3] mt-[266.581px] mr-0 mb-0 ml-[6.487px]'>
          <span className="flex h-[20.396px] justify-start items-center font-['Open_Sans'] text-[13.597536087036133px] font-semibold leading-[20.396px] text-[#373f50] absolute top-0 left-0 text-left whitespace-nowrap z-[4]">
            ${price}
          </span>
        </div>
        {oldPrice && (
          <span className="flex h-[20.396px] justify-start items-center font-['Open_Sans'] text-[13.597536087036133px] font-semibold leading-[20.396px] text-[#7d879c] absolute top-[319.719px] left-[64.762px] text-left whitespace-nowrap z-[6]">
            ${oldPrice}
          </span>
        )}
      </div>
      <div className='w-[11.331px] h-[11.331px] bg-[url(../assets/images/6f268039-b541-4974-acaa-de29f97211d2.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[335.244px] left-1/2 translate-x-[948.57%] translate-y-0 z-[9]' />
    </div>
  );
}
