import React from "react";
import Watch from "./Watch";
import PropTypes from "prop-types";

const Watchs = ({ watchs, onRemove }) => {
  return (
    <div className="watchs-container">
      {watchs.map((zone) => (
        <Watch key={zone.id} onRemove={onRemove} zone={zone} />
      ))}
    </div>
  );
};

Watch.propTypes = {
  watchs: PropTypes.array,
  onRemove: PropTypes.func,
};

export default Watchs;
