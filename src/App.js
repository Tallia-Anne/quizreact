import * as React from "react";
//Importation des routes
import { Routes, Route } from "react-router-dom";
import './App.css';


import Navigation from './components/Navigation';
import Home from './components/Home'
import Sitesanimes from './components/Sitesanimes'
import Footer from './components/Footer'



const App = () => {

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sitesanimes" element={<Sitesanimes />} />
        

      </Routes>
        <Footer/>
    </div>
  );
}

export default App;
