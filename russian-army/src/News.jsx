import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from "./NavBar";

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/everything', {
        params: {
          q: 'Russia',
          apiKey: '2b9b8be151a04a4d960312ad2eb86088',
        },
      });
      setNews(response.data.articles);
      setLoading(false);
    } catch (err) {
      setError('Došlo je do greške prilikom učitavanja vesti');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchNews();
    }, 1800000);

    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return <p className="news-loading">Loading...</p>;
  }

  if (error) {
    return <p className="news-error">{error}</p>;
  }

  return (
    <>
      <div className="news-section">
        <NavBar />
        <div className="news-container">
          <h2 className="news-title">Russia News</h2>
          <ul className="news-list">
            {news.map((article, index) => (
              <li key={index} className="news-item">
                {article.urlToImage && (
                  <img src={article.urlToImage} alt={article.title} className="news-image" />
                )}
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="news-link">
                  {article.title}
                </a>
                <p className="news-description">{article.description}</p>
              </li>
            ))}
          </ul>
        </div>  </div></>
  );
};

export default NewsSection;
