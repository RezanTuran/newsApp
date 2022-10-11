import React from 'react';
import data from './data';
import cookies from 'js-cookie';

const Categories = () => {
  const handleCick = (id: any) => {
    const currentCategory = data.find((category) => category.id === id);
    cookies.set('cat', currentCategory?.category || '');
    cookies.set('id', currentCategory?.id || '');
  };
  const categoryId = cookies.get('id');

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-brand">Global News</button>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {data.map(({ category, id }) => (
            <li
              key={id}
              className="nav-item active"
              onClick={() => window.location.reload()}
            >
              <button
                onClick={() => handleCick(id)}
                disabled={id === categoryId}
                style={{
                  border: 'none',
                  backgroundColor: '#f8f9fa',
                  textTransform: 'capitalize',
                }}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Categories;
