import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import SocialStrip from "../components/SocialStrip";

export default function Home() {
  return (
    <React.Fragment>
      <Header activeNav="about" />
      <Container className="zbhavyai-container-about d-flex justify-content-center align-items-center">
        <Row>
          <Col md={12} className="zbhavyai-col-about p-lg-2 p-4">
            <h1 className="zbhavyai-h1-about fira-mono-bold py-2">Hi! I am Bhavyai.</h1>
            <h2 className="fira-mono-regular">
              I do full-stack software development professionally and as a personal endeavor.
            </h2>
            <SocialStrip />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
