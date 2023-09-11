
import React, { useEffect } from "react"
import NavBar from "../components/NavBar"
import Hero from "../components/Hero"
import backgroundImg from "../assets/aboutImg.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import { useLocation } from "react-router-dom";

export default function About(){
    const routePath = useLocation();
    const onTop = () => {
      window.scrollTo(0, 0);
    }
    useEffect(() => {
      onTop()
    }, [routePath]);
  

    return(
        <>
         <NavBar />
      <Hero 
      cName="hero-mid"
      heroImg={backgroundImg}
      title="About"
      btnClass="hide"
    
      />
      <AboutUs />
      <Footer />
        </>
    )
}