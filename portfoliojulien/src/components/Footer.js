import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <footer className="footer text-footer">
      <div className="container">Made while eating 🍓 in Lyon</div>
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
        <div className="text-footer">Copyright 2024 ©️ Larzul Julien</div>
      )}
    </footer>
  );
};

export default Footer;
