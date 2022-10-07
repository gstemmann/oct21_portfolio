import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">George Stemmann </span>
            from <span className="purple"> Los Angeles, CA.</span>
            <br />I am a Junior Software Engineer currently contributing to Open Source
              Web Applications for the city of San Francisco and Los Angeles.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play Jazz
            </li>
            <li className="about-activity">
              <ImPointRight /> Study Math, Science, and Philosophy
            </li>
            <li className="about-activity">
              <ImPointRight /> Travel and Explore
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Every morning when you put your feet on the ground, move forward with Authenticity, Credibility, and Empathy!"{" "}
          </p>
          <footer className="blockquote-footer">Dante Nero</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
