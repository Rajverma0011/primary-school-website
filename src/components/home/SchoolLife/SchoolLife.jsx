import React from 'react';
import { Link } from 'react-router-dom';
import './SchoolLife.css';

const SchoolLife = () => {
  const highlightImages = [
    {
      id: 1,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2F61ec69b6e26543ce8e7f6db674f3d517?format=webp&width=800",
      alt: "Morning Assembly",
      title: "Daily Assembly",
      description: "Building discipline and values every morning"
    },
    {
      id: 2,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2F58556c622ec34048aa073781222d03d0?format=webp&width=800",
      alt: "Happy Students",
      title: "Happy Learning",
      description: "Joyful environment for student growth"
    },
    {
      id: 3,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2F7818f51370174c5a9469875fb143b5d4?format=webp&width=800",
      alt: "Cultural Program",
      title: "Cultural Events",
      description: "Celebrating festivals and cultural programs"
    },
    {
      id: 4,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2Fff3f60e7802d4567808767a5455a08b9?format=webp&width=800",
      alt: "Dance Performance",
      title: "Talent Showcase",
      description: "Students expressing creativity through arts"
    }
  ];

  return (
    <section className="school-life-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-icon">🎓</span>
            Life at R.K. Public School
          </h2>
          <p className="section-subtitle">
            Discover the vibrant learning environment where students grow, learn, and excel
          </p>
        </div>

        <div className="life-highlights-grid">
          {highlightImages.map((image) => (
            <div key={image.id} className="life-highlight-card">
              <div className="highlight-image-wrapper">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="highlight-image"
                />
                <div className="highlight-overlay">
                  <div className="overlay-content">
                    <h4 className="highlight-title">{image.title}</h4>
                    <p className="highlight-description">{image.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="life-stats-section">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Happy Students</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">18+</div>
              <div className="stat-label">Dedicated Teachers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">12+</div>
              <div className="stat-label">Years of Excellence</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Success Rate</div>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <Link to="/gallery" className="view-gallery-btn">
            <span className="btn-icon">📸</span>
            <span>View Complete Gallery</span>
            <span className="arrow-icon">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SchoolLife;
