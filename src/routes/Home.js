import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import backgroundImg from "../assets/homebg1.jpg";
import Products from "../components/Product";
import RecentWork from "../components/RecentWork";
import Footer from "../components/Footer"
import { useLocation } from "react-router-dom";
import PopularProducts from "../components/popularProducts/PopularProducts";
import PicSlider from "../components/slider/PicSlider";

export default function Home() {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    onTop()
  }, [routePath]);

  return (
    
    <>
      <NavBar />
      <Hero 
      cName="hero"
      heroImg={backgroundImg}
      title="YOUR DISPLAY YOUR VISION"
      text= "Your New Solution For TFT Display"
      buttonText="LED DISPLAY"
      url="/"
      btnClass="show"
      />
      <Products />
      <PopularProducts />
      <RecentWork />
      <PicSlider />
      <Footer />
    </>
  );
}
