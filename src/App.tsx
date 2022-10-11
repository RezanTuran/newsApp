import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'flag-icons/css/flag-icons.min.css';
import Categories from './components/categories';
import Languages from './components/languages/languages';
const App = () => {
  return (
    <div>
      <Categories />
      <Languages />
    </div>
  );
};

export default App;
