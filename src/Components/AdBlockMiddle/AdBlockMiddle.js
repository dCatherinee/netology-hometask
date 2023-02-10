import React from "react";

// компонент рекламы около новостей
const AdBlockMiddle = (props) => {
  return (
    <div>
      <img src={props.img} />
      <a href={props.link}>{props.title}</a>
      <p>{props.text}</p>
    </div>
  );
};

export default AdBlockMiddle;

// принимает в себя через props картинку, заголовок, текс и ссылку
