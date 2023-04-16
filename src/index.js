import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { UserProvider } from './useContext/useContext';
import App from './Pages/App/App.js';
import { SingleCharacter } from './Pages/SingleCharacter';
import { Footer } from './components/Footer';
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <UserProvider>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='single-character' element={<SingleCharacter />} />
          <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
        <Footer />
      </UserProvider>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
