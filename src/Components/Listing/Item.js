import React from "react";
import PropTypes from "prop-types";

const Item = (props) => {
  const cropTitle = (title) => {
    if (title.length > 50) {
      return title.slice(0, 50) + "…";
    } else {
      return title;
    }
  };

  const getLevel = (num) => {
    if (num <= 10) {
      return "level-low";
    } else if (num <= 20) {
      return "level-medium";
    } else {
      return "level-high";
    }
  };

  const getCurrentCode = (code) => {
    if (code === "USD") {
      return "$";
    } else if (code === "EUR") {
      return "€";
    } else {
      return code;
    }
  };

  return (
    <div className="item">
      <div className="item-image">
        <a href={props.url}>
          <img src={props.image} alt={props.title} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{cropTitle(props.title)}</p>
        <p className="item-price">
          {getCurrentCode(props.currency_code) === "$" ||
          getCurrentCode(props.currency_code) === "€"
            ? getCurrentCode(props.currency_code) + props.price
            : props.price + " " + getCurrentCode(props.currency_code)}
        </p>
        <p className={"item-quantity " + getLevel(props.quantity)}>
          {props.quantity} left
        </p>
      </div>
    </div>
  );
};

Item.propTypes = {
  url: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  currency_code: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.number,
};

Item.defaultProps = {
  url: "https://www.etsy.com/listing/292754135/woodland-fairy",
  image:
    "https://img1.etsystatic.com/156/0/12814579/il_570xN.1173240751_50hv.jpg",
  title: "Woodland Fairy",
  currency_code: "$",
  price: "3.99",
  quantity: 12,
};

export default Item;
