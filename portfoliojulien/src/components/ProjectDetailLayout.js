import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const ProjectDetailLayout = ({ project }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleBackClick = () => {
    navigate("/", { state: { scrollToProjects: true } });
  };

  return (
    <div className="app-content">
      <Navigation variant="project" />

      <div className="project-detail">
        {/* Hero */}
        <div className="project-hero">
          <button
            type="button"
            className="project-back"
            onClick={handleBackClick}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>{t("buttonBack")}</span>
          </button>

          <div className="project-hero__info">
            <span className="project-hero__year">{project.year}</span>
            <h1 className="project-hero__title">{t(project.titleKey)}</h1>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-hero__github"
              >
                <FontAwesomeIcon icon={faGithub} />
                <span>GitHub</span>
              </a>
            )}
          </div>

          <div className="project-hero__image">
            <img src={project.image} alt={t(project.titleKey)} />
          </div>
        </div>

        {/* Meta bar */}
        <div className="project-meta">
          <div className="project-meta__group">
            <span className="project-meta__label">{t("titleleft0")}</span>
            <div className="project-meta__tags">
              {project.languages.map((lang) => (
                <span key={lang} className="project-meta__tag">{lang}</span>
              ))}
            </div>
          </div>

          {project.tools && (
            <div className="project-meta__group">
              <span className="project-meta__label">{t("titleleft1")}</span>
              <div className="project-meta__tags">
                {project.tools.map((tool) => (
                  <span key={tool} className="project-meta__tag">{tool}</span>
                ))}
              </div>
            </div>
          )}

          <div className="project-meta__group">
            <span className="project-meta__label">{t("titleleft2")}</span>
            <div className="project-meta__tags">
              {project.team.map((member) => (
                <span key={member.name} className="project-meta__tag project-meta__tag--member">
                  {member.name}
                  {member.github && (
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="project-meta__member-gh">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="project-content">
          <div className="project-content__section">
            <h3 className="project-content__title">{t(project.rightTitleKey)}</h3>
            <p>{t(project.rightTextKey)}</p>
          </div>
          <div className="project-content__section">
            <h3 className="project-content__title">{t(project.rightTitle1Key)}</h3>
            <p>{t(project.rightText1Key)}</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetailLayout;
