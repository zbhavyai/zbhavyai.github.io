import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import SocialStrip from "../components/SocialStrip";

const Home = () => {
  return (
    <React.Fragment>
      <Header activeNav="about" />
      <Container className="zbhavyai-container-about d-flex justify-content-center align-items-center">
        <Row>
          <Col md={12}>
            <h1 className="zbhavyai-h1-about fira-mono-bold py-2">Hi! I am Bhavyai.</h1>
            <h2 className="fira-mono-regular">
              I do software development
              <br />
              for fun and profit.
            </h2>
            <SocialStrip />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Home;
