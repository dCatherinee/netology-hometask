import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="box-width">
      <div className="header__wrap">
        <Link to="/posts/new" className="btn">
          Создать
        </Link>
      </div>
    </div>
  );
};

export default Header;
