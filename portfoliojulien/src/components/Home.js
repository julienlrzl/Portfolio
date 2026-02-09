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
  const [typingText, setTypingText] = useState("");
  const { t } = useTranslation();
  const { isDarkTheme } = useTheme();
  const isMobile = useMediaQuery("(max-width: 767px)");

  const currentTechnologyIndex = useRef(0);
  const currentCharIndex = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    let timeoutId;

    const randomDelay = (base, variance) =>
      base + Math.random() * variance - variance / 2;

    const type = () => {
      const currentIdx = currentTechnologyIndex.current;
      const currentTechnology = technologies[currentIdx];

      if (!isDeleting.current) {
        currentCharIndex.current += 1;
        setTypingText(currentTechnology.slice(0, currentCharIndex.current));

        if (currentCharIndex.current === currentTechnology.length) {
          timeoutId = setTimeout(() => {
            isDeleting.current = true;
            type();
          }, 2000);
        } else {
          timeoutId = setTimeout(type, randomDelay(110, 50));
        }
      } else {
        currentCharIndex.current -= 1;
        setTypingText(currentTechnology.slice(0, currentCharIndex.current));

        if (currentCharIndex.current === 0) {
          isDeleting.current = false;
          currentTechnologyIndex.current =
            (currentIdx + 1) % technologies.length;
          timeoutId = setTimeout(type, 500);
        } else {
          timeoutId = setTimeout(type, randomDelay(60, 25));
        }
      }
    };

    timeoutId = setTimeout(type, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="main-content">
      <div id="home" className="container h-100 d-flex main-text">
        <div className="row text-center">
          <div className="col-md-1"></div>
          <div className="col-md-10 d-flex align-items-center justify-content-center">
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
          <div className="col-md-1 d-flex align-items-end">
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
