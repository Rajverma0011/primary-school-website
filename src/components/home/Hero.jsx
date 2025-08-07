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
              <span className="hero-badge">Established 1995</span>
              <h1 className="hero-title">
                Shaping Tomorrow's
                <span className="highlight"> Leaders</span>
              </h1>
              <p className="hero-subtitle">
                At R.K. Public School, we provide world-class education that nurtures creativity,
                critical thinking, and character development. Join our community of learners
                committed to excellence and innovation.
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">1000+</span>
                  <span className="stat-label">Students</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Teachers</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">95%</span>
                  <span className="stat-label">Success Rate</span>
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
                <h4>Academic Excellence</h4>
                <p>CBSE Curriculum with modern teaching methods</p>
              </div>
              <div className="floating-card sports-card">
                <div className="card-icon">🏆</div>
                <h4>Sports & Activities</h4>
                <p>Comprehensive co-curricular programs</p>
              </div>
              <div className="floating-card tech-card">
                <div className="card-icon">💻</div>
                <h4>Smart Classrooms</h4>
                <p>Technology-enabled learning environment</p>
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
