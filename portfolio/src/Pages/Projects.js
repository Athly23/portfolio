import React, { Component } from "react";
import CN_joke from "../Components/Pictures/CN_joke.jpg";
import Pythoncontactbook from "../Components/Pictures/Pythoncontactbook.jpg";
import triva_game from "../Components/Pictures/triva_game.jpg";
import UI_Pattern from "../Components/Pictures/UI_Pattern.jpg";
import Projectcontent from "../Components/Projectcontent.js";

class Projects extends Component {
  render() {
    return (
      <>
        <Projectcontent
          title="Chuck Norris Jokes"
          project_img={CN_joke}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
          github="https://github.com/Athly23/chuck-norris-project7"
          site="https://athly23.github.io/chuck-norris-project7/"
        />
        <Projectcontent
          title="Python Contact Book"
          project_img={Pythoncontactbook}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
          github="https://github.com/Athly23/Python-Contact-Book"
        />
        <Projectcontent
          title="Cocktail Trivia Game"
          project_img={triva_game}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
          github="https://github.com/Athly23/project-4"
          site=" https://athly23.github.io/project-4/"
        />
        <Projectcontent
          title="Rick and Morty API"
          project_img={UI_Pattern}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
          github="https://github.com/Athly23/project-3-api-ui"
          site="https://athly23.github.io/project-3-api-ui/"
        />
      </>
    );
  }
}

export default Projects;
