import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Felix Kiprotich </span>
            from <span className="purple"> Bomet, Kenya.</span>
            <br />I am a junior pursuing Bachelor of Science in Computer Scince in Kabarak University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Tech videos
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Technology is best when it brings people together."{" "}
          </p>
          <footer className="blockquote-footer">Matt Mullenweg</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
