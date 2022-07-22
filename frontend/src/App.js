import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Experience from './Experience';
import Home from './Home';
import Navigation from './Navigation';
import Skills from './Skills';



const App=()=> {
  return (
    <BrowserRouter>
    <Navigation />
    <Home/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/Experience" element={<Experience />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
