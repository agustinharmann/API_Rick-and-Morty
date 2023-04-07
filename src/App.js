import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { SingleCharacter } from './components/SingleCharacter';
// import { Footer } from './components/Footer';
import './App.css';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='singleCharacter' element={<SingleCharacter />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
