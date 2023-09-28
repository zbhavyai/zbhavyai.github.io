import React from 'react';
import { Card } from 'react-bootstrap';

const ExperienceCard = ({ props }) => {
  return (
    <Card as='article' className='shadow monoFont card-education'>
      <Card.Body as='section' className='d-flex justify-content-between'>
        <div>
          <Card.Title>
            {props['degree_short']} in {props['specialization'] ? props['specialization'] : props['area_of_study']}
          </Card.Title>
          <Card.Text>{props['university']}</Card.Text>
        </div>
        <Card.Text as='time'>
          {props['start_date']} - {props['end_date']}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ExperienceCard;
