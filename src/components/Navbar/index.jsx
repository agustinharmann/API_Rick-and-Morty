import React from 'react';
import {BsSearch} from 'react-icons/bs';
import './styles.css';

const Navbar = ()=> {
  return(
    <div className='navbar--header'>
      <form className="form_navbar--header">
        <input type="text" className="input_navbar--header" placeholder='Busca..' />
        <button className='btn_navbar--header'>
          <BsSearch className='icon_search-navbar--header' />
        </button>
      </form>
    </div>
  );
};

export {Navbar};
