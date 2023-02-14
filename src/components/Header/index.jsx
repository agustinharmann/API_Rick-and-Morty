import React from 'react';
import logo_header from '../../assets/logo_header.jpg';
import { CgMenu } from 'react-icons/cg';
import { Navbar } from '../Navbar'
import './styles.css';

const Header = () => {
  return (
    <div className='header'>
      <div className="container_logo--header">
        <img className='logo--header' src={logo_header} alt="" />
      </div>
      <Navbar />
      <div className="container_menu--header">
        <CgMenu className='menu--header' />
      </div>
    </div>
  );
};

export { Header };
