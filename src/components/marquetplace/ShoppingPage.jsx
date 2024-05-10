
import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const ShoppingCartPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://capstone2-c2-josephb613.onrender.com/api/product"
      );
      console.log(response)
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts(); // Appeler la fonction fetchProducts lors du montage du composant
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setSelectedCategory("");
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSelectedCategory("");
  };

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const filterProductsByCategory = (category) => {
    setSelectedCategory(category);
  };

  const countProductsByCategory = (category) => {
    return products.filter((product) => product.category === category).length;
  };

  const uniqueCategories = [...new Set(products.map((product) => product.category))];

  const categoriesButtons = uniqueCategories.map((category) => (
    <button
      key={category}
      className="text-left px-4 hover_bg"
      onClick={() => filterProductsByCategory(category)}
    >
      {category} ({countProductsByCategory(category)})
    </button>
  ));

  const sortedAndFilteredProducts = products
    products
  .filter(
    (product) =>
      selectedCategory === "" || product.category === selectedCategory
  )
  .filter((product) =>
    product.title && product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price
  );


  return (
    <div className="p-4 w-full shadow gap-10 flex flex-col lg:flex-row">
      <section className="shadow rounded p-5">
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
        <div className="mt-6 p-3 rounded paramsCategories">
          <div className="px-4">
            <h2 className="text-green font-extrabold">PAR CATÉGORIES</h2>
          </div>
          <hr className="border-1 border-gray" />
          <button
            onClick={() => filterProductsByCategory("")}
            className="text-left px-4"
          >
            Voir tout ({products.length})
          </button>
          {categoriesButtons}
        </div>
        <div className="h-[50%] relative">
          <h2 className="mt-10 mb-5 text-green ml-8 font-extrabold">NOS PRODUITS</h2>
          <div className="absolute z-50 mt-10 ml-4 text-white">
            <h3 className="font-normal text-xm mb-2">PRODUITS DE GROS</h3>
            <p className="font-bold text-2xl">Tous vos produits agricoles en gros</p>
            <p className="text-bg-gold mb-10 font-bold">A partir de 500 kg </p>
            <Link to="#" className="border w-24 p-2">Voir les produits</Link>
          </div>
          <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1713447871/Banner%20publicite/11_fdza96.webp" alt="image banner section categorie" className="absolute h-[80%]" />
        </div>
      </section>
      <section className="p-5 rounded shadow border-gray w-full lg:w-3/4">
        <button
          className="px-4 py-2 mb-4 lg:ml-[85%] rounded-md border border-gray"
          onClick={handleSort}>
          Tri par défaut {sortOrder === "asc" ? "↑" : "↓"}
        </button>
        {sortedAndFilteredProducts.length === 0 ? (
          <p className="text-center"> Aucun produit ne correspond à votre recherche</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedAndFilteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default ShoppingCartPage;
