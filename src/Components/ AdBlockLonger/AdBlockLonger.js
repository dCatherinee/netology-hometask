import React from "react";

// рекламный блок под поиском
const AdBlockLonger = (props) => {
  return (
    <div>
      <a href={props.link}>
        <img src={props.img} />
      </a>
    </div>
  );
};

export default AdBlockLonger;

// принимает в себя ссылку, картинку через props
