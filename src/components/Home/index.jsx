import React, { useContext, useEffect } from 'react';
import { RxDoubleArrowLeft } from 'react-icons/rx';
import { RxDoubleArrowRight } from 'react-icons/rx';
import { UserContext } from '../../utils/useContext';
import { Error } from '../Error';
import { Filters } from '../Filters';
import { FiltersActives } from '../FiltersActives';
import { Results } from '../Results';

import './styles.css';


const Home = () => {

  const { status, specie, gender, data, loading, prevPage, nextPage, setNavigator, windowWidth, filtersOpen, error } = useContext(UserContext);

  const { info } = data;

  useEffect(() => {
    setNavigator('Home')
  }, [setNavigator])

  if (loading) {
    return <div>Cargando...</div>;
  }

  filtersOpen && windowWidth < 768 ? document.body.classList.add('noscroll') : document.body.classList.remove('noscroll')

  return (
    <div className='home'>
      {error && <Error />}
      {/* sera el catch como en movies */}
      {filtersOpen && windowWidth < 768 ?
        <div className='container--filters'>
          <Filters />
        </div>
        : null}
        {/* podria haber una validacion de que si esta abierto el componente filtros desaparezca esto */}
      {(status.length || specie.length || gender.length)? <FiltersActives /> :
        null
      }
      <Results />
      <div className='pagination__home'>
        {/* AGREGAR CONDICIONAL PARA LOS BOTONES SINO ROMPE CUANDO SE BUSCA CUANDO ALGO NO EXISTE O HACER QUE SIEMPRE EL CATCH LANCE COMPONENTE ERROR*/}
        <button
          className={info.prev ? 'btn_prev--pagination_home' : 'btn_prev--pagination_home__disable'}
          onClick={prevPage}>
          <RxDoubleArrowLeft className='prev_doble_arrow--pagination_home' />
        </button>

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
