import React from 'react';
import './styles.css';

const Card = ({ results }) => {
  return (
    <div>
      <div className='card'>
        <div className="container_img--card">
          <img className='img--card' src={results.image} alt="" />
        </div>
        <div className="container_basic-info--card">
          <p className='info__card'>{results.name}</p>
        </div>
      </div>
    </div>
  );
};

export { Card };
