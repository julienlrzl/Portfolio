import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigationbis from "../components/Navigationbis";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Boutiquefr from "../assets/images/Boutiquefr.png";

const BoutiqueFr = () => {
  let navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    navigate("/", { state: { scrollToProjects: true } });
  };
  return (
    <div className="app-content">
      <Navigationbis />
      <div className="main">
        <div className="col-md-3">
          <div>
            <a onClick={handleBackClick} className="bouton-retour">
              <button className="contact-button">
                <span class="button_top">Back</span>
              </button>
            </a>
            <div className="d-flex flex-column">
              <span className="contact-pre-title title-presentation">2024</span>
              <h1 className="contact-title">La Boutique Française</h1>
              <h2 className="contact-title-bis title-presentation-bis">
                Langages
              </h2>
              <ul>
                <li className="puce">HTML</li>
                <li className="puce">CSS</li>
                <li className="puce">Javascript</li>
                <li className="puce">PHP</li>
              </ul>
              <h2 className="contact-title-bis title-presentation-bis">
                Technologies
              </h2>
              <ul>
                <li className="puce">twig</li>
                <li className="puce">Git</li>
              </ul>
              <h2 className="contact-title-bis title-presentation-bis">
                Contributors
              </h2>
              <ul>
                <li className="puce">
                  Julien Larzul
                  <a
                    href="https://github.com/julienlrzl"
                    className="github-bis"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li className="puce">
                  Albin Martin
                  <a href="https://github.com/Albin0903" className="github-bis">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li className="puce">
                  Salim Lazrak
                  <a href="https://github.com/saliml02" className="github-bis">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="slider">
            <div className="slider-viewport">
              <img src={Boutiquefr} alt="Image Siteweb" />
            </div>
          </div>
          <div className="text-pre">
            <h3 className="title-text-pre">La Boutique Française Project</h3>
            <p>
              My project is a foray into the world of e-commerce, specifically
              focusing on an online food store where users can browse and place
              orders. Developed with an emphasis on real-world e-commerce site
              functionalities, this platform is built using React.js and SCSS.
              It demonstrates not just my capability to create a user-friendly
              shopping experience but also my ongoing commitment to learning and
              applying new web development technologies. Through this project,
              I've gained practical experience in integrating essential
              e-commerce features, furthering my journey in the tech field while
              aiming to make online food shopping as intuitive and efficient as
              possible.
            </p>
            <h3 className="title-text-pre title-text-pre-space">
              What it does
            </h3>
            <p className="space-bottom">
              My project introduces an innovative e-commerce platform tailored
              for food shopping, which enhances the user experience by enabling
              account creation for personalized shopping. Users can log in to
              add products to their cart, proceed to checkout, and receive a
              generated invoice for their orders. Remarkably, the platform also
              accommodates guest users, allowing them to place orders without an
              account, ensuring flexibility and convenience for all users.
              Additionally, an exclusive admin login feature is integrated, not
              for placing orders, but for accessing a specialized dashboard that
              displays all placed orders. Here, admins have the capability to
              confirm orders, streamlining the management process. This project
              not only showcases my ability to develop complex web
              functionalities but also underscores my commitment to learning and
              implementing advanced web development practices, offering a
              glimpse into my growing expertise in creating comprehensive,
              user-centric online solutions.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BoutiqueFr;
