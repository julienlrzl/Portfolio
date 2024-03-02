import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Puis4 from "../assets/images/Puis4.png";

const Connect4 = () => {
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
              <span className="contact-pre-title title-presentation">2022</span>
              <h1 className="contact-title">Connect Four</h1>
              <h2 className="contact-title-bis title-presentation-bis">
                Langages
              </h2>
              <ul>
                <li className="puce">Java</li>
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
              <img src={Puis4} alt="Image Siteweb" />
            </div>
          </div>
          <div className="text-pre">
            <h3 className="title-text-pre">Portfolio Project</h3>
            <p>
              ChatGPT To enhance my understanding of Java graphical user
              interfaces, I developed a Connect Four game, guided by specialized
              documentation provided by my professor. This project allowed me to
              refine my skills in creating interactive interfaces, showcasing my
              dedication to learning and mastering Java's GUI capabilities.
              Through this endeavor, I demonstrated my commitment to advancing
              my technical skills and exploring new areas of software
              development.
            </p>
            <h3 className="title-text-pre title-text-pre-space">
              What it does
            </h3>
            <p className="space-bottom">
              In my journey to master graphical user interfaces, I developed a
              versatile menu within a GUI project, offering users the choice
              between Player vs. Player and Player vs. Computer game modes. This
              interactive menu not only facilitates seamless navigation between
              different gameplay options but also allows users to adjust the
              difficulty level, return to the main menu, and explore various
              settings, ensuring a tailored gaming experience. This project
              underscores my ability to create flexible and user-friendly
              interfaces, reflecting my dedication to enhancing my programming
              skills and providing engaging digital experiences.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Connect4;
