import React, { useEffect, useState } from 'react';
import { Card } from '../Card';
import './styles.css';

const Home = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch('https://rickandmortyapi.com/api/character')
      const data = await resp.json()
      // console.log(data);
      // console.log('hola desde el home');
      setData(data);
      setLoading(false);
    }

    fetchData()
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  const { info, results } = data;
  
  //MANDAR TODO COMO HELPER

  // console.log(data);
  // console.log(info);
  // console.log(results);

  // const {characters} = results;
  // console.log(characters);

  return (
    <div className="home">
      <div className='cards__home'>
        {
          results.map((results, index) =>
            <div className='content_card--home' key={index}>
              <Card results={results} />
            </div>)
        }
      </div>
      <div className="pagination__home">
        soy una paginacion
      </div>
    </div>
  );
};

export { Home };
