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
import UseState from './hooks/UseState';
import UseEffectAPIimage from './hooks/UseAPIImage';
import Ref from './hooks/Ref';
import Memo from './hooks/Memo';
import Callback from './hooks/Callback';
import ReactLifecycleMethods from './components/ReactLifeCycleMethods';
import UseContext from './hooks/UseContext';

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
            <Route path="/useRef" element={<Ref />} />
            <Route path="/useMemo" element={<Memo />} />
            <Route path="/useCallBack" element={<Callback />} />
            <Route path='/reactlifecycle' element={<ReactLifecycleMethods />} />
            <Route path='/usecontext' element={<><Navbar /><UseContext /></>} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
