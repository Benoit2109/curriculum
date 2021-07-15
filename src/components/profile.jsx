import React from "react";
import "./profile.css";
import GitHub from "./image/GitHub.png";
import Menu from "./Menu.jsx";
import linkedIn from "./image/linkedIn.png";
import Benoit_high from "./image/Benoit_high.png";
import cv from "./image/cv.png";

const Profile = () => (
  <section className="profile" id="Profile">
    <Menu />
    <img className="beaugosse" src={Benoit_high} alt="Benoit Le Bourdonnec" />
    <h1 className="name">Benoit LE BOURDONNEC</h1>
    <p>Developpeur web mobile  FULL STACK <strong>React - Node Js</strong></p>
    <div className="réseaux">
      <a href="https://github.com/Benoit2109?tab=repositories">
        <img className="git" src={GitHub} alt="git" />
      </a>
      <a href="https://www.linkedin.com/in/benoit-le-bourdonnec/">
        <img className="linkedIn" src={linkedIn} alt="linkedin" />
      </a>
      <a href="Benoit-Le-Bourdonnec.pdf" download>
        <img className="cv" alt="cv" src={cv} />
      </a>
    </div>
    <div>
      <p className="who">
        Ma reconversion professionnelle venant de s'achever avec le passage du titre professionnel de Dévelppeur Web et Web Mobile, je suis disponible dès septembre pour une entreprise souhaitant renforcer son équipe. Pourquoi pas vous <span role="img" aria-label="finger point down">👇</span> ?
      </p>
    </div>
  </section>
);

export default Profile;
