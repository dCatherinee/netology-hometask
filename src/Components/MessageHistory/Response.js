import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Response = (props) => {
  return (
    <li className="clearfix no-dot">
      <div className="message-data align-right">
        <span className="message-data-time">{props.time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{props.from.name}</span>
        <FontAwesomeIcon icon={faCircle} className="me" />
      </div>
      <div className="message other-message float-right">{props.text}</div>
    </li>
  );
};

Response.propTypes = {
  from: PropTypes.object,
  time: PropTypes.string,
  text: PropTypes.string,
};

export default Response;
