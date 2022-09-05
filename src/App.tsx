import React, { useEffect } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  useEffect(() => {
    Axios.get(
      `https://newsapi.org/v2/top-headlines?country=se&category=sport&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    )
      .then((Response: any) => {
        console.table(Response.data.articles);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1>App</h1>
    </div>
  );
}

export default App;
