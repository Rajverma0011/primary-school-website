import React from 'react';
import Hero from '../components/home/Hero.jsx';
import NewsSection from '../components/home/NewsSection/NewsSection.jsx';
import './Home.css';

const WhyChooseUs = () => (
  <section className="why-choose-us section">
    <div className="container">
      <h2 className="section-title">Why Choose R.K. Public School?</h2>
      <div className="grid grid-3">
        <div className="feature-card">
          <div className="feature-icon">🎯</div>
          <h3>Academic Excellence</h3>
          <p>CBSE affiliated curriculum with proven track record of academic success and university placements.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🌱</div>
          <h3>Holistic Development</h3>
          <p>Focus on overall personality development including sports, arts, and character building.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">👩‍🏫</div>
          <h3>Expert Faculty</h3>
          <p>Highly qualified and experienced teachers committed to nurturing each student's potential.</p>
        </div>
      </div>
    </div>
  </section>
);

const QuickActions = () => (
  <section className="quick-actions section" style={{ background: 'var(--bg-secondary)' }}>
    <div className="container">
      <h2 className="section-title">Quick Access</h2>
      <div className="grid grid-2">
        <div className="action-card admission-card">
          <div className="action-content">
            <h3>Admission Open</h3>
            <p>Apply now for Academic Year 2024-25. Limited seats available.</p>
            <a href="/admissions" className="action-btn primary">Apply Now</a>
          </div>
          <div className="action-icon">🎓</div>
        </div>
        <div className="action-card contact-card">
          <div className="action-content">
            <h3>Visit Our Campus</h3>
            <p>Schedule a visit to experience our world-class facilities and learning environment.</p>
            <a href="/contact" className="action-btn secondary">Schedule Visit</a>
          </div>
          <div className="action-icon">🏫</div>
        </div>
      </div>
    </div>
  </section>
);

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <WhyChooseUs />
      <NewsSection />
      <QuickActions />
    </div>
  );
};

export default Home;
