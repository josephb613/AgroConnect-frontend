// import React from 'react';

// const UserDashboard = () => {
//   return (
//     <div className="bg-gray-200 min-h-screen">
//       {/* Menu du Tableau de Bord */}
//       <div className="bg-gray-800 text-white py-4">
//         <div className="container mx-auto px-4">
//           <ul className="flex">
//             <li className="mr-6">
//               <a href="#" className="hover:text-gray-300">Tableau de Bord</a>
//             </li>
//             <li className="mr-6">
//               <a href="#" className="hover:text-gray-300">Produits en Vente</a>
//             </li>
//             <li className="mr-6">
//               <a href="#" className="hover:text-gray-300">Ajouter un Produit</a>
//             </li>
//             {/* Ajoutez d'autres liens de menu au besoin */}
//           </ul>
//         </div>
//       </div>

//       {/* Contenu du Tableau de Bord */}
//       <div className="container mx-auto px-4 py-8">
//         <h2 className="text-2xl font-bold mb-4">Tableau de Bord</h2>

//         {/* Section Résumé */}
//         <div className="bg-white shadow-md rounded-lg p-6 mb-6">
//           <h3 className="text-lg font-bold mb-4">Résumé</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//             <div className="bg-gray-100 p-4 rounded-lg">
//               <h4 className="text-gray-700 font-bold mb-2">Total des Produits</h4>
//               <p className="text-3xl font-bold text-green-500">10</p>
//             </div>
//             <div className="bg-gray-100 p-4 rounded-lg">
//               <h4 className="text-gray-700 font-bold mb-2">Ventes Aujourd'hui</h4>
//               <p className="text-3xl font-bold text-green-500">5</p>
//             </div>
//             {/* Ajoutez d'autres sections résumées au besoin */}
//           </div>
//         </div>

//         {/* Section Liste des Produits */}
//         <div className="bg-white shadow-md rounded-lg p-6">
//           <h3 className="text-lg font-bold mb-4">Produits en Vente</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {/* Boucle sur les produits en vente */}
//             <div className="bg-gray-100 p-4 rounded-lg">
//               <h4 className="text-gray-700 font-bold mb-2">Nom du Produit</h4>
//               <p className="text-gray-700">Description du produit</p>
//               <div className="flex justify-between items-center mt-4">
//                 <span className="text-gray-700 font-bold">Prix : Prix du produit</span>
//                 <button className="bg-green-500 text-white py-1 px-3 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out">Modifier</button>
//               </div>
//             </div>
//             {/* Fin de la boucle */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;

import React from 'react';

// Sidebar Component
const Sidebar = () => {
  return (
    <div className="bg-gray- text-white h-full">
      <div className="py-4 px-6">
        <h2 className="text-lg font-semibold mb-4">Tableau de Bord</h2>
        <ul>
          <li className="mb-2">
            <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Vue d'ensemble</a>
          </li>
          <li className="mb-2">
            <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Gestion des Produits</a>
          </li>
          <li className="mb-2">
            <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Commandes</a>
          </li>
          <li className="mb-2">
            <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Clients</a>
          </li>
          <li className="mb-2">
            <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Statistiques</a>
          </li>
          {/* Ajoutez d'autres liens de la barre latérale au besoin */}
        </ul>
      </div>
    </div>
  );
};

// Main Dashboard Component
const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4">Vue d'ensemble</h2>
          {/* Contenu de la vue d'ensemble */}
          {/* Vous pouvez ajouter ici le contenu pour afficher une vue d'ensemble des données */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
