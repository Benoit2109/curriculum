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
    return (
      <section className="jobdate" >
        <div className="date">{this.props.Date}</div>
        <div className="job" 
        onClick = {event=> {
            const isOpen = !this.state.Open;
            this.setState({Open: isOpen})
            console.log(this.setState)
        }}>
          <img
            className="logo"
            src={this.props.Logo}
            alt={this.props.Company}
          />
          <div className="title">
            <h2 className="company">{this.props.Company}</h2>
            <h3 className="role">{this.props.Role}</h3>
          </div>
          
          <div className={this.state.Open? "open":"close"}>
            <ul className="skills">
              <li>{this.props.Skills[0]}</li>
              <li>{this.props.Skills[1]}</li>
              <li>{this.props.Skills[2]}</li>
              <li>{this.props.Skills[3]}</li>
              <li>{this.props.Skills[4]}</li>
            </ul>
            <p className="description">{this.props.Description}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Job;
