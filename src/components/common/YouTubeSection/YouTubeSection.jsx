import React from 'react';
import './YouTubeSection.css';

const YouTubeSection = () => {
  const openYouTubeChannel = () => {
    window.open('https://www.youtube.com/@ramakantverma122', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="youtube-section">
      <div className="container">
        <div className="youtube-content">
          <div className="youtube-text">
            <h2 className="youtube-title">
              <span className="youtube-icon">📺</span>
              Watch Our School Journey
            </h2>
            <p className="youtube-description">
              Discover the vibrant learning environment at R.K. Public School through our video content. 
              See our students in action, explore our facilities, and witness the joy of learning.
            </p>
            <div className="youtube-features">
              <div className="feature-item">
                <span className="feature-icon">🎬</span>
                <span>School Activities & Events</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🏫</span>
                <span>Campus Tours & Facilities</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🎓</span>
                <span>Student Achievements</span>
              </div>
            </div>
            <button className="youtube-cta" onClick={openYouTubeChannel}>
              <span className="yt-icon">📺</span>
              <span>Visit Our YouTube Channel</span>
              <span className="external-icon">↗</span>
            </button>
          </div>
          
          <div className="youtube-preview">
            <div className="video-frame" onClick={openYouTubeChannel}>
              <div className="video-overlay">
                <div className="play-button">
                  <span className="play-icon">▶️</span>
                </div>
                <div className="video-info">
                  <h4>R.K. Public School Introduction</h4>
                  <p>Click to watch on YouTube</p>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="School Video Preview" 
                className="video-thumbnail"
              />
            </div>
            
            <div className="channel-info">
              <div className="channel-details">
                <div className="channel-avatar">📚</div>
                <div className="channel-text">
                  <h5>R.K. Public School</h5>
                  <p>@ramakantverma122</p>
                </div>
              </div>
              <button className="subscribe-btn" onClick={openYouTubeChannel}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
