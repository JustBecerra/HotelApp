import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import CenterPiece from './components/CenterInfo/CenterPiece/CenterPiece';
import HotelInfo from './components/HotelDisplay/HotelInfo';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route 
          path='/'
          element={<CenterPiece />}
        />
        <Route 
          path='/hotels'
          element={<HotelInfo />}
        />
      </Routes>
      
    </div>
  );
}

export default App;
