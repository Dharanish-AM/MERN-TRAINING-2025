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
import UseEffectHook from './hooks/useEffectHook';
import { UseStateHook } from './hooks/useStateHook';
import UseEffectAPIimage from './hooks/UseAPIImage';
import UseRef from './hooks/useRef';
import UseMemo from './hooks/useMemo';
import UseCallback from './hooks/useCallback';

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
            <Route path="/usestate" element={<UseStateHook />} />
            <Route path="/useeffect" element={<UseEffectHook />} />
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
