import React from 'react';
import './Navbar.css';
import logo from '../assets/tws-logo.svg';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="TWS Logo" />
          <span>TrainWithShubham</span>
        </div>
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#community">Community</a>
          <a href="#events">Events</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;