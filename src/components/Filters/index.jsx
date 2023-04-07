import React, { useState, useContext } from 'react';
import { UserContext } from '../../useContext/useContext';
import { FiltersActives } from '../FiltersActives';
import { BsChevronDown } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io'
import './styles.css';

const Filters = () => {
  const { filtersOpen, windowWidth, status, specie, gender, setStatus, setSpecie, setGender, dropFilters, setApi } = useContext(UserContext);

  const characterStatus = ['Alive', 'Dead', 'Unknow'];

  const characterSpecie = ['Human', 'Alien', 'Humanoid', 'Poopybutthole', 'Mythological', 'Unknown', 'Animal', 'Disease', 'Robot', 'Cronenberg', 'Planet'];

  const characterGender = ['Female', 'Male', 'Genderless', 'Unknow'];

  const [menuState, setMenuState] = useState({
    menu1: false,
    menu2: false,
    menu3: false
  });

  const toggleMenu = (menuName) => {
    setMenuState(prevState => ({
      menu1: menuName === 'menu1' ? !prevState.menu1 : false,
      menu2: menuName === 'menu2' ? !prevState.menu2 : false,
      menu3: menuName === 'menu3' ? !prevState.menu3 : false
    }));
  };

  return (
    <div className='filters'>
      <ul className='list--filters'>
        <li className='element--filter'>
          <div className='ahhhh'>
            {(filtersOpen && windowWidth < 768) && (<div className='container-btn-menu--header'>
              {windowWidth <= 768 && (
                <div className='btn-menu--header' onClick={dropFilters}>
                  <IoMdClose className='icon_menu--header' />
                </div>
              )}
            </div>)}
            <p className='title--dropdown'>Filters</p>
          </div>
        </li>
        <li className='element--filter'>
          <div className='ahhhh'>
            <div className='section--filter'>
              {/* hacer efecto lento para el boton */}
              <p className='name--filter'>Status</p>
              <div className='btn--filter' onClick={() => {
                toggleMenu('menu1');
              }}>
                <BsChevronDown />
              </div>
            </div>
          </div>
          {menuState.menu1 ? <ul className='container-dropdown--filters'>
            {
              characterStatus.map((s, i) => <li key={i} className='element--dropdown' onClick={() => {
                setApi('https://rickandmortyapi.com/api/character/?page=1')
                setStatus(`${s}`)
                toggleMenu('menu1')
              }}> {s} </li>)
            }
          </ul> : null}

        </li>

        <li className='element--filter'>
          <div className='ahhhh'>
            <div className='section--filter'>
              <p className='name--filter'>Species</p>
              <div className='btn--filter' onClick={() => {
                toggleMenu('menu2');
              }}>
                <BsChevronDown />
              </div>
            </div>
          </div>
          {menuState.menu2 ? <ul className='container-dropdown--filters'>
            {
              characterSpecie.map((s, i) => <li key={i} className='element--dropdown' onClick={() => {
                setApi('https://rickandmortyapi.com/api/character/?page=1')
                setSpecie(`${s}`)
                toggleMenu('menu2')
              }}> {s} </li>)
            }
          </ul> : null}
        </li>
        <li className='element--filter'>
          <div className='ahhhh'>
            <div className='section--filter'>
              <p className='name--filter'>Gender</p>
              <div className='btn--filter' onClick={() => {
                toggleMenu('menu3');
              }}>
                <BsChevronDown />
              </div>
            </div>
          </div>
          {menuState.menu3 ? <ul className='container-dropdown--filters'>
            {
              characterGender.map((s, i) => <li key={i} className='element--dropdown' onClick={() => {
                setApi('https://rickandmortyapi.com/api/character/?page=1')
                setGender(`${s}`)
                toggleMenu('menu3')
              }
              }> {s} </li>)
            }
          </ul> : null}
        </li>
      </ul>
      {(status.length || specie.length || gender.length) && (filtersOpen && windowWidth < 768) ? <FiltersActives /> :
        null
      }
    </div>
  );
};

export { Filters };
