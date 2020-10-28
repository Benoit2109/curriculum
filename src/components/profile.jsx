import React from "react";
import "./Profile.css";
import GitHub from "./image/GitHub.png";
import Menu from "./Menu.jsx";
import linkedIn from "./image/linkedIn.png";
import Ben_profile from "./image/Ben_profile.jpg";
import cv from "./image/cv.png";

const Profile = () => (
  <section className="profile" id="Profile">
    <Menu />
    <img className="beaugosse" src={Ben_profile} alt="Benoit Le Bourdonnec" />
    <h1 className="name">Benoit LE BOURDONNEC</h1>
    <p>Developpeur web</p>
    <div className="réseaux">
      <a href="https://github.com/Benoit2109?tab=repositories">
        <img className="git" src={GitHub} alt="git" />
      </a>
      <a href="https://www.linkedin.com/in/benoit-le-bourdonnec-8b17495b/">
        <img className="linkedIn" src={linkedIn} alt="linkedin" />
      </a>
      <a href="CV DEV.pdf" download>
        <img className="cv" alt="cv" src={cv} />
      </a>
    </div>
    <div>
      <p className="who">
        Actuellement en reconversion, je souhaite redonner un sens à mon avenir
        professionnel en devenant développeur web mobile front-end (REACT / JS).
      </p>
    </div>
  </section>
);

export default Profile;
