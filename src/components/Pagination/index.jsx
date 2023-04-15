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
    <section className='pagination'>
      <button
        className={(info.prev) ?
          ('btn-prev--pagination')
          : ('btn-prev-disable--pagination')}
        onClick={prevPage}
      >
        <RxDoubleArrowLeft className='icon-prev--pagination' />
      </button>
      <button
        className={(info.next) ?
          ('btn-next--pagination')
          : ('btn-next-disable--pagination')}
        onClick={nextPage}
      >
        <RxDoubleArrowRight className='icon-next--pagination' />
      </button>
    </section>
  );
};

export { Pagination };
