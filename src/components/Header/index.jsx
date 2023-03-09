import React, { useContext } from 'react';
import { UserContext } from '../../utils/useContext';
import { Link } from 'react-router-dom';
import logo_header from '../../assets/logo_header.jpg';
import { CgMenu } from 'react-icons/cg';
import { Navbar } from '../Navbar';
// import { Menu } from '../Menu';
import './styles.css';

const Header = () => {

  const { getDrop, navigator } = useContext(UserContext);

  return (
    <div className='header'>
      {/* -20px a input header */}
      <Link to="/" className='container_logo--header'>
        <img className='logo--header' src={logo_header} alt='Logo App' />
      </Link>

      <div className='search--header'>
        {navigator === 'Home' && <Navbar />}
      </div>
      {/* pasar este ternario al componente navbar, q el condicional sea alla, hacia el form */}

      <div className='container_icon-menu--header'>
        <CgMenu className='icon_menu--header' onClick={getDrop} />
      </div>


      {/* <div className='menu--header'>
        <Menu />
      </div> */}
      {/* .menu--header en el css de header */}

    </div>
  );
};

export { Header };
