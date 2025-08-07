import React from 'react';
import './CurriculumOverview.css';

const CurriculumOverview = () => {
  return (
    <div className="curriculum-container">
      <div className="curriculum-header">
        <h2>CBSE Curriculum Excellence</h2>
        <p>
          R.K. Public School follows the CBSE (Central Board of Secondary Education) curriculum,
          providing quality education from Pre-Nursery to Class 8 with English as the medium of instruction.
        </p>
      </div>

      <div className="curriculum-features">
        <div className="curriculum-grid">
          <div className="curriculum-card">
            <div className="curriculum-icon">📚</div>
            <h3>Core Subjects</h3>
            <ul>
              <li>English</li>
              <li>Hindi</li>
              <li>Mathematics</li>
              <li>Science</li>
              <li>Social Studies</li>
            </ul>
          </div>

          <div className="curriculum-card">
            <div className="curriculum-icon">💻</div>
            <h3>Modern Education</h3>
            <ul>
              <li>Computer Education</li>
              <li>Smart Classroom Learning</li>
              <li>Science Laboratory</li>
              <li>Interactive Teaching</li>
            </ul>
          </div>

          <div className="curriculum-card">
            <div className="curriculum-icon">🎭</div>
            <h3>Value-Based Learning</h3>
            <ul>
              <li>Moral Education</li>
              <li>Character Development</li>
              <li>Cultural Activities</li>
              <li>Life Skills</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="academic-info">
        <div className="info-grid">
          <div className="info-item">
            <h4>📅 Academic Session</h4>
            <p>July to May</p>
          </div>
          <div className="info-item">
            <h4>🕐 School Timings</h4>
            <p>8:00 AM to 2:00 PM</p>
          </div>
          <div className="info-item">
            <h4>🌍 Medium of Instruction</h4>
            <p>English</p>
          </div>
          <div className="info-item">
            <h4>📋 Board Affiliation</h4>
            <p>CBSE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumOverview;
