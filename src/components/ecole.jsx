import React from 'react';
import "./Ecole.css";


const Ecole = () => (
        
            <section className="flex" >
                <div className="ecole">
                <div>
                    <img className="wild" src="https://www.wildcodeschool.com/assets/logo_white-b3ba5f88186df8d04f5ef8be4c3cc057a49f77b25b2359c4f4b3b13c53e5aeb8.png" alt="wild code school"/>
                </div>
                <div className="ecoleText">
                    <h2>Wild Code School</h2>
                    <h3>Formation developpeur web / mobile</h3>
                    <p>5 mois et 4 mois de stage, formation débuté le 11 septembre 2020. 3 projets d'applications structurent la formation et seront accessibles sur GitHub Pages.</p>
                    <ul className="projectList">
                        <li><a href="https://baptiste-gfy.github.io/calendrier_avant/">Projet 1</a>: Calendrier de l'avant (HTML/CSS/JS natif - 2 semaines. sept 2020)</li>
                        <li>Projet 2: Herbier connecté permmettant de collecter l'ensemble des espèces présentes dans les parcs et jardins de Nantes (REACT - 6 semaines, dispo 27 novembre 2020)</li>
                        <li>Projet 3: A définir (dispo mi février 2021)</li>
                    </ul>
                </div>
                </div>
            </section>
        )
    




export default Ecole