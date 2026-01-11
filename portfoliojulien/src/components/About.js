import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="main-content">
      <div id="about" className="container-fluid h-100 div-about">
        <div className="col-md-5 div-text-about">
          {" "}
          <span className="contact-pre-title">{t("aboutTitle0")}</span>
          <h1 className="contact-title space">{t("aboutTitle1")}</h1>
          <p>
            {t("aboutText0")}
            <br />
            <br />
            {t("aboutText1")}
            <br />
            <br />
            {t("aboutText2")}
            <br />
          </p>
          <div className="space-top about-buttons">
            <a
              href="https://tryhackme.com/p/julienlrzl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="contact-button">
                <span className="button_top">TryHackMe</span>
              </button>
            </a>
            <a
              href="https://www.root-me.org/julien_lrzl?lang=fr#dce7c2e7d4bad52dc829e500ce0aac5c"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="contact-button">
                <span className="button_top">Root-me</span>
              </button>
            </a>
          </div>
        </div>
        <div className="col-md-7 space-top">
          <div className="card">
            <div className="header">
              <div className="top">
                <div className="circle">
                  <span className="red circle2"></span>
                </div>
                <div className="circle">
                  <span className="yellow circle2"></span>
                </div>
                <div className="circle">
                  <span className="green circle2"></span>
                </div>
                <div className="title">
                  <p id="title2">Skills.java</p>
                </div>
              </div>
            </div>

            <div className="code-container">
              <pre id="code" className="area">
                <code>
                  <span style={{ color: "#CB6C1C" }}>public class</span>{" "}
                  <span style={{ color: "#1790C2" }}>Main</span> {"{"}
                  <br />
                  &nbsp;
                  <span style={{ color: "#CB6C1C" }}>
                    public static void
                  </span>{" "}
                  <span style={{ color: "#2C903D" }}>main</span>(
                  <span style={{ color: "#1790C2" }}>String[]</span>{" "}
                  <span style={{ color: "#6A93D7" }}>args</span>) {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;
                  <span style={{ color: "#6A93D7" }}>System</span>.
                  <span style={{ color: "#8DDAF8" }}>out</span>.
                  <span style={{ color: "#A7EC22" }}>println</span>("Hello World
                  !");
                  <br />
                  <br />
                  &nbsp;&nbsp;&nbsp;{" "}
                  <span style={{ color: "#1790C2" }}>String[]</span>{" "}
                  <span style={{ color: "#F1F202" }}>langages</span> = {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;"Python",
                  <br />
                  &nbsp;&nbsp;&nbsp;"Java",
                  <br />
                  &nbsp;&nbsp;&nbsp;"HTML",
                  <br />
                  &nbsp;&nbsp;&nbsp;"CSS",
                  <br />
                  &nbsp;&nbsp;&nbsp;"JavaScript",
                  <br />
                  &nbsp;&nbsp;&nbsp;"SQL",
                  <br />
                  &nbsp;&nbsp;&nbsp;"PHP",
                  <br />
                  &nbsp;&nbsp;&nbsp;".NET"
                  <br />
                  &nbsp;&nbsp;&nbsp;{"}"}
                  <br />
                  <br />
                  &nbsp;&nbsp;&nbsp;
                  <span style={{ color: "#1790C2" }}>String[]</span>{" "}
                  <span style={{ color: "#F1F202" }}>technologies</span> = {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;"Git",
                  <br />
                  &nbsp;&nbsp;&nbsp;"AWS",
                  <br />
                  &nbsp;&nbsp;&nbsp;"React.js"
                  <br />
                  &nbsp;&nbsp;&nbsp;{"}"}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
