import React, { useState, useEffect, useRef } from "react";
import Memoji from "../assets/images/memoji.png";
import { useTranslation } from "react-i18next";
import { useTheme } from "../hooks/useTheme";
import useMediaQuery from "../hooks/useMediaQuery";

const technologies = [
  "Python",
  "PostgreSQL",
  "Kibana",
  "Docker",
  "Forensics",
  "IoT",
  "Cryptographie",
];

const Home = () => {
  const [typingText, setTypingText] = useState("Jakarta EE (Servlets)");
  const { t } = useTranslation();
  const { isDarkTheme } = useTheme();
  const isMobile = useMediaQuery("(max-width: 767px)");

  const currentTechnologyIndex = useRef(0);
  const currentCharIndex = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    let isCancelled = false;

    const type = () => {
      if (isCancelled) return;

      const currentIdx = currentTechnologyIndex.current;
      const currentTechnology = technologies[currentIdx];
      let part = currentTechnology.slice(0, currentCharIndex.current);

      setTypingText(part);

      if (isDeleting.current) {
        currentCharIndex.current -= 1;
      } else {
        currentCharIndex.current += 1;
      }

      if (
        !isDeleting.current &&
        currentCharIndex.current === currentTechnology.length
      ) {
        setTimeout(() => {
          isDeleting.current = true;
          type();
        }, 300);
      } else if (isDeleting.current && currentCharIndex.current === 0) {
        isDeleting.current = false;
        currentTechnologyIndex.current = (currentIdx + 1) % technologies.length;
        setTimeout(type, 300);
      } else {
        setTimeout(type, isDeleting.current ? 70 : 120);
      }
    };

    type();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <div className="main-content">
      <div id="home" className="container h-100 d-flex main-text">
        <div className="row text-center">
          <div className="col-md-2"></div>
          <div className="col-md-8 d-flex align-items-center justify-content-center">
            <p>
              <b>
                {t("homeMainTextBeg")}{" "}
                <span className="Highlight">{t("homeMainTextMid")}</span>
                {t("homeMainTextEnd")}
                <span
                  id="typing-effect"
                  className={`Highlight ${
                    isDarkTheme ? "typing-effect-dark" : "typing-effect-light"
                  }`}
                >
                  <span> </span>
                  {typingText}
                </span>
                .
              </b>
            </p>
          </div>
          <div className="col-md-2 d-flex align-items-end">
            {!isMobile && (
              <img
                src={Memoji}
                alt="Memoji"
                className="memoji"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
