import React from 'react';
import Hero from '../components/home/Hero.jsx';
import NewsSection from '../components/home/NewsSection/NewsSection.jsx';
import YouTubeSection from '../components/common/YouTubeSection/YouTubeSection.jsx';
import './Home.css';

const WhyChooseUs = () => (
  <section className="why-choose-us section">
    <div className="container">
      <h2 className="section-title">Why Choose R.K. Public School?</h2>
      <div className="grid grid-3">
        <div className="feature-card">
          <div className="feature-icon">📚</div>
          <h3>CBSE Excellence</h3>
          <p>Quality CBSE curriculum from Pre-Nursery to Class 8 with English medium instruction and modern teaching methods.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🏫</div>
          <h3>Modern Facilities</h3>
          <p>20 well-equipped classrooms, smart learning technology, science lab, computer lab, and safe transport service.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">👨‍🏫</div>
          <h3>Qualified Faculty</h3>
          <p>18+ experienced teachers with B.Ed/M.Ed qualifications led by Principal K.M. Shukla, committed to student success.</p>
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
            <h3>Admissions Open</h3>
            <p>Rolling admissions for Academic Session July-May. Join our CBSE curriculum from Pre-Nursery to Class 8.</p>
            <a href="/admissions" className="action-btn primary">Apply Now</a>
          </div>
          <div className="action-icon">🎓</div>
        </div>
        <div className="action-card contact-card">
          <div className="action-content">
            <h3>Visit Our Campus</h3>
            <p>Located in Sikandarpur, Basti. Visit us Monday-Saturday, 8:00 AM to 2:00 PM to explore our facilities.</p>
            <a href="/contact" className="action-btn secondary">Contact Us</a>
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
