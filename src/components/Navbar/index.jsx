import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import './styles.css';

const Navbar = () => {

  const [name, setName] = useState('');

  const input_search = ({target}) => {
    let searchName = target.value;
    setName(searchName);
  }

  const getByName = async (e) => {
    e.preventDefault();
    const resp = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
    // &page=${pagination}
    const data = await resp.json();
    console.log(data);
    setName('')
  }

  return (
    <div className='navbar--header'>
      <form className='form_navbar--header'>
        <input
          className='input_navbar--header'
          type='text'
          value={name}
          placeholder='Busca..'
          autoComplete='off'
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
