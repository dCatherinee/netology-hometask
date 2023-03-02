import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";
import getData from "../../api";

const Details = ({ info }) => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [person] = info;

  useEffect(() => {
    setIsLoading(true);
    getData(
      "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/" +
        person.id +
        ".json"
    )
      .then((data) => {
        setItem(data);
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
  }, [person.id]);

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else {
    return (
      <ListGroup key={item.id}>
        <ListGroup.Item>
          <img className="details__photo" src={item.avatar} alt="person" />
        </ListGroup.Item>
        <ListGroup.Item>{item.name}</ListGroup.Item>
        <ListGroup.Item>City: {item.details.city}</ListGroup.Item>
        <ListGroup.Item>Company: {item.details.company}</ListGroup.Item>
        <ListGroup.Item>Position: {item.details.position}</ListGroup.Item>
      </ListGroup>
    );
  }
};

Details.propTypes = {
  info: PropTypes.array,
};

export default Details;
