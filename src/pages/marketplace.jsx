import React from 'react';
import Header from "../components/header/Header";
import CarrouselMarketPlace from '../components/marquetplace/carouselMarPlace';
import Footer from "../components/Footer/footer";
import ShoppingPage from "../components/marquetplace/ShoppingPage"
// import ShoppingCartPage from '../components/marquetplace/ShoppingCartPage';

export default function MarketPlace() {
  
  return (
    <div>
    <Header/>
    <CarrouselMarketPlace/>
    <ShoppingPage/>
    {/* <ShoppingCartPage/> */}
    <br />
    <br />
    <br />
    <br />
    <br />
    <Footer/>
    </div>
  ); 
}
