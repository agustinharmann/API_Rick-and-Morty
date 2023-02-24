import React, { useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import { UserContext } from '../../utils/useContext';
import './styles.css';

const Navbar = () => {

  const { name, input_search, getByName } = useContext(UserContext);

  return (
    <div className='search--header'>
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
    </div>
  );
};

export { Navbar };
