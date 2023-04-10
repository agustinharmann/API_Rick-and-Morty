import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Card = ({ results }) => {

  const { id, image, name } = results;

  return (
    <Link to='/single-character' state={{ id }} className='card'>
      <div className='container-img--card'>
        <img className='img--card' src={image} alt={name} />
      </div>
      <div className='container-info--card'>
        <p className='content-info--card'>
          {name}
        </p>
        <p className='content-info--card'>{results.status}</p>
        <p className='content-info--card'>{results.species}</p>
        <p className='content-info--card'>{results.gender}</p>
        {/* MOMENTANEO CAMIO CONTANER A AUTO PARA LEER TODAS LAS PROPIEDADES */}
        {/* <p className='content-info--card'>{results.gender}</p>
        <p className='content-info--card'>{results.status}</p> */}
      </div>
    </Link>
  );
};

export { Card };
