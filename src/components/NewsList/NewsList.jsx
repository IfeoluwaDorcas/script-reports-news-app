import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from '../NewsItem/NewsItem';
import Header from '../Header/header';
import Home from '../Home/home';
import Categories from '../Categories/categories';
import './newslist.css';

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything?q=nigeria&language=en&apiKey=47f3f57f2eb34b03830f9079be3446b3');
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching the news articles:', error);
      }
    };
    getArticles();
  }, []);

  const filteredArticles = articles.filter(
    article =>
      (article.title && article.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (article.description && article.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {searchQuery === '' && <Home />}
      {searchQuery === '' && <Categories />}
      <h2 className='heading'>Trending Today</h2>
      <div id="newslist" className="news-grid">
        {filteredArticles.map((article, index) => (
          <NewsItem
            key={index}
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
