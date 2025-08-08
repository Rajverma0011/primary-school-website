import React from 'react';
import './YouTubeShowcase.css';

const YouTubeShowcase = () => {
  const openYouTubeChannel = () => {
    window.open('https://www.youtube.com/@ramakantverma122', '_blank', 'noopener,noreferrer');
  };

  const videos = [
    {
      id: 1,
      title: "School Introduction & Campus Tour",
      description: "Discover our modern facilities and learning environment",
      thumbnail: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2Fefb05eacf01b4bdaad05af3ec3a6c4e9?format=webp&width=1200"
    },
    {
      id: 2,
      title: "Cultural Programs & Events",
      description: "Watch our students showcase their talents",
      thumbnail: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2F7818f51370174c5a9469875fb143b5d4?format=webp&width=1200"
    },
    {
      id: 3,
      title: "Academic Excellence",
      description: "See our teaching methodology in action",
      thumbnail: "https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2F5cdcc8e4688240aeabdc484cc1d414d1?format=webp&width=1200"
    }
  ];

  return (
    <section className="youtube-showcase">
      <div className="container">
        <div className="showcase-header">
          <h2 className="showcase-title">
            <span className="title-gradient">📺 Our YouTube Channel</span>
          </h2>
          <p className="showcase-subtitle">
            Experience the vibrant life at R.K. Public School through our video content
          </p>
        </div>

        <div className="youtube-content-grid">
          <div className="featured-video">
            <div className="video-frame" onClick={openYouTubeChannel}>
              <div className="video-overlay">
                <div className="play-button">
                  <div className="play-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="video-info">
                  <h3>R.K. Public School - Official Channel</h3>
                  <p>Click to watch our latest videos</p>
                </div>
              </div>
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2F61ec69b6e26543ce8e7f6db674f3d517?format=webp&width=1200" 
                alt="School Video Preview" 
                className="video-thumbnail"
              />
            </div>
            
            <div className="channel-info">
              <div className="channel-details">
                <div className="channel-avatar">
                  <span>🏫</span>
                </div>
                <div className="channel-text">
                  <h4>R.K. Public School Official</h4>
                  <p>@ramakantverma122</p>
                  <span className="subscriber-count">Join our growing community</span>
                </div>
              </div>
              <button className="subscribe-btn" onClick={openYouTubeChannel}>
                <span className="subscribe-icon">📺</span>
                <span>Subscribe Now</span>
              </button>
            </div>
          </div>

          <div className="video-highlights">
            <h3 className="highlights-title">Featured Content</h3>
            <div className="highlights-grid">
              {videos.map((video) => (
                <div key={video.id} className="highlight-card" onClick={openYouTubeChannel}>
                  <div className="highlight-thumbnail">
                    <img src={video.thumbnail} alt={video.title} />
                    <div className="highlight-play">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="highlight-content">
                    <h4>{video.title}</h4>
                    <p>{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="youtube-cta">
          <div className="cta-content">
            <h3>🎬 Stay Connected with R.K. Public School</h3>
            <p>Subscribe to our YouTube channel for the latest updates, events, and educational content</p>
            <div className="cta-buttons">
              <button className="cta-primary" onClick={openYouTubeChannel}>
                <span>🔔</span>
                <span>Subscribe & Get Notified</span>
              </button>
              <button className="cta-secondary" onClick={openYouTubeChannel}>
                <span>📱</span>
                <span>Watch Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeShowcase;
