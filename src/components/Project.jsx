import React, { useEffect } from "react";
import Aos from "aos";
import "./Project.css";
import "aos/dist/aos.css";
import EnAttendantNoel from "./image/EnAttendantNoel.png";
import VegeNantesGo from "./image/VegeNantesGo.png";
import MiddleTrade from "./image/MiddleTrade.png";
import Whereisben from "./image/whereisben.jpg";

const project = [
  {
    Name: "En attendant Noël...",
    Illustration: EnAttendantNoel,
    Released: "9 octobre 2020.",
    Description:
      "le cahier des charges de ce premier projet a pour objectif de réaliser un site de quelques pages en HTML/CSS/JAVASCRIPT avec des liens permettant la navigation entre elles. Le site doit être responsive. Nous avons le choix de réaliser un calendrier de l'avent qui devra être fonctionnel pour le premier décembre. Le rendu actuel est le travail réalisé en 10 jours, par une équipe de 3 personnes après un mois de formation.",
    Id: 1,
    Active: true,
    Link: "https://baptiste-gfy.github.io/calendrier_avant/",
    Repo: "https://github.com/Benoit2109/calendrier_avant.git",
  },
  {
    Name: "Middle Trade",
    Illustration: MiddleTrade,
    Released: "20 novembre 2020",
    Description:
      "Premier Hackathon de 24h de la formation, le thème imposée était d'inventer une application qui aurait pu aider la population d'une époque antérieur au numérique. Nous avons opter pour une application de troc au Moyen-Age, Middle Trade. Le résultat est le travail de 4 personnes après seulement 2 mois de formation et en 24 heures chrono.",
    Active: true,
    Link: "https://middle-trade.netlify.app/",
    Repo: "https://github.com/Benoit2109/hackathon1-Middle-Trade.git",
    Id: 2,
  },
  {
    Name: "VegeNantes Go",
    Illustration: VegeNantesGo,
    Released: "27 novembre 2020.",
    Description:
      "le cahier des charges de ce deuxième projet a pour objectif de réaliser un site JS/REACT utilisant des APIs pour localiser et identifier les plantes des parcs et jardins de la ville de Nantes. Ce projet dure 6 semaines et l'équipe est composé de 5 personnes travaillant selon la méthode agile SCRUM.",
    Id: 3,
    Active: true,
    Link: "https://vegenantesgo.netlify.app/",
    Repo: "https://github.com/WildCodeSchool/nts-js-202009-p2-herbier",
  },
  {
    Name: "Where the hell is Ben?",
    Illustration: Whereisben,
    Released: "10 février 2021",
    Description:
      "Projet personnel de fin de formation mettant en avant mes compétances Front et Back en ReactJs, NodeJs et Express. Utilisation d'API et d'authentifiction sur une application permettant de conserver un souvenir de ses voyages",
    Id: 4,
    Active: true,
    Link: "https://wherethehellisben.netlify.app/",
    Repo: "https://github.com/Benoit2109/whereisben.git",
    RepoBack: "https://github.com/Benoit2109/whereisben_back.git",
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
      RepoBack,
    } = this.props;
    return (
      <div data-aos="fade-right" className={this.state.Active ? "project" : "noProject"}>
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
            {RepoBack ? (
              <p className="github">
                Lien du{" "}
                <a className="Linkblue" href={RepoBack}>
                  repo Github.
                </a>
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

const Portfolio = () => {
  
  return (
    <div className="projects" id="Portfolio">
      <h2 className="SectionPart">Portfolio</h2>
      <div className="projects-contener">
        {project.map((project) => (
          <Projects {...project} key={project.Id} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
