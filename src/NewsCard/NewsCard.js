import React from "react";
import "./NewsCard.css";

const NewsCard = (props) => {
  const fulldate = new Date(props.newsItem.publishedAt); // Sat  Jan 09 2021  17:45:30  GMT+0530
  var date = fulldate.toString().split(" "); // ["Sat", "Jan", "09", "2021", "17:45:30", "GMT+0530"]
  const hour = parseInt(date[4].substring(0, 2)); //
  const time = hour > 12 ? true : false;
  //   console.log(props.newsItem);
  return (
    <div className="newscard">
      <img
        alt={props.newsItem.title}
        src={
          props.newsItem.urlToImage
            ? props.newsItem.urlToImage
            : "https://www.adgully.com/img/400/201804/inshorts-logo.jpg"
        }
        className="newsImage"
      />
      <div className="newsText">
        <div>
          <span className="title">{props.newsItem.title}</span>
          <br />
          <span className="author">
            <a href={props.newsItem.url} target="__blank">
              <b>short </b>
            </a>{" "}
            <span className="muted">
              {" "}
              by {props.newsItem.author
                ? props.newsItem.author
                : "unknown"} /{" "}
              {time
                ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                : `${hour}:${date[4].substring(3, 5)} am`}{" "}
              on {date[2]} {date[1]} {date[3]}, {date[0]}
            </span>
          </span>
        </div>
        <div className="lowerNewsText">
          <div className="description">{props.newsItem.description}</div>
          <span className="readmore">
            read more at{" "}
            <a href={props.newsItem.url} target="__blank" className="source">
              <b>{props.newsItem.source.name}</b>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
