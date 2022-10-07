import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import tree from "../../Assets/70111492.png"
import editor from "../../Assets/Projects/codeEditor.png";
import radiation from "../../Assets/radiation.webp";
import squirtle from "../../Assets/b201181cd337130bbec6d9f9f00a2932.png";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={radiation}
              isBlog={false}
              title="Leah Stemmann's Art Portfolio"
              description="Artist Portfolio hosted on heroku with a headless CMS built with react.js, react-bootstrap, postgresql, and strapi cms. Allows user administration for realtime image uploading and site adminstration."
              ghLink="https://github.com/gstemmann/leah-s-art-page"
              demoLink="https://lstemmann.surge.sh/"
            />
          </Col>
          
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tree}
              isBlog={false}
              title="Water The Trees"
              description="Water the Trees is a platform that crowd sources tree planting and maintenance. We believe in the power of trees to restore natural habitat for animals, insects, and fauna. We are interesting in continuous massive tree planting events to help sequester carbon and stabilize climate change extremes
                                This project uses Mapbox React.js, Node.js, Express.js, PostgreSQL/PostGIS, Docker."
              ghLink="https://github.com/waterthetrees/waterthetrees"
              demoLink="https://waterthetrees.com/"              
            />
          </Col>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={squirtle}
              isBlog={false}
              title="Pokemon Battle Application"
              description="Pokemon RPG turn-based battle application built with vanilla JS and Flask with Python which takes the user into the nostalgic battle system of Pokemon using the PokeAPI. Hosted on Heroku in production with a Postgresql db."
              ghLink="https://github.com/gstemmann/pokemon-battle"
              demoLink="http://pokemon-battle-app-fun.herokuapp.com/"
            />
          </Col>

       
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
