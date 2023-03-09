import { useContext, useEffect } from 'react';
import { UserContext } from '../../utils/useContext';
import { Results } from '../Results';
import './styles.css';

const Gender = () => {

  const { setNavigator } = useContext(UserContext);

  useEffect( () => {
    setNavigator('Gender')
  }, [setNavigator] )


  return(
    <div>
      <Results />
    </div>
  );
};

export {Gender};
