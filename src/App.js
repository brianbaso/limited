import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Produce from './pages/Produce';
import Arrange from './pages/Arrange';
import Vocals from './pages/Vocals';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produce" element={<Produce />} />
        <Route path="/arrange" element={<Arrange />} />
        <Route path="/vocals" element={<Vocals />} />
      </Routes>
    </Router>
  );
}

export default App;
