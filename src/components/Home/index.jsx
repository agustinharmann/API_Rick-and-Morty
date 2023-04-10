import React, { useContext } from 'react';
import { UserContext } from '../../useContext/useContext';
import { Header } from '../Header';
import { Filters } from '../Filters';
import { Results } from '../Results';
import { Footer } from '../Footer';
import './styles.css';


const Home = () => {

  const { loading, windowWidth, filtersOpen } = useContext(UserContext);

  if (loading) {
    return <div>Cargando...</div>;
  };

  return (
    <div className='home'>
      <Header />
      {(filtersOpen && windowWidth < 768) ?
        (<div className='container--filters'>
          <Filters />
        </div>)
        : (
          <Results />
        )}
        <Footer />
    </div>
  );
};

export { Home };
