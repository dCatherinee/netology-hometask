import React from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";

const List = ({ list, handleClick, active }) => {
  return (
    <ListGroup className="list">
      {list.map((item) => (
        <ListGroup.Item
          action
          active={active === item.id ? true : false}
          key={item.id}
          onClick={() => handleClick(item.id)}
        >
          {item.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

List.propTypes = {
  list: PropTypes.array,
  handleClick: PropTypes.func,
  active: PropTypes.number,
};

export default List;
