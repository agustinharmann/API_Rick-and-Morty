import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const Menu = () => {

  const [ width, setWidth ] = useState(0);

  useEffect(()=>{
    setWidth(window.innerWidth)
  }, [])
  console.log(width);

  /* cambiar color filter a negro */
  /* alinear con input max width 600px */
  return (
    <div className='menu'>
      <ul className='list_search--dropdown'>
        <li className='element_search--dropdown'>
          <p className='title--dropdown'>Filters</p>
        </li>
        <li className='element_search--dropdown'> <NavLink to="/"> Name </NavLink> </li>
        <li className='element_search--dropdown'> <NavLink to="status"> Status </NavLink> </li>
        <li className='element_search--dropdown'> <NavLink to="species"> Species </NavLink> </li>
        <li className='element_search--dropdown'> <NavLink to="gender"> Gender </NavLink> </li>
        <li className='element_search--dropdown'> <NavLink to="type"> Type </NavLink> </li>
        <li className='element_search--dropdown'> <NavLink to="location"> Location </NavLink> </li>
      </ul>
    </div>
  );
};

export { Menu };
