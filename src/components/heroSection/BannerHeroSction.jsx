import React from "react";

const items = [
  {
    title: "Service 24/7j/7",
    description: "Accès instantané à l'assistance",
    imgUrl: "src/components/heroSection/assets/call center.svg",
  },
  {
    title: "Paiement 100% sécurisé",
    description: "Nous veillons à ce que votre argent soit économisé",
    imgUrl: "src/components/heroSection/assets/Paiement.svg",
  },
  {
    title: "Livraison Rapide",
    description: "Livraison gratuite sur toutes vos commandes",
    imgUrl: "src/components/heroSection/assets/Vector (2).svg",
  },
  {
    title: "Produits locaux",
    description: "100% du terroir congolaise",
    imgUrl: "src/components/heroSection/assets/boxe.svg",
  },
];

export default function BannerHeroSection() {
 
  const backgroundImage = {
    backgroundImage: "url('src/components/heroSection/assets/Yellow_bannier.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="flex -mt-24 flex-col lg:h-36 md:flex-row md:left-0 md:gap-10 justify-center items-center banner-hero-section"
      style={backgroundImage}
    >
      {items.map((item, index) => (
        <div key={index} className="flex text-sm  gap-3 items-center">
          <img src={item.imgUrl} alt="SVG" className="w-8 h-8" />
          <div className="flex flex-col">
            <p className="font-medium">{item.title}</p>
            <p className="text-text-gray font-thin">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
