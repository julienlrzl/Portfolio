import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="main-content">
      <div
        id="contact"
        className="container-fluid h-100 d-flex flex-row text-center"
      >
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <span className="contact-pre-title">{t("contactTitle0")}</span>
          <h1 className="contact-title">{t("contactTitle1")}</h1>
          <p className="contact-text">{t("contactText")}</p>
          <a href="mailto:julienlrzl@gmail.com">
            <button className="contact-button">
              <span class="button_top">Julien</span>
            </button>
          </a>
        </div>
      </div>
      <div className="col-md-2"></div>
    </div>
  );
};

export default Contact;
