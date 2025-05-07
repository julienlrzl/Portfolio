import React from "react";
import { Link } from "react-router-dom";
import Folder from "./Folder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="main-content">
      <div id="projects" className="container-fluid h-100 d-flex flex-column">
        <span className="contact-pre-title left">{t("projectTitle0")}</span>
        <h1 className="contact-title space left down">{t("projectTitle1")}</h1>
        <div className="">
          <div className="responsive">
            <div
              className="col-md-4 rectangle-color"
              style={{ textAlign: "right" }}
            >
              <div className="d-flex flex-row align-items-center">
                <div>
                  <Folder />
                </div>
                <div>
                  <a
                    href="https://github.com/julienlrzl/Portfolio"
                    className="github-projects"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
              <Link to="/Portfoliojulien" className="d-flex flex-column">
                <div className="d-flex flex-column">
                  <h1 className="title-project">{t("projecttitle0")} 💼</h1>
                  <p className="text-project">{t("project0")}</p>
                  <span className="footer-project">React.js SCSS</span>
                </div>
              </Link>
            </div>

            <div className="col-md-4 text-center rectangle-color">
              <div className="d-flex flex-row align-items-center">
                <div>
                  <Folder />
                </div>
                <div>
                  <a
                    href="https://github.com/julienlrzl/PHP_E_Boutique"
                    className="github-projects"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
              <Link to="/BoutiqueFr" className="d-flex flex-column">
                <div className="d-flex flex-column">
                  <h1 className="title-project">{t("projecttitle1")} 🍎</h1>
                  <p className="text-project">{t("project1")}</p>
                  <span className="footer-project">PHP Twig JavaScript</span>
                </div>
              </Link>
            </div>

            <div className="col-md-4 text-left rectangle-color">
              <div className="d-flex flex-row align-items-center">
                <div>
                  <Folder />
                </div>
                <div>
                  <a
                    href="https://github.com/julienlrzl/Projet_Tutore"
                    className="github-projects"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
              <Link to="/Ptut" className="d-flex flex-column">
                <div className="d-flex flex-column">
                  <h1 className="title-project">{t("projecttitle2")} 🍿</h1>
                  <p className="text-project">{t("project2")}</p>
                  <span className="footer-project">React.js .NET</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="responsive">
            <div
              className="col-md-4 rectangle-color"
              style={{ textAlign: "right" }}
            >
              <div className="d-flex flex-row align-items-center">
                <div>
                  <Folder />
                </div>
                <div>
                  <a
                    href="https://github.com/julienlrzl/Projet-Java-Automates"
                    className="github-projects"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
              <Link to="/Automata" className="d-flex flex-column">
                <div className="d-flex flex-column">
                  <h1 className="title-project">{t("projecttitle3")} 🧑🏽‍💻</h1>
                  <p className="text-project">{t("project3")}</p>
                  <span className="footer-project">Java</span>
                </div>
              </Link>
            </div>

            <div className="col-md-4 text-center rectangle-color">
              <div className="d-flex flex-row align-items-center">
                <div>
                  <Folder />
                </div>
              </div>
              <Link to="/Connect4" className="d-flex flex-column">
                <div className="d-flex flex-column">
                  <h1 className="title-project">{t("projecttitle4")} 🎲</h1>
                  <p className="text-project">{t("project4")}</p>
                  <span className="footer-project">Java</span>
                </div>
              </Link>
            </div>
            <div className="col-md-4 text-center rectangle-color">
              <div className="d-flex flex-row align-items-center">
                <div>
                  <Folder />
                </div>
                <div>
                  <a
                    href="https://github.com/julienlrzl/Sokoban"
                    className="github-projects"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
              <Link to="/Sokoban" className="d-flex flex-column">
                <div className="d-flex flex-column">
                  <h1 className="title-project">{t("projecttitle5")} 👾</h1>
                  <p className="text-project">{t("project5")}</p>
                  <span className="footer-project">Java</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="responsive">
            <div
              className="col-md-4 rectangle-color"
              style={{ textAlign: "right" }}
            >
              <div className="d-flex flex-row align-items-center">
                <div>
                  <Folder />
                </div>
                <div>
                  <a
                    href="https://github.com/julienlrzl/Projet_Metaheuristiques"
                    className="github-projects"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
              <Link to="/Metaheuristic" className="d-flex flex-column">
                <div className="d-flex flex-column">
                  <h1 className="title-project">{t("projecttitle6")} 🧩</h1>
                  <p className="text-project">{t("project6")}</p>
                  <span className="footer-project">Python</span>
                </div>
              </Link>
            </div>

            <div className="col-md-4 text-left rectangle-color-not"></div>
            <div className="col-md-4 text-left rectangle-color-not"></div>
            {/*
            <div className="col-md-4 text-left rectangle-color-not"></div>
            */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
