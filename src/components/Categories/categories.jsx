import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './categories.css';

const categories = ['business', 'entertainment', 'health', 'science', 'sports', 'technology'];

const Categories = () => {
  const [articles, setArticles] = useState({});
  const apiKey = '47f3f57f2eb34b03830f9079be3446b3';

  useEffect(() => {
    const fetchArticles = async () => {
      const categoryArticles = {};
      for (const category of categories) {
        try {
            
          const response = await axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&language=en&apiKey=${apiKey}`);
          categoryArticles[category] = response.data.articles;
        } catch (error) {
          console.error(`Error fetching the ${category} news articles:`, error);
        }
      }
      setArticles(categoryArticles);
    };

    fetchArticles();
  }, []);

  return (
    <Carousel showThumbs={true} showStatus={false} infiniteLoop={true} useKeyboardArrows={true}>
      {categories.map(category => (
        <div key={category} className="carousel-category">
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          <div className="carousel-news-items">
            {articles[category]?.slice(0, 4).map((article, index) => (
              <div key={index} className="carousel-news-item">
                <h3><a href={article.url} target="_blank" rel="noreferrer">{article.title}</a></h3>
                {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
                <p>{article.description}</p>
            </div>
            ))}
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Categories;
