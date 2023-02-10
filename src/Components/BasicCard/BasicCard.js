import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

const BasicCard = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      {props.img && <Card.Img variant="top" src={props.img} />}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary">{props.textButton}</Button>
      </Card.Body>
    </Card>
  );
};

BasicCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  textButton: PropTypes.string,
  img: PropTypes.string,
};

export default BasicCard;
