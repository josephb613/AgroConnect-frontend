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




import React from "react";


export default function ProductDetailPage() {
  return (
    <div>

    </div>
  );
}
 
