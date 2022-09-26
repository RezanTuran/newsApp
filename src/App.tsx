import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'flag-icons/css/flag-icons.min.css';
import Categories from './components/categories';
import Languages from './components/languages';

const App = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: 'teal',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <div
          style={{
            backgroundColor: 'springgreen',
            width: '100%',
          }}
        >
          <Categories />
          <Languages />
        </div>
      </div>
    </div>
  );
};

export default App;
