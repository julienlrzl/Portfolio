import React from "react";
import { Link } from "react-router-dom";
import Folder from "./Folder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import ProjectButton from "./ProjectButton";

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
                <div className="d-flex flex-column">
                  <h1 className="title-project">{t("projecttitle0")} 💼</h1>
                  <p className="text-project">{t("project0")}</p>
                  <span className="footer-project">React.js SCSS</span>
                </div>
              <ProjectButton to="/Portfoliojulien" />
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
                <div className="d-flex flex-column">
                  <h1 className="title-project">{t("projecttitle1")} 🍎</h1>
                  <p className="text-project">{t("project1")}</p>
                  <span className="footer-project">PHP Twig JavaScript</span>
                </div>
              <ProjectButton to="/BoutiqueFr" />
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
                <div className="d-flex flex-column">
                  <h1 className="title-project">{t("projecttitle2")} 🍿</h1>
                  <p className="text-project">{t("project2")}</p>
                  <span className="footer-project">React.js .NET</span>
                </div>
              <ProjectButton to="/Ptut" />
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
                <div className="d-flex flex-column">
                  <h1 className="title-project">{t("projecttitle3")} 🧑🏽‍💻</h1>
                  <p className="text-project">{t("project3")}</p>
                  <span className="footer-project">Java</span>
                </div>
              <ProjectButton to="/Automata" />
            </div>

            <div className="col-md-4 text-center rectangle-color">
              <div className="d-flex flex-row align-items-center">
                <div>
                  <Folder />
                </div>
              </div>
                <div className="d-flex flex-column">
                  <h1 className="title-project">{t("projecttitle4")} 🎲</h1>
                  <p className="text-project">{t("project4")}</p>
                  <span className="footer-project">Java</span>
                </div>
              <ProjectButton to="/Connect4" />
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
                <div className="d-flex flex-column">
                  <h1 className="title-project">{t("projecttitle5")} 👾</h1>
                  <p className="text-project">{t("project5")}</p>
                  <span className="footer-project">Java</span>
                </div>
              <ProjectButton to="/Sokoban" />
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
                <div className="d-flex flex-column">
                  <h1 className="title-project">{t("projecttitle6")} 🧩</h1>
                  <p className="text-project">{t("project6")}</p>
                  <span className="footer-project">Python</span>
                </div>
              <ProjectButton to="/Metaheuristic" />
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
