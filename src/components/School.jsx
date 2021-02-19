import React, { useEffect } from "react";
import Aos from "aos";
import "./School.css";
import "aos/dist/aos.css";
import ReactLogo from "./image/ReactLogoBlack.png";
import CSSLogo from "./image/CSS.png";
import HTML5 from "./image/image.png";
import Node from "./image/node.png";
import JS from "./image/Javascript.png";

function School() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <h2 data-aos="fade-right" className="SectionPart">Formation</h2>

      <section data-aos="fade-left" id="WildCodeSchool">
        <div className="ecole">
          <div>
            <img
              className="wild"
              src="https://www.wildcodeschool.com/assets/logo_white-b3ba5f88186df8d04f5ef8be4c3cc057a49f77b25b2359c4f4b3b13c53e5aeb8.png"
              alt="wild code school"
            />
          </div>
          <div className="ecoleText">
            <h2>Wild Code School</h2>
            <h3>Formation developpeur web / mobile</h3>
            <p className="schoolDescription">
              5 mois (700h) et 4 mois de stage (15 février au 11 juin 2021),
              formation débutée le 11 septembre 2020. 3 projets d'applications
              structurent la formation et seront accessibles sur GitHub Pages.
              Nous apprenons et travaillons en utilisant les méthodes agiles,
              notamment SCRUM.
            </p>
          </div>
          <div className="compétences">
            <ul className="compétence">
              <li>
                <img className="logiciel" src={HTML5} alt="html" />
              </li>
              <li>
                <img className="logiciel" src={CSSLogo} alt="css" />
              </li>
              <li>
                <img className="logiciel" src={JS} alt="Javascript" />
              </li>
              <li>
                <img className="logiciel" src={ReactLogo} alt="ReactLogo" />
              </li>

              <li>
                <img className="logiciel" src={Node} alt="node" />
              </li>
            </ul>
          </div>
          <div className="WCS">
            <p className="schoolLink">
              en savoir plus sur la{" "}
              <a href="https://www.wildcodeschool.com/fr-FR">
                Wild Code School
              </a>{" "}
              et la{" "}
              <a href="https://syllabus.wildcodeschool.com/fr/web-developer-full-time">
                formation
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default School;
