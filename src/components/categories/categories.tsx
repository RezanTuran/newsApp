import React from 'react';
import data from './data';
import cookies from 'js-cookie';

const Categories = () => {
  const handleCick = (id: any) => {
    const currentCategory = data.find((category) => category.id === id);
    cookies.set('cat', currentCategory?.category || '');
  };

  return (
    <div>
      <ul className="navbar-nav mr-auto">
        {data.map(({ category, id }) => (
          <li
            className="nav-item"
            key={id}
            onClick={() => window.location.reload()}
          >
            <button onClick={() => handleCick(id)} className='class="nav-link'>
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
