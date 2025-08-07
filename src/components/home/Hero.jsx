import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container" style={{ backgroundImage: `url(/school-banner.jpg.jfif)` }}>
      <div className="hero-content">
        <h1 className="hero-title">Excellence in Education</h1>
        <p className="hero-subtitle">Nurturing young minds for a bright future.</p>
        <button className="hero-button">Learn More</button>
      </div>
    </div>
  );
};

export default Hero;
