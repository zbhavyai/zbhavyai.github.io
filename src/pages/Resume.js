import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import EducationCard from '../components/EducationCard';
import ExperienceCard from '../components/ExperienceCard';
import Header from '../components/Header';
import EducationList from '../data/education.json';
import ExperienceList from '../data/experience.json';

const Resume = () => {
  return (
    <React.Fragment>
      <Header activeNav='resume' />
      <Container>
        <h3 className='mt-5 mx-4 mb-0'>Experience</h3>
        <Row id='container-experience' xs={1} md={1} lg={1} xl={1} className='g-4 m-4 mt-0'>
          {ExperienceList?.map((project, index) => {
            return (
              <Col key={index}>
                <ExperienceCard key={project['name']} props={project} />
              </Col>
            );
          })}
        </Row>
      </Container>
      <Container>
        <h3 className='mt-5 mx-4 mb-0'>Education</h3>
        <Row id='container-education' xs={1} md={1} lg={1} xl={1} className='g-4 m-4 mt-0'>
          {EducationList?.map((project, index) => {
            return (
              <Col key={index}>
                <EducationCard key={project['name']} props={project} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Resume;
