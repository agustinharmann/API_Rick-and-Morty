import React from 'react';
import { BsCodeSlash, BsGithub, BsLinkedin } from 'react-icons/bs';
import './styles.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <section className='container-section--footer'>
        <div className='column--footer'>
          <a className='info--footer' href='https://github.com/agustinharmann/Rick-and-Morty' target='_blank' rel='noreferrer'>
            <BsCodeSlash className='icon--footer' />
            View the code
          </a>
          <a className='info--footer' href='https://rickandmortyapi.com/documentation' target='_blank' rel='noreferrer'>
            Documentation of API
          </a>
        </div>
        <div className='column--footer'>
          <a className='info--footer' href='https://www.linkedin.com/in/agustin-harmann-1a4794269/' target='_blank' rel='noreferrer'>
            <BsLinkedin className='icon--footer' />
            Linkedin
          </a>
          <a className='info--footer' href='https://github.com/agustinharmann' target='_blank' rel='noreferrer'>
            <BsGithub className='icon--footer' />
            Github
          </a>
        </div>
      </section>
      <section className='container-section--footer'>
        <p className='content-second-section--footer'>Powered by agustinharmann</p>
      </section>
    </footer>
  );
};

export { Footer };
