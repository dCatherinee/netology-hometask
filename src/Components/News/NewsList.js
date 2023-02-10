import React from "react";

// список новостей
const NewsList = (props) => {
  return (
    <div>
      <ul>
        {props.news.map((item) => {
          <li>
            <img src={item.img} />
            <a href={item.link}>{item.title}</a>
          </li>
        })}
      </ul>
    </div>
  );
};

export default NewsList;

// через props будем принимать список новостей (массив), где каждая запись это объект с параметрами: иконка, текст, ссылка
