import { useContext } from 'react';
import { UserContext } from '../../useContext/useContext';
import { Card } from '../Card';
import './styles.css';

const Results = () => {
  
  const { data } = useContext(UserContext);
  const { results } = data;

  return (
    <div className='cards__home'>
      {results.map((results, index) =>
        <div className='content_card--home' key={index}>
          <Card results={results} />
        </div>)}
    </div>
  );
};

export { Results };
