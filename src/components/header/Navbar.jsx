

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// const menuItems = [
//   { title: "Accueil", to: "/" },

//   {
//     title: "Boutique en ligne",
//     to: "/marketplace",
//     dropdown: [
//       { title: "Boutique en ligne", to: "/marketplace" },
//       { title: "Pack alimentaire", to: "#" },
//     ],
//   },

//   {
//     title: "Marchés",
//     dropdown: [
//       { title: "Tableau de bords", to: "/calendar" },
//       { title: "Prix du Maïs", to: "" },
//       { title: "Prix du Manioc", to: "" },
//       { title: "Prix du Sorgho", to: "" },
//       { title: "Prix du Niebe", to: "" },
//     ],
//   },

//   {
//     title: "Portail",
//     to: "#",
//     dropdown: [
//       { title: "Trouver un Angins agricole", to: "" },
//       { title: "Formation et éducation", to: "" },
//       { title: "Formation et éducation", to: "" },
//       { title: "Recruter un Ir Agronome", to: "" },
//     ],
//   },
//   {
//     title: "À propos de Nous",
//     to: "/AboutUs",
//     dropdown: [
//       { title: "Notre Équipe", to: "/team" },
//       { title: "Nos Partenaires", to: "" },
//       { title: "Nos Valeurs", to: "" },
//       { title: "Notre Vision", to: "" },
//     ],
//   },
// ];

// function MenuItem({ item }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const hasDropdown = Array.isArray(item.dropdown);

//   const handleMouseEnter = () => {
//     setIsOpen(true);
//   };

//   const handleMouseLeave = () => {
//     setIsOpen(false);
//   };

//   return (
//     <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//       {hasDropdown ? (
//         <div className="relative">
//           <button className="flex items-center gap-2">{item.title} ⌝</button>
//           {isOpen && (
//             <ul className="absolute rounded top-full left-0 bg-white shadow-lg z-50">
//               {item.dropdown.map((dropdownItem, index) => (
//                 <li
//                   key={index}
//                   className="p-2 bg-opacity-5 font-extralight hover:bg-bg-green hover:text-white"
//                 >
//                   <NavLink to={dropdownItem.to}>{dropdownItem.title}</NavLink>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       ) : (
//         <NavLink to={item.to}>{item.title}</NavLink>
//       )}
//     </li>
//   );
// }

// export default function Navbar() {
//   return (
//     <div className="flex flex-col sm:flex-row">
//       <div className="border text-nowrap sm:block pb-3 justify-center font-medium text-sm w-full">
//         <ul className="flex flex-wrap gap-12 justify-center">
//           {menuItems.map((item, index) => (
//             <MenuItem key={index} item={item} />
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }



import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { title: "Accueil", to: "/" },

  {
    title: "Boutique en ligne",
    to: "/marketplace",
    dropdown: [
      { title: "Boutique en ligne", to: "/marketplace" },
      { title: "Pack alimentaire", to: "#" },
    ],
  },

  {
    title: "Marchés",
    dropdown: [
      { title: "Tableau de bords", to: "/calendar" },
      { title: "Prix du Maïs", to: "" },
      { title: "Prix du Manioc", to: "" },
      { title: "Prix du Sorgho", to: "" },
      { title: "Prix du Niebe", to: "" },
    ],
  },

  {
    title: "Portail",
    to: "#",
    dropdown: [
      { title: "Trouver un Angins agricole", to: "" },
      { title: "Formation et éducation", to: "" },
      { title: "Formation et éducation", to: "" },
      { title: "Recruter un Ir Agronome", to: "" },
    ],
  },
  {
    title: "À propos de Nous",
    to: "/AboutUs",
    dropdown: [
      { title: "Notre Équipe", to: "/team" },
      { title: "Nos Partenaires", to: "" },
      { title: "Nos Valeurs", to: "" },
      { title: "Notre Vision", to: "" },
    ],
  },
];

function MenuItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasDropdown = Array.isArray(item.dropdown);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {hasDropdown ? (
        <div className="relative font__style ">
          <button className="flex items-center gap-2">{item.title} ⌝</button>
          {isOpen && (
            <ul className="absolute w-48  rounded top-full left-0 bg-white shadow-lg z-50">
              {item.dropdown.map((dropdownItem, index) => (
                <li
                  key={index}
                  className="p-4  hover:bg-green hover:rounded hover:text-white"
                >
                  <NavLink to={dropdownItem.to}>{dropdownItem.title}</NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <NavLink to={item.to} className="font__style">{item.title}</NavLink>
      )}
    </li>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row">
      <div className=" text-nowrap sm:block pb-3 justify-center font-medium text-sm w-full">
        {/* Bouton de menu pour les petits écrans */}
        <button
          className="block sm:hidden absolute top-0 right-0 m-4 text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "Fermer" : "Menu"}
        </button>

        {/* Menu de navigation */}
        <ul className={isMenuOpen ? "flex  flex-wrap gap-12 justify-center" : "hidden sm:flex flex-wrap gap-12 justify-center"}>
          {menuItems.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
