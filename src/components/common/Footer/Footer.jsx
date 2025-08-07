import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
  <footer className="modern-footer">
    <div className="footer-main">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <img src="/images/logo.jpg.jfif" alt="R.K. Public School" className="footer-logo" />
              <h3>R.K. Public School</h3>
              <p>Nurturing minds, building futures, creating leaders of tomorrow through excellence in education.</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/academics">Academics</Link></li>
              <li><Link to="/admissions">Admissions</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Academics</h4>
            <ul className="footer-links">
              <li><a href="#curriculum">Curriculum</a></li>
              <li><a href="#facilities">Facilities</a></li>
              <li><a href="#extracurricular">Activities</a></li>
              <li><a href="#achievements">Achievements</a></li>
              <li><a href="#calendar">Academic Calendar</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <p>123 Education Street</p>
                  <p>Knowledge City, State 123456</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <p>+91-XXXX-XXXX-XX</p>
                  <p>+91-XXXX-XXXX-XX</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <p>info@rkpublicschool.edu.in</p>
                  <p>admissions@rkpublicschool.edu.in</p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" className="social-link facebook">📘</a>
              <a href="#" className="social-link twitter">🐦</a>
              <a href="#" className="social-link instagram">📷</a>
              <a href="#" className="social-link youtube">📺</a>
            </div>
            <div className="newsletter">
              <h5>Newsletter</h5>
              <p>Subscribe for updates</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Your email" />
                <button type="submit">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="container">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} R.K. Public School. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
