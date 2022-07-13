import React from "react";
import { Switch } from "react-router-dom";
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
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Skills />} />
      <Route path="/signup" element={<Experience />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
