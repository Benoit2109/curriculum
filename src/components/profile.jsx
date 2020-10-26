import React from "react";
import "./Profile.css";
import GitHub from "./image/GitHub.png";
import Menu from "./Menu.jsx";
import linkedIn from "./image/linkedIn.png";

const Profile = () => (
  <section className="profile" id="Profile">
    <Menu />
    <img
      src="https://lh3.googleusercontent.com/a-/AOh14GimrbPD1ok86IMxV9xkaiWIzlOnL7jwtZUeNhqJQQ=s192-c-rg-br100"
      alt="Benoit Le Bourdonnec"
    />
    <h1 className="name">Benoit LE BOURDONNEC</h1>
    <p>Developpeur web</p>
    <div className="réseaux">
      <a href="https://github.com/Benoit2109?tab=repositories">
        <img className="git" src={GitHub} alt="git" />
      </a>
      <a href="https://www.linkedin.com/in/benoit-le-bourdonnec-8b17495b/">
        <img className="linkedIn" src={linkedIn} alt="linkedin" />
      </a>
    </div>
  </section>
);

export default Profile;
