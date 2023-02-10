import React from "react";

// курс валюты
const NewsRate = (props) => {
  return (
    <div>
      <ul>
        {props.rates.map((rate) => {
          <li>
            {rate.currency + " " + rate.course}
            <span>{rate.changes}</span>
          </li>
        })}
      </ul>
    </div>
  );
};

export default NewsRate;

// через props будем передавать нынешний курс валют и выводить его
