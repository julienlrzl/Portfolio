import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Lire la valeur du thème du localStorage au montage du composant
    const themeValue = localStorage.getItem("theme"); // '1' pour soleil, '0' pour lune
    if (themeValue !== null) {
      setIsDarkTheme(themeValue === "0"); // Convertir la chaîne en booléen
    }
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkTheme]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem("theme", newTheme ? "0" : "1"); // Mettre à jour le localStorage
  };

  const closeMenu = () => {
    setShowLinks(false);
  };

  const handleToggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Vérifier immédiatement si l'écran est petit
    checkIfMobile();

    // Ajouter l'écouteur d'événement pour les changements de taille
    window.addEventListener("resize", checkIfMobile);

    // Nettoyer l'écouteur d'événement
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY); // Vérifiez la valeur de scrollY
      setShadow(window.scrollY > 0);
    };

    // Ajoute l'écouteur d'événement pour le défilement
    window.addEventListener("scroll", handleScroll);

    // Nettoie l'écouteur d'événement sur le démontage
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navigation ${shadow ? "shadow" : ""} ${
        showLinks ? "show-nav" : "hide-nav"
      } ${isMobile ? "isMobile" : ""}`}
    >
      <div className="navigation-logo">
        <a href="#home" className="nav-link">
          Larzul Julien
        </a>
      </div>
      <div className={`navigation-links ${showLinks ? "show" : ""}`}>
        <a href="#home" className="nav-link" onClick={closeMenu}>
          {t("home")}
        </a>
        <a href="#about" className="nav-link" onClick={closeMenu}>
          {t("about")}
        </a>
        <a href="#projects" className="nav-link" onClick={closeMenu}>
          {t("projects")}
        </a>
        <a href="#contact" className="nav-link" onClick={closeMenu}>
          {t("contact")}
        </a>
        <a
          href={"/cv.pdf"}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
          onClick={closeMenu}
        >
          {t("resume")}
        </a>
        <span className="nav-link nav-link-divider">|</span>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            toggleTheme();
          }}
        >
          <div className="nav-link nav-link-divider theme-icon">
            <svg
              className={`icon-sun ${isDarkTheme ? "icon-hidden" : ""}`}
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
                d="M256 48v48m0 320v48m147.08-355.08l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48m-320 0H48m355.08 147.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
              />
              <circle
                cx="256"
                cy="256"
                r="80"
                fill="none"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
              />
            </svg>
            <svg
              className={`icon-moon ${!isDarkTheme ? "icon-hidden" : ""}`}
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M152.62 126.77c0-33 4.85-66.35 17.23-94.77C87.54 67.83 32 151.89 32 247.38 32 375.85 136.15 480 264.62 480c95.49 0 179.55-55.54 215.38-137.85-28.42 12.38-61.8 17.23-94.77 17.23-128.47 0-232.61-104.14-232.61-232.61z"></path>
            </svg>
          </div>
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            changeLanguage("fr"); // Changez la langue en français
          }}
        >
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAbUlEQVR4nO3YwQ3AIAxD0SyGMgPDshUSYoL01gHoiep9yQMgILEdAQDAH8g+6kRz7U+qFkdygHQD2xPyidMU2sboi0W2bOJiJZKZ29xosdNdoCmJrImUQ6ifWolQq5Ria2nmSrWYt5S7AADEhTw3HH3PGGqzVQAAAABJRU5ErkJggg=="
            className="drapeau nav-linkbis "
          ></img>
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            changeLanguage("en"); // Changez la langue en anglais
          }}
        >
          <img
            src="data:image/png;base64,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"
            className="drapeau nav-linkbis"
          ></img>
        </a>
      </div>
      {isMobile && (
        <button className="navbarBurger" onClick={handleToggleLinks}>
          <span className="burgerBar"></span>
        </button>
      )}
    </nav>
  );
};

export default Navigation;
