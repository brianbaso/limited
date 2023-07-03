import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home'
import Produce from './pages/Produce';
import Arrange from './pages/Arrange';
import Vocals from './pages/Vocals';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Start from './pages/Start';
import Settings from './pages/Settings'
import Sounds from './pages/Sounds'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produce" element={<Produce />} />
          <Route path="/arrange" element={<Arrange />} />
          <Route path="/vocals" element={<Vocals />} />
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/start" element={<Start />}/>
          <Route path="/settings" element={<Settings />}/>
          <Route path="/sounds" element={<Sounds />}/>
        </Routes>
      </Router>
      <div>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
