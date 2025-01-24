import { useState } from 'react';
import "../styles/navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
    var styling = {
        textDecoration: "none",
        listStyleType: "none",
        textAlign: "center",
    };


    var [dropdown, showDropdown] = useState(true);


    const toggleDrop = () => {
        showDropdown(prevState => !prevState);
    }

    return (
        <nav>
            <ul style={styling}>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/auth">Auth</Link></li>
                <li style={{
                    color:"white"
                }} onMouseEnter={toggleDrop} onMouseLeave={toggleDrop}>Hooks</li>
            </ul>
        
            {dropdown && (
              <div className="dropdown">
              <ul>
                    <li><Link to="/usestate" >useState</Link></li>
                    <li ><Link to="/useeffect" >useEffect</Link></li>
                    <li ><Link to="/useeffectimg" >useEffectAPI</Link></li>
                    <li ><Link to="/useRef" >useRef</Link></li>
                    <li ><Link to="/useMemo">useMemo</Link></li>
                    <li ><Link to="/useCallback" >useCallback</Link></li>
                    <li><Link to="/reactlifecycle" className='link'>Reactlifecycle</Link></li>
                </ul>
              </div>
            )}
        </nav>
    );
}




