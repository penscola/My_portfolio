import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Ecommerce"
              description="Build and Deploy a fully responsive Modern Full Stack Ecommerce application with Payments functionality. With Modern design, animations, the ability to add and edit products on the go using a CMS, all advanced cart functionalities, and most importantly the complete integration with Stripe so that you can cover REAL payments."
              ghLink="https://github.com/penscola/Ecommerce_website"
              demoLink="https://ecommerce-website-pi-eosin.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Online Multiplayer NFT Game"
              description="My NFT(non-fungible tokens) was built from Node.js which utilizes blockchain technology to manage digital assets that represent individual cards. Each card is unique and can be traded or sold on various marketplaces. The game mechanics may involve battles between players, with the outcome determined by the strengths and weaknesses of the cards in play"
              ghLink="https://github.com/penscola/NFT_CARD_GAME"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Global Manufacture Analysis"
              description="This is a machine learning project that I used to create a model using Dataset from Carsales from UK that could be able to analyze and predict the sales of cars manufacture "
              ghLink="https://github.com/penscola/global-manufacturer-analysis"       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Heart Diseases Analysis"
              description="The data set dates from 1988 and where it consisted of four databases: Cleveland, Hungary, Switzerland, and Long Beach V. It contains 76 attributes, including the predicted attribute, but all published experiments refer to using a subset of 14 of them. The target field refers to the presence of heart disease in the patient. It is integer valued 0 = no disease and 1 = disease."
              ghLink="https://github.com/penscola/Heart_diseases_analysis"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
