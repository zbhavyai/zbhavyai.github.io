import React from 'react';
import { Badge, Card } from 'react-bootstrap';

const ExperienceCard = ({ props }) => {
  return (
    <Card as='article' className='monoFontFira card-experience'>
      <Card.Header as='header' className='d-flex justify-content-between'>
        <div>
          <Card.Title className='mb-1'>{props['company']}</Card.Title>
          <Card.Subtitle>{props['designation']}</Card.Subtitle>
        </div>
        <div>
          <Card.Text as='time'>
            {props['start_date']} - {props['end_date']}
          </Card.Text>
          <Card.Text as='address'>{props['location']}</Card.Text>
        </div>
      </Card.Header>
      <Card.Body as='section' className='py-0'>
        <Card.Text className='px-3'>
          <ul className='triangle-list'>
            {props['responsibities']?.map((item, index) => {
              return (
                <li key={index} className='triangle-list'>
                  {item}
                </li>
              );
            })}
          </ul>
        </Card.Text>
      </Card.Body>
      <Card.Footer as='footer'>
        {props['tech_stack']?.map((language, index) => {
          return (
            <Badge key={index} pill className='tech-badge monoFontInconsolata me-1'>
              {language}
            </Badge>
          );
        })}
      </Card.Footer>
    </Card>
  );
};

export default ExperienceCard;
