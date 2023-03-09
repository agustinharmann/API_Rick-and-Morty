import { useContext, useEffect } from 'react';
import { UserContext } from '../../utils/useContext';
import './styles.css';

const Status = () => {


  const { setNavigator } = useContext(UserContext);

  useEffect( () => {
    setNavigator('Status')
  }, [setNavigator] )
  return(
    <div>
      Status
    </div>
  );
};

export {Status};
