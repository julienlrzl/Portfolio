import React from "react";
import Folder from "./Folder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  return (
    <div className="main-content">
      <div id="projects" className="container-fluid h-100 d-flex flex-column">
        <span className="contact-pre-title left">What I've built</span>
        <h1 className="contact-title space left down">Projects</h1>
        <div className="d-flex flex-column">
          <div className="responsive">
            <div
              className="col-md-4 rectangle-color d-flex align-items-center justify-content-end"
              style={{ textAlign: "right" }}
            >
              <div className="d-flex flex-row align-items-center">
                <div>
                  <Folder />
                </div>
                <div>
                  <a
                    href="https://github.com/julienlrzl"
                    className="github-projects"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
              <div className="d-flex flex-column">
                <h1 className="title-project">Portfolio 💼</h1>
                <p className="text-project">
                  Creation of a personal portfolio website intended to showcase
                  my skills and completed projects.
                </p>
                <span className="footer-project">React.js SCSS</span>
              </div>
            </div>
            <div className="col-md-4 text-center rectangle-color">
              <div className="d-flex flex-row align-items-center">
                <div>
                  <Folder />
                </div>
                <div>
                  <a
                    href="https://github.com/julienlrzl"
                    className="github-projects"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
              <div className="d-flex flex-column">
                <h1 className="title-project">LaBoutiqueFrançaise 🍎</h1>
                <p className="text-project">
                  A website featuring an e-commerce platform for selling food,
                  complete with authentication capabilities for users.
                </p>
                <span className="footer-project">PHP Twig JavaScript</span>
              </div>
            </div>
            <div className="col-md-4 text-left rectangle-color">
              <div className="d-flex flex-row align-items-center">
                <div>
                  <Folder />
                </div>
                <div>
                  <a
                    href="https://github.com/julienlrzl"
                    className="github-projects"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
              <div className="d-flex flex-column">
                <h1 className="title-project">Projet Tutoré 🍿</h1>
                <p className="text-project">
                  A website modeled after IMDB, focusing on movie databases and
                  information.
                </p>
                <span className="footer-project">React.js .NET</span>
              </div>
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
                    href="https://github.com/julienlrzl"
                    className="github-projects"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
              <div className="d-flex flex-column">
                <h1 className="title-project">Cellular Automata 🧑🏽‍💻</h1>
                <p className="text-project">
                  1D cellular automaton in Java and forest fire simulation with
                  a graphical interface.
                </p>
                <span className="footer-project">Java</span>
              </div>
            </div>
            <div className="col-md-4 text-center rectangle-color">
              <div className="d-flex flex-row align-items-center">
                <div>
                  <Folder />
                </div>
                <div>
                  <a
                    href="https://github.com/julienlrzl"
                    className="github-projects"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
              <div className="d-flex flex-column">
                <h1 className="title-project">Connect 4 🎲</h1>
                <p className="text-project">
                  Graphical Interface Implementation: Mastering Object-Oriented
                  Programming through Game Development
                </p>
                <span className="footer-project">Java</span>
              </div>
            </div>
            <div className="col-md-4 text-left rectangle-color-not"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
