import "../styles/navbar.css"
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (

        <nav>
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/gallery">Gallery</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
        </nav>

    )
}
