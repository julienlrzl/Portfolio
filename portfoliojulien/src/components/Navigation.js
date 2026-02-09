import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../hooks/useTheme";
import useMediaQuery from "../hooks/useMediaQuery";
import useScrollShadow from "../hooks/useScrollShadow";
import useActiveSection from "../hooks/useActiveSection";
import sunIcon from "../assets/images/icons/sun.png";
import moonIcon from "../assets/images/icons/crescent-moon.png";
import "bootstrap/dist/css/bootstrap.min.css";

const SECTIONS = ["home", "about", "projects", "contact"];

const Navigation = ({ variant = "home" }) => {
  const [showLinks, setShowLinks] = useState(false);
  const { isDarkTheme, toggleTheme } = useTheme();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const shadow = useScrollShadow();
  const { t, i18n } = useTranslation();
  const sectionIds = useMemo(() => SECTIONS, []);
  const activeSection = useActiveSection(variant === "home" ? sectionIds : []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const closeMenu = () => {
    setShowLinks(false);
  };

  const handleToggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const isProject = variant === "project";

  const navLinks = isProject ? (
    <>
      <Link to="/#home" className="nav-link" onClick={closeMenu}>
        {t("home")}
      </Link>
      <Link to="/#about" className="nav-link" onClick={closeMenu}>
        {t("about")}
      </Link>
      <Link to="/#projects" className="nav-link" onClick={closeMenu}>
        {t("projects")}
      </Link>
      <Link to="/#contact" className="nav-link" onClick={closeMenu}>
        {t("contact")}
      </Link>
      <a
        href={"/cv.pdf"}
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link"
        onClick={closeMenu}
      >
        {t("resume")}
      </a>
    </>
  ) : (
    <>
      {SECTIONS.map((section) => (
        <a
          key={section}
          href={`#${section}`}
          className={`nav-link ${activeSection === section ? "nav-link--active" : ""}`}
          onClick={closeMenu}
        >
          {t(section)}
        </a>
      ))}
    </>
  );

  const logoContent = isProject ? (
    <Link to="/#home" className="nav-link">
      Larzul Julien
    </Link>
  ) : (
    <a href="#home" className="nav-link">
      Larzul Julien
    </a>
  );

  const controls = (
    <div className="nav-controls">
      <button
        type="button"
        className="theme-toggle-btn"
        onClick={toggleTheme}
      >
        <div className="theme-icon">
          <img
            src={sunIcon}
            alt="Light mode"
            className={`icon-sun ${isDarkTheme ? "icon-hidden" : ""}`}
          />
          <img
            src={moonIcon}
            alt="Dark mode"
            className={`icon-moon ${!isDarkTheme ? "icon-hidden" : ""}`}
          />
        </div>
      </button>
      <button
        type="button"
        className="lang-btn"
        onClick={() => changeLanguage("fr")}
      >
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAbUlEQVR4nO3YwQ3AIAxD0SyGMgPDshUSYoL01gHoiep9yQMgILEdAQDAH8g+6kRz7U+qFkdygHQD2xPyidMU2sboi0W2bOJiJZKZ29xosdNdoCmJrImUQ6ifWolQq5Ria2nmSrWYt5S7AADEhTw3HH3PGGqzVQAAAABJRU5ErkJggg=="
          className="drapeau nav-linkbis"
          alt="FR"
        />
      </button>
      <button
        type="button"
        className="lang-btn"
        onClick={() => changeLanguage("en")}
      >
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAJpUlEQVR4nO3YeVATVh4HcN3dsc62ar0K9bYIGAIoICCG+w5yKIeIqByylEMgiCCmhBs8QBQEqhVKpYigoihIuUEUAgmERiRyHwoGAYtgFS3qdwfcZo0RS7vW3dnJd+bNZCb/vM8k7/f7vTdtmjDCCCOMMMII8z8Sz60RIocs/FLiHAJvJX9f0EM9cO6ulG7YPYJu2LCc8cEX682jXqpaH32kYHqIK6Uf3rZSnVa/ZD01R0TR/9incns8Zsl4kf0OniUA+MsH37zbGvKY3WIleInII2KRIlLkjMA49A26W3oRmVgIFYtorDePxgbLGCiYHIK0fgTENYOxfEMARNftw1xZH8wmUnDmUtUvLaVVzwvWmTwtMtjRU2LjWVHuFhBHv3hFtays7G//6T6zbXdvTDCwKRb4QmeeDGwWruEBTi1VQY64NhjrLdEZfwYdrX2gRuVgg9XRdwJSsyrRWlyJC5/KIG2ONJJmS+P4HCJyk9IRGZfxZKaYXcsswpcFC2RdT4oqeAesJFEdCXohZHFtqpKERtDq5Sr7Vy9S9JdYIO+jMFfO21DVIsrz6tUbydnbPFqilik9d/1YDFYfL4MAwFjFDHYyeqB8vo4PULPGBAxlC7DMXHEnqwh0VjesPVL+ECAsJh0zxewxe7Uz5su6Y9E6b6wg+UFSOxAyBiEg6gVDQouGFapULFbygws1Dc0VtchWs8LxT4mgzZLEOMBWUlkQIC6/GaY2exAWHoeTlBCkkiz5AAx1WzD0HcB2oqGPwUFCWgWI+uF/CoBkcRj55Q3oPX0RpeKaOLtQngfwVd8Eo00OYwKAGSIamLnYELPFLKBjScXx5Gw05JSC4xLEB2AaOoGhbYfWg0m4ye6EqdOJ9wZQMotEQmop7tc1otHGE9VfqKN4ifIrwHwZxDp6g2zhgenz12NSwN9XbMYnq7ZhDsERJPMInM+rx0BtIziUiH8DNHegesMW1JJ3gVtSjahTxfhM3u8PA2QMQhAam4Oe1jtoC4sDc40RaiR1eIAsaX2cj02GmjEF0xdoY9o85akBRBUo+EI9CIb2CcgpbcS9UgZ+tPPnAegKZqiWMUJrYCyqGS2QM4r4XQAxNT98FXUBnc3d6DqRBpaOLZjyJmDIGPIAtQ4+yM0uwSoVN0wXNZ4aYNFaR2hZBcNl/3eISSpF6iUm0q/UoaiyBT3cEfQzOGiPP4OWsAQ0ugWhnuyIerID7tFvopzO+U3Ayg178NWhDHDqOWg+chIsDWvUqpiDqbyZB6gjWYF7qRDxp4sxj+iCvy7Z8m7ACllTkC09ERiRgLMXrqKiqhYdnb0Yffoco89e4PHoczx6MoZHT57j54k1hsejY3gyOobRp6/Wz3f78OD+4KSA2FMXcTA+C3X511DlFYySNWRclzUAU8GEB6hVNEVb8DG0cTpg6XICs4numCnmwAf4SIT0UgBgaesBL99wRPhFTlSh8/Z7UWbtiR83u4Fl4IC6jc6oM3cHy9ob7B1+aHAKQKNHKJr8DqMjOhm9mXn4qYaNga6eSQHXyytRdvhrFNpSUGy4E2XrTPgATR7BGLjZhGPJJRBTD8BCufHC4I6lih5QNvKFqS0VTrtpcPP0FfwFyEQd2L7Wid/sA3xV6PUzIG0EuoQOKperoWqJCkpEFfHDUpIA4EpsEm7Qa1HP5uB2Uzs6u+6i7/4Afrrfj8cDD/D44Qj6Bh6Cye7ADWYb6ho60drRB+79ATTcakZhcQW++/4cwmgH4LRxC6bcif8IIHeBvABgfCUvVkQWyRyF2ymoocXgdnIG7lwpxCC9HkONLRi50/sKw+3Ho/ZuDNXdQuelApSHxuG0+T8QTtCA6yer3t6JPwTg1FxppC2Ux/lFyshZqYoiSS2BM/BmFeL1gdc68f8x4LO18JU1wHFLF1wJigE78yqGGloxcm8QIwPDeNg/jKGeQQxyutBffRPcwhvoyfxh4hDfdg0C29Ae5as0/jsAU00reHjSEBWbzCujnOY7uN12H6zGXlxndqDm5l3cG3iMkaEnGO4bwqMHI3xl9NmzMQw9HEHTxQIBQKKI/HsBuC+Uxg5ZNUGA+bbdsLLzhYGVL5SMfLBceTevE4+PzyfSK9HX0A7O/iN8fyGmyhawzb4E50saetMu4wG3f9Iyeq3wGiozckCPT0VNYAxqvULAdqWCY++Lhq0eqCfbg6W5FSyS5UQjY5PtwbB2R4HTPpzbF4GT4UcRceAYdlP2CQI+Xqz91lHCbm8qOpt70Rp5EgyDXQJngKFojtbAYxi41Y607BrkFNVP3gcqqsEso/OV0YfDw3j69BlGR59OrPHPz579wlsPfhrildEjx1Ngsd0Hq+SMf3sW+lzOBbHJ+eDmlIFF3iVwiJl69uhIODNxYzuQWAAJ7eCJYe70hRuTApLSclF+Nge5GtYo1LRGtf1eNAZEoSsuBYM1P4LLfTAxRqdm0XHyzDUcSMyD874UaJiHYh7BbuqzEEHdHRlnclHu4CtQhVgWnuhMykJ78z0Ex+ZBUjuYb5x+F2B8FhJX3YOsS+Wo8g5D0WptvjPA3uSM/sLryCttgNqWaF4nfnOUeCdAzdgLpw4kIGWtEV8ZZWptR+uR79DdykVoXAHkjA6+9Ub2W4DxYW58OKNFZ6LlchGqdbcJHGKOox8Gq1k4l8uEsln41AAfiWpAy8QVQds8ELlEma8PNDrTwK1vwdfpldDZHv/OO/FUAL+O04Y7osFictAemYhakqVAFeLs9EF3cQVS0guhZ0XDjKVmkwNIejteOqqa8zWyXBkyejLykF/RBIOd8VN6lfg9gEXrvCGpRUViahn6GWzctHZ/axm9pGSGzL1hSIxLgq2TP6SVNz3n2zyA6YYS6nydOE1rKxj5VfAMOgeCXhjkjA/+KYAV/7pSWrp8DTqzFb1nr6Bew/qtfSBwzmpQCGpw0DKBAODXUSJYXN3FaRtKz7dpBZc1tkZ5L1GhGohp0RTEdUMJUoYRUmsNo6RkDMLlCYahRqvUgxyXkr7yF1XaHzt3rU/OLCKlMf0y/edJAUfffSeW1g8GJSQTXW130Rl9Cgyi/tQ68Tgg2siuPGunr+m095Db2SWSDGff0HIr1/xcra2d3xN1n+R+m/FLxNH0sam8ShB0gxAYcxndzd1oOvINLhD1eQCv+YSXVGnN4WkfOuPPjW4B3xBniDlu+kTKed88GfcTIvJeV5dt8GNIaAS2EfWDH0rpBg5LaNFGlpP8XyxW8htYpkJtph3O6sovrKku8g7JzHPb73/jUNKsD755YYQRRhhhhBFm2tvzT9qKTVt49mmHAAAAAElFTkSuQmCC"
          className="drapeau nav-linkbis"
          alt="EN"
        />
      </button>
    </div>
  );

  return (
    <nav
      className={`navigation ${shadow ? "shadow" : ""} ${
        showLinks ? "show-nav" : "hide-nav"
      } ${isMobile ? "isMobile" : ""}`}
    >
      <div className="navigation-logo">{logoContent}</div>
      <div className={`navigation-links ${showLinks ? "show" : ""}`}>
        {navLinks}
        {!isMobile && <span className="nav-link-divider" />}
        {controls}
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
