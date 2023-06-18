import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import NewSong from './pages/NewSong';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-song" element={<NewSong />} />
      </Routes>
    </Router>
  );
}

export default App;
