import React, { useState } from 'react';
import '../styles/Navbar.css'; 
import logo from '../assets/images/logo_ada3.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">
          <img src={logo} alt="ADA Logo" />
        </NavLink>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className={`bar ${isOpen ? 'toggle' : ''}`}></span>
        <span className={`bar ${isOpen ? 'toggle' : ''}`}></span>
        <span className={`bar ${isOpen ? 'toggle' : ''}`}></span>
      </div>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>
            Qui sommes-nous ?
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className={({ isActive }) => isActive ? "active-link" : ""}>
            Nos services
          </NavLink>
        </li>
        <li>
          <NavLink to="/pricing" className={({ isActive }) => isActive ? "active-link" : ""}>
            Tarifs
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" className={({ isActive }) => isActive ? "active-link" : ""}>
            Actualités
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>
            Contact
          </NavLink>
        </li>
        <li>
          <button className="chat-btn">Chat</button>
        </li>
        <li>
          <NavLink to="/login">
            <button className="connexion-btn">Connexion</button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;