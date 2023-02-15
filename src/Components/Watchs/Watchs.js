import React from "react";
import Watch from "./Watch";
import PropTypes from "prop-types";

const Watchs = ({ watchs, currDate, onRemove }) => {
  return (
    <div className="watchs-container">
      {watchs.map((zone) => (
        <Watch
          key={zone.id}
          onRemove={onRemove}
          zone={zone}
          currDate={currDate}
        />
      ))}
    </div>
  );
};

Watch.propTypes = {};

export default Watchs;
