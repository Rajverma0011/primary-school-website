import React from 'react';
import './GradeLevels.css';

// Dummy data for grade levels
const grades = [
  'Kindergarten', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6'
];

const GradeLevels = () => {
  return (
    <div className="grade-levels-container">
      <h3>Programs Offered</h3>
      <div className="grades-list">
        {grades.map((grade) => (
          <div key={grade} className="grade-card">
            {grade}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GradeLevels;
