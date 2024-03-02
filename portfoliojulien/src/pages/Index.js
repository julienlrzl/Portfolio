import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "../components/Navigation";
import Home from "../components/Home";
import Projects from "../components/Projects";
import SocialMediaBar from "../components/SocialMediaBar";
import Footer from "../components/Footer";
import About from "../components/About";
import Contact from "../components/Contact";

const Index = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth < 768;
  const location = useLocation();

  useEffect(() => {
    // Vérifie si l'URL contient une ancre (#)
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="app-content">
      {!isMobile && <SocialMediaBar />}
      <Navigation />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
