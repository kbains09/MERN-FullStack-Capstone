import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss'; 

const Footer = () => {
  return (
    <footer>
      <div className="logo-container">
        <Link to="/">
          <img src="/path-to-your-logo.png" alt="Logo" />
        </Link>
      </div>
      <div className="links-container">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <ul className="social-links">
          <li><a href="https://facebook.com">Facebook</a></li>
          <li><a href="https://twitter.com">Twitter</a></li>
          <li><a href="https://instagram.com">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
