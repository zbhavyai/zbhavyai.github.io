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
          <Nav className='ml-auto monoFont' variant='pills' activeKey={activeNav}>
            <Nav.Item>
              <Nav.Link eventKey='about' href='/about' className='px-3'>
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='projects' href='/projects' className='px-3'>
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='resume' href='/resume' className='px-3'>
                Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
