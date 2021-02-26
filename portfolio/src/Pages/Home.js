import React, { Component } from "react";
import "../Pages/Home.css";
import profile from "../Components/Pictures/profile.jpg";
import open from "../Components/Pictures/open.png";
import close from "../Components/Pictures/close.png";

class Home extends Component {
  render() {
    return (
      <>
        <div className="img-container">
          <div className="meta-open">
            <img src={open} />
          </div>
          <div className="pic">
            <img src={profile} />
          </div>
          <div className="meta-close">
            <img src={close} />
          </div>
        </div>
        <div className="title">
          <h1>Software Engineer</h1>
        </div>

        <div className="bio">
          <p>
            My name is Andrew Ly, I'm a software engineer based in Maryland with
            a passion for innovative web design and collaborating with others to
            bring forth extraordinary user experiences.
          </p>
        </div>
      </>
    );
  }
}

export default Home;
