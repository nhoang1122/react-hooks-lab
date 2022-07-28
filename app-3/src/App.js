import './App.css';
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Pokemon from './Components/Pokemon';
import PokemonList from './Components/PokemonList';

function App() {

   return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PokemonList/>}></Route>
        <Route path='/:name' element={<Pokemon/>}></Route>
      </Routes>
  
    </div>
  );
}

export default App;