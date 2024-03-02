import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigationbis from "../components/Navigationbis";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Auto from "../assets/images/Auto.png";

const Automata = () => {
  let navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    navigate("/", { state: { scrollToProjects: true } });
  };
  return (
    <div className="app-content">
      <Navigationbis />
      <div className="main">
        <div className="col-md-3">
          <div>
            <a onClick={handleBackClick} className="bouton-retour">
              <button className="contact-button">
                <span class="button_top">Back</span>
              </button>
            </a>
            <div className="d-flex flex-column">
              <span className="contact-pre-title title-presentation">2024</span>
              <h1 className="contact-title">Cellular Automata</h1>
              <h2 className="contact-title-bis title-presentation-bis">
                Langages
              </h2>
              <ul>
                <li className="puce">Java</li>
              </ul>
              <h2 className="contact-title-bis title-presentation-bis">
                Technologies
              </h2>
              <ul>
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
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="slider">
            <div className="slider-viewport">
              <img src={Auto} alt="Image Siteweb" />
            </div>
          </div>
          <div className="text-pre">
            <h3 className="title-text-pre">Automata Project</h3>
            <p>
              To enhance my Java skills and understanding of graphical
              interfaces, I engaged in a collaborative project that involved
              developing a wildfire simulation and a 1D cellular automaton. This
              project allowed us to explore variable parameters in simulating
              wildfires and customize rules for the cellular automaton,
              providing a hands-on approach to learning Java's GUI capabilities
              and algorithm implementation. It was a valuable experience in
              applying Java to create meaningful, interactive simulations,
              showcasing our collective ability to tackle complex programming
              challenges.
            </p>
            <h3 className="title-text-pre title-text-pre-space">
              What it does
            </h3>
            <p className="space-bottom">
              In our project, we developed a menu offering a choice between two
              simulations: a 1D cellular automaton where users can select the
              rule and initial list to generate the corresponding automaton, and
              a wildfire simulation. For the wildfire simulation, an initial
              setup window allows users to configure all parameters, such as
              wind direction and the number of initial fires. This project was
              designed to deepen our understanding of Java and its graphical
              interfaces, providing a practical application of these concepts
              through interactive simulations that challenge and enhance our
              programming skills.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Automata;
