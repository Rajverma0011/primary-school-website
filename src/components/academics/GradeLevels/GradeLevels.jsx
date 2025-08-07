import React from 'react';
import './GradeLevels.css';

const gradeInfo = [
  {
    id: 1,
    name: 'Pre-Nursery',
    ageGroup: '2-3 years',
    description: 'Foundation learning through play and exploration',
    icon: '🧸'
  },
  {
    id: 2,
    name: 'Nursery',
    ageGroup: '3-4 years',
    description: 'Early childhood development and basic skills',
    icon: '🎨'
  },
  {
    id: 3,
    name: 'LKG',
    ageGroup: '4-5 years',
    description: 'Lower Kindergarten with fundamental learning',
    icon: '📖'
  },
  {
    id: 4,
    name: 'UKG',
    ageGroup: '5-6 years',
    description: 'Upper Kindergarten preparing for formal education',
    icon: '✏️'
  },
  {
    id: 5,
    name: 'Class 1',
    ageGroup: '6-7 years',
    description: 'Beginning of formal CBSE curriculum',
    icon: '📚'
  },
  {
    id: 6,
    name: 'Class 2',
    ageGroup: '7-8 years',
    description: 'Building strong academic foundations',
    icon: '🔢'
  },
  {
    id: 7,
    name: 'Class 3',
    ageGroup: '8-9 years',
    description: 'Enhanced learning with practical approach',
    icon: '🧪'
  },
  {
    id: 8,
    name: 'Class 4',
    ageGroup: '9-10 years',
    description: 'Comprehensive subject knowledge development',
    icon: '🌍'
  },
  {
    id: 9,
    name: 'Class 5',
    ageGroup: '10-11 years',
    description: 'Primary education completion milestone',
    icon: '🏆'
  },
  {
    id: 10,
    name: 'Class 6',
    ageGroup: '11-12 years',
    description: 'Transition to middle school curriculum',
    icon: '📊'
  },
  {
    id: 11,
    name: 'Class 7',
    ageGroup: '12-13 years',
    description: 'Advanced middle school concepts',
    icon: '🔬'
  },
  {
    id: 12,
    name: 'Class 8',
    ageGroup: '13-14 years',
    description: 'Final year preparing for secondary education',
    icon: '🎓'
  }
];

const GradeLevels = () => {
  return (
    <div className="grade-levels-container">
      <div className="grades-header">
        <h2>Grade Levels Offered</h2>
        <p>Comprehensive CBSE education from Pre-Nursery to Class 8</p>
      </div>

      <div className="grades-section">
        <h3 className="section-title">Early Years Foundation</h3>
        <div className="grades-grid">
          {gradeInfo.slice(0, 4).map((grade) => (
            <div key={grade.id} className="grade-card early-years">
              <div className="grade-icon">{grade.icon}</div>
              <h4>{grade.name}</h4>
              <p className="age-group">{grade.ageGroup}</p>
              <p className="description">{grade.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grades-section">
        <h3 className="section-title">Primary Education</h3>
        <div className="grades-grid">
          {gradeInfo.slice(4, 9).map((grade) => (
            <div key={grade.id} className="grade-card primary">
              <div className="grade-icon">{grade.icon}</div>
              <h4>{grade.name}</h4>
              <p className="age-group">{grade.ageGroup}</p>
              <p className="description">{grade.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grades-section">
        <h3 className="section-title">Middle School</h3>
        <div className="grades-grid">
          {gradeInfo.slice(9, 12).map((grade) => (
            <div key={grade.id} className="grade-card middle">
              <div className="grade-icon">{grade.icon}</div>
              <h4>{grade.name}</h4>
              <p className="age-group">{grade.ageGroup}</p>
              <p className="description">{grade.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GradeLevels;
