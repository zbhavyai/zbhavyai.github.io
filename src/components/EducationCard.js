import PropTypes from "prop-types";
import React from "react";
import { Card } from "react-bootstrap";

const ExperienceCard = (props) => {
  return (
    <Card as="article" className="zbhavyai-education-card">
      <Card.Body as="section" className="d-flex justify-content-between">
        <div>
          <Card.Title>
            {props["degree_short"]} in {props["specialization"] ? props["specialization"] : props["area_of_study"]}
          </Card.Title>
          <Card.Text>{props["university"]}</Card.Text>
        </div>
        <Card.Text as="time">
          {props["start_date"]} - {props["end_date"]}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

ExperienceCard.propTypes = {
  university: PropTypes.string.isRequired,
  degree_short: PropTypes.string.isRequired,
  area_of_study: PropTypes.string.isRequired,
  specialization: PropTypes.string,
  start_date: PropTypes.string.isRequired,
  end_date: PropTypes.string.isRequired,
};

export default ExperienceCard;
