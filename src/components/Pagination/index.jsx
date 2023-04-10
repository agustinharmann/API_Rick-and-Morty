import React, { useContext } from 'react';
import { UserContext } from '../../useContext/useContext';
import { RxDoubleArrowRight } from 'react-icons/rx';
import { RxDoubleArrowLeft } from 'react-icons/rx';
import './styles.css';

const Pagination = () => {

  const { loading, info, prevPage, nextPage } = useContext(UserContext);

  if (loading) {
    return <div>Cargando...</div>;
  };

  return (
    <div className='container-pagination--home'>
      <button
        className={(info.prev) ?
          ('btn_prev-pagination--home')
          : ('btn_prev_disable-pagination--home')}
        onClick={prevPage}
      >
        <RxDoubleArrowLeft className='icon-prev-pagination--home' />
      </button>
      <button
        className={(info.next) ?
          ('btn_next-pagination--home')
          : ('btn_next_disable-pagination--home')}
        onClick={nextPage}
      >
        <RxDoubleArrowRight className='icon-next-pagination--home' />
      </button>
    </div>
  );
};

export { Pagination };
