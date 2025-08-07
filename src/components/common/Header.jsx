import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="modern-header">
      <div className="header-top">
        <div className="container">
          <div className="header-info">
            <div className="contact-info">
              <span className="info-item">
                <i className="icon-phone"></i>
                📞 8400006780 | 9648505296
              </span>
              <span className="info-item">
                <i className="icon-email"></i>
                📧 rkpublicbasti@gmail.com
              </span>
            </div>
            <div className="header-actions">
              <Link to="/admissions" className="admission-link">
                Admissions Open
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="brand-section">
              <img src="/images/logo.jpg.jfif" alt="R.K. Public School Logo" className="school-logo" />
              <div className="school-branding">
                <h1 className="school-name">R.K. Public School</h1>
                <p className="school-tagline">Excellence in Education Since 1995</p>
              </div>
            </Link>

            <nav className={`main-navigation ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
              <Link
                to="/"
                className={`nav-link ${isActiveLink('/') ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`nav-link ${isActiveLink('/about') ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/academics"
                className={`nav-link ${isActiveLink('/academics') ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Academics
              </Link>
              <Link
                to="/contact"
                className={`nav-link ${isActiveLink('/contact') ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link to="/admissions" className="nav-link cta-link">
                Apply Now
              </Link>
            </nav>

            <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
              <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
