import React, { useContext } from 'react';
import { UserContext } from '../../useContext/useContext';
import { IoMdClose } from 'react-icons/io';
import './styles.css';

const FiltersActives = () => {

  const { status, specie, gender, setStatus, setSpecie, setGender, onCleanFilters } = useContext(UserContext);

  return (
    <div className='filters-actives'>
      <div className='empty_space--filters-actives'></div>
      <div className='container-selected--filters-actives'>
        {(status) && (<button className='selected--filters-actives'
          onClick={() => setStatus('')}
        >
          Status: {status}
        </button>)}
        {(specie) && (<button className='selected--filters-actives'
          onClick={() => setSpecie('')}
        >
          Specie: {specie}
        </button>)}
        {(gender) && (<button className='selected--filters-actives'
          onClick={() => setGender('')}
        >
          Gender: {gender}
        </button>)}
      </div>
      <div className='container-btn-clean--filters-actives'>
        <button className='btn-clean--filters-actives'
          onClick={onCleanFilters}
        >
          <IoMdClose className='icon-clean-selected--filters-actives' />
        </button>
      </div>
    </div>
  );
};

export { FiltersActives };
