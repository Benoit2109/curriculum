import React from "react";
import "./School.css";
import ReactLogo from "./image/ReactLogoBlack.png";
import CSSLogo from "./image/CSS.png";
import HTML5 from "./image/HTML5_logo_black.png";
import Node from "./image/node.png";
import JS from "./image/Javascript.png";

const School = () => (
  <section className="flex" id="WildCodeSchool">
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
        <p>
          5 mois et 4 mois de stage, formation débutée le 11 septembre 2020. 3
          projets d'applications structurent la formation et seront accessibles
          sur GitHub Pages.
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
    </div>
  </section>
);

export default School;
