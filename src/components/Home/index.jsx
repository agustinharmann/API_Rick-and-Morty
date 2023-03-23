import React, { useContext, useEffect } from 'react';
import { RxDoubleArrowLeft } from 'react-icons/rx';
import { RxDoubleArrowRight } from 'react-icons/rx';
import { UserContext } from '../../utils/useContext';
import { Error } from '../Error';
import { Menu } from '../Menu';
import { Results } from '../Results';

import './styles.css';


const Home = () => {

  const { data, loading, prevPage, nextPage, setNavigator, windowWidth, menuOpen, error } = useContext(UserContext);
  const { info } = data;

  // const medidas = window.screen.width;
  // console.log(medidas);

  useEffect(() => {
    setNavigator('Home')
  }, [setNavigator])

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className='home'>
      {error && <Error />}
      {menuOpen && windowWidth < 768 ?
        <div className='menu--header'>
          {/* VER POR QUE ROMPE EL CSS (SERA XQ AL APARECER EN HOME ESTA MAS ABAJO), CAMBIAR EL NOMBRE DE LA CLASE "MENU--HEADER" A "MENU HOME" Y REVEER LA LOGICA DEL "menuOpen && windowWidth < 768" ACA Y EL "windowWidth > 768" DE ALLA */}
          <Menu />
        </div>
        : null}
      <Results />
      <div className='pagination__home'>
        {/* AGREGAR CONDICIONAL PARA LOS BOTONES SINO ROMPE CUANDO SE BUSCA CUANDO ALGO NO EXISTE */}
        <button
          className={info.prev ? 'btn_prev--pagination_home' : 'btn_prev--pagination_home__disable'}
          onClick={prevPage}>
          <RxDoubleArrowLeft className='prev_doble_arrow--pagination_home' />
        </button>

        {/* <div className='status--pagination'></div> */}

        <button
          className={info.next ? 'btn_next--pagination_home' : 'btn_next--pagination_home__disable'}
          onClick={nextPage}>
          <RxDoubleArrowRight className='next_doble_arrow--pagination_home' />
        </button>

      </div>
    </div>
  );
};

export { Home };
