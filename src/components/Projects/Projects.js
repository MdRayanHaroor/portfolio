import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import g_logo from "../../Assets/Projects/g_logo.jpg";
import chatmail from "../../Assets/Projects/chatmail.jpeg";
import weather from "../../Assets/Projects/weather.png";

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
              imgPath={g_logo}
              isBlog={false}
              title="Grabit"
              description="Mobile app for students and employees to order food from their own cafeteria and set pick-up time to eliminate waiting time and crowding."
              ghLink="https://github.com/GrabitApplication/Grabit_user_app"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatmail}
              isBlog={false}
              title="Chatmail"
              description="Global Chat Application or Workspace to communicate and hangout with friends build with flutter, dart, and Firebase. Have features which allows user for realtime messaging."
              ghLink="https://github.com/MdRayanHaroor/Chatmail"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Application"
              description="Real-time weather application developed using a Weather API, Javascript, HTML, CSS and Bootstrap"
              ghLink="https://github.com/MdRayanHaroor/Weather-App"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="NewsHub"
              description="An end-to-end news portal facilitating news readers, reporters, advertisers and admin."
              ghLink="https://github.com/MdRayanHaroor/News-Hub"
              demoLink=""
            />
          </Col>

          

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink=""
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink=""
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
