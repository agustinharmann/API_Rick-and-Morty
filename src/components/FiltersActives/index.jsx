import React, { useContext } from 'react';
import { UserContext } from '../../useContext/useContext';
import './styles.css';

const FiltersActives = () => {

  const { status, specie, gender, setStatus, setSpecie, setGender, onCleanFilters } = useContext(UserContext);


  return (
    <div className='content_filters--filters'>
      <div className='disable-filters_actives--filters'></div>
      <div className='container-filters_actives--filters'>
        {status && <button className='btn-filters_actives--filters' onClick={() => setStatus('')}>Status: {status}</button>}
        {specie && <button className='btn-filters_actives--filters' onClick={() => setSpecie('')}>Specie: {specie}</button>}
        {gender && <button className='btn-filters_actives--filters' onClick={() => setGender('')}>Gender: {gender}</button>}
      </div>
      <div className='container-btn-clean-filters_actives--filters'>
        <button className='btn-clean-filters_actives--filters' onClick={onCleanFilters}> X </button>
      </div>
    </div>
  );
};

export { FiltersActives };
