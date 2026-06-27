import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import ProjectFilterBar from "../components/ProjectFilterBar";
import { PROJECT_TYPE_ALL } from "../consts/projectTypes";
import projectList from "../data/projects.json";

function applyFilter(projects, filter) {
  if (filter === PROJECT_TYPE_ALL) return projects;
  return projects.filter((p) => p.type.includes(filter));
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState(PROJECT_TYPE_ALL);

  const filteredProjects = applyFilter(projectList, activeFilter);

  return (
    <React.Fragment>
      <Container className="my-5">
        <ProjectFilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />

        {filteredProjects.length === 0 && <div className="zbhavyai-filter-empty">No projects match this filter.</div>}

        <Row xs={1} sm={1} md={2} lg={3} className="g-4 m-md-4 m-lg-4 m-1">
          {filteredProjects.map((project) => {
            return (
              <Col className="p-0 px-md-3 px-lg-3" key={project["name"]}>
                <ProjectCard {...project} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </React.Fragment>
  );
}
