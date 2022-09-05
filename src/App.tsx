import React, { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    Axios.get(
      `https://newsapi.org/v2/top-headlines?country=se&category=sport&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    )
      .then((Response: any) => {
        setNews(Response.data.articles);
        console.table(Response.data.articles);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      {news.map((news: any, index: any) => (
        <div
          key={index}
          style={{
            width: '90%',
            border: '2px solid black',
            margin: '10px',
            padding: '10px',
            backgroundColor: 'tomato',
          }}
        >
          <h4>{news.title}</h4>
          <p>{news.description}</p>
          <img src={news.urlToImage} alt="ss" style={{ width: '30%' }} />
          <h4>{news.author}</h4>
          <p>{news.publishedAt}</p>
          <p>{news.content}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
