import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Header from "../components/Header";
import SocialStrip from "../components/SocialStrip";

export default function Home() {
  return (
    <React.Fragment>
      <Header activeNav="about" />
      <Container className="zbhavyai-container-about d-flex justify-content-center">
        <Row className="align-items-center">
          <Col md={4} className="d-flex justify-content-center my-3">
            <Image src="/logo512.png" alt="Bhavyai Gupta" roundedCircle className="zbhavyai-logo" />
          </Col>
          <Col md={8} className="zbhavyai-col-about px-5 my-3">
            <h1 className="zbhavyai-h1-about fira-mono-bold py-2">Hi, I'm Bhavyai</h1>
            <h2 className="fira-mono-regular">
              Developer
              <i className="bi bi-dot" aria-hidden="true"></i>
              Engineer
            </h2>
            <SocialStrip />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
