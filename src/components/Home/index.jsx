import React, { useEffect, useState } from 'react';
import {RxDoubleArrowLeft} from 'react-icons/rx';
import {RxDoubleArrowRight} from 'react-icons/rx';
import { Card } from '../Card';
import './styles.css';

const Home = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch(`https://rickandmortyapi.com/api/character?page=${pagination}`)
      const data = await resp.json()
      // console.log(data);
      // console.log('hola desde el home');
      setData(data);
      setLoading(false);
    }

    fetchData()
  }, [pagination]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  const { info, results } = data;

  // FUNCIONA; PROXIMO PASO, VER SI PUEDE CAMBIAR LA PAGINACION CON EL PROPIO NEXT Y PREV DEL OBJETO INFO

  const prev = () => {
    pagination >= 2 && setPagination(pagination - 1);
  };

  const next = () => {
    pagination <= 41 && setPagination(pagination + 1);
  };

  console.log(info);
  console.log(info.next);

  //MANDAR TODO COMO HELPER

  // console.log(data);
  // console.log(info);
  // console.log(results);

  // const {characters} = results;
  // console.log(characters);


  






  return (
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
        <button className={ pagination <= 1 ? 'btn_prev--pagination_home__disable' : 'btn_prev--pagination_home'} onClick={prev}>
          <RxDoubleArrowLeft className='prev_doble_arrow--pagination_home' />
        </button>
        <div className='status--pagination'>{pagination}</div>
        <button className={ pagination >= 42 ? 'btn_next--pagination_home__disable' : 'btn_next--pagination_home'}  onClick={next}>
          <RxDoubleArrowRight className='next_doble_arrow--pagination_home' />
        </button>
      </div>
    </div>
  );
};

export { Home };
