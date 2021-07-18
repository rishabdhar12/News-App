import React from "react";

import NewsComponent from "../NewsComponent/NewsComponent";
import "./Content.css";

const Content = ({ newsArray }) => {
    return (
        <div>
    {newsArray.map((newsItem, index) => {
      return (
        <div className="component">
          <NewsComponent author={newsItem.author} />
        </div>
        )
    })}
    </div>
    );
};

export default Content;