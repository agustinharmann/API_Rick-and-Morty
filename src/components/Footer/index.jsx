import React from 'react';
import { BsGithub, BsLinkedin  } from 'react-icons/bs';
import './styles.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container-section--footer'>
        <div className='column--footer'>
          <a className='info--footer' href='https://rickandmortyapi.com/' target='_blank' rel='noreferrer'>
            Documentation of API
          </a>
        </div>
        <div className='column--footer'>
          <a className='info--footer' href='https://github.com/agustinharmann' target='_blank' rel='noreferrer'>
            <BsGithub className='icon--footer' />
            Github
          </a>
          <a className='info--footer' href='https://www.linkedin.com/in/agustin-harmann-1a4794269/' target='_blank' rel='noreferrer'>
            <BsLinkedin className='icon--footer' />
            Linkedin
          </a>
        </div>
      </div>
      <div className='container-section--footer'>
        <p className='content-second-section--footer'>Powered by agustinharmann</p>
      </div>
    </div>
  );
};

export { Footer };
