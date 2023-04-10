import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { UserProvider } from './useContext/useContext';
import reportWebVitals from './reportWebVitals';
import { SingleCharacter } from './components/SingleCharacter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='single-character' element={<SingleCharacter />} />
          <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
