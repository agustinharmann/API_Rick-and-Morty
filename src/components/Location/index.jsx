import { useContext, useEffect } from 'react';
import { UserContext } from '../../utils/useContext';
import './styles.css';

const Location = () => {


  const { setNavigator } = useContext(UserContext);

  useEffect( () => {
    setNavigator('Location')
  }, [setNavigator] )

  return(
    <div>
      Location
    </div>
  );
};

export {Location};
