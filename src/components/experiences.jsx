import React from "react";
import "./Experiences.css";
import Job from "./Curriculum.jsx";

const experience = [
  {
    Company: "ACCESSITE (44)",
    Role: "Directeur Multi-Sites OUEST",
    Logo:
      "https://www.digital-make-it.com/wp-content/uploads/2019/10/accessite.png",
    Skills: [
      "Budgets",
      "Animations",
      "Exploitation",
      "Relation commerçants",
      "Gestion de syndicat de coprorpiétés",
    ],
    Description:
      "Gestion de 5 centres commerçiaux sur la region OUEST pour 3 propriétaires différents",
    id: 1,
    Date: "Janvier 2018 - Juin 2020",
    Open: false,
  },
  {
    Company: "DECATHLON NANTES (44)",
    Role: "Directeur adjoint",
    Logo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Decathlon_Logo.png/1200px-Decathlon_Logo.png",
    Skills: [
      "Budgets",
      "Animations",
      "Exploitation",
      "Recrutement",
      "Formation",
    ],
    Description:
      "Co-gestion d'un magasin réalisant 10 millions de chiffre d'affaire. Animation d'une équipe de 30 collaborateurs",
    id: 2,
    Date: "Février 2017 - Décembre 2017",
    Open: false,
  },
  {
    Company: "DECATHLON RENNES (35)",
    Role: "Responsable de rayon",
    Logo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Decathlon_Logo.png/1200px-Decathlon_Logo.png",
    Skills: [
      "Recrutement",
      "Animations",
      "Formation",
      "Gestion de CEX",
      "Commerce",
    ],
    Description:
      "Gestion d'un compte d'Exploitation de 3 millions d'euros. Animation d'une équipe de 10 personnes",
    id: 3,
    Date: "Février 2015 - Janvier 2017",
    Open: false,
  },
  {
    Company: "DECATHLON ANCENIS (44)",
    Role: "Responsable de rayon",
    Logo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Decathlon_Logo.png/1200px-Decathlon_Logo.png",
    Skills: [
      "Recrutement",
      "Animations",
      "Formation",
      "Gestion de CEX",
      "Commerce",
    ],
    Description:
      "Gestion d'un compte d'Exploitation de 1,5 millions d'euros. Animation d'une équipe de 5 personnes",
    id: 4,
    Date: "Novembre 2013 - Janvier 2015",
    Open: false,
  },
];

const Experiences = () => (
  <div id="Accessite">
    {experience.map((experience) => (
      <Job {...experience} key={experience.id} />
    ))}
  </div>
);

export default Experiences;
