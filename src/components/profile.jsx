import React from "react";
import "./Profile.css";
import GitHub from './image/GitHub.png'

const Profile = () => (
  <section className="profile">
    <img
      src="https://lh3.googleusercontent.com/a-/AOh14GgTqQe9ika_WHVEwu5riIPT4XvJI7LiQL9fjkbRVA=s192-c-rg-br100"
      alt="Benoit Le Bourdonnec"
    />
    <h1 className="name">Benoit LE BOURDONNEC</h1>
    <p>JS REACT</p>
    <p>NODE GIT HTML CSS</p>
    <a href="https://github.com/Benoit2109?tab=repositories"><img className="git" src={GitHub} alt="git"/></a>
  </section>
);

export default Profile;
