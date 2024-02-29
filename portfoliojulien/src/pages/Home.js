import React, { useState, useEffect, useRef } from "react";
import Navigation from "../components/Navigation";
import Memoji from "../assets/images/memoji.png";
import SocialMediaBar from "../components/SocialMediaBar";
import Footer from "../components/Footer";

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
    <div className="app-content">
      <Navigation />
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

        <div id="projects">
          <h1>Portfolio</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
            expedita iure vero ab veniam autem quo error rem. Eum earum debitis
            blanditiis sunt eligendi, fuga temporibus, in quos reprehenderit
            pariatur repellendus aliquam quisquam laudantium magnam
            exercitationem aliquid nisi consequuntur consequatur sit facere,
            explicabo porro molestiae natus? Vitae quam asperiores consequatur
            corporis quia eaque neque perspiciatis dolorem nihil magnam.
            Mollitia ducimus autem fugit soluta accusantium ipsum incidunt
            dolorum magnam temporibus, aut saepe natus facilis maiores
            aspernatur aliquid nisi excepturi neque consequatur deserunt. Saepe
            quasi, cupiditate reiciendis optio quia sit eos laboriosam tenetur
            facilis. Recusandae ducimus tempora ipsa aperiam tenetur, animi odio
            soluta natus voluptate nesciunt amet fuga. Necessitatibus veniam
            unde hic eos voluptatibus sint magni porro, quo excepturi id
            doloribus! Reiciendis doloremque dolor ab dolores quasi eius
            molestiae odio, eos non iusto illo totam esse harum doloribus alias
            voluptas! Cum corporis obcaecati natus quos deserunt quibusdam quia
            provident nobis ad, fugiat repellendus quidem nihil adipisci nemo,
            doloribus accusamus nam placeat doloremque tenetur voluptate. Animi,
            beatae culpa modi repudiandae fugiat quibusdam eaque tempora quidem
            nisi dolore assumenda debitis rerum distinctio accusamus, quia
            obcaecati dolorem ipsa enim inventore quas incidunt id laborum
            officiis. Eveniet mollitia consequuntur deserunt aliquam illum
            exercitationem, provident dolorum quos quia sit itaque. Eligendi,
            natus magnam voluptatibus aspernatur sit nam, veniam harum et
            inventore similique, ipsum reprehenderit fugiat aut provident dolore
            voluptatum. Non sed quod rerum unde expedita quaerat dolor eaque
            totam enim odit dolorum ab iste dolore, obcaecati neque nesciunt
            vero adipisci quasi optio consequuntur? Odio veritatis reiciendis
            commodi dolorum rem provident qui ipsa non quibusdam maxime nostrum
            sint, repudiandae quis enim fugit natus molestias excepturi
            repellat. Ipsa est magni beatae. Amet officia pariatur temporibus
            assumenda ullam rerum architecto aliquid veritatis debitis facere
            esse accusamus doloremque quam recusandae iste ipsam, earum porro et
            quia beatae minima consequatur nemo hic? Sed, fugit nobis. Illo
            similique voluptatem eligendi sed tempora nisi magnam officiis culpa
            optio quasi veniam molestiae, saepe impedit a eaque officia neque
            odit eius, quas architecto debitis laudantium? Error adipisci illum
            pariatur similique debitis laboriosam enim ipsa dicta blanditiis
            odio iusto, quos corporis tempore architecto molestiae nisi, quis
            itaque, atque est. Fugiat, odit consequatur mollitia, deserunt ipsa
            consectetur incidunt obcaecati dolor ratione beatae odio, laboriosam
            eius ut dolore. Sequi incidunt fuga in repellat est debitis quos,
            sint quis odio. Ratione dolor, sapiente totam quia excepturi
            molestiae, laborum modi nisi consequuntur voluptates ut quo qui
            possimus dolorum ea iure provident suscipit consectetur voluptatum
            dolores animi velit amet. Minima voluptate nulla facilis? Ipsum
            officiis dolorem accusamus ea eius nemo dignissimos minus animi
            magnam. Officia omnis quod dolorem laboriosam, ipsam obcaecati
            tempore, similique unde ut cupiditate reprehenderit nesciunt illo
            animi vero? Ea illum tempora esse repellendus iusto, ad optio
            accusantium atque fugit dolor nemo ratione incidunt possimus
            doloremque ut earum illo voluptatem quam laudantium veritatis
            aperiam alias quae. Veritatis minima excepturi atque natus nesciunt
            magnam cupiditate, quas consequatur, dignissimos accusamus dolore.
            Ea doloremque adipisci assumenda. Nobis libero amet alias reiciendis
            obcaecati vero debitis delectus natus illum officiis quia, iste
            magnam repellendus omnis!
          </p>
        </div>
      </div>
      {!isMobile && <SocialMediaBar />}
      <Footer />
    </div>
  );
};

export default Home;
