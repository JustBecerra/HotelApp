import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CenterPiece from './components/CenterInfo/CenterPiece/CenterPiece';
import HotelInfo from './components/HotelDisplay/HotelInfo';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CenterPiece />
      <HotelInfo />
    </div>
  );
}

export default App;
