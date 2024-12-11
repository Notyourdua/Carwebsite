import React from "react";
import Navbar from "../app/components/Navbar"
import Carsousel from "./components/Carousel";
import Progressor from "./components/Progressor";
import Prodectlist from "./components/Productlist";
import Banner from "./components/Banner";
import Offer from "./components/Offer";
import Card from "./components/Card";
import Testimonals from "./components/Testimonals";
import Footer from "./components/Footer";
import Burger from "./components/Burger";

export default function App(){
  return(
    <div className="bg-gradient-to-r from-black to-slate-700 min-h-screen">
      <Navbar/>
      <Carsousel/>
      <Progressor/>
      <Burger/>
      <Banner/>
      <Prodectlist/>
      <Offer/>
      <Card/>
      <Testimonals/>
      <Footer/>

    </div>
  )
}
