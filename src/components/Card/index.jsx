import React from 'react';
import './styles.css';

const Card = ({ results }) => {
  return (
    <div className='card'>
      {/* {console.log(results.id)} */}
      <div className="container_img--card">
        <img className='img--card' src={results.image} alt="" />
      </div>
      <div className="container_basic-info--card">
        <p className='info__card'>{results.name}</p>
      </div>
    </div>
  );
};

export { Card };
