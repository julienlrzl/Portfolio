import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import useMediaQuery from "../hooks/useMediaQuery";

const Footer = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const { t } = useTranslation();

  return (
    <footer className="footer text-footer">
      <div className="container straw">
        {t("footer0")} 🍓 {t("footer1")}
      </div>
      {isMobile ? (
        <div className="icon">
          <a
            href="https://www.linkedin.com/in/julien-larzul-5a02132b5/"
            className="linkedin"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/julienlrzl" className="github">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      ) : (
        <div className="text-footer">
          Copyright {new Date().getFullYear()} ©️ Larzul Julien
        </div>
      )}
    </footer>
  );
};

export default Footer;
