import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from './common/ScrollToTop';

import Header from "./components/Header";
import Footer from './components/Footer';
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Stay from './components/pages/Stay';
import Price from './components/pages/Price';
import Pension from './components/pages/Pension';
import Education from './components/pages/Education';
 
const App = () => {
  return (
    <Router>
       <ScrollToTop />
      <Header />

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/accueil' element={ <Home /> } />
        <Route path='/pension' element={ <Pension /> } />
        <Route path="/education" element={ <Education /> } />
        <Route path='/pole-bien-etre' element={ <Stay /> } />
        <Route path='/tarif' element={ <Price /> } />
        <Route path='/contact' element={ <Contact /> } />
      </Routes>

      <Footer />
    </Router>

  );
};

export default App;
