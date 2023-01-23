import PropTypes from "prop-types";
import React, { Component } from "react";

export class ProjectList extends Component {
  render() {
    return (
      <div className="project_list">
        {this.props.projects.map((project, i) => (
          <img key={i} src={project.img} alt="project" />
        ))}
      </div>
    );
  }
}

ProjectList.propTypes = {
  projects: PropTypes.array,
};

export default ProjectList;
