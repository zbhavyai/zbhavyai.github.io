import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import brokenCardImage from "../images/no-image.jpg";

const ProjectCard = (props) => {
  let projectLink = props["deployment_link"] || props["repository_link"];

  return (
    <Link className="zbhavyai-project-link" to={projectLink} target="_blank" rel="noopener noreferrer">
      <Card as="article" className="zbhavyai-project-card shadow" height={"100px"}>
        <Card.Body as="section" className="p-0 d-flex flex-row">
          <Image
            className="zbhavyai-project-card-image p-3"
            src={props["card_image"]}
            alt={props["card_image"]}
            roundedCircle
            onError={(e) => {
              e.target.src = brokenCardImage;
            }}
          />
          <Card.Text as="section" className="py-3">
            <h6 className="zbhavyai-project-card-title px-3">{props["name"]}</h6>
            <div className="zbhavyai-project-card-text px-3">{props["summary"]}</div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  repository_link: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  card_image: PropTypes.string.isRequired,
};

export default ProjectCard;
