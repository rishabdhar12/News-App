import React from "react";

import NewsComponent from "../NewsComponent/NewsComponent";
import "./Content.css";

const Content = ({ newsArray }) => {
    return (
        <div className="component">
    {newsArray.map((newsItem, index) => {
      return (
        <div>
          <NewsComponent author={newsItem.author} />
        </div>
        )
    })}
    </div>
    );
};

export default Content;