import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Stay from './components/pages/Stay';
import Price from './components/pages/Price';
import Footer from './components/Footer';
import YearPension from './components/pages/YearPension';
import TemporaryPension from './components/pages/TemporaryPension';
 
const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/accueil' element={ <Home /> } />
        <Route path='/sejour-bien-etre' element={ <Stay /> } />
        <Route path='/pension-a-lannee' element={ <YearPension /> } />
        <Route path="/pension-passagere" element={ <TemporaryPension /> } />
        <Route path='/tarif' element={ <Price /> } />
        <Route path='/contact' element={ <Contact /> } />
      </Routes>
    </Router>

  );
};

export default App;
