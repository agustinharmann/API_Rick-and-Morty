import React, { useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import { UserContext } from '../../utils/useContext';
import { Menu } from '../Menu';
import './styles.css';


const Navbar = () => {


  const { name, input_search, getByName, windowWidth } = useContext(UserContext);


  return (
    <div className='search_navbar--header'>
      <form className='form_navbar--header'>
        <input
          className='input_navbar--header'
          type='text'
          placeholder='Busca..'
          autoComplete='off'
          value={name}
          onChange={input_search}
        />
        <button
          className='btn_navbar--header'
          type='submit'
          onClick={getByName}
        >
          <BsSearch className='icon_search-navbar--header' />
        </button>
      </form>

      
      {windowWidth > 768 ?
        <div className='menu--header'>
          <Menu />
        </div>
        : null}

        
    </div>
  );
};

export { Navbar };

