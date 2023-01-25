import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Message = (props) => {
  return (
    <li className="no-dot">
      <div className="message-data">
        <span className="message-data-name">
          <FontAwesomeIcon icon={faCircle} className="online" />{" "}
          {props.from.name}
        </span>
        <span className="message-data-time">{props.time}</span>
      </div>
      <div className="message my-message">{props.text}</div>
    </li>
  );
};

Message.propTypes = {
  from: PropTypes.object,
  time: PropTypes.string,
  text: PropTypes.string,
};

export default Message;
