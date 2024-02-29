import React, { useState, useEffect, useRef } from "react";
import Memoji from "../assets/images/memoji.png";

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // Mettre à jour pour utiliser useState
  const [typingText, setTypingText] = useState("Java");
  const technologies = ["Java", "Python", "React", "Laravel"];

  // Utiliser useRef pour les variables qui doivent persister entre les rendus
  const currentTechnologyIndex = useRef(0);
  const currentCharIndex = useRef(0);
  const isDeleting = useRef(false);
  const isMobile = windowWidth < 768;

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
    const type = () => {
      // Cycle through the technology array
      const currentIdx = currentTechnologyIndex.current;
      const currentTechnology = technologies[currentIdx];
      let part = currentTechnology.slice(0, currentCharIndex.current);

      if (isDeleting.current) {
        setTypingText(part);
        currentCharIndex.current -= 1;
      } else {
        setTypingText(part);
        currentCharIndex.current += 1;
      }

      if (
        !isDeleting.current &&
        currentCharIndex.current === currentTechnology.length
      ) {
        // Start deleting after a pause
        setTimeout(() => {
          isDeleting.current = true;
          type();
        }, 1500);
      } else if (isDeleting.current && currentCharIndex.current === 0) {
        // Move to the next word after a pause
        isDeleting.current = false;
        currentTechnologyIndex.current = (currentIdx + 1) % technologies.length;
        setTimeout(type, 1000);
      } else {
        setTimeout(type, isDeleting.current ? 150 : 500);
      }
    };

    type();
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
                What’s up, I’m <span className="Highlight">Student</span>.
                Currently at Polytech Lyon, studying computer science. Oh, and
                I'm currently learning
                <span id="typing-effect" className="Highlight">
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
