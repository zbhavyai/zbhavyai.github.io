import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import EducationCard from "../components/EducationCard";
import ExperienceCard from "../components/ExperienceCard";
import Header from "../components/Header";
import SkillsCard from "../components/SkillsCard";
import EducationList from "../data/education.json";
import ExperienceList from "../data/experience.json";
import SkillsList from "../data/skills.json";

const Resume = () => {
  return (
    <React.Fragment>
      <Header activeNav="resume" />
      <Container className="zbhavyai-container-skills my-5">
        <h4 className="mb-0 fw-bold">Technical Skills</h4>
        <Row id="zbhavyai-row-skills" xs={1} md={1} lg={1} xl={1} className="g-4 mt-0">
          <Col md="12">
            <SkillsCard props={SkillsList} />
          </Col>
        </Row>
      </Container>
      <Container className="zbhavyai-container-experience my-5">
        <h4 className="mb-0 fw-bold">Professional Experience</h4>
        <Row id="zbhavyai-row-experience" xs={1} md={1} lg={1} xl={1} className="g-4 mt-0">
          {ExperienceList?.map((project, index) => {
            return (
              <Col key={index}>
                <ExperienceCard key={project["name"]} props={project} />
              </Col>
            );
          })}
        </Row>
      </Container>
      <Container className="zbhavyai-container-education my-5">
        <h4 className="mb-0 fw-bold">Education</h4>
        <Row id="zbhavyai-row-education" xs={1} md={1} lg={1} xl={1} className="g-4 mt-0">
          {EducationList?.map((project, index) => {
            return (
              <Col key={index}>
                <EducationCard key={project["name"]} props={project} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Resume;
