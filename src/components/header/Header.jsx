import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <div className=" flex  items-center font__style ">
        <div className="flex items-center justify-center gap-2 mt-1 ">
          <img
            src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712325532/logo_cvzsvy.svg"
            alt="logo"
            className="ml-10"
          />
          <img
            src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712325620/icons/line_dqk9lw.svg"
            alt="icon line"
            className="h-16 mt-10 w-2"
          />
        </div>
        <div className="flex ml-64 ">
          <div className="items-center flex">
            <input
              className=" relative size border input_bg  rounded-full px-4 py-2 focus:outline-none h-9 "
              type="text"
              placeholder="Rechercher produit  ici..."
            />
            <button className="  bg-green rounded-full text-white  h-8 absolute ml-[25.5%] w-[4.3%]">
              •••
            </button>
          </div>

          <ul className="flex text-sm ml-10 gap-10">
            <NavLink className="flex items-center gap-2">
              <p>Nous contacter</p>
              <img
                src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1713308189/icons/Vector_vsb6mc.svg"
                alt="icon contact"
                className="size-5"
              />
            </NavLink>

            <NavLink className="flex items-center gap-2">
              <p>Créer un compte</p>
              <img
                src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712624798/icons/particulier_nfrgz2.svg"
                alt="icon login"
                className="size-5"
              />
            </NavLink>
          </ul>
        </div>
      </div>
      <div className="ml-40">
      <Navbar />
      </div>


    </div>
  );
}
















// import React from "react";
// import Navbar from "./Navbar";
// import { NavLink } from "react-router-dom";

// export default function Header() {
//   return (
//     <div className="flex flex-col md:flex-row md:items-center font__style">
//       <div className="flex justify-center md:justify-start items-center gap-2 mt-1 md:ml-10">
//         <img
//           src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712325532/logo_cvzsvy.svg"
//           alt="logo"
//           className="w-16 md:w-auto"
//         />
//         <img
//           src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712325620/icons/line_dqk9lw.svg"
//           alt="icon line"
//           className="h-8 md:h-16 w-2"
//         />
//       </div>
//       <div className="flex flex-col md:flex-row items-center justify-center md:ml-10 mt-4 md:mt-0">
//         <div className="relative flex items-center">
//           <input
//             className="border border-gray rounded-full px-4 py-2 focus:outline-none focus:border-green w-full md:w-auto"
//             type="text"
//             placeholder="Rechercher produit ici..."
//           />
//           <button className="border rounded-full text-white bg-green h-8 md:h-auto ml-2 md:ml-4">
//             •••
//           </button>
//         </div>
//         <ul className="flex flex-col md:flex-row md:ml-10 gap-4 md:gap-10 mt-4 md:mt-0">
//           <NavLink className="flex items-center gap-2">
//             <p>Nous contacter</p>
//             <img
//               src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1713308189/icons/Vector_vsb6mc.svg"
//               alt="icon contact"
//               className="w-5"
//             />
//           </NavLink>

//           <NavLink className="flex items-center gap-2">
//             <p>Créer un compte</p>
//             <img
//               src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712624798/icons/particulier_nfrgz2.svg"
//               alt="icon login"
//               className="w-5"
//             />
//           </NavLink>
//         </ul>
//       </div>
//       <Navbar />
//     </div>
//   );
// }
