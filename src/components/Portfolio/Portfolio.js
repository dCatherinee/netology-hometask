import React, { Component } from "react";
import ProjectList from "../ProjectList/ProjectList";
import Toolbar from "../Toolbar/Toolbar";
import { projects } from "./data";

const FILTERS = ["All", "Websites", "Flayers", "Business Cards"];

export class Portfolio extends Component {
  state = {
    filter: FILTERS[0],
    selectedProjects: projects,
  };

  onSelectFilter = (filter) => {
    if (filter === "All") {
      this.setState({
        filter: filter,
        selectedProjects: projects,
      });
    } else {
      this.setState({
        filter: filter,
        selectedProjects: projects.filter(
          (project) => project.category === filter
        ),
      });
    }
  };

  render() {
    console.log(projects);
    return (
      <div className="portfolio">
        <Toolbar
          filters={FILTERS}
          selected={this.state.filter}
          onSelectFilter={this.onSelectFilter}
        />
        <ProjectList projects={this.state.selectedProjects} />
      </div>
    );
  }
}

export default Portfolio;
