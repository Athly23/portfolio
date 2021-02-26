import React, { Component } from "react";
import CN_joke from "../Components/Pictures/CN_joke.jpg";
import Pythoncontactbook from "../Components/Pictures/Pythoncontactbook.jpg";
import triva_game from "../Components/Pictures/triva_game.jpg";
import UI_Pattern from "../Components/Pictures/UI_Pattern.jpg";
import Projectcontent from "../Components/Projectcontent.js";
import "../Pages/Projects.css";

class Projects extends Component {
  render() {
    return (
      <>
        {/* <div className="project-title">
          <h1>Projects</h1>
        </div> */}
        <Projectcontent
          title="Chuck Norris Jokes"
          project_img={CN_joke}
          description="This is a full MERN project. The user is able to retrieve a random joke, create a joke which was stored, and delete a joke. The frontend was built with Javascript and CSS, the backend was built with Mongoose and Express."
          github="https://github.com/Athly23/chuck-norris-project7"
          site="https://athly23.github.io/chuck-norris-project7/"
        />
        <Projectcontent
          title="Python Contact Book"
          project_img={Pythoncontactbook}
          description="The contact book was built completely in Python. The user can search for all contacts or a single contact by entering the number associated with each command. This also allows teh user to create and add contacts to the database as well."
          github="https://github.com/Athly23/Python-Contact-Book"
        />
        <Projectcontent
          title="Cocktail Trivia Game"
          project_img={triva_game}
          description="This is a bartending trivia game that was built using HTML, CSS, and Javascript. There is a play button that will initialize the game, from there the user will see an image of a cocktail where they will have to submit the correct name.  "
          github="https://github.com/Athly23/project-4"
          site=" https://athly23.github.io/project-4/"
        />
        <Projectcontent
          title="Rick and Morty API/UI"
          project_img={UI_Pattern}
          description="This project is using a slider UI pattern and making calls to the Rick and Morty API to display facts about characters on the show. This was built using HTML, CSS and Javascript."
          github="https://github.com/Athly23/project-3-api-ui"
          site="https://athly23.github.io/project-3-api-ui/"
        />
      </>
    );
  }
}

export default Projects;
