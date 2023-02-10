import React from "react";

// Заголовки у компонента новости + дата
const NewsTitles = (props) => {
  return (
    <div>
      <ul>
        {props.titles.map((title) => {
          <li className={title.active ? "active" : ""}>{title.title}</li>;
        })}
      </ul>
      <div>{props.currDate}</div>
    </div>
  );
};

export default NewsTitles;

// через props будем принимать заголовки и дату
