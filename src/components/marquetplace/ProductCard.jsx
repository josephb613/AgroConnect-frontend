// const ProductCard = ({ product, addToCart }) => {
//     return (
//         <div className="p-4 rounded-md overflow-hidden border border-gray hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 relative">
//             <img src={product.image} alt={product.name} className="w-full h-auto" />
//             <div className="mt-4">
//                 <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
//                 <p className="text-gray-600 mb-2">${product.price}</p>
//                 <button
//                     className="bg-gray text-white py-2 px-4 rounded-md"
//                     onClick={() => addToCart(product)}
//                 >
//                     Acheter
//                 </button>
//             </div>
//         </div>
//     );
// };




import React from 'react';

export default function ProductCard({ product, addToCart }) {
    return (
        <div className="p-4 rounded-md overflow-hidden border border-gray hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 relative">
            <img src={product.image} alt={product.name} className="w-full h-auto" />
            <div className="mt-4">
                <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-2">${product.price}</p>
                <button className="bg-gray text-white py-2 px-4 rounded-md" onClick={() => addToCart(product)}>
                    Acheter
                </button>
            </div>
        </div>
    );
}
