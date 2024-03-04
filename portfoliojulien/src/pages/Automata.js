import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigationbis from "../components/Navigationbis";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Auto from "../assets/images/Auto.png";
import { useTranslation } from "react-i18next";

const Automata = () => {
  const { t, i18n } = useTranslation();
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
                <span class="button_top">{t("buttonBack")}</span>
              </button>
            </a>
            <div className="d-flex flex-column">
              <span className="contact-pre-title title-presentation">2024</span>
              <h1 className="contact-title">{t("projecttitle3")}</h1>
              <h2 className="contact-title-bis title-presentation-bis">
                {t("titleleft0")}
              </h2>
              <ul>
                <li className="puce">Java</li>
              </ul>
              <h2 className="contact-title-bis title-presentation-bis">
                {t("titleleft1")}
              </h2>
              <ul>
                <li className="puce">Git</li>
              </ul>
              <h2 className="contact-title-bis title-presentation-bis">
                {t("titleleft2")}
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
            <h3 className="title-text-pre">{t("titlerightA0")}</h3>
            <p>{t("textrightA0")}</p>
            <h3 className="title-text-pre title-text-pre-space">
              {t("titleright1")}
            </h3>
            <p className="space-bottom">{t("textrightA1")}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Automata;
