import PropTypes from "prop-types";
import React from "react";
import { Card } from "react-bootstrap";

const CertificationCard = ({ props }) => {
  return (
    <Card as="article" className="zbhavyai-certification-card">
      <Card.Body as="section" className="d-flex justify-content-between">
        <div>
          <Card.Title>{props["certification"]}</Card.Title>
          <Card.Text>{props["organization"]}</Card.Text>
        </div>
        <Card.Text as="time">
          {props["certified_on"]} - {props["valid_till"]}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

CertificationCard.propTypes = {
  props: PropTypes.shape({
    certification: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
    certified_on: PropTypes.string.isRequired,
    valid_till: PropTypes.string.isRequired,
  }).isRequired,
};

export default CertificationCard;
