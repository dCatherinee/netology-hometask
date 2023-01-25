import React from "react";
import PropTypes from "prop-types";
import Response from "./Response";
import Message from "./Message";
import Typing from "./Typing";

const MessageHistory = (props) => {
  const getlistMessages = (messages) => {
    return messages.map((message) => {
      if (message.type === "response") {
        return (
          <Response
            key={message.id}
            from={message.from}
            time={message.time}
            text={message.text}
          />
        );
      } else if (message.type === "message") {
        return (
          <Message
            key={message.id}
            from={message.from}
            time={message.time}
            text={message.text}
          />
        );
      } else if (message.type === "typing") {
        return (
          <Typing key={message.id} from={message.from} time={message.time} />
        );
      } else {
        return <></>;
      }
    });
  };

  if (props.list === undefined || props.list === []) {
    return <></>;
  } else {
    return <ul>{getlistMessages(props.list)}</ul>;
  }
};

MessageHistory.propTypes = {
  list: PropTypes.array,
};

MessageHistory.defaultProps = {
  list: [],
};

export default MessageHistory;
