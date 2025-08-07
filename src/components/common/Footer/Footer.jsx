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
              <p>Education for Enlightenment - Empowering students with knowledge, discipline, and values to excel in life.</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/academics">Academics</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
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
                  <p>Sikandarpur, near PP Petrol Pump</p>
                  <p>District Basti, Uttar Pradesh</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <p>8400006780</p>
                  <p>9648505296</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <p>rkpublicbasti@gmail.com</p>
                  <p>admissions: rkpublicbasti@gmail.com</p>
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
