import React from 'react';
import './newsitem.css';

const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <div className="news-item">
      {urlToImage && <img className="news-img" src={urlToImage} alt={title} />}
      <h3>
        <a href={url} target="_blank" rel="noreferrer">
          {title}
        </a>
      </h3>
      <p>{description}</p>
    </div>
  );
};

export default NewsItem;
