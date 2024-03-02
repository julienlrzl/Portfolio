import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ptutImage from "../assets/images/Ptut.png";

const Ptut = () => {
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
              <span className="contact-pre-title title-presentation">2023</span>
              <h1 className="contact-title">Projet Tutoré</h1>
              <h2 className="contact-title-bis title-presentation-bis">
                Langages
              </h2>
              <ul>
                <li className="puce">HTML</li>
                <li className="puce">CSS</li>
                <li className="puce">Javascript</li>
                <li className="puce">.Net</li>
                <li className="puce">SQL</li>
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
                <li className="puce">
                  Cédric Monprivé
                  <a href="https://github.com/Majriche" className="github-bis">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li className="puce">
                  Tom Toupence
                  <a href="https://github.com/Freedqumm" className="github-bis">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li className="puce">
                  Albin Martin
                  <a href="https://github.com/Albin0903" className="github-bis">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li className="puce">Alexandre Le</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="slider">
            <div className="slider-viewport">
              <img src={ptutImage} alt="Image Siteweb" />
            </div>
          </div>
          <div className="text-pre">
            <h3 className="title-text-pre">Projet Tutoré Project</h3>
            <p>
              My IMDB-inspired project, developed using React.js and a
              comprehensive film database, demonstrates my journey in learning
              and applying dynamic web development techniques. It provides a
              responsive, user-friendly interface for exploring an extensive
              film library, showcasing my growing skills and enthusiasm for both
              web technology and the entertainment sector. This endeavor
              reflects my ongoing commitment to mastering new technologies in
              the field.
            </p>
            <h3 className="title-text-pre title-text-pre-space">
              What it does
            </h3>
            <p className="space-bottom">
              My project is an advanced film database platform, akin to IMDB,
              enriched with features like search functionality, auto-completion,
              and comprehensive film details. It enables users to effortlessly
              search for movies, offering real-time suggestions through
              auto-completion linked to the database. Upon selection, it
              provides a detailed overview, including summaries, trailers, and
              additional film-related information. Furthermore, it suggests
              related films based on your search, enhancing the discovery
              process. This tool combines my growing knowledge in web
              development with my interest in the entertainment industry,
              showcasing my ability to integrate complex functionalities for an
              engaging user experience. The project is fully responsive, making
              film exploration accessible on any device.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ptut;
