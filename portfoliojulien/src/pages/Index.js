import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "../components/Navigation";
import Home from "../components/Home";
import Projects from "../components/Projects";
import SocialMediaBar from "../components/SocialMediaBar";
import Footer from "../components/Footer";
import About from "../components/About";
import Contact from "../components/Contact";
import useMediaQuery from "../hooks/useMediaQuery";

const Index = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
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
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.state]);

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
