import PropTypes from "prop-types";
import React, { Component } from "react";

export class Toolbar extends Component {
  render() {
    return (
      <div className="toolbar">
        <ul className="toolbar_list">
          {this.props.filters.map((filter, i) => (
            <li
              key={i}
              onClick={() => this.props.onSelectFilter(filter)}
              className={
                this.props.selected === filter
                  ? "list_item_active"
                  : "list_item"
              }
            >
              {filter}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Toolbar.propTypes = {
  filters: PropTypes.array,
  selected: PropTypes.string,
  onSelectFilter: PropTypes.func,
};

export default Toolbar;
