import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

const ProjectDetailLayout = ({ project }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    navigate("/", { state: { scrollToProjects: true } });
  };

  return (
    <div className="app-content">
      <Navigation variant="project" />
      <div className="main">
        <div className="col-md-3">
          <div>
            <button
              type="button"
              className="contact-button bouton-retour"
              onClick={handleBackClick}
            >
              <span className="button_top">{t("buttonBack")}</span>
            </button>
            <div className="d-flex flex-column">
              <span className="contact-pre-title title-presentation">
                {project.year}
              </span>
              <h1 className="contact-title">{t(project.titleKey)}</h1>
              <h2 className="contact-title-bis title-presentation-bis">
                {t("titleleft0")}
              </h2>
              <ul>
                {project.languages.map((lang) => (
                  <li key={lang} className="puce">
                    {lang}
                  </li>
                ))}
              </ul>
              {project.tools && (
                <>
                  <h2 className="contact-title-bis title-presentation-bis">
                    {t("titleleft1")}
                  </h2>
                  <ul>
                    {project.tools.map((tool) => (
                      <li key={tool} className="puce">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <h2 className="contact-title-bis title-presentation-bis">
                {t("titleleft2")}
              </h2>
              <ul>
                {project.team.map((member) => (
                  <li key={member.name} className="puce">
                    {member.name}
                    {member.github && (
                      <a href={member.github} className="github-bis">
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="slider">
            <div className="slider-viewport">
              <img src={project.image} alt="Aperçu du projet" />
            </div>
          </div>
          <div className="text-pre">
            <h3 className="title-text-pre">{t(project.rightTitleKey)}</h3>
            <p>{t(project.rightTextKey)}</p>
            <h3 className="title-text-pre title-text-pre-space">
              {t(project.rightTitle1Key)}
            </h3>
            <p className="space-bottom">{t(project.rightText1Key)}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetailLayout;
