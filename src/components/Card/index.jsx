import React from 'react';
import './styles.css';

const Card = ({ results }) => {
  return (
    <div className='card'>
      {/* {console.log(results.id)} */}
      <div className="container_img--card">
        <img className='img--card' src={results.image} alt={results.name} />
      </div>
      <div className="container_basic-info--card">
        <p className='info__card'>{results.name}</p>
        <p className='info__card'>{results.status}</p>
        <p className='info__card'>{results.species}</p>
        <p className='info__card'>{results.gender}</p>
        {/* MOMENTANEO CAMIO CONTANER A AUTO PARA LEER TODAS LAS PROPIEDADES */}
        {/* <p className='info__card'>{results.gender}</p>
        <p className='info__card'>{results.status}</p> */}
      </div>
    </div>
  );
};

export { Card };
