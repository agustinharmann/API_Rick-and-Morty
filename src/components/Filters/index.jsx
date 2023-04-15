import React, { useContext } from 'react';
import { UserContext } from '../../useContext/useContext';
import { FiltersActives } from '../FiltersActives';
import { BsChevronDown } from 'react-icons/bs';
import './styles.css';

const Filters = () => {

  const { filtersOpen, windowWidth, status, specie, gender, setStatus, setSpecie, setGender, setApi, characterStatus, characterSpecie, characterGender, dropdownState, toggleDropdown, URL_API } = useContext(UserContext);

  return (
    <section className='filters'>
      <ul className='list--filters'>
        <li className='element--filter'>
          <div className='container-section--filters'>
            <p className='title--filters'>
              Filters
            </p>
          </div>
        </li>
        <li className='element--filter'
          onClick={() => toggleDropdown('dropdown1')}
        >
          <div className='container-section--filters'>
            <div className='content-section--filter'>
              <p className='name--filters'>
                Status
              </p>
              <button className='btn--filters'>
                <BsChevronDown className='icon-btn--filters' />
              </button>
            </div>
          </div>
          {(dropdownState.dropdown1) ? (<ul className='dropdown--filters'>
            {
              characterStatus.map((s, i) =>
                <li className='element--dropdown'
                  key={i}
                  onClick={() => {
                    setApi(URL_API);
                    setStatus(`${s}`);
                  }}> {s} </li>)
            }
          </ul>) : (null)}
        </li>
        <li className='element--filter'
          onClick={() => toggleDropdown('dropdown2')}
        >
          <div className='container-section--filters'>
            <div className='content-section--filter'>
              <p className='name--filters'>
                Species
              </p>
              <button className='btn--filters'>
                <BsChevronDown className='icon-btn--filters' />
              </button>
            </div>
          </div>
          {(dropdownState.dropdown2) ? (<ul className='dropdown--filters'>
            {
              characterSpecie.map((s, i) =>
                <li className='element--dropdown'
                  key={i}
                  onClick={() => {
                    setApi(URL_API);
                    setSpecie(`${s}`);
                  }}> {s} </li>)
            }
          </ul>) : (null)}
        </li>
        <li className='element--filter'
          onClick={() => toggleDropdown('dropdown3')}
        >
          <div className='container-section--filters'>
            <div className='content-section--filter'>
              <p className='name--filters'>
                Gender
              </p>
              <button className='btn--filters'>
                <BsChevronDown className='icon-btn--filters' />
              </button>
            </div>
          </div>
          {(dropdownState.dropdown3) ? (<ul className='dropdown--filters'>
            {
              characterGender.map((s, i) =>
                <li className='element--dropdown'
                  key={i}
                  onClick={() => {
                    setApi(URL_API);
                    setGender(`${s}`);
                  }}> {s} </li>)
            }
          </ul>) : (null)}
        </li>
      </ul>
      {(status.length || specie.length || gender.length) && (filtersOpen && windowWidth < 768) ?
        <FiltersActives />
        : null}
    </section>
  );
};

export { Filters };
