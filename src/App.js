import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './PrivateRoute';
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
          <Route path="/start" element={<PrivateRoute component={Start} />} />
          <Route path="/produce" element={<PrivateRoute component={Produce} />} />
          <Route path="/arrange" element={<PrivateRoute component={Arrange} />} />
          <Route path="/vocals" element={<PrivateRoute component={Vocals} />} />
          <Route path="/settings" element={<PrivateRoute component={Settings} />} />
          <Route path="/sounds/:soundId" element={<PrivateRoute component={Sounds} />} />
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
      <div>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
