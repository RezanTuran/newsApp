import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'flag-icons/css/flag-icons.min.css';
import Languages from './components/languages';
import Header from './components/header';

const App = () => {
  return (
    <div>
      <Header />
      <Languages />
    </div>
  );
};

export default App;
