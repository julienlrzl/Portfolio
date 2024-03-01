import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Portfolio = () => {
  return (
    <div className="app-content">
      <Navigation />
      <div className="main">
        <div>
          <a href="">
            <button className="contact-button">
              <span class="button_top">Back</span>
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
