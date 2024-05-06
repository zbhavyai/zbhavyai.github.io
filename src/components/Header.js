import PropTypes from "prop-types";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = ({ activeNav }) => {
  return (
    <Navbar className="zbhavyai-navbar navbar-dark bg-body-tertiary justify-content-between" bg="dark" expand="sm" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/" className="zbhavyai-brand fira-mono-bold fw-bold">
          Bhavyai Gupta
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto" variant="pills" activeKey={activeNav}>
            <Nav.Item>
              <Nav.Link eventKey="about" href="/" className="px-3">
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="projects" href="/projects" className="px-3">
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="resume" href="/resume" className="px-3">
                Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

Header.propTypes = {
  activeNav: PropTypes.string.isRequired,
};

export default Header;
