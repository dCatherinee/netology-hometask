import React from "react";
import PropTypes from "prop-types";
import ShopCard from "./ShopCard";

const CardsView = (props) => {
  return (
    <div className="card-view">
      {props.cards.map((item) => (
        <ShopCard
          name={item.name}
          price={item.price}
          color={item.color}
          img={item.img}
        />
      ))}
    </div>
  );
};

CardsView.propTypes = {
  cards: PropTypes.array,
};

export default CardsView;
