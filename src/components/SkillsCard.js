import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons/faClipboardCheck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { copyToClipboard, getSkills } from "../utils/clipboard";

const SkillsCard = ({ props }) => {
  const [copied, setCopied] = useState(false);

  return (
    <Card as="article" className="zbhavyai-skills-card">
      <Card.Body as="section" className="d-flex justify-content-between">
        <Table variant="dark" className="zbhavyai-skills-table">
          <tbody>
            {props?.map((skillgroup, index) => {
              return (
                <tr key={skillgroup["type"]}>
                  <td className="fw-bold text-capitalize" width={"15%"}>
                    {skillgroup["type"]}
                  </td>
                  <td>{skillgroup["list"] && <span>{skillgroup["list"].join(", ")}</span>}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card.Body>

      <OverlayTrigger placement="left" overlay={<Tooltip>{copied ? "Copied!" : "Copy to clipboard"}</Tooltip>}>
        <FontAwesomeIcon
          icon={copied ? faClipboardCheck : faClipboard}
          className="zbhavyai-clipboard-icon"
          onClick={(e) => {
            e.stopPropagation();
            copyToClipboard(props, getSkills);
            setCopied(true);
            setTimeout(() => setCopied(false), 1000);
          }}
        />
      </OverlayTrigger>
    </Card>
  );
};

export default SkillsCard;
