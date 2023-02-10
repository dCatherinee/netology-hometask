import React from "react";

// компонет швейцарский нож, настраиваемый
const Information = (props) => {
  if (props.type === "погода") {
    return (
      <div>
        <a href="">{props.title}</a>
        <div>
          <img src="" />
          <p>{props.tempMorning}</p>
          <div>
            <p>Утром {props.tempMorning}</p>
            <p>днём {props.tempDay}</p>
          </div>
        </div>
      </div>
    );
  } else if (props.type === "карта") {
    return (
      <div>
        <a href={props.link}>{props.title}</a>
        <p>{props.text}</p>
      </div>
    );
  } else if (props.type === "эфир") {
    return (
      <div>
        <a href={props.link}>{props.title}</a>
        <ul>
          {props.list.map((item) => {
            <li>
              <img src={item.img} />
              <a href={item.link}>{item.pic}</a>
              <p>{item.channel}</p>
            </li>;
          })}
        </ul>
      </div>
    );
  } else if (props.type === "телепрограмма") {
    <div>
      <div>
        <a href={props.link}>{props.title}</a>
        <img src={props.icon} />
      </div>
      <ul>
        {props.list.map((item) => {
          <li>
            <p>{item.time}</p>
            <a href={item.link}>{item.pic}</a>
            <p>{item.channel}</p>
          </li>;
        })}
      </ul>
    </div>;
  } else if (props.type === "посещаемое") {
    <div>
      <a href={props.link}>{props.title}</a>
      <ul>
        {props.list.map((item) => {
          <li>
            <a href={item.link}>{item.text}</a>
          </li>;
        })}
      </ul>
    </div>;
  }
};

export default Information;

// отображает погоду, телепрограмму, эфир и т.д.
// получает через  props заголовок, тип (он будет указывать какой формат содержимого, от него зависит какие параметры еще будут)
// компонент по типу будет определять, что вернуть
