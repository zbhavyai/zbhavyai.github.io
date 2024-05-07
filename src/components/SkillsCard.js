import React from "react";
import { Card } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const SkillsCard = ({ props }) => {
  return (
    <Card as="article" className="zbhavyai-skills-card">
      <Card.Body as="section" className="d-flex justify-content-between">
        <Table variant="dark" className="zbhavyai-skills-table">
          <tbody>
            {props?.map((skillgroup, index) => {
              return (
                <tr key={skillgroup["type"]}>
                  <td className="fw-bold text-capitalize">{skillgroup["type"]}</td>
                  <td>{skillgroup["list"] && <span>{skillgroup["list"].join(", ")}</span>}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default SkillsCard;
