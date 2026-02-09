import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import projectsData from "../data/projectsData";

const CATEGORIES = ["Tous", "Web", "Java", "Python", "IA"];

const ProjectCard = ({ project, t, visible }) => (
  <Link
    to={project.route}
    className={`project-card ${visible ? "project-card--visible" : "project-card--hidden"}`}
  >
    <div className="project-card__header">
      <svg className="project-card__folder" viewBox="0 0 60 60" fill="currentColor">
        <path d="M57.49,21.5H54v-6.268c0-1.507-1.226-2.732-2.732-2.732H26.515l-5-7H2.732C1.226,5.5,0,6.726,0,8.232v43.687l0.006,0 c-0.005,0.563,0.17,1.114,0.522,1.575C1.018,54.134,1.76,54.5,2.565,54.5h44.759c1.156,0,2.174-0.779,2.45-1.813L60,24.649v-0.177 C60,22.75,58.944,21.5,57.49,21.5z M2,8.232C2,7.828,2.329,7.5,2.732,7.5h17.753l5,7h25.782c0.404,0,0.732,0.328,0.732,0.732V21.5 H12.731c-0.144,0-0.287,0.012-0.426,0.036c-0.973,0.163-1.782,0.873-2.023,1.776L2,45.899V8.232z M47.869,52.083 c-0.066,0.245-0.291,0.417-0.545,0.417H2.565c-0.243,0-0.385-0.139-0.448-0.222c-0.063-0.082-0.16-0.256-0.123-0.408l10.191-27.953 c0.066-0.245,0.291-0.417,0.545-0.417H54h3.49c0.38,0,0.477,0.546,0.502,0.819L47.869,52.083z" />
      </svg>
      {project.github && (
        <span
          className="project-card__github"
          onClick={(e) => {
            e.preventDefault();
            window.open(project.github, "_blank", "noopener,noreferrer");
          }}
        >
          <FontAwesomeIcon icon={faGithub} />
        </span>
      )}
    </div>
    <div className="project-card__body">
      <h3 className="project-card__title">
        {t(project.titleKey)} {project.emoji}
      </h3>
      <p className="project-card__desc">{t(project.descriptionKey)}</p>
    </div>
    <div className="project-card__footer">
      <div className="project-card__techs">
        {project.techs.split(" ").map((tech) => (
          <span key={tech} className="project-card__tech">{tech}</span>
        ))}
      </div>
    </div>
  </Link>
);

const Projects = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "Tous") return projectsData;
    return projectsData.filter((p) =>
      p.categories.includes(activeFilter)
    );
  }, [activeFilter]);

  return (
    <div className="main-content">
      <div id="projects" className="container-fluid h-100 d-flex flex-column">
        <div className="projects-header">
          <div>
            <span className="contact-pre-title">{t("projectTitle0")}</span>
            <h1 className="contact-title space">{t("projectTitle1")}</h1>
          </div>
          <div className="filter-bar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-pill ${activeFilter === cat ? "filter-pill--active" : ""}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              t={t}
              visible={filteredProjects.includes(project)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
