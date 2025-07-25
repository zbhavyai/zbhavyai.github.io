import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CertificationCard = (props) => {
  return (
    <Card as="article" className="zbhavyai-certification-card">
      <Card.Body as="section" className="d-flex justify-content-between">
        <div>
          <Card.Title>
            <Link className="zbhavyai-certificate-link" to={props["credential_url"]} target="_blank" rel="noopener noreferrer">
              {props["certification"]}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="zbhavyai-external-link-icon" />
            </Link>
          </Card.Title>
          <Card.Text>{props["organization"]}</Card.Text>
        </div>
        <Card.Text as="time">
          {props["issue_date"]} - {props["expiry_date"]}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

CertificationCard.propTypes = {
  certification: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  issue_date: PropTypes.string.isRequired,
  expiry_date: PropTypes.string.isRequired,
  credential_url: PropTypes.string.isRequired,
};

export default CertificationCard;
