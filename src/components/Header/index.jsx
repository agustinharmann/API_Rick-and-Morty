import React, { useContext } from 'react';
import { UserContext } from '../../useContext/useContext';
import { Link } from 'react-router-dom';
import logo_header from '../../assets/logo_header.jpg';
import { Navbar } from '../Navbar';
import { CgMenu } from 'react-icons/cg';
import { TiArrowForwardOutline } from 'react-icons/ti';
import './styles.css';

const Header = () => {

  const { windowWidth, filtersOpen, dropFilters, scrollTo } = useContext(UserContext);

  return (
    <div className='header'>
      <Link to='/' className='container-logo--header'>
        <img className='logo--header'
          src={logo_header}
          alt='Logo App'
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
    </div>
  );
};

export { Header };
