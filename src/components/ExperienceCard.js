import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons/faClipboardCheck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Badge, Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { copyToClipboard, getExperienceResponsibilities } from "../utils/clipboard";

const ExperienceCard = ({ props }) => {
  const [copied, setCopied] = useState(false);

  return (
    <Card as="article" className="zbhavyai-experience-card">
      <Card.Header as="header" className="d-flex justify-content-between pt-3">
        <div>
          <Card.Title>{props["company"]}</Card.Title>
          <Card.Text>{props["designation"]}</Card.Text>
        </div>
        <div>
          <Card.Text as="time">
            {props["start_date"]} - {props["end_date"]}
          </Card.Text>
          <Card.Text as="address">{props["location"]}</Card.Text>
        </div>
      </Card.Header>
      <Card.Body as="section" className="py-0">
        <Card.Text as="div" className="px-3">
          <ul className="zbhavyai-list-triangle">
            {props["responsibities"]?.map((item, index) => {
              return (
                <li key={index} className="zbhavyai-list-triangle zbhavyai-text-heavy">
                  <span className="fw-bold">{item["keyword"]}</span>: <span dangerouslySetInnerHTML={{ __html: item["description"] }} />
                </li>
              );
            })}
          </ul>
        </Card.Text>
      </Card.Body>
      <Card.Footer as="footer">
        {props["tech_stack"]?.map((language, index) => {
          return (
            <Badge key={index} pill className="zbhavyai-tech-badge fira-mono-regular me-1">
              {language}
            </Badge>
          );
        })}
      </Card.Footer>

      <OverlayTrigger placement="left" overlay={<Tooltip>{copied ? "Copied!" : "Copy to clipboard"}</Tooltip>}>
        <FontAwesomeIcon
          icon={copied ? faClipboardCheck : faClipboard}
          className="zbhavyai-clipboard-icon"
          onClick={(e) => {
            e.stopPropagation();
            copyToClipboard(props, getExperienceResponsibilities);
            setCopied(true);
            setTimeout(() => setCopied(false), 1000);
          }}
        />
      </OverlayTrigger>
    </Card>
  );
};

ExperienceCard.propTypes = {
  props: PropTypes.shape({
    company: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    start_date: PropTypes.string.isRequired,
    end_date: PropTypes.string.isRequired,
    tech_stack: PropTypes.arrayOf(PropTypes.string).isRequired,
    responsibities: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default ExperienceCard;
