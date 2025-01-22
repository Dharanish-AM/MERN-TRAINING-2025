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
            </ul>
            <span onMouseEnter={toggleDrop} onMouseLeave={toggleDrop}>Hooks</span>
            {dropdown && (
              <div className="dropdown">
              <ul>
                    <li><Link to="/usestate" target='_blank'>useState</Link></li>
                    <li ><Link to="/useeffect" target='_blank'>useEffect</Link></li>
                </ul>
              </div>
            )}
        </nav>
    );
}
