import React, { useState } from "react";
import AdBlockMiddle from "../AdBlockMiddle/AdBlockMiddle";
import { NewsList } from "./NewsList";
import NewsRate from "./NewsRate";
import NewsTitles from "./NewsTitles";

// Новости
const News = (props) => {
  const [news, setNews] = useState([]);
  const [rates, setRates] = useState([]);
  const [titles, setTitles] = useState([]);
  const [currDate, setCurrDate] = useState("");

  return (
    <div>
      <div>
        <NewsList news={news} />
        <NewsRate rates={rates} />
        <NewsTitles titles={titles} currDate={currDate} />
      </div>
      <AdBlockMiddle
        img={props.adBlockM.img}
        link={props.adBlockM.link}
        title={props.adBlockM.title}
        text={props.adBlockM.text}
      />
    </div>
  );
};

export default News;

// и вся логика, отсюда будем передавать все props-ы
