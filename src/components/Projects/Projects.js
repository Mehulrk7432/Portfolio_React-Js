import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
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
              title="Real Time Chat Application"
              description="1- A real-time chat application using ReactJS and NodeJS with features such as
              User Authentication, Real-time Messaging, User Presence, Notifications, User
              Profiles, Emojis and File Sharing.
              2- Utilized ReactJS and NodeJS to build the front-end and back-end of the
              application, respectively."
              ghLink="https://github.com/Mehulrk7432/Real-Time-Chat-Application"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits‑Of‑Code"
              description="1- Developed a single page application using Next.js, Node.js, and
              Markdown files for sharing development blogs.
              2- Used static site generation resulting in faster load time and
              increasing efficiency.
              3- Used Fire store for user authentication and saving of user data and
              SWR for fetching for data and Browser Local Storage for User Authentication."
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Portfolio HTML CSS JS"
              description="My personal Portfolio Website where people can see my works and know about me.
              Build with the HTML CSS JS and also deployed click Demo to see my app."
              ghLink="https://github.com/Mehulrk7432/Portfolio_HTML_CSS_JS"
              demoLink="https://mehul-portfolio-1f9sfby5f-mehulbartwal7432-gmailcom.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="RK Travels Tour Company"
              description="1- Created a site where Users can explore various tours available with
              Smooth Scrolling.
              2- Technology used HTML, CSS, JavaScript, Live, Source code.
              3- Designed a fully responsive website with Dark Mode and Light Mode
              Functionally and also deployed click Demo to see my app."
              ghLink="https://github.com/Mehulrk7432/RK-Travels-Tour-website"
              demoLink="https://rk-travels-tour-website.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
