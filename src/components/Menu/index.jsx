import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../utils/useContext';
// import './styles.mobile.css'
import './styles.css';

const Menu = () => {

  const { status, specie, gender, setStatus, setSpecie, setGenre } = useContext(UserContext);

  const characterStatus = ['Alive', 'Dead', 'Unknow'];

  const characterSpecie = ['Human', 'Alien', 'Humanoid', 'Poopybutthole', 'Mythological', 'Unknown', 'Animal', 'Disease', 'Robot', 'Cronenberg', 'Planet'];

  const characterGender = ['Female', 'Male', 'Genderless', 'Unknow'];

  const onCleanFilters = () => {
    setStatus('');
    setSpecie('');
    setGenre('');
  };

  return (
    <div className='menu'>
      <ul className='list_search--dropdown'>
        <li className='element_search--dropdown'>
          <p className='title--dropdown'>Filters</p>
        </li>
        <li className='element_search--dropdown'>
          Status
          <ul className='dropdown'>
            {
              characterStatus.map((s, i) => <li key={i} className='element--dropdown' onClick={() => setStatus(`${s}`)}> {s} </li>)
            }
          </ul>
        </li>
        <li className='element_search--dropdown'>
          Species
          <ul className='dropdown'>
            {
              characterSpecie.map((s, i) => <li key={i} className='element--dropdown' onClick={() => setSpecie(`${s}`)}> {s} </li>)
            }
          </ul>
        </li>
        <li className='element_search--dropdown'>
          Gender
          <ul className='dropdown'>
            {
              characterGender.map((s, i) => <li key={i} className='element--dropdown' onClick={() => setGenre(`${s}`)}> {s} </li>)
            }
          </ul>
        </li>
      </ul>
      {
        (status.length || specie.length || gender.length) ? (<div className='content_filters--filters'>
          <div className='disable-filters_actives--filters'></div>
          <div className='container-filters_actives--filters'>
            {status && <button className='btn-filters_actives--filters' onClick={() => setStatus('')}>{status}</button>}
            {specie && <button className='btn-filters_actives--filters' onClick={() => setSpecie('')}>{specie}</button>}
            {gender && <button className='btn-filters_actives--filters' onClick={() => setGenre('')}>{gender}</button>}
          </div>
          <div className='container-btn-clean-filters_actives--filters'>
            <button className='btn-clean-filters_actives--filters' onClick={onCleanFilters}> X </button>
          </div>
        </div>) : null
      }
    </div>
  );
};

export { Menu };
