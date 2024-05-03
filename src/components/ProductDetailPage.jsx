// import React from "react";
// import { useParams } from "react-router-dom";
// import ProductData from "../data/products.json"; // Assurez-vous d'importer vos données de produits

// import { tracingChannel } from "diagnostics_channel";
// import { FaRegCalendar } from "react-icons/fa6";

// const ProductDetailPage = () => {
//   const { productId } = useParams(); 
//   const product = ProductData.find(product => product.id === parseInt(productId));

//   if (!product) {
//     return <div>Produit non trouvé</div>;
//   }

//   return (
//     <div className="container mx-auto">
//       <div className="flex justify-center">
//         <div className="w-3/4">
//           <img src={product.image} alt={product.name} className="w-full h-auto" />
//           <h1 className="text-3xl font-bold mt-5">{product.name}</h1>
//           <p className="text-lg text-gray">{product.description}</p>
//           <div className="mt-5">
//             <p className="text-xl font-semibold">{product.price}</p>
//             <p className="text-gray">Disponible: {product.quantity ? "Oui" : "Non"}</p>
//           </div>
//           <div className="mt-5">
//             <button className="bg-blue text-white px-4 py-2 rounded">Ajouter au panier</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailPage;




// import React from "react";


// export default function ProductDetailPage() {
//   return (
//     <div>

//     </div>
//   );
// }
 


// import React from 'react';

// const ProductDetailPage = () => {
//     // Simuler des données de produit
//     const product = {
//         name: "Pommes de terre",
//         description: "Des pommes de terre biologiques cultivées localement.",
//         price: 5.99,
//         quantity: 10,
//         imageUrl: "lien_de_l'image.jpg",
//         weight: "1 kg",
//         origin: "France",
//         organic: true,
//         deliveryTime: "Livraison sous 48h"
//     };

//     return (
//         <div className="max-w-4xl mx-auto px-4 py-8">
//             <div className="flex flex-col md:flex-row">
//                 <div className="md:w-1/2">
//                     <img src={product.imageUrl} alt={product.name} className="w-full h-auto rounded-lg" />
//                 </div>
//                 <div className="md:w-1/2 md:ml-4 mt-4 md:mt-0">
//                     <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
//                     <p className="text-gray-700 mb-4">{product.description}</p>
//                     <p className="text-gray-800 text-xl font-semibold mb-4">${product.price}</p>
//                     <p className="text-gray-700 mb-2">Poids: {product.weight}</p>
//                     <p className="text-gray-700 mb-2">Origine: {product.origin}</p>
//                     {product.organic && <p className="text-green-600 mb-2">Biologique</p>}
//                     <p className="text-gray-700 mb-2">{product.deliveryTime}</p>
//                     <p className="text-gray-700 mb-2">Quantité disponible: {product.quantity}</p>
//                     <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Ajouter au panier</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductDetailPage;


import React from 'react';

const ProductDetailPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex flex-col md:flex-row">
          <div className=" h-44 md:w-1/2 md:mr-6 mb-4 md:mb-0">
            <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1714220244/Projet%20Agroconnect/Default_Imagine_a_scene_where_an_African_female_farmer_works_i_1_1_wjtkmv.jpg" alt="Produit" className= " h-44 rounded-lg w-full" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Nom du Produit</h2>
            <p className="text-gray-700 mb-4">Description du produit</p>
            <div className="flex items-center mb-4">
              <span className="text-gray-700 font-bold mr-2">Prix :</span>
              <span className="text-gray-900">Prix du produit</span>
            </div>
            <div className="flex items-center mb-4">
              <span className="text-gray-700 font-bold mr-2">Disponibilité :</span>
              <span className="text-green-500">En stock</span>
            </div>
            <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out">Ajouter au panier</button>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-4">Caractéristiques du Produit</h3>
          <ul className="list-disc pl-4">
            <li>Caractéristique 1</li>
            <li>Caractéristique 2</li>
            <li>Caractéristique 3</li>
            {/* Ajoutez autant de caractéristiques que nécessaire */}
          </ul>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-4">Avis des Clients</h3>
          {/* Section des avis des clients */}
          <p className="text-gray-700">Aucun avis pour le moment.</p>
        </div>
        {/* Ajoutez d'autres sections comme les produits connexes, la description détaillée, etc. */}
      </div>
    </div>
  );
};

export default ProductDetailPage;
