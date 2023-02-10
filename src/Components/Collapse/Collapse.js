import React, { useState } from "react";
import PropTypes from "prop-types";

const Collapse = ({ collapsedLabel, expandedLabel, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleClick} className="collapse__button">
        {isOpen ? expandedLabel : collapsedLabel}
      </button>
      {isOpen && (
        <div className={isOpen ? "show collapse__body" : "collapse__body"}>
          <div className="collapse__text">{text}</div>
        </div>
      )}
    </div>
  );
};

Collapse.propTypes = {
  collapsedLabel: PropTypes.string,
  expandedLabel: PropTypes.string,
  text: PropTypes.string,
};

Collapse.defaultProps = {
  collapsedLabel: "Развернуть",
  expandedLabel: "Свернуть",
  text: "Sapmle text",
};

export default Collapse;
