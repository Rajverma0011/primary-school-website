import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="site-header">
    <div className="header-content">
      <Link to="/" className="logo-link">
        {/* Note: The file extension .jpg.jfif is unusual. Make sure your file is named correctly, e.g., 'logo.png' or 'logo.jpg'. */}
        <img src="/images/logo.jpg.jfif" alt="R.K. Public School Logo" className="logo-image" />
      </Link>
      <div className="school-name">R.K. Public School</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/academics">Academics</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  </header>
);

export default Header;
