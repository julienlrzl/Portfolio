import React, { useState, useEffect, useRef } from "react";
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
