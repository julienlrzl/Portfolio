import React, {
  useState,
  useEffect,
  useRef,
  createContext,
  useContext,
} from "react";
import Memoji from "../assets/images/memoji.png";
import { useTranslation } from "react-i18next";
const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // Mettre à jour pour utiliser useState
  const [typingText, setTypingText] = useState("Jakarta EE (Servlets)");
  const technologies = ["Jakarta EE (Servlets)", "Metaheuristics", "Cryptography", "Neural Networks", "PostgreSQL", "Multivariate Analysis"];
  const { t, i18n } = useTranslation();

  // Utiliser useRef pour les variables qui doivent persister entre les rendus
  const currentTechnologyIndex = useRef(0);
  const currentCharIndex = useRef(0);
  const isDeleting = useRef(false);
  const isMobile = windowWidth < 768;
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    // Initialiser le thème à partir du localStorage ou par défaut à false
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme === "0" : false; // '0' pour le mode sombre
  });

  useEffect(() => {
    // Mettre à jour le localStorage lorsque le thème change
    localStorage.setItem("theme", isDarkTheme ? "0" : "1");
  }, [isDarkTheme]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
  
      if (!isDeleting.current && currentCharIndex.current === currentTechnology.length) {
        setTimeout(() => {
          isDeleting.current = true;
          type();
        }, 1500);
      } else if (isDeleting.current && currentCharIndex.current === 0) {
        isDeleting.current = false;
        currentTechnologyIndex.current = (currentIdx + 1) % technologies.length;
        setTimeout(type, 1000);
      } else {
        setTimeout(type, isDeleting.current ? 150 : 500);
      }
    };
  
    type();
  
    return () => {
      isCancelled = true;
    };
  }, []);

  const imageStyle = windowWidth < 768 ? { display: "none" } : {};
  return (
    <div className="main-content">
      <div id="home" className="container h-100 d-flex main-text">
        <div className="row text-center">
          <div class="col-md-2"></div>
          <div class="col-md-8 d-flex align-items-center justify-content-center">
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
          <div class="col-md-2 d-flex align-items-end">
            <img
              src={Memoji}
              style={imageStyle}
              alt="Memoji"
              className="memoji"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
