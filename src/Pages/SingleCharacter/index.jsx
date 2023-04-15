import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../useContext/useContext';
import { Link, useLocation } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import './styles.css';

const SingleCharacter = () => {

  let { state } = useLocation();

  const { getSingleCharacter, singleCharacter, loading } = useContext(UserContext);

  const { name, image, status, species, type, gender, origin, location } = singleCharacter;

  useEffect(() => {
    getSingleCharacter(state.id);
  }, [getSingleCharacter, state.id]);

  if (loading) {
    return <div>Cargando...</div>;
  };

  return (
    <article className='single-character'>
      <header className='header--single-character'>
        <Link to='/'>
          <BsChevronLeft className='icon-back_home--single-character' />
        </Link>
      </header>
      <section className='container-details--single-character'>
        <div className='cotainer-image--single-character'>
          <img className='image--single-character' src={image} alt={name} />
        </div>
        <div className='info-single-characters'>
          {(name) && (<p className='name-info--single-character'>{name}</p>)}
          {(status) && (<p className='txt-info--single-character'>Status: {status}</p>)}
          {(species) && (<p className='txt-info--single-character'>Species: {species}</p>)}
          {(type) && (<p className='txt-info--single-character'>Type: {type}</p>)}
          {(gender) && (<p className='txt-info--single-character'>Gender: {gender}</p>)}
          {(origin) && (<p className='txt-info--single-character'>Origin: {origin.name}</p>)}
          {(location) && (<p className='txt-info--single-character'>Location: {location.name}</p>)}
        </div>
      </section>
    </article>
  );
};

export { SingleCharacter };
