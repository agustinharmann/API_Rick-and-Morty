import React, { useContext } from 'react';
import { UserContext } from '../../useContext/useContext';
import { Filters } from '../Filters';
import { BsSearch } from 'react-icons/bs';
import './styles.css';

const Navbar = () => {

  const { onInputChange, windowWidth, handleSubmit, setName, inputValue } = useContext(UserContext);

  return (
    <nav className='navbar'>
      <form className='search--navbar'
        onSubmit={handleSubmit}
      >
        <input
          className='input-search--navbar'
          type='text'
          placeholder='Search..'
          autoComplete='off'
          value={inputValue}
          onChange={onInputChange}
        />
        <button
          className='btn-search--navbar'
          type='submit'
          onClick={() => setName(inputValue)}
        >
          <BsSearch className='icon-search--navbar' />
        </button>
      </form>
      {(windowWidth > 768) ?
        (<div className='container--filters'>
          <Filters />
        </div>)
        : (null)}
    </nav>
  );
};

export { Navbar };
