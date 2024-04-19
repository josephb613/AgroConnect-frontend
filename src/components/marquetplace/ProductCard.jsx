import React from "react";
import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
  return (
    <div className="p-3   shadow rounded-md overflow-hidden  border-gray hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 relative">
      <img src={product.image} alt={product.name} className="w-full h-44" />
      <div className="mt-4">
        <div className="flex gap-4 font-sm text-2xl  items-center justify-center">
          <h1 className="font-semibold text-center mb-2">
            {product.name}
          </h1>
          <button className="p-1 h-5 rounded card__color">En stock</button>
        </div>

        <div className="flex text-xs  mt-3 gap-3 text-text-gray">
          <div className="flex gap-3">
            <ul className="color_start">★★★★</ul>
            <span className="font-thin">200 Avis</span>
          </div>
          •
          <div>
            <span className="font-thin rounded p-1">Qt Total 500 Kg</span>
          </div>
        </div>
        {/* <div className="justify-center items-center flex gap-2 ">
          <div className="">
            <p className="text-gray font-thin">130.000 FC</p>
          </div>

          <p className="font-semibold">80.000 FC</p>

          <button className="font-sm rounded-2xl p-2">Solde-64%</button>
        </div> */}

        <hr className="bg-gray mt-2 mb-3" />

        <div>
          <div className="flex items-center gap-3 text-xs ">
            <div className="flex  items-center gap-2 p-1">
              <p>Mabele cop</p>
              <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712325531/image_2_egqwzk.webp" alt="icon asbl" className="size-6" />
            </div>

            <div className="flex items-center gap-2">
              <button className="whitespace-nowrap">Partager le lien :</button>
              <Link to="https://www.your-domain.com/your-page.html" className=""><img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1713317745/icons/facebook_m5l0xb.svg" alt="icon facebook" className="size-5 hover:bg-gray p-1  rounded-full" /></Link>
              <Link to="https://x.com/SpaceX/status/1732824684683784516?s=20" ><img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1713317743/icons/twitter_xswuj1.svg" alt="icon x" className="size-5 hover:bg-gray p-1  rounded-full" /></Link>
              <Link to="whatsapp://send?text=Message%20à%20partager%20https://votresite.com"><img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1713317743/icons/whatsapp-_uqvjf9.svg" alt="icon telegram" className="size-5 hover:bg-gray p-1  rounded-full" /></Link>
            </div>
          </div>
        </div>
        <hr className="bg-gray mt-2 mb-3" />
        <div className="flex item-center justify-center gap-3">
          <button className="w-40 border mt-3 btn__card rounded-full p-1 hover:bg-light">Acheter</button>

        </div>

      </div>
    </div>
  );
};

export default ProductCard;















// import React from "react";
// import { Link } from "react-router-dom";


// const ProductCard = ({ product }) => {
//   return (
//     <div className="p-3   shadow rounded-md overflow-hidden  border-gray hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 relative">
//       <img src={product.image} alt={product.name} className="w-full  border h-44" />
//       <div className="mt-4">
//         <div className="flex gap-4 items-center justify-center">
//           <h1 className="text-2xl font-semibold text-center mb-2">
//             {product.name}
//           </h1>
//           <button className="p-2 rounded card__color">En stock</button>
//         </div>

//         <div className="flex mt-3 gap-3 text-text-gray">
//           <div className="flex gap-3">
//             <ul className="color_start">★★★★</ul>
//             <span className="font-thin">200 Avis</span>
//           </div>
//           •
//           <div>
//             <span className="font-thin rounded p-1">Qt Total 500 Kg</span>
//           </div>
//         </div>
//         <div className="justify-center items-center flex gap-2 ">
//           <div className="">
//             <p className="text-gray font-thin">130.000 FC</p>
//           </div>

//           <p className="font-semibold">80.000 FC</p>

//           <button className="font-sm rounded-2xl p-2">Solde-64%</button>
//         </div>

//         <hr className="bg-gray mt-2 mb-3" />

//         <div>
//           <div className="flex items-center gap-3 text-xs ">
//             <div className="flex  items-center gap-2 p-1">
//               <p>Mabele cop</p>
//               <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712325531/image_2_egqwzk.webp" alt="icon asbl" className="size-6" />
//             </div>

//             <div className="flex items-center gap-2">
//               <button className="whitespace-nowrap">Partager le lien :</button>
//               <Link to="https://www.your-domain.com/your-page.html" className=""><img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1713317745/icons/facebook_m5l0xb.svg" alt="icon facebook" className="size-5 hover:bg-gray p-1  rounded-full" /></Link>
//               <Link to="https://x.com/SpaceX/status/1732824684683784516?s=20" ><img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1713317743/icons/twitter_xswuj1.svg" alt="icon x" className="size-5 hover:bg-gray p-1  rounded-full" /></Link>
//               <Link to="whatsapp://send?text=Message%20à%20partager%20https://votresite.com"><img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1713317743/icons/whatsapp-_uqvjf9.svg" alt="icon telegram" className="size-5 hover:bg-gray p-1  rounded-full" /></Link>
//             </div>
//           </div>
//         </div>
//         <div className="mt-1">
//           <p className="font-sm text-xs text-gray">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nihil
//             velit perferendis quidem voluptas amet, vero quas mollitia soluta!
//           </p>
//         </div>
//         <div className="flex item-center justify-center gap-3">
//           <button className="w-40 border mt-3 btn__card rounded-full p-1 hover:bg-light">Acheter</button>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default ProductCard;


