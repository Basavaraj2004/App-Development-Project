import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">MyApp</Link>
        <ul className="navbar-menu">
          <li><Link to="/" className="navbar-item">Home</Link></li>
          <li><Link to="/about" className="navbar-item">About Us</Link></li>
          <li><Link to="/services" className="navbar-item">Services</Link></li>
          <li><Link to="/features" className="navbar-item">Features</Link></li>
          <li><Link to="/contact" className="navbar-item">Contact Me</Link></li>
        </ul>
        <div className="navbar-auth">
          {isLoggedIn ? (
            <button onClick={onLogout} className="navbar-logout">Logout</button>
          ) : (
            <Link to="/login" className="navbar-login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
