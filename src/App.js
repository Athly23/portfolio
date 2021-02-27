import React from "react";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Navbar from "./Components/Navbar/Navbar";
import Resume from "./Components/Resume";
import Contact from "./Pages/Contact";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <TransitionGroup>
          <CSSTransition timeout={300} classNames="item">
            <Switch>
              <Redirect path="/" exact to="home" />
              <Route exact component={Home} path="/home" />
              <Route exact component={Projects} path="/projects" />
              <Route exact component={About} path="/aboutme" />
              <Route exact component={Resume} path="/resume" />
              <Route exact component={Contact} path="/contact" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Router>
    </div>
  );
}

export default App;
