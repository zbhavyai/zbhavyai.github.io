import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import CertificationCard from "../components/CertificationCard";
import EducationCard from "../components/EducationCard";
import ExperienceCard from "../components/ExperienceCard";
import Header from "../components/Header";
import SkillsCard from "../components/SkillsCard";
import CertificationList from "../data/certification.json";
import EducationList from "../data/education.json";
import ExperienceList from "../data/experience.json";
import SkillsList from "../data/skills.json";

export default function Resume() {
  const handleDownload = () => {
    let resumeLink = "https://drive.google.com/uc?export=download&id=10WE6XlZXNCFWb5d9cwgmPr7qyMQWUAzk";

    // window.open(resumeLink);
    window.location.assign(resumeLink);
  };

  return (
    <React.Fragment>
      <Header activeNav="resume" />

      {/* Technical Skills */}
      {SkillsList?.length > 0 && (
        <Container className="zbhavyai-container-skills my-5">
          <h4 className="mb-0 fw-bold">Technical Skills</h4>
          <Row id="zbhavyai-row-skills" xs={1} md={1} lg={1} xl={1} className="g-4 mt-0">
            <Col md="12">
              <SkillsCard props={SkillsList} />
            </Col>
          </Row>
        </Container>
      )}

      {/* Professional Experience */}
      {ExperienceList?.length > 0 && (
        <Container className="zbhavyai-container-experience my-5">
          <h4 className="mb-0 fw-bold">Professional Experience</h4>
          <Row id="zbhavyai-row-experience" xs={1} md={1} lg={1} xl={1} className="g-4 mt-0">
            {ExperienceList?.map((exp, index) => {
              return (
                <Col key={index}>
                  <ExperienceCard key={exp["start_date"]} props={exp} />
                </Col>
              );
            })}
          </Row>
        </Container>
      )}

      {/* Certifications */}
      {CertificationList?.length > 0 && (
        <Container className="zbhavyai-container-certifications my-5">
          <h4 className="mb-0 fw-bold">Certifications</h4>
          <Row id="zbhavyai-row-certification" xs={1} md={1} lg={1} xl={1} className="g-4 mt-0">
            {CertificationList?.map((cert, index) => {
              return (
                <Col key={index}>
                  <CertificationCard key={cert["certification"]} props={cert} />
                </Col>
              );
            })}
          </Row>
        </Container>
      )}

      {/* Education */}
      {EducationList?.length > 0 && (
        <Container className="zbhavyai-container-education my-5">
          <h4 className="mb-0 fw-bold">Education</h4>
          <Row id="zbhavyai-row-education" xs={1} md={1} lg={1} xl={1} className="g-4 mt-0">
            {EducationList?.map((edu, index) => {
              return (
                <Col key={index}>
                  <EducationCard key={edu["university"]} props={edu} />
                </Col>
              );
            })}
          </Row>
        </Container>
      )}

      {/* Download Resume */}
      <Container className="zbhavyai-container-downloader d-flex flex-row my-5">
        <ButtonGroup>
          <Button variant="outline-light" className="px-2" onClick={handleDownload}>
            Get resume's pdf
            <FontAwesomeIcon icon={faCircleArrowDown} size="1x" className="ps-2" />
          </Button>
        </ButtonGroup>
      </Container>
    </React.Fragment>
  );
}
