// import React from "react";

// const CategoryFilter = ({ categories, filterProductsByCategory }) => {
//     return (
//         <div className="mt-6 p-3 rounded paramsCategories">
//             <div className="px-4">
//                 <h2 className="text-sm font-bold">PAR CATÉGORIES</h2>
//             </div>
//             <hr className="border-1 border-gray" />
//             <button
//                 onClick={() => filterProductsByCategory("")}
//                 className="text-left px-4"
//             >
//                 Voir tout
//             </button>
//             {categories.map((category) => (
//                 <button
//                     key={category}
//                     className="text-left px-4 hover:bg-gray hover:text-white"
//                     onClick={() => filterProductsByCategory(category)}
//                 >
//                     {category}
//                 </button>
//             ))}
//         </div>
//     );
// };


import React from 'react';

export default function CategoryFilter({ categories, filterProductsByCategory }) {
    return (
        <div className="mt-6 p-3 rounded paramsCategories">
            <div className="px-4">
                <h2 className="text-sm font-bold">PAR CATÉGORIES</h2>
            </div>
            <hr className="border-1 border-gray" />
            <button onClick={() => filterProductsByCategory("")} className="text-left px-4">
                Voir tout
            </button>
            {categories.map((category) => (
                <button key={category} className="text-left px-4 hover:bg-gray hover:text-white" onClick={() => filterProductsByCategory(category)}>
                    {category}
                </button>
            ))}
        </div>
    );
}
