import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Nav';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import UseEff from './hooks/UseEff';
import  UseState  from './hooks/UseState';
import UseEffectAPIimage from './hooks/UseAPIImage';
import UseRef from './hooks/UseRef';
import UseMemo from './hooks/UseMemo';
import UseCallback from './hooks/UseCallback';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/auth" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/usestate" element={<UseState />} />
            <Route path="/useeffect" element={<UseEff />} />
            <Route path="/useeffectimg" element={<UseEffectAPIimage />} />
            <Route path="/useRef" element={<UseRef />} />
            <Route path="/useMemo" element={<UseMemo />} />
            <Route path="/useCallBack" element={<UseCallback />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
