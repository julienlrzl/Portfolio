import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const FORM_ENDPOINT = "https://formspree.io/f/mgoowdzp";

const Contact = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

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

          {status === "success" ? (
            <div className="form-success">
              <p>{t("formSent")}</p>
              <button
                className="contact-button"
                onClick={() => setStatus("idle")}
              >
                <span className="button_top">{t("formNewMessage") || "Nouveau message"}</span>
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder={t("formName")}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  disabled={status === "sending"}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder={t("formEmail")}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  disabled={status === "sending"}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder={t("formMessage")}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="form-input form-textarea"
                  disabled={status === "sending"}
                />
              </div>
              <button
                type="submit"
                className="contact-button"
                disabled={status === "sending"}
              >
                <span className="button_top">
                  {status === "sending" ? t("formSending") : t("formSubmit")}
                </span>
              </button>
              {status === "error" && (
                <p className="form-error">{t("formError")}</p>
              )}
            </form>
          )}
        </div>
      </div>
      <div className="col-md-2"></div>
    </div>
  );
};

export default Contact;
