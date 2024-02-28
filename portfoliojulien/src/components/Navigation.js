import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [shadow, setShadow] = useState(false);

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

  const handleSetActive = (link, event) => {
    if (link === "home") {
      event.preventDefault();
      window.scrollTo(0, 0);
    }
    setActiveLink(link);
  };
  return (
    <nav className={`navigation ${shadow ? "shadow" : ""}`}>
      <div className="navigation-logo">Larzul Julien</div>
      <div className="navigation-links">
        <a
          href="#home"
          className={`nav-link ${activeLink === "home" ? "active" : ""}`}
          onClick={(e) => handleSetActive("home", e)}
        >
          Home
        </a>
        <a
          href="#projects"
          className={`nav-link ${activeLink === "projects" ? "active" : ""}`}
          onClick={(e) => handleSetActive("projects", e)}
        >
          Projects
        </a>
        <a
          href="#about"
          className={`nav-link ${activeLink === "about" ? "active" : ""}`}
          onClick={(e) => handleSetActive("about", e)}
        >
          About
        </a>
        <a
          href="#contact"
          className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
          onClick={(e) => handleSetActive("contact", e)}
        >
          Contact
        </a>
        <span className="nav-link">|</span>
        <div className="nav-link">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="32"
              d="M256 48v48m0 320v48m147.08-355.08l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48m-320 0H48m355.08 147.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
            />

            <circle
              cx="256"
              cy="256"
              r="80"
              fill="none"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="32"
            />
          </svg>
        </div>
        <div className="nav-link">
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
      </div>
    </nav>
  );
};

export default Navigation;
