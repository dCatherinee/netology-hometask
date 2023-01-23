import React, { useState } from "react";
import { products } from "./data";
import CardsView from "../CardsView/CardsView";
import IconSwitch from "../IconSwitch/IconSwitch";
import ListView from "../ListView/ListView";

const Store = (props) => {
  const [icon, setIcon] = useState("view_list");

  const handleClick = () => {
    if (icon === "view_list") {
      setIcon("view_module");
    } else {
      setIcon("view_list");
    }
  };

  return (
    <div className="store">
      <IconSwitch icon={icon} onSwitch={handleClick} />
      {icon === "view_list" ? (
        <CardsView cards={products} />
      ) : (
        <ListView items={products} />
      )}
    </div>
  );
};

export default Store;
