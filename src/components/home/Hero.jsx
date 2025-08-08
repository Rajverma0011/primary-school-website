import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="modern-hero">
      {/* Main Hero Section */}
      <div className="hero-main">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-container">
          <div className="hero-content-center">
            <div className="hero-badge">
              <span className="badge-icon">🎓</span>
              <span>Established 2012 • Education for Enlightenment</span>
            </div>

            <h1 className="hero-headline">
              Nurturing Tomorrow's
              <span className="headline-highlight"> Leaders</span>
            </h1>

            <p className="hero-description">
              At R.K. Public School, Basti, we provide quality CBSE education from Pre-Nursery to Class 8.
              Our mission is to empower students with knowledge, discipline, and values to excel in life and
              become responsible citizens of tomorrow.
            </p>

            <div className="hero-cta-section">
              <Link to="/admissions" className="cta-primary">
                <span className="cta-icon">📝</span>
                Apply for Admission 2024
              </Link>
              <Link to="/about" className="cta-secondary">
                <span className="cta-icon">ℹ️</span>
                Learn About Us
              </Link>
            </div>

            <div className="hero-stats-row">
              <div className="stat-box">
                <div className="stat-number">Pre-8</div>
                <div className="stat-label">Grade Levels</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">18+</div>
                <div className="stat-label">Expert Teachers</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">CBSE</div>
                <div className="stat-label">Board Affiliation</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">12+</div>
                <div className="stat-label">Years Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Quick Info Cards */}
      <div className="hero-info-cards">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <div className="card-icon blue">📚</div>
              <h4>Academic Excellence</h4>
              <p>CBSE curriculum with modern teaching methodologies and smart classrooms</p>
            </div>
            <div className="info-card">
              <div className="card-icon green">🏆</div>
              <h4>Sports & Activities</h4>
              <p>Cricket, Football, Kabaddi and various co-curricular activities for holistic development</p>
            </div>
            <div className="info-card">
              <div className="card-icon orange">💻</div>
              <h4>Modern Facilities</h4>
              <p>Computer lab, science laboratory, smart boards and CCTV surveillance</p>
            </div>
            <div className="info-card">
              <div className="card-icon purple">🚌</div>
              <h4>Safe Transport</h4>
              <p>Reliable school transport service covering major areas in Basti district</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
