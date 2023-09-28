import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Badge, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProjectCard = ({ props }) => {
  let brokenCardImage = `${process.env.PUBLIC_URL + '/logo512.png'}`;

  return (
    <Card className='shadow rounded monoFontFira card-project'>
      <Card.Img
        variant='top'
        src={props['card_image']}
        alt={props['card_image']}
        onError={(e) => {
          e.target.src = brokenCardImage;
        }}
        height={'200px'}
        className='p-5'
        style={{ objectFit: 'contain', backgroundColor: '#e8e9ea' }}
      />
      <Card.Body className='p-0'>
        <Card.Title className='py-1 px-2 bg-secondary text-light d-flex justify-content-between'>
          {props['name']}
          <Link to={props['repository_link']} target='_blank' rel='noopener noreferrer' className='text-light'>
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </Card.Title>
        <Card.Text
          className='px-3 mb-2'
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
      <Card.Footer className='text-end' style={{ fontSize: '0.85em' }}>
        {props['tech_stack']?.map((language, index) => {
          return (
            <Badge key={index} pill className='bg-secondary ms-1'>
              {language}
            </Badge>
          );
        })}
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard;
