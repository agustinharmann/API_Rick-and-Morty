import React, { useContext } from 'react';
import { UserContext } from '../../useContext/useContext';
import { Header } from '../Header';
import { Results } from '../Results';
import { Filters } from '../Filters';
import { FiltersActives } from '../FiltersActives';
import { Error } from '../Error';
import { RxDoubleArrowRight } from 'react-icons/rx';
import { RxDoubleArrowLeft } from 'react-icons/rx';
import './styles.css';


const Home = () => {

  const { status, specie, gender, data, loading, prevPage, nextPage, windowWidth, filtersOpen, error } = useContext(UserContext);

  const { info } = data;

  if (loading) {
    return <div>Cargando...</div>;
  };

  return (
    <div className='home'>
      <Header />
      {filtersOpen && windowWidth < 768 ?
        <div className='container--filters'>
          <Filters />
        </div>
        : null}
      {(status.length || specie.length || gender.length) ? <FiltersActives /> :
        null
      }
      {error && <Error />}
      <Results />
      {
        (info.prev || info.next) &&
        (<div className='pagination__home'>
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
        </div>)
      }
    </div>
  );
};

export { Home };
