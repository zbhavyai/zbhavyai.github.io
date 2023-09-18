import React from 'react';
import { Badge, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProjectCard = ({ props }) => {
  let brokenCardImage = `${process.env.PUBLIC_URL + '/logo512.png'}`;

  return (
    <Card className='shadow rounded monoFont'>
      <Card.Header className='text-end' style={{ fontSize: '0.85em' }}>
        {props['tech_stack']?.map((language, index) => {
          return (
            <Badge key={index} pill className='bg-secondary ms-1'>
              {language}
            </Badge>
          );
        })}
      </Card.Header>
      <Card.Img
        variant='top'
        src={props['card_image']}
        alt={props['card_image']}
        onError={(e) => {
          e.target.src = brokenCardImage;
        }}
        height={'200px'}
        className='p-5'
        style={{ objectFit: 'contain', borderRadius: '0em', backgroundColor: '#e8e9ea' }}
      />
      <Card.Body>
        <Card.Title>
          <Link to={props['repository_link']} target='_blank' rel='noopener noreferrer'>
            {props['name']}
          </Link>
        </Card.Title>
        <Card.Text
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitBoxOrient: 'vertical',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            lineClamp: 3,
            height: '4.5em',
          }}
        >
          {props['short_description']}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
