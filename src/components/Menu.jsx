import React from "react";
import "./Menu.css";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Active: props.active,
    };
  }

  render() {
    return (
      <div>
        <div
          className="conteneur"
          onClick={(event) => {
            const isActive = !this.state.Active;
            this.setState({ Active: isActive });
          }}
        >
          <div className={this.state.Active ? "burger active" : "burger"}>
            <span></span>
          </div>
        </div>
        <div className={this.state.Active ? "slideWindow" : "slideWindowClose"}>
          <ul className="menu">
            <a href="#Profile">
              <li>Profil</li>
            </a>
            <a href="#WildCodeSchool">
              <li>Formation</li>
            </a>
            <a href="#Portfolio">
              <li>Portfolio</li>
            </a>
            <a href="#Accessite">
              <li>Expériences</li>
            </a>
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
