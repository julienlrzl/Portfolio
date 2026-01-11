import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const SocialMediaBar = () => {
  const [bottomOffset, setBottomOffset] = useState(15);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector(".footer");
      if (!footer) return;

      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const barHeight = 220;

      if (footerRect.top < windowHeight) {
        const newBottom = windowHeight - footerRect.top + 15;
        setBottomOffset(newBottom);
      } else {
        setBottomOffset(15);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="icon-bar" style={{ bottom: `${bottomOffset}px` }}>
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
