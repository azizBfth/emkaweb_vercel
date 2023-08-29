import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import backgroundImg from "../assets/contact.jpg";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import ContactRes from "../components/Contact/Contact.js"

export default function Contact() {

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
        title="Contact"
        btnClass="hide"
      />
     <ContactRes />
      <Footer />
    </>
  );
}
