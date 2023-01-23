import React from "react";
import PropTypes from "prop-types";
import ShopItem from "./ShopItem";

const ListView = (props) => {
  return (
    <div className="list-view">
      {props.items.map((item) => (
        <ShopItem
          name={item.name}
          price={item.price}
          color={item.color}
          img={item.img}
        />
      ))}
    </div>
  );
};

ListView.propTypes = {
  items: PropTypes.array,
};

export default ListView;
