import React from 'react';
import './MissionStatement.css';

const MissionStatement = () => {
  return (
    <div className="mission-container">
      <div className="mission-vision-grid">
        <div className="mission-section">
          <h2>Our Mission</h2>
          <p>
            To provide quality and value-based education to nurture responsible citizens with
            knowledge, discipline, and values that empower students to excel in life and become
            compassionate contributors to society.
          </p>
        </div>

        <div className="vision-section">
          <h2>Our Vision</h2>
          <p>
            To empower students with knowledge, discipline, and values to excel in life,
            fostering integrity, respect, and compassion while building future leaders
            through our motto "Education for Enlightenment."
          </p>
        </div>
      </div>

      <div className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <div className="value-icon">📚</div>
            <h3>Knowledge</h3>
            <p>Pursuit of learning and academic excellence</p>
          </div>
          <div className="value-item">
            <div className="value-icon">⚖️</div>
            <h3>Discipline</h3>
            <p>Self-control and commitment to excellence</p>
          </div>
          <div className="value-item">
            <div className="value-icon">🤝</div>
            <h3>Integrity</h3>
            <p>Honesty and moral principles in all actions</p>
          </div>
          <div className="value-item">
            <div className="value-icon">💖</div>
            <h3>Respect</h3>
            <p>Valuing diversity and treating all with dignity</p>
          </div>
          <div className="value-item">
            <div className="value-icon">❤️</div>
            <h3>Compassion</h3>
            <p>Caring for others and serving the community</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;
