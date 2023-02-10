import React from "react";
import Menu from "./ Menu";

// строка поиска
const Search = () => {
  return (
    <div>
      <div>LOGO</div>
      <div>
        <Menu />
        <div>
          <input />
          <button>найти</button>
        </div>
        <div>текст под поиском</div>
      </div>
    </div>
  );
};

export default Search;
