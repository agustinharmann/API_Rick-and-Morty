import React, { useState, useContext } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { UserContext } from '../../utils/useContext';
import { FiltersActives } from '../FiltersActives';
import './styles.css';

const Filters = () => {
  const { filtersOpen, windowWidth, status, specie, gender, setStatus, setSpecie, setGenre } = useContext(UserContext);

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
            <p className='title--dropdown'>Filters</p>
          </div>
        </li>
        <li className='element--filter'>
          <div className='ahhhh'>
            <div className='section--filter'>
              {/* hacer efecto lento para el boton */}
              <p className='name--filter'>Status</p>
              <div className='btn--filter' onClick={() => toggleMenu('menu1')}>
                <BsChevronDown />
              </div>
            </div>
          </div>
          <ul className={`${menuState.menu1 ? 'container-dropdown--filters' : 'disable'}`}>
            {
              characterStatus.map((s, i) => <li key={i} className='element--dropdown' onClick={() => {
                setStatus(`${s}`)
                toggleMenu('menu1')
              }}> {s} </li>)
            }
          </ul>

        </li>

        <li className='element--filter'>
          <div className='ahhhh'>
            <div className='section--filter'>
              <p className='name--filter'>Species</p>
              <div className='btn--filter' onClick={() => toggleMenu('menu2')}>
                <BsChevronDown />
              </div>
            </div>
          </div>
          <ul className={`${menuState.menu2 ? 'container-dropdown--filters' : 'disable'}`}>
            {
              characterSpecie.map((s, i) => <li key={i} className='element--dropdown' onClick={() => {
                setSpecie(`${s}`)
                toggleMenu('menu2')
              }}> {s} </li>)
            }
          </ul>
        </li>
        <li className='element--filter'>
          <div className='ahhhh'>
            <div className='section--filter'>
              <p className='name--filter'>Gender</p>
              <div className='btn--filter' onClick={() => toggleMenu('menu3')}>
                <BsChevronDown />
              </div>
            </div>
          </div>
          <ul className={`${menuState.menu3 ? 'container-dropdown--filters' : 'disable'}`}>
            {
              characterGender.map((s, i) => <li key={i} className='element--dropdown' onClick={() => {
                setGenre(`${s}`)
                toggleMenu('menu3')
              }
              }> {s} </li>)
            }
          </ul>
        </li>
      </ul>
      {(status.length || specie.length || gender.length) && (filtersOpen && windowWidth < 768)  ? <FiltersActives /> :
        null
      }
    </div>
  );
};

export { Filters };
