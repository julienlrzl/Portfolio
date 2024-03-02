import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
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
        <Link to="/#home" className="nav-link">
          Larzul Julien
        </Link>
      </div>
      <div className={`navigation-links ${showLinks ? "show" : ""}`}>
        <Link to="/#home" className="nav-link" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/#about" className="nav-link" onClick={closeMenu}>
          About
        </Link>
        <Link to="/#projects" className="nav-link" onClick={closeMenu}>
          Projects
        </Link>
        <Link to="/#contact" className="nav-link" onClick={closeMenu}>
          Contact
        </Link>
        <a
          href={`${process.env.PUBLIC_URL}cv.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
          onClick={closeMenu}
        >
          Resume
        </a>
        <span className="nav-link nav-link-divider">|</span>
        <a href="#home" onClick={toggleTheme}>
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
        <a href="#home">
          <div className="nav-link nav-link-divider">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 0 0 20" />
              <path d="M12 22a15.3 15.3 0 0 0 0-20" />
            </svg>
          </div>
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
