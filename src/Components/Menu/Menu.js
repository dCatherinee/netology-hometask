import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <NavLink to="/" className="menu__item">
        Главная
      </NavLink>
      <NavLink to="/drift" className="menu__item">
        Дрифт-такси
      </NavLink>
      <NavLink to="/timeattack" className="menu__item">
        Time Attack
      </NavLink>
      <NavLink to="/forza" className="menu__item">
        Forza Karting
      </NavLink>
    </div>
  );
};

export default Menu;
