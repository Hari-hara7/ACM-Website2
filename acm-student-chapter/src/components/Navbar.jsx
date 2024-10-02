// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaCalendarAlt, FaInfoCircle, FaUsers, FaPhone } from 'react-icons/fa'; // Importing icons for mobile
import './Navbar.css'; // Navbar styles
import logo from '../assets/logo.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
        <img src={logo} alt="ACM Student Chapter" />
        </Link>
      </div>

      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/" onClick={toggleMenu}>
            {isOpen && <FaHome className="mobile-icon" />} Home
          </Link>
        </li>
       
        <li>
          <Link to="/events" onClick={toggleMenu}>
            {isOpen && <FaCalendarAlt className="mobile-icon" />} Events
          </Link>
        </li>
        <li>
          <Link to="/core-members" onClick={toggleMenu}>
            {isOpen && <FaUsers className="mobile-icon" />} Team
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={toggleMenu}>
            {isOpen && <FaPhone className="mobile-icon" />} Contact Us
          </Link>
        </li>
      </ul>

      <div className="burger" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
    </nav>
  );
};

export default Navbar;
