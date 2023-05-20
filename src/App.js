import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Stay from './components/pages/Stay';
import Pension from './components/pages/Pension';
import Price from './components/pages/Price';
import Footer from './components/Footer';
 
const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/home' element={ <Home /> } />
        <Route path='/stay' element={ <Stay /> } />
        <Route path='/pension' element={ <Pension /> } />
        <Route path='/price' element={ <Price /> } />
        <Route path='/contact' element={ <Contact /> } />
      </Routes>
    </Router>

  );
};

export default App;
