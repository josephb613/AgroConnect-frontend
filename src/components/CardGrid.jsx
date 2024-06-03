// import React from "react";
// import HomeCard from "./HomeCard";

// export default function CardGrid() {
//   const cards = [
//     { discount: '6%', title: 'Pre', price: '176.72', oldPrice: '188.00' },
//     { discount: '10%', title: 'Organic Vegetables', price: '50.00', oldPrice: '55.00' },
//     { discount: '15%', title: 'Healthy Snacks', price: '20.00', oldPrice: '25.00' },
//     { discount: '15%', title: 'Healthy Snacks', price: '20.00', oldPrice: '25.00' },
//     { discount: '15%', title: 'Healthy Snacks', price: '20.00', oldPrice: '25.00' },
 
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//       {cards.map((card, index) => (
//         <HomeCard
//           key={index}
//           discount={card.discount}
//           title={card.title}
//           price={card.price}
//           oldPrice={card.oldPrice}
//         />
//       ))}
//     </div>
//   );
// }

// import React, { useEffect, useState } from 'react';
// import HomeCard from './HomeCard';

// export default function CardGrid() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('http://localhost:3000/api/card')  // Remplacez par votre URL d'API
//       .then(response => response.json())
//       .then(data => {
//         const cleanedData = data.map(item => ({
//           discount: item.discount,
//           title: item.title,
//           price: item.price,
//           oldPrice: item.oldPrice || null,
//           image: item.image
//         }));
//         setData(cleanedData);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Erreur lors de la récupération des données :', error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Chargement...</div>;
//   }

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//       {data.map((card, index) => (
//         <HomeCard
//           key={index}
//           discount={card.discount}
//           title={card.title}
//           price={card.price}
//           oldPrice={card.oldPrice}
//           image={card.image}
//         />
//       ))}
//     </div>
//   );
// }


// import React, { useEffect, useState } from 'react';
// import HomeCard from './HomeCard';
// import Loader from '../components/marquetplace/Loader';

// export default function CardGrid() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('http://localhost:3000/api/card')  // Remplacez par votre URL d'API
//       .then(response => response.json())
//       .then(data => {
//         const cleanedData = data.map(item => ({
//           discount: item.discount,
//           title: item.title,
//           price: item.price,
//           oldPrice: item.oldPrice || null,
//           image: item.image
//         }));
//         setData(cleanedData);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Erreur lors de la récupération des données :', error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//       {loading ? (
//         <Loader loading={loading} />
//       ) : (
//         data.map((card, index) => (
//           <HomeCard
//             key={index}
//             discount={card.discount}
//             title={card.title}
//             price={card.price}
//             oldPrice={card.oldPrice}
//             image={card.image}
//           />
//         ))
//       )}
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HomeCard from './HomeCard';
import Loader from '../components/marquetplace/Loader';

export default function CardGrid() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/api/card')  // Remplacez par votre URL d'API
      .then(response => {
        const cleanedData = response.data.map(item => ({
          discount: item.discount,
          title: item.title,
          price: item.price,
          oldPrice: item.oldPrice || null,
          image: item.image
        }));
        setData(cleanedData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {loading ? (
        <Loader loading={loading} />
      ) : (
        data.map((card, index) => (
          <HomeCard
            key={index}
            discount={card.discount}
            title={card.title}
            price={card.price}
            oldPrice={card.oldPrice}
            image={card.image}
          />
        ))
      )}
    </div>
  );
}
