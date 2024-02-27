import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
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
