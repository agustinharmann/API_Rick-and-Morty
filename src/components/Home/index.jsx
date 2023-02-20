import React, { useContext } from 'react';
import { RxDoubleArrowLeft } from 'react-icons/rx';
import { RxDoubleArrowRight } from 'react-icons/rx';
import { UserContext } from '../../utils/useContext';
import { Card } from '../Card';
import './styles.css';

const Home = () => {

  const { data, loading, prevPage, nextPage } = useContext(UserContext);
  const { info } = data;

  if (loading) {
    return <div>Cargando...</div>;
  }

  const { results } = data;

  return (
    <div className="container--home">
      <div className='home'>
        <div className='cards__home'>
          {
            results.map((results, index) =>
              <div className='content_card--home' key={index}>
                <Card results={results} />
              </div>)
          }
        </div>
        <div className='pagination__home'>

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
      <div className="dropdown--home">
          <p>Buscar por...</p>
        <ul>
          <li>Location</li>
          <li>Status</li>
        </ul>
      </div>
    </div>
  );
};

export { Home };
