import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { PROJECT_FILTERS } from "../consts/projectTypes";

const ProjectFilterBar = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="zbhavyai-filter-bar">
      {PROJECT_FILTERS.map((f) => (
        <Button
          id={`filter-${f}`}
          key={f}
          className={`zbhavyai-filter-btn${activeFilter === f ? " active" : ""}`}
          onClick={() => onFilterChange(f)}
        >
          {f}
        </Button>
      ))}
    </div>
  );
};

ProjectFilterBar.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default ProjectFilterBar;
