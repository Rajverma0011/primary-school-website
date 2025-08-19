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
      <div className="header-main">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="brand-section">
              <div className="logo-container">
                <img src="/images/logo.jpg.jfif" alt="R.K. Public School Logo" className="school-logo" />
              </div>
              <div className="school-branding">
                <h1 className="school-name">R.K. Public School</h1>
                <p className="school-location">Basti, UP</p>
              </div>
            </Link>

            <nav className={`main-navigation ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
              <Link
                to="/"
                className={`nav-link ${isActiveLink('/') ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="nav-icon">🏠</span>
                <span className="nav-text">Home</span>
              </Link>
              <Link
                to="/about"
                className={`nav-link ${isActiveLink('/about') ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="nav-icon">ℹ️</span>
                <span className="nav-text">About Us</span>
              </Link>
              <Link
                to="/academics"
                className={`nav-link ${isActiveLink('/academics') ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="nav-icon">📚</span>
                <span className="nav-text">Academics</span>
              </Link>
              <Link
                to="/gallery"
                className={`nav-link ${isActiveLink('/gallery') ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="nav-icon">📸</span>
                <span className="nav-text">Gallery</span>
              </Link>
              <Link
                to="/careers"
                className={`nav-link ${isActiveLink('/careers') ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="nav-icon">💼</span>
                <span className="nav-text">Careers</span>
              </Link>
              <Link
                to="/contact"
                className={`nav-link ${isActiveLink('/contact') ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="nav-icon">📞</span>
                <span className="nav-text">Contact</span>
              </Link>
              <Link
                to="/admissions"
                className={`nav-link cta-link ${isActiveLink('/admissions') ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="nav-icon">🎓</span>
                <span className="nav-text">Apply Now</span>
              </Link>
            </nav>

            <button
              className="mobile-menu-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
            >
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
