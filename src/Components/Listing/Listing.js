import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

const Listing = (props) => {
  return (
    <div className="item-list">
      {props.items.map((item) =>
        item.state === "active" ? (
          <Item
            key={item.listing_id}
            url={item.url}
            image={item.MainImage.url_570xN}
            title={item.title}
            currency_code={item.currency_code}
            price={item.price}
            quantity={item.quantity}
          />
        ) : (
          ""
        )
      )}
    </div>
  );
};

Listing.propTypes = {
  items: PropTypes.array,
};

Listing.defaultProps = {
  items: [],
};

export default Listing;
