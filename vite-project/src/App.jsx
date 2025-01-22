import React from 'react';
import Login from '../src/pages/Login';
import Signup from '../src/pages/Signup';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./App.css"

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <div className="content">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};


export default App;
