import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Footer from './Component/Footer';
import { useState } from 'react';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>

        <Route path = "/" Component={Home}></Route>
        <Route path = '*' Component={Home}></Route>

      </Routes>
      <Footer></Footer>
    </>
    
  );
}

export default App;
