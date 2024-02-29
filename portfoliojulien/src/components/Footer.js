import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer text-footer">
      <div className="container">
        © 2024 Julien Larzul, All rights reserved.
      </div>
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
    </footer>
  );
};

export default Footer;
