import React from "react";
import PropTypes from "prop-types";

const ShopCard = (props) => {
  return (
    <div className="product-card">
      <h3 className="product__title">{props.name}</h3>
      <p className="product__text">{props.color}</p>
      <img className="product-card__img" src={props.img} alt="sneakers" />
      <div className="product-card__wrapper">
        <p className="product__price">${props.price}</p>
        <button className="product__btn">ADD TO CART</button>
      </div>
    </div>
  );
};

ShopCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  color: PropTypes.string,
  img: PropTypes.string,
};

export default ShopCard;
