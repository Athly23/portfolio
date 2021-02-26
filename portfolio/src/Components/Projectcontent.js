import React, { Component } from "react";
import "./Projectcontent.css";

class Projectcontent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="body-main">
        <>
          <div className="project">
            <h1>{this.props.title}</h1>
            <div className="project-body">
              <div class="project-img">
                <img src={this.props.project_img} />
              </div>
              <div className="project-p">
                <p>{this.props.description}</p>
              </div>
            </div>
            <div className="project-nav">
              <a
                href={this.props.github}
                rel="noopener noreferrer"
                target="_blank"
              >
                Visit Github
              </a>
              <a
                href={this.props.site}
                rel="noopener noreferrer"
                target="_blank"
              >
                Visit Site
              </a>
            </div>
          </div>
        </>
      </div>
    );
  }
}

export default Projectcontent;
