import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Status } from './components/Status';
import { Species } from './components/Species';
import { Gender } from './components/Gender';
import { Type } from './components/Type';
import { Location } from './components/Location';
// import { Footer } from './components/Footer';
import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='status' element={<Status />} />
        <Route path='species' element={<Species />} />
        <Route path='gender' element={<Gender />} />
        <Route path='type' element={<Type />} />
        <Route path='location' element={<Location />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
