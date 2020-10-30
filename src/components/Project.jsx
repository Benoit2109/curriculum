import React from "react";
import "./Project.css";
import calendrier_avent from "./image/calendrier_avent.png";
import VegeNantesGo from "./image/VegeNantesGo.png";

const project = [
  {
    Name: "Calendrier de l'Avent",
    Illustration: calendrier_avent,
    Released: "9 octobre 2020.",
    Description:
      "le cahier des charges de ce premier projet a pour objectif de réaliser un site de quelques pages en HTML/CSS/JAVASCRIPT avec des liens permettant la navigation entre elles. Le site doit être responsive. Nous avons le choix de réaliser un calendrier de l'avent qui devra être fonctionnel pour le premier décembre. Le rendu actuel est le travail réalisé en 10 jours, par une équipe de 3 personnes après un mois de formation.",
    Id: 1,
    Active: true,
    Link: "https://baptiste-gfy.github.io/calendrier_avant/",
    Repo: "https://github.com/Benoit2109/calendrier_avant.git",
  },
  {
    Name: "VegeNantes Go",
    Illustration: VegeNantesGo,
    Released: "27 nov 2020.",
    Description:
      "le cahier des charges de ce deuxième projet a pour objectif de réaliser un site JS/REACT utilisant des APIs pour localiser et identifier les plantes des parcs et jardins de la ville de Nantes. Ce projet dure 6 semaines et l'équipe est composé de 5 personnes travaillant selon la méthode agile SCRUM.",
    Id: 2,
    Active: false,
  },
];

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Active: props.Active,
    };
  }
  render() {
    const {
      Name,
      Illustration,
      Released,
      Description,
      Link,
      Repo,
    } = this.props;
    return (
      <div className={this.state.Active ? "project" : "noProject"}>
        <div className="illustration">
          <a href={Link}>
            <img className="img" src={Illustration} alt={Name} />
          </a>
        </div>
        <div className="infos">
          <h3 className="name">{Name}</h3>
          <p>
            <strong>Disponibilité:</strong> {Released}
          </p>
          <p>
            <strong>Description du projet:</strong> {Description}
          </p>
          <div>
            <p className="github">
              Lien du{" "}
              <a className="Linkblue" href={Repo}>
                repo Github.
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const Portfolio = () => (
  <div className="projects" id="Portfolio">
    {project.map((project) => (
      <Projects {...project} key={project.Id} />
    ))}
  </div>
);

export default Portfolio;
