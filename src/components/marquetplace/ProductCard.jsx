import React from "react";

// Définition du composant de la carte de produit   
const ProductCard = ({ product }) => {
  return (
    <div className="p-4 rounded-md overflow-hidden  border-gray hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 relative">
      <img
        src={product.image}
        alt={product.name}
        className="w-full border h-48"
      />
      <img
        src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712706483/icons/Group_34_pa0tqi.png"
        alt="icon agroconnect"
        className="border -mt-[80%] ml-3 absolute size-10 rounded"
      />
      <div className="mt-4">
        <div className="flex gap-4 items-center justify-center">
          <h1 className="text-2xl font-semibold text-center mb-2">
            {product.name}
          </h1>
          <button className="p-2 rounded card__color">En stock</button>
        </div>

        <div className="flex mt-3 gap-3 text-text-gray">
          <div className="flex gap-3">
            <ul className="color_start">★★★★</ul>
            <span className="font-thin">200 Avis</span>
          </div>
          •
          <div>
            <span className="font-thin rounded p-1">Qt Total 500 Kg</span>
          </div>
        </div>
        <div className="justify-center items-center flex gap-2 ">
          <div className="">
            <p className="text-gray font-thin">130.000 FC</p>
          </div>

          <p className="font-semibold">80.000 FC</p>

          <button className="font-sm rounded-2xl p-2">Solde-64%</button>
        </div>

        <hr className="bg-gray mt-2 mb-3" />

        <div>
          <div className="flex items-center gap-3 text-xs ">
            <div className="flex  items-center gap-2 p-1">
              <p>Mabele cop</p>
              <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712325531/image_2_egqwzk.webp" alt="icon asbl" className="size-6"/>
            </div>

            <div className="flex gap-2 size-4">
              <p className="whitespace-nowrap ">Partager le lien :</p>
              <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1713317745/icons/facebook_m5l0xb.svg" alt="icon facebook"  />
              <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1713317743/icons/twitter_xswuj1.svg" alt="icon x" />
              <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1713317743/icons/whatsapp-_uqvjf9.svg" alt="icon telegram" />
            </div>
          </div>
        </div>
        <div className="mt-1">
          <p className="font-sm text-xs text-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nihil
            velit perferendis quidem voluptas amet, vero quas mollitia soluta!
          </p>
        </div>
        <div className="flex item-center justify-center gap-3">
        <button className="w-44 border mt-3 btn__card rounded-full p-2 hover:bg-light">Acheter</button>
        {/* <button className="rounded-full border h-8"><img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712325532/icons/heart-svgrepo-com_x0gb3a.svg" alt="" className="size-5" /></button> */}
        </div>

      </div>
    </div>
  );
};

export default ProductCard;








