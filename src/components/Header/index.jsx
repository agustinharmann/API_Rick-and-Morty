import React, { useContext } from 'react';
import { UserContext } from '../../utils/useContext';
import { Link } from 'react-router-dom';
import logo_header from '../../assets/logo_header.jpg';
import { CgMenu } from 'react-icons/cg';
import { Navbar } from '../Navbar';
import { Menu } from '../Menu';
import './styles.css';

const Header = () => {

  const { getDrop } = useContext(UserContext);

  return (
    <div className='header'>
      {/* -20px a input header */}
      <div className="search--header">
        <Link to="/" className='container_logo--header'>
          <img className='logo--header' src={logo_header} alt='Logo App' />
        </Link>

        <Navbar />

        <div className='container_icon-menu--header'>
          <CgMenu className='icon_menu--header' onClick={getDrop} />
        </div>

      </div>

      <div className='menu--header'>
        <Menu />
      </div>

    </div>
  );
};

export { Header };
