import { Container } from "@material-ui/core";
import React from "react";
import "./NewsContent.css";
import NewsCard from "../NewsCard/NewsCard";

const NewsContent = (props) => {
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="downloadMessage">
          <span className="downloadText">
            For the best experience use inshorts oour smartphone
          </span>
          <img
            alt="play store"
            height="30px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/640px-Google_Play_Store_badge_EN.svg.png"
          />
          <img
            alt="app store"
            height="30px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
          />
        </div>

        {props.newsArray.map((newsitem) => {
          return <NewsCard newsItem={newsitem} key={newsitem.title} />;
        })}
        {props.loadmore <= props.newsResults && (
          <>
            <hr />
            <button
              className="loadMore"
              onClick={() => {
                props.setLoadmore(props.loadmore + 20);
              }}
            >
              Load More
            </button>
          </>
        )}
      </div>
    </Container>
  );
};

export default NewsContent;
