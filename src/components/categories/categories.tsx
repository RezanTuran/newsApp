import React from 'react';
import data from './data';
import cookies from 'js-cookie';
import CategoryIcon from '../../Icons/CategoryIcon';

const Categories = () => {
  const handleCick = (id: any) => {
    const currentCategory = data.find((category) => category.id === id);
    cookies.set('cat', currentCategory?.category || '');
    cookies.set('id', currentCategory?.id || '');
  };
  const categoryId = cookies.get('id');

  return (
    <div className="dropdown">
      <button
        className="btn btn-link dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <CategoryIcon />
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        {data.map(({ category, id }) => (
          <li
            key={id}
            className="nav-item active"
            onClick={() => window.location.reload()}
          >
            <button
              onClick={() => handleCick(id)}
              disabled={id === categoryId}
              className="dropdown-item"
              style={{ textTransform: 'capitalize' }}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
