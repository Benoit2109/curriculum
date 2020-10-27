import React from "react";
import "./Project.css";
import calendrier_avant from "./image/calendrier_avant.png";
import VegeNantesGo from "./image/VegeNantesGo.png";

const project = [
  {
    Name: "Calendrier de l'Avent",
    Illustration: calendrier_avant,
    Released: "9 octobre 2020.",
    Description:
      "le cachier des charges de ce premier projet a pour objectif de réaliser un site de quelques pages avec des liens permettant la navigation entre elles. Le site doit être responsive. Nous avons le choix de réaliser un calendrier de l'avant qui devra être fonctionnel pour le premier décembre. Le rendu actuel est le travail réalisé en 10 jours, par une équipe de 3 personnes après un mois de formation.",
    Id: 1,
    Link:"https://baptiste-gfy.github.io/calendrier_avant/"
  },
  {
    Name: "VegeNantes Go",
    Illustration: VegeNantesGo,
    Released: "27 nov 2020.",
    Description:
      "le cachier des charges de ce deuxième projet a pour objectif de réaliser un site REACT utilisant des APIs pour localiser et identifier les plantes des parcs et jardins de la ville de Nantes. Ce projet dure 6 semaines et l'équipe est composé de 5 personnes travaillant selon la méthode agile SCRUM",
    Id: 2,
  },
];

class Projects extends React.Component {
  render() {
    return (
      
        <div className="project">
          <div className="illustration">
            <a href={this.props.Link}><img
              className="img"
              src={this.props.Illustration}
              alt={this.props.Name}

            /></a>
          </div>
          <div className="infos">
            <h3 className="name">{this.props.Name}</h3>
            <p>
              <strong>Disponibilité:</strong> {this.props.Released}
            </p>
            <p>
              <strong>Description du projet:</strong> {this.props.Description}
            </p>
          </div>
        </div>
      
    );
  }
}

const Portfolio = () => (
  <div className='projects' id='Portfolio'>
    {project.map((project) => (
      <Projects {...project} key={project.Id} />
    ))}
  </div>
);

export default Portfolio;
