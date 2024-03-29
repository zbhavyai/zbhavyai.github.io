import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import projectList from '../data/projects.json';

const Projects = () => {
  return (
    <React.Fragment>
      <Header activeNav='projects' />
      <Container>
        <Row id='container-projects' xs={1} sm={2} md={2} lg={4} className='g-4 m-4'>
          {projectList?.map((project, index) => {
            return (
              <Col key={index}>
                <ProjectCard key={project['name']} props={project} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Projects;
