import React, { useEffect, useState } from "react";

const Navigation = () => {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Ajoute une ombre si le défilement est supérieur à 0
      setShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={`navigation ${shadow ? "shadow" : ""}`}>
      <div className="navigation-logo">Larzul Julien</div>
      <div className="navigation-links">
        <a href="#home" className="nav-link">
          Home
        </a>
        <a href="#about" className="nav-link">
          About
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
