import React from "react";
import Folder from "./Folder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import ProjectButton from "./ProjectButton";
import projectsData from "../data/projectsData";

const ProjectCard = ({ project, t }) => (
  <div className="col-md-4 rectangle-color">
    <div className="d-flex flex-row align-items-center">
      <div>
        <Folder />
      </div>
      {project.github && (
        <div>
          <a href={project.github} className="github-projects">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      )}
    </div>
    <div className="d-flex flex-column">
      <h1 className="title-project">
        {t(project.titleKey)} {project.emoji}
      </h1>
      <p className="text-project">{t(project.descriptionKey)}</p>
      <span className="footer-project">{project.techs}</span>
    </div>
    <ProjectButton to={project.route} />
  </div>
);

const Projects = () => {
  const { t } = useTranslation();

  const rows = [];
  for (let i = 0; i < projectsData.length; i += 3) {
    rows.push(projectsData.slice(i, i + 3));
  }

  return (
    <div className="main-content">
      <div id="projects" className="container-fluid h-100 d-flex flex-column">
        <span className="contact-pre-title left">{t("projectTitle0")}</span>
        <h1 className="contact-title space left down">{t("projectTitle1")}</h1>
        <div className="">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="responsive">
              {row.map((project) => (
                <ProjectCard key={project.id} project={project} t={t} />
              ))}
              {row.length < 3 &&
                Array.from({ length: 3 - row.length }).map((_, i) => (
                  <div
                    key={`empty-${i}`}
                    className="col-md-4 text-left rectangle-color-not"
                  ></div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
