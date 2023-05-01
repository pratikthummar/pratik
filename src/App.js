import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import{ Routes,Route}from"react-router-dom";
import Product from './Product';
import Header from './Header'
import Home from './Home';
function App() {
  return (
    <>
      <Routes>
        <Route path='/Home/:id' element={ <Home/>} /> 
        <Route path="/" element={ <Product/>} />
      </Routes>
    </>
  );
}

export default App;
