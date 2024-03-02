import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import portfolioImage from "../assets/images/Portfolio.png";

const Portfolio = () => {
  let navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    navigate("/", { state: { scrollToProjects: true } });
  };
  return (
    <div className="app-content">
      <Navigation />
      <div className="main d-flex flex-row">
        <div className="col-md-3">
          <div>
            <a onClick={handleBackClick} className="bouton-retour">
              <button className="contact-button">
                <span class="button_top">Back</span>
              </button>
            </a>
            <div className="d-flex flex-column">
              <span className="contact-pre-title title-presentation">2024</span>
              <h1 className="contact-title">Portfolio</h1>
              <h2 className="contact-title-bis title-presentation-bis">
                Langages
              </h2>
              <ul>
                <li className="puce">HTML</li>
                <li className="puce">SCSS</li>
                <li className="puce">Javascript</li>
              </ul>
              <h2 className="contact-title-bis title-presentation-bis">
                Technologies
              </h2>
              <ul>
                <li className="puce">React.js</li>
                <li className="puce">Git</li>
              </ul>
              <h2 className="contact-title-bis title-presentation-bis">
                Contributors
              </h2>
              <ul>
                <li className="puce">
                  Julien Larzul
                  <a
                    href="https://github.com/julienlrzl"
                    className="github-bis"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="slider">
            <div className="slider-viewport">
              <img src={portfolioImage} alt="Image Siteweb" />
            </div>
          </div>
          <div className="text-pre">
            <h3 className="title-text-pre">Portfolio Project</h3>
            <p>
              My portfolio, crafted using React.js and SCSS, is a testament to
              my ongoing journey in mastering new technologies. It presents a
              selection of my projects in an interactive and aesthetically
              pleasing manner, demonstrating not only my current skills but also
              my commitment to learning and adopting cutting-edge web
              development practices. This platform is both a showcase of my work
              and an indication of my continuous growth in the tech field.
            </p>
            <h3 className="title-text-pre title-text-pre-space">
              What it does
            </h3>
            <p className="space-bottom">
              My project is a comprehensive portfolio website designed to
              showcase my work, skills, and professional background. It features
              a detailed presentation of my projects, an "About Me" section that
              provides insights into my personal and professional journey, and a
              downloadable CV for a closer look at my credentials. Key
              functionalities include a night mode for comfortable viewing,
              bilingual translation in French and English to cater to a wider
              audience, and a contact section equipped with a mailto link for
              easy communication. The website is fully responsive, ensuring a
              seamless experience across various devices and screen sizes.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
