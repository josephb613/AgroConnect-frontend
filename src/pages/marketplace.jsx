import React from "react";
import CarrouselMarketPlace from "../components/marquetplace/CarouselMarPlace";
import ShoppingPage from "../components/marquetplace/ShoppingPage"
import CarouselNewProduct from "../components/marquetplace/CarouselNewProduct";


export default function MarketPlace() {
  
  return (
    <div>
    <CarrouselMarketPlace/>
    <ShoppingPage/> 
    <br />
    <br />
    <CarouselNewProduct/>
    </div>
  ); 
}
