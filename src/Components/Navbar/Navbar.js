import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
// import { Link } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
// import { AppBar, Toolbar } from "@material-ui/core";
// import Navbar from "Navbar"

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="NavbarItems">
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  <Link to={item.url}>{item.title}</Link>
                </a>
              </li>
            );
          })}
          <li>
            <a
              href="https://docs.google.com/document/d/1Rod90JVxwBtrxPw-Xenov_VCaorl2W26LcdAYkfg37Y/edit?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
