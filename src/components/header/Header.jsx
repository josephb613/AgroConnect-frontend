// import React, { useState } from "react";
// import Navbar from "./Navbar";
// import { NavLink } from "react-router-dom";

// export default function Header() {
//   const [isNavVisible, setIsNavVisible] = useState(false);

//   const handleMenuClick = () => {
//     setIsNavVisible(!isNavVisible);
//   };

//   return (
//     <header className="relative ">
//       {/* Barre supérieure */}
//       <div className="flex  gap-64 px-4 py-1 bg-white ">
//         {/* Logo */}
//         <div className="flex relative justify-center items-center ">
//         <NavLink to="/home">
//           <img
//             src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712325532/logo_cvzsvy.svg"
//             alt="logo"
//             className="w-24 md:ml-10 mt-3"
//           />
//         </NavLink>

//            <img
//             src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712325620/icons/line_dqk9lw.svg"
//              alt="icon line"
//              className="h-20 lg:ml-52 lg:mt-10   absolute  w-2"
//            />
//         </div>
      

//         {/* Bouton de menu pour les écrans mobiles */}
//         <button
//           className="sm:hidden bg-green text-white rounded-full p-2"
//           onClick={handleMenuClick}>
//           <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712757559/icons/menucat_arixfc.svg" alt="icon menu" className="size-3" />
//         </button>

//         {/* Barre de recherche et autres liens */}
//         <div className="hidden  sm:flex items-center gap-6">
//           {/* Barre de recherche */}
//           <div className="relative ml-28  flex items-center">
//             <input
//               className="border w-96 rounded-full px-4 py-2 focus:outline-none h-9"
//               type="text"
//               placeholder="Rechercher produit ici..."
//             />
//              <button className="  bg-green rounded-full text-white   h-8 absolute ml-[87%] w-[12%]">
//                •••
//             </button>
//           </div>

//           {/* Liens complémentaires */}
//           <ul className="flex ml-24 text-sm gap-6">
//             <NavLink to="/contact" className="flex items-center gap-2">
//               <p>Nous contacter</p>
//               <img
//                 src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1713308189/icons/Vector_vsb6mc.svg"
//                 alt="icon contact"
//                 className="w-5 h-5"
//               />
//             </NavLink>

//             <NavLink to="/create-account" className="flex items-center gap-2">
//               <p>Créer un compte</p>
//               <img
//                 src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712624798/icons/particulier_nfrgz2.svg"
//                 alt="icon login"
//                 className="w-5 h-5"
//               />
//             </NavLink>
//           </ul>
//         </div>
//       </div>

//       {/* Navbar mobile */}
//       {isNavVisible && (
//         <div className="absolute top-15 w-full bg-white  sm:hidden">
//           <Navbar />
//         </div>
//       )}
//       {/* Navbar pour les écrans plus grands */}
//       <div className="  hidden sm:flex">
//         <Navbar />
//       </div>
//     </header>
//   );
// }
import React, { useState } from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

// Composant pour le bouton de menu mobile
function MenuButton({ onClick }) {
  return (
    <button className="sm:hidden bg-green text-white rounded-full p-2" onClick={onClick}>
      <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712757559/icons/menucat_arixfc.svg" alt="icon menu" className="size-3" />
    </button>
  );
}

// Composant pour la barre de recherche
function SearchBar() {
  return (
    <div className="relative ml-28 flex items-center">
      <input
        className="border w-96 rounded-full px-4 py-2 focus:outline-none h-9"
        type="text"
        placeholder="Rechercher produit ici..."
      />
      <button className="bg-green rounded-full text-white h-8 absolute ml-[87%] w-[12%]">
        •••
      </button>
    </div>
  );
}

// Composant pour les liens complémentaires
function AdditionalLinks() {
  return (
    <ul className="flex ml-24 text-sm gap-6">
      <NavLink to="/contact" className="flex items-center gap-2">
        <p>Nous contacter</p>
        <img
          src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1713308189/icons/Vector_vsb6mc.svg"
          alt="icon contact"
          className="w-5 h-5"
        />
      </NavLink>

      <NavLink to="/create-account" className="flex items-center gap-2">
        <p>Créer un compte</p>
        <img
          src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712624798/icons/particulier_nfrgz2.svg"
          alt="icon login"
          className="w-5 h-5"
        />
      </NavLink>
    </ul>
  );
}

export default function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <header className="relative">
      <div className="flex gap-64 px-4 py-1 bg-white">
        <div className="flex relative justify-center items-center">
          <NavLink to="/home">
            <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712325532/logo_cvzsvy.svg" alt="logo" className="w-24 md:ml-10 mt-3" />
          </NavLink>
          <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712325620/icons/line_dqk9lw.svg" alt="icon line" className="h-20 lg:ml-52 lg:mt-10 absolute w-2" />
        </div>

        <MenuButton onClick={toggleNavVisibility} />

        <div className="hidden sm:flex items-center gap-6">
          <SearchBar />
          <AdditionalLinks />
        </div>
      </div>

      {isNavVisible && (
        <div className="absolute top-15 w-full bg-white sm:hidden">
          <Navbar />
        </div>
      )}
      <div className="hidden sm:flex">
        <Navbar />
      </div>
    </header>
  );
}
