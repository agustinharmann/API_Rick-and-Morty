import { useContext } from 'react';
import { UserContext } from '../../useContext/useContext';
import { FiltersActives } from '../FiltersActives';
import { Error } from '../Error';
import { Card } from '../Card';
import { Pagination } from '../Pagination';
import './styles.css';

const Results = () => {

  const { results, error, status, specie, gender, info } = useContext(UserContext);

  return (
    <div className='results'>
      {(status.length || specie.length || gender.length) ?
        (<FiltersActives />)
        : (null)}
      {(error) ?
        (<Error />)
        : <div className='container-cards--results'>
          {results.map((results, index) =>
            <div className='content-card--results'
              key={index}
            >
              <Card results={results} />
            </div>)}
        </div>}
      {
        (info.prev || info.next) && (!error) &&
        (<Pagination />)
      }
    </div>
  );
};

export { Results };
