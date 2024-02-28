import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "../styles/components/SocialMediaBar.scss";

const SocialMediaBar = () => {
  return (
    <div className="icon-bar">
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
  );
};

export default SocialMediaBar;
