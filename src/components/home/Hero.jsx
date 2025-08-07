import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-background" style={{ backgroundImage: `url(/school-banner.jpg.jfif)` }}>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <span className="hero-badge">Established 2012</span>
              <h1 className="hero-title">
                Education for
                <span className="highlight"> Enlightenment</span>
              </h1>
              <p className="hero-subtitle">
                At R.K. Public School, Basti, we empower students with knowledge, discipline, and values
                to excel in life. Our CBSE curriculum from Pre-Nursery to Class 8 nurtures responsible
                citizens with integrity, respect, and compassion.
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">Pre-8</span>
                  <span className="stat-label">Grade Levels</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">18+</span>
                  <span className="stat-label">Teachers</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">CBSE</span>
                  <span className="stat-label">Curriculum</span>
                </div>
              </div>
              <div className="hero-actions">
                <Link to="/admissions" className="primary-btn">
                  Apply for Admission
                </Link>
                <Link to="/about" className="secondary-btn">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <div className="floating-card academic-card">
                <div className="card-icon">📚</div>
                <h4>CBSE Curriculum</h4>
                <p>Quality education from Pre-Nursery to Class 8</p>
              </div>
              <div className="floating-card sports-card">
                <div className="card-icon">🏆</div>
                <h4>Sports & Values</h4>
                <p>Cricket, Football, Kabaddi with moral education</p>
              </div>
              <div className="floating-card tech-card">
                <div className="card-icon">💻</div>
                <h4>Smart Learning</h4>
                <p>Computer education with science lab facilities</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🎓</div>
              <h3>Quality Education</h3>
              <p>CBSE curriculum with experienced faculty</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🌟</div>
              <h3>Holistic Development</h3>
              <p>Focus on academic, physical, and moral growth</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔬</div>
              <h3>Modern Facilities</h3>
              <p>State-of-the-art labs and infrastructure</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">👥</div>
              <h3>Caring Community</h3>
              <p>Supportive environment for every student</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
