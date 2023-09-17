import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = ({ activeNav }) => {
  return (
    <Navbar bg='dark' data-bs-theme='dark' collapseOnSelect expand='sm' className='bg-body-tertiary navbar-dark justify-content-between'>
      <Container>
        <Navbar.Brand href='/' className='fw-bold'>
          भव्य गुप्ता
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end'>
          <Nav className='ml-auto' variant='pills' activeKey={activeNav}>
            <Nav.Link eventKey='about' href='/about'>
              About
            </Nav.Link>
            <Nav.Link eventKey='projects' href='/projects'>
              Projects
            </Nav.Link>
            <Nav.Link eventKey='resume' href='/resume'>
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
