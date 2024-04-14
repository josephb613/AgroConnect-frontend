import React from 'react';
import SearchBar from "./SearchBar"
import ProductCard  from "./ProductCard"
import CategoryFilter from "./CategoryFilter"

const ShoppingCartPage = () => {


    // Composants utilisés dans ShoppingCartPage
    return (
        <div className="p-4 w-full gap-10 flex flex-col lg:flex-row">
            {/* Section des catégories */}
            <section className="border shadow-rounded p-5">
                <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} clearSearch={clearSearch} />
                <CategoryFilter categories={uniqueCategories} filterProductsByCategory={filterProductsByCategory} />
            </section>
            
            {/* Tri par défaut et affichage des produits */}
            <section className="p-5 border rounded border-gray w-full lg:w-3/4">
                <button
                    className="px-4 py-2 mb-4 lg:ml-[85%] rounded-md border border-gray"
                    onClick={handleSort}
                >
                    Tri par défaut {sortOrder === "asc" ? "↑" : "↓"}
                </button>
                {currentProducts.length === 0 ? (
                    <p className="text-center">
                        Aucun produit ne correspond à votre recherche
                    </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentProducts.map((product) => (
                            <ProductCard key={product.id} product={product} addToCart={addToCart} />
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default ShoppingCartPage;
