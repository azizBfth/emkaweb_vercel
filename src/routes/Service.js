import React, { useEffect } from "react";
import backgroundImg from "../assets/serviceImg.jpg";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import RecentWork from "../components/RecentWork"
import { useLocation } from "react-router-dom";

export default function Service() {
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
        cName="hero-mid"
        heroImg={backgroundImg}
        title="Services"
        btnClass="hide"
      />
      <RecentWork />
      <Footer />
    </>
  );
}
