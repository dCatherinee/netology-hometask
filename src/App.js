import React, { useState } from "react";
import "./App.css";

function withViews(Component, ComponentWrap, items) {
  return function (props) {
    return (
      <ComponentWrap>
        <Component {...items} />
      </ComponentWrap>
    );
  };
}

function New(props) {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">New!</span>
      {props.children}
    </div>
  );
}

function Popular(props) {
  return (
    <div className="wrap-item wrap-item-popular">
      <span className="label">Popular!</span>
      {props.children}
    </div>
  );
}

function Article(props) {
  return (
    <div className="item item-article">
      <h3>
        <a href="#">{props.title}</a>
      </h3>
      <p className="views">Прочтений: {props.views}</p>
    </div>
  );
}

function Video(props) {
  return (
    <div className="item item-video">
      <iframe
        src={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  );
}

function List(props) {
  return props.list.map((item, id) => {
    switch (item.type) {
      case "video":
        if (item.views > 1000) {
          let WithViews = withViews(Video, Popular, item);
          return <WithViews key={id} />;
        }
        if (item.views < 100) {
          let WithViews = withViews(Video, New, item);
          return <WithViews key={id} />;
        }
        return <Video key={id} {...item} />;

      case "article":
        if (item.views > 1000) {
          let WithViews = withViews(Article, Popular, item);
          return <WithViews key={id} />;
        }
        if (item.views < 100) {
          let WithViews = withViews(Article, New, item);
          return <WithViews key={id} />;
        }
        return <Article key={id} {...item} />;
    }
  });
}

export default function App() {
  const [list, setList] = useState([
    {
      type: "video",
      url: "https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0",
      views: 50,
    },
    {
      type: "video",
      url: "https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0",
      views: 12,
    },
    {
      type: "article",
      title: "Невероятные события в неизвестном поселке...",
      views: 175,
    },
    {
      type: "article",
      title: "Секретные данные были раскрыты!",
      views: 1532,
    },
    {
      type: "video",
      url: "https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0",
      views: 4253,
    },
    {
      type: "article",
      title: "Кот Бегемот обладает невероятной...",
      views: 12,
    },
  ]);

  return <List list={list} />;
}
