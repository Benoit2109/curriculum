import React from 'react';
import './experiences.css';
import Job from "./curriculum.jsx"

const experience = [
    {
        Company: "ACCESSITE",
        Role: "Directeur Multi-Sites OUEST",
        Logo: "https://www.digital-make-it.com/wp-content/uploads/2019/10/accessite.png",
        Skills: ["Budgets", "Animations", "Exploitation","Relation commerçants","Gestion de syndicat de coprorpiétés"],
        Description:"Gestion de 5 centres commerçiaux sur la region OUEST pour 3 propriétaires différents",
        Index:1,
        Date: "Janvier 2018 - Juin 2020"
    },
    {
        Company: "DECATHLON",
        Role: "Directeur adjoint",
        Logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Decathlon_Logo.png/1200px-Decathlon_Logo.png",
        Skills: ["Budgets", "Animations", "Exploitation", "Recrutement", "Formation"],
        Description:"Co-gestion d'un magasin réalisant 10 millions de chiffre d'affaire. Animation d'une équipe de 30 collaborateurs",
        Index:2,
        Date: "Février 2017 - Décembre 2017"
    },
    {
        Company: "DECATHLON",
        Role: "Responsable de rayon",
        Logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Decathlon_Logo.png/1200px-Decathlon_Logo.png",
        Skills: ["Recrutement", "Animations", "Formation", "Gestion de CEX", "Commerce"],
        Description:"Gestion d'un compte d'Exploitation de 3 millions d'euros, animation d'une équipe de 10 personnes",
        Index:3,
        Date: "Février 2015 - Janvier 2017"
    },
    {
        Company: "DECATHLON",
        Role: "Responsable de rayon",
        Logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Decathlon_Logo.png/1200px-Decathlon_Logo.png",
        Skills: ["Recrutement", "Animations", "Formation", "Gestion de CEX", "Commerce"],
        Description:"Gestion d'un compte d'Exploitation de 1,5 millions d'euros, animation d'une équipe de 5 personnes",
        Index:4,
        Date: "Novembre 2013 - Janvier 2015"
    }
]

const Curriculum = () => (
    <div>
        {experience.map((item) => (
            <Job {...item}/>

        ))}
    </div>
)

export default Curriculum;