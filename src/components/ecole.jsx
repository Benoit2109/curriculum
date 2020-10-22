import React from 'react';
import "./ecole.css";


class Ecole extends React.Component{
    constructor(props){
        super(props);

    

    }

    render(){
        return(
            <section className="ecole">
                <div >
                    <img className="wild" src="https://www.wildcodeschool.com/assets/logo_white-b3ba5f88186df8d04f5ef8be4c3cc057a49f77b25b2359c4f4b3b13c53e5aeb8.png" alt="wild code school"/>
                </div>
                <div className="ecoleText">
                    <h2>Wild Code School</h2>
                    <h3>Formation developpeur web / mobile</h3>
                    <p>5 mois et 4 mois de stage, formation débuté le 11 septembre 2020.</p>
                </div>
            </section>
        )
    }
}

export default Ecole