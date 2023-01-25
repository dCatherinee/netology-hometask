import React from "react";
import PropTypes from "prop-types";
import Star from "./Star";

const Stars = (props) => {
  const getStars = (stars) => {
    let content = [];
    for (let i = 0; i < stars; i++) {
      content.push(<Star key={i} />);
    }
    return content;
  };

  if (props.count <= 0 || props.count > 5 || typeof props.count !== "number") {
    return <></>;
  } else {
    return (
      <ul className="card-body-stars u-clearfix">{getStars(props.count)}</ul>
    );
  }
};

Stars.propTypes = {
  count: PropTypes.number,
};

Stars.defaultProps = {
  count: 0,
};

export default Stars;
