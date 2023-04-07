import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Card = ({ results }) => {

  const { id, image, name } = results;

  return (
    <Link to='/singleCharacter' state={{ id }} className='card'>
      <div className='container_img--card'>
        <img className='img--card' src={image} alt={name} />
      </div>
      <div className='container_basic-info--card'>
        <p className='info__card'>
          {name}
        </p>
        <p className='info__card'>{results.status}</p>
        <p className='info__card'>{results.species}</p>
        <p className='info__card'>{results.gender}</p>
        {/* MOMENTANEO CAMIO CONTANER A AUTO PARA LEER TODAS LAS PROPIEDADES */}
        {/* <p className='info__card'>{results.gender}</p>
        <p className='info__card'>{results.status}</p> */}
      </div>
    </Link>
  );
};

export { Card };
