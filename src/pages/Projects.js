import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import projectList from "../data/projects.json";

export default function Projects() {
  return (
    <React.Fragment>
      <Header activeNav="projects" />
      <Container className="my-5">
        <Row xs={1} sm={1} md={2} lg={3} className="g-4 m-md-4 m-lg-4 m-1">
          {projectList?.map((project, index) => {
            return (
              <Col className="p-0 px-md-3 px-lg-3" key={project["name"]}>
                <ProjectCard {...project} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </React.Fragment>
  );
}
