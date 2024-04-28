// import ProductCard from "./ProductCard";
// import { Link } from "react-router-dom";
// import React, { useState } from "react";

// // Liste des produits
// const products = [
//   {
//     id: 3,
//     name: "MAIS DE GOMA ",
//     price: 22.4,
//     soldprice: 10.8,
//     category: "Maïs",
//     image: "https://res.cloudinary.com/dqrs3xyic/image/upload/v1712719232/photo%20produits/haricot_sos21u.jpg",
//   },
//   {
//     id: 1,
//     name: "Tomates Bio",
//     price: 3.5,
//     category: "Riz",
//     image:
//       "https://res.cloudinary.com/dqrs3xyic/image/upload/v1712716568/photo%20produits/haricot2_qpepa3.jpg",
//   },
//   {
//     id: 10,
//     name: "Pommes de Terre",
//     price: 1.6,
//     category: "Manioc",
//     image:
//       "https://res.cloudinary.com/dqrs3xyic/image/upload/v1712716113/photo%20produits/aubergine_krtpqh.jpg",
//   },
//   {
//     id: 12,
//     name: "Pain Artisanal",
//     price: 2.2,
//     category: "Arachide (cacahuète)",
//     image:
//       "https://res.cloudinary.com/dqrs3xyic/image/upload/v1712716113/photo%20produits/aubergine_krtpqh.jpg",
//   },
//   {
//     id: 13,
//     name: "MAIS DE GOMA",
//     price: 80000,
//     category: "Haricot (niébé)",
//     image:
//       "https://res.cloudinary.com/dqrs3xyic/image/upload/v1712719232/photo%20produits/haricot_sos21u.jpg",
//   },
//   {
//     id: 2,
//     name: "Fromage Cheddar",
//     price: 8.5,
//     category: "Banane plantain",
//     image:
//       "https://res.cloudinary.com/dqrs3xyic/image/upload/v1712716568/photo%20produits/haricot2_qpepa3.jpg",
//   },
//   {
//     id: 7,
//     name: "Lait Bio",
//     price: 1.2,
//     category: "Sorgho",
//     image:
//       "https://res.cloudinary.com/dqrs3xyic/image/upload/v1712716564/photo%20produits/tomato_t99ffx.jpg",
//   },
//   {
//     id: 8,
//     name: "Yaourt Nature",
//     price: 1.5,
//     category: "Banane plantain",
//     image:
//       "https://res.cloudinary.com/dqrs3xyic/image/upload/v1712719232/photo%20produits/haricot_sos21u.jpg",
//   },
//   {
//     id: 4,
//     name: "Boeuf Fermier",
//     price: 20,
//     category: "Patate douce",
//     image:
//       "https://res.cloudinary.com/dqrs3xyic/image/upload/v1712716564/photo%20produits/tomato_t99ffx.jpg",
//   },
//   { id: 5, name: "Poulet Fermier", price: 12, category: "Viande", image: "" },
//   {
//     id: 6,
//     name: "Saucisses Artisanales",
//     price: 8,
//     category: "Charcuterie",
//     image: "",
//   },
//   {
//     id: 11,
//     name: "Jambon Blanc",
//     price: 7.5,
//     category: "Charcuterie",
//     image: "",
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

//     <button key={category}
//       className="text-left px-4 hover_bg"
//       onClick={() => filterProductsByCategory(category)}>
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
//     <div className="p-4 w-full shadow    gap-10  flex flex-col lg:flex-row">

//       {/* Section des catégories */}
//       <section className="shadow  rounded p-5 ">
//         <div className="flex shadow  items-center   border-gray rounded border">
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
//             <h2 className="text-green font-extrabold">PAR CATÉGORIES</h2>
//           </div>
//           <hr className=" border-1  border-gray " />
//           <button
//             onClick={() => filterProductsByCategory("")}
//             className="text-left  px-4">
//             Voir tout
//           </button>
//           {categoriesButtons}
//         </div>
//         {/* banner image */}

//         <div className="h-[50%] relative">
//         <h2 className="mt-10 mb-5 text-green  ml-8 font-extrabold">NOS PRODUITS</h2>
//           <div className="absolute z-50 mt-10 ml-4 text-white">
           
//             <h3 className="  font-normal text-xm mb-2">PRODUITS DE GROS
//             </h3>
        
//             <p className=" font-bold   text-2xl">Tous vos produits agricoles ne gros</p>
//             <p className="text-bg-gold mb-10 font-bold ">A partir de 500 kg </p>
//             <Link to="#" className="border w-24  p-2">Voire les produits</Link>
       
//           </div>
//           <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1713447871/Banner%20publicite/11_fdza96.webp" alt="image banner section categorie " className="absolute h-[80%]" />
//         </div>
        
//       </section>
//       {/*  Tri par défaut*/}
//       <section className="p-5 rounded  shadow border-gray w-full lg:w-3/4">
//         <button
//           className="px-4 py-2 mb-4 lg:ml-[85%]  rounded-md border border-gray"
//           onClick={handleSort}
//         >
//           Tri par défaut {sortOrder === "asc" ? "↑" : "↓"}
//         </button>

//         {/* Afficher un message "Aucun produit en ce nom" si currentProducts est vide */}
//         {currentProducts.length === 0 ? (
//           <p className="text-center "> Aucun produit ne correspond à votre recherche</p>
//         ) : (
//           // Afficher les cartes de produits si currentProducts n'est pas vide
//           <div className="grid   grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {currentProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default ShoppingCartPage;
















// Dans cette exemple j'ai deplacer lea card dans un fichier Json

// import ProductCard from "./ProductCard";
// import { Link } from "react-router-dom";
// import React, { useState } from "react";
// import products from "../../data/products.json"; 

// // Nombre d'articles par page
// const ITEMS_PER_PAGE = 9;

// const ShoppingCartPage = () => {
//   // États
//   const [cart, setCart] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOrder, setSortOrder] = useState("asc"); // 'asc' ou 'desc'

//   // Catégories uniques des produits
//   const uniqueCategories = [
//     ...new Set(products.map((product) => product.category)),
//   ];

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

  
//   // Filtrer les produits par catégorie
//   const filterProductsByCategory = (category) => {
//     setSelectedCategory(category);
//     setCurrentPage(1);
//   };

//   // Boutons pour les catégories
//   const categoriesButtons = uniqueCategories.map((category) => (
//     <button
//       key={category}
//       className="text-left px-4 hover_bg"
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
//   const pageCount = Math.ceil(sortedAndFilteredProducts.length / ITEMS_PER_PAGE);
//   const indexOfLastProduct = currentPage * ITEMS_PER_PAGE;
//   const indexOfFirstProduct = indexOfLastProduct - ITEMS_PER_PAGE;
//   const currentProducts = sortedAndFilteredProducts.slice(
//     indexOfFirstProduct,
//     indexOfLastProduct
//   );

//   return (
//     <div className="p-4 w-full shadow    gap-10  flex flex-col lg:flex-row">
//       {/* Section des catégories */}
//       <section className="shadow  rounded p-5 ">
//         <div className="flex shadow  items-center   border-gray rounded border">
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
//             <h2 className="text-green font-extrabold">PAR CATÉGORIES</h2>
//           </div>
//           <hr className=" border-1  border-gray " />
//           <button
//             onClick={() => filterProductsByCategory("")}
//             className="text-left  px-4"
//           >
//             Voir tout
//           </button>
//           {categoriesButtons}
//         </div>
//         {/* banner image */}
//         <div className="h-[50%] relative">
//           <h2 className="mt-10 mb-5 text-green  ml-8 font-extrabold">NOS PRODUITS</h2>
//           <div className="absolute z-50 mt-10 ml-4 text-white">
//             <h3 className="  font-normal text-xm mb-2">PRODUITS DE GROS</h3>
//             <p className=" font-bold   text-2xl">Tous vos produits agricoles en gros</p>
//             <p className="text-bg-gold mb-10 font-bold ">A partir de 500 kg </p>
//             <Link to="#" className="border w-24  p-2">Voir les produits</Link>
//           </div>
//           <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1713447871/Banner%20publicite/11_fdza96.webp" alt="image banner section categorie " className="absolute h-[80%]" />
//         </div>
//       </section>
//       {/*  Tri par défaut*/}
//       <section className="p-5 rounded  shadow border-gray w-full lg:w-3/4">
//         <button
//           className="px-4 py-2 mb-4 lg:ml-[85%]  rounded-md border border-gray"
//           onClick={handleSort}
//         >
//           Tri par défaut {sortOrder === "asc" ? "↑" : "↓"}
//         </button>
//         {/* Afficher un message "Aucun produit en ce nom" si currentProducts est vide */}
//         {currentProducts.length === 0 ? (
//           <p className="text-center "> Aucun produit ne correspond à votre recherche</p>
//         ) : (
//           // Afficher les cartes de produits si currentProducts n'est pas vide
//           <div className="grid   grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {currentProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default ShoppingCartPage;


// // Dans cette exemple j'ai deplacer lea card dans un fichier Json



// ////////////////// ajout de trier par localisation ////////////////////////


// import ProductCard from "./ProductCard"; 
// import { Link } from "react-router-dom"; 
// import React, { useState } from "react"; 
// import products from "../../data/products.json"; 

// const ITEMS_PER_PAGE = 9;

// const ShoppingCartPage = () => {
//   const [cart, setCart] = useState([]); 
//   const [selectedCategory, setSelectedCategory] = useState(""); 
//   const [currentPage, setCurrentPage] = useState(1); 
//   const [searchTerm, setSearchTerm] = useState(""); 
//   const [sortOrder, setSortOrder] = useState("asc"); 

//   const uniqueCategories = [
//     ...new Set(products.map((product) => product.category)),
//   ];

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//     setSelectedCategory("");
//     setCurrentPage(1);
//   };

//   const clearSearch = () => {
//     setSearchTerm("");
//     setSelectedCategory("");
//     setCurrentPage(1);
//   };

//   const handleSort = () => {
//     setSortOrder(sortOrder === "asc" ? "desc" : "asc");
//   };

//   const filterProductsByCategory = (category) => {
//     setSelectedCategory(category);
//     setCurrentPage(1);
//   };

//   const countProductsByCategory = (category) => {
//     return products.filter((product) => product.category === category).length;
//   };

//   const categoriesButtons = uniqueCategories.map((category) => (
//     <button
//       key={category}
//       className="text-left px-4 hover_bg"
//       onClick={() => filterProductsByCategory(category)}
//     >
//       {category} ({countProductsByCategory(category)})
//     </button>
//   ));

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

//   const pageCount = Math.ceil(sortedAndFilteredProducts.length / ITEMS_PER_PAGE);
//   const indexOfLastProduct = currentPage * ITEMS_PER_PAGE;
//   const indexOfFirstProduct = indexOfLastProduct - ITEMS_PER_PAGE;
//   const currentProducts = sortedAndFilteredProducts.slice(
//     indexOfFirstProduct,
//     indexOfLastProduct
//   );

//   return (
//     <div className="p-4 w-full shadow gap-10 flex flex-col lg:flex-row">
//       <section className="shadow rounded p-5">
//         <div className="flex shadow items-center border-gray rounded border">
//           <input
//             type="text"
//             placeholder="Rechercher des produits..."
//             value={searchTerm}
//             onChange={handleSearch}
//             className="px-4 w-[90%] py-2 rounded-md focus:outline-none"
//           />
//           <button onClick={clearSearch} className="ml-2 px-4 py-2 rounded-md">
//             ✕
//           </button>
//         </div>
//         <div className="mt-6 p-3 rounded paramsCategories">
//           <div className="px-4">
//             <h2 className="text-green font-extrabold">PAR CATÉGORIES</h2>
//           </div>
//           <hr className="border-1 border-gray" />
//           <button
//             onClick={() => filterProductsByCategory("")}
//             className="text-left px-4"
//           >
//             Voir tout ({products.length})
//           </button>
//           {categoriesButtons}
//         </div>
//         <div className="h-[50%] relative">
//           <h2 className="mt-10 mb-5 text-green ml-8 font-extrabold">NOS PRODUITS</h2>
//           <div className="absolute z-50 mt-10 ml-4 text-white">
//             <h3 className="font-normal text-xm mb-2">PRODUITS DE GROS</h3>
//             <p className="font-bold text-2xl">Tous vos produits agricoles en gros</p>
//             <p className="text-bg-gold mb-10 font-bold">A partir de 500 kg </p>
//             <Link to="#" className="border w-24 p-2">Voir les produits</Link>
//           </div>
//           <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1713447871/Banner%20publicite/11_fdza96.webp" alt="image banner section categorie" className="absolute h-[80%]" />
//         </div>
//       </section>
//       <section className="p-5 rounded shadow border-gray w-full lg:w-3/4">
//         <button
//           className="px-4 py-2 mb-4 lg:ml-[85%] rounded-md border border-gray"
//           onClick={handleSort}
//         >
//           Tri par défaut {sortOrder === "asc" ? "↑" : "↓"}
//         </button>
//         {currentProducts.length === 0 ? (
//           <p className="text-center"> Aucun produit ne correspond à votre recherche</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {currentProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default ShoppingCartPage;



// possibilité d'afficher le nombre de produits disponibles par catégorie

// import ProductCard from "./ProductCard"; 
// import { Link } from "react-router-dom"; 
// import React, { useState } from "react"; 
// import products from "../../data/products.json"; 

// const ITEMS_PER_PAGE = 9;

// const ShoppingCartPage = () => {
//   const [cart, setCart] = useState([]); 
//   const [selectedCategory, setSelectedCategory] = useState(""); 
//   const [selectedRegion, setSelectedRegion] = useState(""); // État pour la région sélectionnée
//   const [currentPage, setCurrentPage] = useState(1); 
//   const [searchTerm, setSearchTerm] = useState(""); 
//   const [sortOrder, setSortOrder] = useState("asc"); 

//   const uniqueCategories = [
//     ...new Set(products.map((product) => product.category)),
//   ];

//   const uniqueRegions = [
//     ...new Set(products.map((product) => product.region)),
//   ];

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//     setSelectedCategory("");
//     setSelectedRegion("");
//     setCurrentPage(1);
//   };

//   const clearSearch = () => {
//     setSearchTerm("");
//     setSelectedCategory("");
//     setSelectedRegion("");
//     setCurrentPage(1);
//   };

//   const handleSort = () => {
//     setSortOrder(sortOrder === "asc" ? "desc" : "asc");
//   };

//   const filterProductsByCategory = (category) => {
//     setSelectedCategory(category);
//     setSelectedRegion("");
//     setCurrentPage(1);
//   };

//   const filterProductsByRegion = (region) => {
//     setSelectedRegion(region);
//     setSelectedCategory("");
//     setCurrentPage(1);
//   };

//   const countProductsByCategory = (category) => {
//     return products.filter((product) => product.category === category).length;
//   };

//   const categoriesButtons = uniqueCategories.map((category) => (
//     <button
//       key={category}
//       className="text-left px-4 hover_bg"
//       onClick={() => filterProductsByCategory(category)}
//     >
//       {category} ({countProductsByCategory(category)})
//     </button>
//   ));

//   const regionsButtons = uniqueRegions.map((region) => (
//     <button
//       key={region}
//       className="text-left px-4 hover_bg"
//       onClick={() => filterProductsByRegion(region)}
//     >
//       {region}
//     </button>
//   ));

//   const sortedAndFilteredProducts = products
//     .filter(
//       (product) =>
//         (selectedCategory === "" || product.category === selectedCategory) &&
//         (selectedRegion === "" || product.region === selectedRegion)
//     )
//     .filter((product) =>
//       product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       product.region.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .sort((a, b) =>
//       sortOrder === "asc" ? a.price - b.price : b.price - a.price
//     );

//   const pageCount = Math.ceil(sortedAndFilteredProducts.length / ITEMS_PER_PAGE);
//   const indexOfLastProduct = currentPage * ITEMS_PER_PAGE;
//   const indexOfFirstProduct = indexOfLastProduct - ITEMS_PER_PAGE;
//   const currentProducts = sortedAndFilteredProducts.slice(
//     indexOfFirstProduct,
//     indexOfLastProduct
//   );

//   return (
//     <div className="p-4 w-full shadow gap-10 flex flex-col lg:flex-row">
//       <section className="shadow rounded p-5">
//         <div className="flex shadow items-center border-gray rounded border">
//           <input
//             type="text"
//             placeholder="Rechercher des produits ou des régions..."
//             value={searchTerm}
//             onChange={handleSearch}
//             className="px-4 w-[90%] py-2 rounded-md focus:outline-none"
//           />
//           <button onClick={clearSearch} className="ml-2 px-4 py-2 rounded-md">
//             ✕
//           </button>
//         </div>
//         <div className="mt-6 p-3 rounded paramsCategories">
//           <div className="px-4">
//             <h2 className="text-green font-extrabold">PAR CATÉGORIES</h2>
//           </div>
//           <hr className="border-1 border-gray" />
//           <button
//             onClick={() => filterProductsByCategory("")}
//             className="text-left px-4"
//           >
//             Voir tout ({products.length})
//           </button>
//           {categoriesButtons}
//         </div>
//         <div className="mt-6 p-3 rounded paramsCategories">
//           <div className="px-4">
//             <h2 className="text-green font-extrabold">PAR RÉGION</h2>
//           </div>
//           <hr className="border-1 border-gray" />
//           <button
//             onClick={() => filterProductsByRegion("")}
//             className="text-left px-4"
//           >
//             Voir tout ({products.length})
//           </button>
//           {regionsButtons}
//         </div>
//         <div className="h-[50%] relative">
//           <h2 className="mt-10 mb-5 text-green ml-8 font-extrabold">NOS PRODUITS</h2>
//           <div className="absolute z-50 mt-10 ml-4 text-white">
//             <h3 className="font-normal text-xm mb-2">PRODUITS DE GROS</h3>
//             <p className="font-bold text-2xl">Tous vos produits agricoles en gros</p>
//             <p className="text-bg-gold mb-10 font-bold">A partir de 500 kg </p>
//             <Link to="#" className="border w-24 p-2">Voir les produits</Link>
//           </div>
//           <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1713447871/Banner%20publicite/11_fdza96.webp" alt="image banner section categorie" className="absolute h-[80%]" />
//         </div>
//       </section>
//       <section className="p-5 rounded shadow border-gray w-full lg:w-3/4">
//         <button
//           className="px-4 py-2 mb-4 lg:ml-[85%] rounded-md border border-gray"
//           onClick={handleSort}
//         >
//           Tri par défaut {sortOrder === "asc" ? "↑" : "↓"}
//         </button>
//         {currentProducts.length === 0 ? (
//           <p className="text-center"> Aucun produit ne correspond à votre recherche</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {currentProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default ShoppingCartPage;


// code plus clear j'ai supprimer le trie par region

// import ProductCard from "./ProductCard"; 
// import { Link } from "react-router-dom"; 
// import React, { useState } from "react"; 
// import products from "../../data/products.json"; 

// const ITEMS_PER_PAGE = 9;

// const ShoppingCartPage = () => {
//   const [cart, setCart] = useState([]); 
//   const [selectedCategory, setSelectedCategory] = useState(""); 
//   const [currentPage, setCurrentPage] = useState(1); 
//   const [searchTerm, setSearchTerm] = useState(""); 
//   const [sortOrder, setSortOrder] = useState("asc"); 

//   const uniqueCategories = [
//     ...new Set(products.map((product) => product.category)),
//   ];

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//     setSelectedCategory("");
//     setCurrentPage(1);
//   };

//   const clearSearch = () => {
//     setSearchTerm("");
//     setSelectedCategory("");
//     setCurrentPage(1);
//   };

//   const handleSort = () => {
//     setSortOrder(sortOrder === "asc" ? "desc" : "asc");
//   };

//   const filterProductsByCategory = (category) => {
//     setSelectedCategory(category);
//     setCurrentPage(1);
//   };

//   const countProductsByCategory = (category) => {
//     return products.filter((product) => product.category === category).length;
//   };

//   const categoriesButtons = uniqueCategories.map((category) => (
//     <button
//       key={category}
//       className="text-left px-4 hover_bg"
//       onClick={() => filterProductsByCategory(category)}
//     >
//       {category} ({countProductsByCategory(category)})
//     </button>
//   ));

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

//   const pageCount = Math.ceil(sortedAndFilteredProducts.length / ITEMS_PER_PAGE);
//   const indexOfLastProduct = currentPage * ITEMS_PER_PAGE;
//   const indexOfFirstProduct = indexOfLastProduct - ITEMS_PER_PAGE;
//   const currentProducts = sortedAndFilteredProducts.slice(
//     indexOfFirstProduct,
//     indexOfLastProduct
//   );

//   return (
//     <div className="p-4 w-full shadow gap-10 flex flex-col lg:flex-row">
//       <section className="shadow rounded p-5">
//         <div className="flex shadow items-center border-gray rounded border">
//           <input
//             type="text"
//             placeholder="Rechercher des produits..."
//             value={searchTerm}
//             onChange={handleSearch}
//             className="px-4 w-[90%] py-2 rounded-md focus:outline-none"
//           />
//           <button onClick={clearSearch} className="ml-2 px-4 py-2 rounded-md">
//             ✕
//           </button>
//         </div>
//         <div className="mt-6 p-3 rounded paramsCategories">
//           <div className="px-4">
//             <h2 className="text-green font-extrabold">PAR CATÉGORIES</h2>
//           </div>
//           <hr className="border-1 border-gray" />
//           <button
//             onClick={() => filterProductsByCategory("")}
//             className="text-left px-4"
//           >
//             Voir tout ({products.length})
//           </button>
//           {categoriesButtons}
//         </div>
//         <div className="h-[50%] relative">
//           <h2 className="mt-10 mb-5 text-green ml-8 font-extrabold">NOS PRODUITS</h2>
//           <div className="absolute z-50 mt-10 ml-4 text-white">
//             <h3 className="font-normal text-xm mb-2">PRODUITS DE GROS</h3>
//             <p className="font-bold text-2xl">Tous vos produits agricoles en gros</p>
//             <p className="text-bg-gold mb-10 font-bold">A partir de 500 kg </p>
//             <Link to="#" className="border w-24 p-2">Voir les produits</Link>
//           </div>
//           <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1713447871/Banner%20publicite/11_fdza96.webp" alt="image banner section categorie" className="absolute h-[80%]" />
//         </div>
//       </section>
//       <section className="p-5 rounded shadow border-gray w-full lg:w-3/4">
//         <button
//           className="px-4 py-2 mb-4 lg:ml-[85%] rounded-md border border-gray"
//           onClick={handleSort}
//         >
//           Tri par défaut {sortOrder === "asc" ? "↑" : "↓"}
//         </button>
//         {currentProducts.length === 0 ? (
//           <p className="text-center"> Aucun produit ne correspond à votre recherche</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {currentProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default ShoppingCartPage;






// (PAGE 5) si jamais un proproble survienne dans ce code j'ai supprimer la pagination de //


import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import products from "../../data/products.json";

// Définition du composant ShoppingCartPage sous forme de fonction
const ShoppingCartPage = () => {
  // Déclaration des états pour gérer le panier, la catégorie sélectionnée, le terme de recherche et l'ordre de tri

  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Extraction des catégories uniques des produits à partir des données JSON
  const uniqueCategories = [...new Set(products.map((product) => product.category))];

  // Fonction de gestion de la recherche
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setSelectedCategory("");
  };

  // Fonction de réinitialisation de la recherche
  const clearSearch = () => {
    setSearchTerm("");
    setSelectedCategory("");
  };

  // Fonction de gestion du tri des produits
  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Fonction de filtrage des produits par catégorie
  const filterProductsByCategory = (category) => {
    setSelectedCategory(category);
  };

  // Fonction de comptage des produits par catégorie
  const countProductsByCategory = (category) => {
    return products.filter((product) => product.category === category).length;
  };

  // Génération des boutons de catégorie
  const categoriesButtons = uniqueCategories.map((category) => (
    <button
      key={category}
      className="text-left px-4 hover_bg"
      onClick={() => filterProductsByCategory(category)}
    >
      {category} ({countProductsByCategory(category)})
    </button>
  ));

  // Filtrage, tri et affichage des produits
  const sortedAndFilteredProducts = products
    .filter(
      (product) =>
        selectedCategory === "" || product.category === selectedCategory
    )
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

  // Rendu de la page avec les éléments HTML et les données dynamiques
  return (
    <div className="p-4 w-full shadow gap-10 flex flex-col lg:flex-row">
      {/* Section de recherche et de filtrage */}
      <section className="shadow rounded p-5">
        {/* Barre de recherche */}
        <div className="flex shadow items-center border-gray rounded border">
          <input
            type="text"
            placeholder="Rechercher des produits..."
            value={searchTerm}
            onChange={handleSearch}
            className="px-4 w-[90%] py-2 rounded-md focus:outline-none"
          />
          <button onClick={clearSearch} className="ml-2 px-4 py-2 rounded-md">
            ✕
          </button>
        </div>
        {/* Section de filtres par catégorie */}
        <div className="mt-6 p-3 rounded paramsCategories">
          <div className="px-4">
            <h2 className="text-green font-extrabold">PAR CATÉGORIES</h2>
          </div>
          <hr className="border-1 border-gray" />
          {/* Bouton pour afficher tous les produits */}
          <button
            onClick={() => filterProductsByCategory("")}
            className="text-left px-4"
          >
            Voir tout ({products.length})
          </button>
          {/* Boutons de catégories */}
          {categoriesButtons}
        </div>
        {/* Section publicitaire */}
        <div className="h-[50%] relative">
          {/* Titre et lien de la section */}
          <h2 className="mt-10 mb-5 text-green ml-8 font-extrabold">NOS PRODUITS</h2>
          <div className="absolute z-50 mt-10 ml-4 text-white">
            <h3 className="font-normal text-xm mb-2">PRODUITS DE GROS</h3>
            <p className="font-bold text-2xl">Tous vos produits agricoles en gros</p>
            <p className="text-bg-gold mb-10 font-bold">A partir de 500 kg </p>
            <Link to="#" className="border w-24 p-2">Voir les produits</Link>
          </div>
          {/* Image publicitaire */}
          <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1713447871/Banner%20publicite/11_fdza96.webp" alt="image banner section categorie" className="absolute h-[80%]" />
        </div>
      </section>
      {/* Section d'affichage des produits */}
      <section className="p-5 rounded shadow border-gray w-full lg:w-3/4">
        {/* Bouton de tri */}
        <button
          className="px-4 py-2 mb-4 lg:ml-[85%] rounded-md border border-gray"
          onClick={handleSort}>
          Tri par défaut {sortOrder === "asc" ? "↑" : "↓"}
        </button>
        
        {/* Affichage des produits */}
        {sortedAndFilteredProducts.length === 0 ? (
          <p className="text-center"> Aucun produit ne correspond à votre recherche</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedAndFilteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
export default ShoppingCartPage;
