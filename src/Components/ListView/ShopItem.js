import React from "react";
import PropTypes from "prop-types";

const ShopItem = (props) => {
  return (
    <div className="product-list">
      <img className="product-list__img" src={props.img} alt="sneakers" />
      <h3 className="product__title">{props.name}</h3>
      <p className="product_text">{props.color}</p>
      <p className="product__price">${props.price}</p>
      <button className="product__btn">ADD TO CART</button>
    </div>
  );
};

ShopItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  color: PropTypes.string,
  img: PropTypes.string,
};

export default ShopItem;
