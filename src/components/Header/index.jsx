import React, { useContext } from 'react';
import { UserContext } from '../../useContext/useContext';
import { Link } from 'react-router-dom';
import logo_web from '../../assets/logo_web.png';
import { Navbar } from '../Navbar';
import { CgMenu } from 'react-icons/cg';
import { TiArrowForwardOutline } from 'react-icons/ti';
import './styles.css';

const Header = () => {

  const { windowWidth, filtersOpen, dropFilters, scrollTo } = useContext(UserContext);

  return (
    <header className='header'>
      <Link to='/' className='container-logo--header'>
        <img className='logo--header'
          src={logo_web}
          alt='Logo web'
        />
      </Link>
      <div className='container-navbar--header'>
        <Navbar />
      </div>
      <div className='container-btn-state_filters--header'>
        {(windowWidth <= 768) && (
          <div className='btn-state_filters--header'
            onClick={() => {
              scrollTo();
              dropFilters();
            }}>
            {filtersOpen ?
              <TiArrowForwardOutline className='icon-btn-state_filters--header' />
              : <CgMenu className='icon-btn-state_filters--header' />}
          </div>
        )}
      </div>
    </header>
  );
};

export { Header };
