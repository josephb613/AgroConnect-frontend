import React from "react";
import { FaCartArrowDown } from "react-icons/fa6";


export default function AddToCartButton () {

  return (
    <button className="flex gap-3 font-thin border text-white rounded-lg bg-bg-gold p-2 items-center ">
      Ajouter au panier <FaCartArrowDown />
    </button>
  );
}


