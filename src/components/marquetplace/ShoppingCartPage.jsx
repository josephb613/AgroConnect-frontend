
// import React, { useState } from "react";

// // Liste des produits
// const products = [
//   {
//     id: 3,
//     name: "MAIS DE GOMA ",
//     price: 25.8,
//     soldprice: 10.8,
//     category: "Maïs",
//     image:
//       "https://res.cloudinary.com/dqrs3xyic/image/upload/v1712719232/photo%20produits/haricot_sos21u.jpg",
//   },

// ];

// // Nombre d'articles par page
// const ITEMS_PER_PAGE = 9;

// const ShoppingCartPage = () => {
//   // États
//   const [cart, setCart] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOrder, setSortOrder] = useState("asc"); // 'asc' ou 'desc'



//   // Gérer le changement de page
//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   // Gérer la recherche
//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//     setSelectedCategory("");
//     setCurrentPage(1);
//   };

//   // Fonction pour effacer le contenu de la recherche
//   const clearSearch = () => {
//     setSearchTerm("");
//     setSelectedCategory("");
//     setCurrentPage(1);
//   };

//   // Gérer le tri
//   const handleSort = () => {
//     setSortOrder(sortOrder === "asc" ? "desc" : "asc");
//   };

//   // Catégories uniques des produits
//   const uniqueCategories = [
//     ...new Set(products.map((product) => product.category)),
//   ];

//   // Filtrer les produits par catégorie
//   const filterProductsByCategory = (category) => {
//     setSelectedCategory(category);
//     setCurrentPage(1);
//   };

//   // Boutons pour les catégories
//   const categoriesButtons = uniqueCategories.map((category) => (
//     <button
//       key={category}
//       className="text-left px-4 hover:bg-gray  hover:text-white"
//       onClick={() => filterProductsByCategory(category)}
//     >
//       {category}
//     </button>
//   ));

//   // Produits triés et filtrés
//   const sortedAndFilteredProducts = products
//     .filter(
//       (product) =>
//         selectedCategory === "" || product.category === selectedCategory
//     )
//     .filter((product) =>
//       product.name.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .sort((a, b) =>
//       sortOrder === "asc" ? a.price - b.price : b.price - a.price
//     );

//   // Nombre de pages
//   const pageCount = Math.ceil(
//     sortedAndFilteredProducts.length / ITEMS_PER_PAGE
//   );
//   const indexOfLastProduct = currentPage * ITEMS_PER_PAGE;
//   const indexOfFirstProduct = indexOfLastProduct - ITEMS_PER_PAGE;
//   const currentProducts = sortedAndFilteredProducts.slice(
//     indexOfFirstProduct,
//     indexOfLastProduct
//   );

//   return (
//     <div className="p-4 w-full gap-10  flex flex-col lg:flex-row">
//       {/* Section des catégories */}
//       <section className=" border shadowrounded p-5 ">
//         <div className="flex items-center   border-gray rounded border">
//           <input
//             type="text"
//             placeholder="Rechercher des produits..."
//             value={searchTerm}
//             onChange={handleSearch}
//             className="px-4 w-[90%]  py-2  rounded-md focus:outline-none "
//           />
//           {/* Bouton pour effacer le contenu du champ de recherche */}
//           <button onClick={clearSearch} className="ml-2 px-4 py-2 rounded-md">
//             ✕
//           </button>
//         </div>

//         {/* menu Catégories */}

//         <div className=" mt-6 p-3  rounded paramsCategories  ">
//           <div className="px-4">
//             <h2 className="text-sm font-bold">PAR CATÉGORIES</h2>
//           </div>
//           <hr className=" border-1  border-gray " />
//           <button
//             onClick={() => filterProductsByCategory("")}
//             className="text-left px-4"
//           >
//             Voir tout
//           </button>
//           {categoriesButtons}
//         </div>
//       </section>
//       {/*  Tri par défaut*/}
//       <section className="p-5 border  rounded  border-gray w-full lg:w-3/4">
//         <button
//           className="px-4 py-2 mb-4 lg:ml-[85%]  rounded-md border border-gray"
//           onClick={handleSort}
//         >
//           Tri par défaut {sortOrder === "asc" ? "↑" : "↓"}
//         </button>

//         {/* Afficher un message "Aucun produit en ce nom" si currentProducts est vide */}
//         {currentProducts.length === 0 ? (
//           <p className="text-center ">
//             Aucun produit ne correspond à votre recherche
//           </p>
//         ) : (
//           // Afficher les cartes de produits si currentProducts n'est pas vide
//           <div className="grid   grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {currentProducts.map((product) => (

//               <div
//                 key={product.id}
//                 className="p-4 rounded-md overflow-hidden  border border-gray hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 relative"
//               >
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full border h-48 "
//                 />
//                 <img
//                   src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712706483/icons/Group_34_pa0tqi.png"
//                   alt="icon agroconnect"
//                   className=" border -mt-[80%] ml-3 absolute size-10  rounded"
//                 />
//                 <div className="mt-4">
//                   <div className="flex  gap-4 items-center justify-center">
//                     <h1 className=" text-2xl font-semibold text-center  mb-2">
//                       {product.name}
//                     </h1>
//                     <button className=" p-2 rounded card__color">
//                       En stock
//                     </button>
//                   </div>

//                   <div className="flex mt-3 gap-3 text-text-gray">
//                     <div className=" flex gap-3">
//                       <ul className="color_start">★★★★</ul>
//                       <span className="font-thin">200 Avis</span>
//                     </div>
//                     •
//                     <div>
//                       <span className=" font-thin rounded p-1">
//                         Qt Total 500 Kg
//                       </span>
//                     </div>
//                   </div>
//                   <div className=" justify-center  items-center flex gap-2 ">
//                     <div className="">
//                       <p className="text-gray font-thin">130.000 FC</p>
//                     </div>

//                     <p className=" font-semibold ">80.000 FC</p>

//                     <button className=" font-sm rounded-2xl p-2">
//                       Solde-64%
//                     </button>
//                   </div>

//                   <hr className="bg-gray mt-2 mb-3" />

//                   <div>
//                     <div className="flex  items-center   gap-3 text-xs ">
//                     <div className="flex p-1">
//                       <p>Mabele cop</p>
//                       <img src="" alt="icon asbl" />
//                     </div>

//                     <div className="flex ">
//                        <p>partager le lien :</p>
//                        {/* <img src="" alt="icon facebook" />
//                        <img src="" alt="icon x" />
//                        <img src="" alt="icon telegram" /> */}
                   
//                     </div>
//                   </div>
//                   </div>
//                   <div className=" mt-1">
//                     <p className="font-sm text-xs text-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nihil velit perferendis quidem voluptas amet, vero quas mollitia soluta!</p>
//                   </div>
//                   <button className=" w-full mt-3 bg-blue rounded-full p-2"> Acheter</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default ShoppingCartPage;
