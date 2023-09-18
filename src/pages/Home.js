import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';

const Home = () => {
  return (
    <React.Fragment>
      <Header activeNav='about' />
      <Container className='d-flex justify-content-center align-items-center' style={{ minHeight: '80vh' }}>
        <div>
          <h1>Bhavyai Gupta</h1>
          <h2>Software Developer</h2>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Home;
