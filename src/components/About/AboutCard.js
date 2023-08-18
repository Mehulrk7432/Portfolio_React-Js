import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mehul Bartwal </span>
            from <span className="purple"> Chandigarh, India.</span>
            <br /> 😎 I am Full-Stack Developer with a passion for Science and Human Behavior.
            <br /> Pursuing Btech in Computer Science Engineering from Lovely Professional University.
            <br /> 🫠 A punctual, goal-oriented, creative mind and graduate possessing excellent communication skills, problem-solving, and leadership skills while developing group projects.
            <br /> 👾 Highly focused, efficient, adaptable in any kind of situation, and capable of making the right decisions.
            <br /> 🔫 Shoot me an Email or add me on Linkedin :)
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mehul</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
