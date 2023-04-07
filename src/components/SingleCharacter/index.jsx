import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../useContext/useContext';
import { Link, useLocation } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import './styles.css';

const SingleCharacter = () => {

  let { state } = useLocation();

  const { getSingleCharacter, singleCharacter, loading } = useContext(UserContext);

  console.log(singleCharacter);

  useEffect(() => {
    getSingleCharacter(state.id)
  }, [getSingleCharacter, state.id])

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className='single-character'>
      <div className='header--single-character'>
        <Link to='/'>
          <BsChevronLeft className='icon-back_home--single-character' />
        </Link>
      </div>
      <div className='container-details--single-character'>
        <div className='cotainer-img--single-character'>
          <img className='img--single-character' src={singleCharacter.image} alt={singleCharacter.name} />
        </div>
        <div className='info-single-characters'>
          {singleCharacter.name && <p className='name-info--single-character'>{singleCharacter.name}</p>}
          {singleCharacter.status && <p className='txt-info--single-character'>Status: {singleCharacter.status}</p>}
          {singleCharacter.species && <p className='txt-info--single-character'>Species: {singleCharacter.species}</p>}
          {/* aca validacion de subespecie */}
          {singleCharacter.type && <p className='txt-info--single-character'>Type of {singleCharacter.species}: {singleCharacter.type}</p>}
          {singleCharacter.gender && <p className='txt-info--single-character'>Gender: {singleCharacter.gender}</p>}
          {singleCharacter.origin && <p className='txt-info--single-character'>Origin: {singleCharacter.origin.name}</p>}
          {singleCharacter.location && <p className='txt-info--single-character'>Location: {singleCharacter.location.name}</p>}
        </div>
      </div>
    </div>
  );
};

export { SingleCharacter };
