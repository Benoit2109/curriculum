import React from 'react';
import "./Project.css";


class Project {
    constructor(name){
        this.name = name;
    }

    render(){
        return(
            <section className="projects">
                <div className="project">{this.name}</div>
            </section>
        )
    }
    
}
 const Project1 = new Project("Project 1");
 const Project2 = new Project("Project 2");
 const Project3 = new Project("Project 3");

 export default Project1;
 export default Project2; 
 export default Project3