import React, { Component } from "react";
import "../Pages/About.css";

class About extends Component {
  render() {
    return (
      <div className="container">
        <h1>
          "Tell me and I forget. Teach me and I remember. Involve me and I
          learn." -Benjamin Franklin
        </h1>
        <div className="about-bio">
          <p>
            "I have a passion for education and learning new code, which I was
            able to pursue through The General Assembly in Washington, DC. This
            is where I learned to develop my skills, and continue to work with
            other alumni to collaborate on new projects. Although I have
            backgrounds in many different areas, they have each contributed to
            my new skills in design and web development."
          </p>
          <p>
            "Through my previous background in sales, I maintained my ability to
            help others and solve complex problems. It required learning the
            constant changes in marketing and sales procedures, overall I
            strived to provide the buyers with the best possible product."
          </p>
          <p>
            "I have a deep root in finance and collaboration through my work as
            a Loan Officer. My certification in the subject allowed for me to
            become an expert at home loans, and provide great attention to
            detail on every loan. I enjoy the feeling of helping others achieve
            their vision, and worked tirelessly to provide people with their
            dream homes."
          </p>
          <p>
            "When I am not learning new code, or collaborating with GA alumni I
            am also known as a culinary enthusiast. My creativity is always
            challenged in both making new drinks and cooking new foods. In doing
            so, I have become a skilled bartender and still mastering the art of
            spices and presentation of new dishes."
          </p>
          <div className="skills">
            <h2>Skills</h2>
          </div>
          <div className="programming">
            <p>
              HTML | CSS | Javascript | React Express | Python | Django |
              MongoDB | Mongoose | SQL | Peewee
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
