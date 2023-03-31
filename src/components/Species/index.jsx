import { useContext, useEffect } from 'react';
import { UserContext } from '../../utils/useContext';
import './styles.css';

const Species = () => {

  const { setNavigator } = useContext(UserContext);

  useEffect(() => {
    setNavigator('Species')
  }, [setNavigator])
  return (
    <div>
      Species
    </div>
  );
};

export { Species };
