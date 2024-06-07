
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HomeCard from './HomeCard';
import Loader from '../components/marquetplace/Loader';

export default function CardGrid() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://capstone2-c2-josephb613.onrender.com/api/card'); // Remplacez par votre URL d'API
        const cleanedData = response.data.map(item => ({
          discount: item.discount,
          title: item.title,
          price: item.price,
          oldPrice: item.oldPrice || null,
          image: item.image
        }));
        setData(cleanedData);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid ml-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-x-0-10 gap-y-12">
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
