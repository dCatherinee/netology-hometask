import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Typing = (props) => {
  return (
    <li className="no-dot">
      <div className="message-data">
        <span className="message-data-name">
          <FontAwesomeIcon icon={faCircle} className="online" />
          {props.from.name}
        </span>
        <span className="message-data-time">{props.time}</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faCircle} className="circle-green-100" />
        <FontAwesomeIcon icon={faCircle} className="circle-green-70" />
        <FontAwesomeIcon icon={faCircle} className="circle-green-50" />
      </div>
    </li>
  );
};

Typing.propTypes = {
  from: PropTypes.object,
  time: PropTypes.string,
};

export default Typing;
