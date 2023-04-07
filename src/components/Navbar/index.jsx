import React, { useContext } from 'react';
import { UserContext } from '../../useContext/useContext';
import { BsSearch } from 'react-icons/bs';
import { Filters } from '../Filters';
import './styles.css';

const Navbar = () => {

  const { input_search, windowWidth, handleSubmit, setName, inputValue } = useContext(UserContext);

  return (
    <div className='search_navbar--header'>
      <form className='form_navbar--header' onSubmit={handleSubmit}>
        <input
          className='input_navbar--header'
          type='text'
          placeholder='Busca..'
          autoComplete='off'
          value={inputValue}

          onChange={input_search}
        // hacer q sea un setValor esta api nueva
        // setname como el modal de error
        />
        <button
          className='btn_navbar--header'
          type='submit'
          onClick={() => setName(inputValue)}
        >
          <BsSearch className='icon_search-navbar--header' />
        </button>
      </form>
      {windowWidth > 768 ?
        <div className='container--filters'>
          <Filters />
        </div>
        : null}
      {/* si el valor buscado no existe */}
    </div>
  );
};

export { Navbar };

