import React from 'react';
import { UserProvider } from './utils/useContext';
import { Header } from './components/Header';
import { Home } from './components/Home';
// import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Header />
        <Home />
        {/* <Footer /> */}
      </UserProvider>
    </div>
  );
}

export default App;
