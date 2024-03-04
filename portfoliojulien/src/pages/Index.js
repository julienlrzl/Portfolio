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
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    if (location.state?.scrollToProjects) {
      // Assurez-vous que l'ID 'projects' existe sur la section des projets.
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    // Ajoutez également une logique pour gérer le changement de l'état lorsqu'il n'est plus nécessaire.
    // Par exemple, en réinitialisant l'état après le défilement.
  }, [location, location.state]);

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
