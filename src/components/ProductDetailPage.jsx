// import React from "react";
// import { useParams } from "react-router-dom";
// import ProductData from "../data/products.json"; // Assurez-vous d'importer vos données de produits

// import { tracingChannel } from "diagnostics_channel";
// import { FaRegCalendar } from "react-icons/fa6";

// const ProductDetailPage = () => {
//   const { productId } = useParams(); // Récupérez l'ID du produit depuis l'URL
//   const product = ProductData.find(product => product.id === parseInt(productId));

//   if (!product) {
//     return <div>Produit non trouvé</div>; // Gérer le cas où le produit n'est pas trouvé
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
 


import React from 'react';

const ProductDetailPage = () => {
    // Simuler des données de produit
    const product = {
        name: "Pommes de terre",
        description: "Des pommes de terre biologiques cultivées localement.",
        price: 5.99,
        quantity: 10,
        imageUrl: "lien_de_l'image.jpg",
        weight: "1 kg",
        origin: "France",
        organic: true,
        deliveryTime: "Livraison sous 48h"
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                    <img src={product.imageUrl} alt={product.name} className="w-full h-auto rounded-lg" />
                </div>
                <div className="md:w-1/2 md:ml-4 mt-4 md:mt-0">
                    <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <p className="text-gray-800 text-xl font-semibold mb-4">${product.price}</p>
                    <p className="text-gray-700 mb-2">Poids: {product.weight}</p>
                    <p className="text-gray-700 mb-2">Origine: {product.origin}</p>
                    {product.organic && <p className="text-green-600 mb-2">Biologique</p>}
                    <p className="text-gray-700 mb-2">{product.deliveryTime}</p>
                    <p className="text-gray-700 mb-2">Quantité disponible: {product.quantity}</p>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Ajouter au panier</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
