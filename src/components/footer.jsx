import React from "react";
import "./footer.css";

const Footer = () => (
  <div className="footer">
    <p className="footerInfo">
      télécharger le CV de{" "}
      <a href="Benoit Le Bourdonnec.pdf" download>
        {" "}
        Benoit Le Bourdonnec
      </a>
    </p>
    <p><span role="img" aria-label="copyright">©️</span>copyright February 2021</p>
    <p className="footerInfo"><a href="mailto:benoitlb@me.com">benoitlb@me.com</a> - <a href="tel:+33781297447">07 81 29 74 47</a></p>
  </div>
);

export default Footer;
