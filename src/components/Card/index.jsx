import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Card = ({ results }) => {

  const { id, image, name } = results;

  return (
    <Link to='/single-character' state={{ id }} className='card'>
      <div className='container-image--card'>
        <img className='image--card' src={image} alt={name} />
      </div>
      <div className='container-info--card'>
        <p className='content-info--card'>
          {name}
        </p>
      </div>
    </Link>
  );
};

export { Card };
