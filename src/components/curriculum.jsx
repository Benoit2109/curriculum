import React from "react";
import "./Curriculum.css";

class Job extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        Open: props.open,
    }
  }

  
  render() {
    const{Date, Logo, Company, Role, Skills, Description } = this.props;
    return (
      
      
      <section className="jobdate" >
        <div className="date">{Date}</div>
        <div className="job" 
        onClick = {event=> {
            const isOpen = !this.state.Open;
            this.setState({Open: isOpen})
        }}>
          <img
            className="logo"
            src={Logo}
            alt={Company}
          />
          <div className="title">
            <h2 className="company">{Company}</h2>
            <h3 className="role">{Role}</h3><span className={this.state.Open? "spanOpen":"spanClose"}>(en savoir plus...)</span>
          </div>
          
          <div className={this.state.Open? "open":"close"}>
            <ul className="skills">
              <li>{Skills[0]}</li>
              <li>{Skills[1]}</li>
              <li>{Skills[3]}</li>
              <li>{Skills[4]}</li>
            </ul>
            <p className="description">{Description}</p>
          </div>
        </div>
      </section>
      
    );
  }
}

export default Job;
