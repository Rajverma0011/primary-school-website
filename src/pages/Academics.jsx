import React from 'react';
import CurriculumOverview from '../components/academics/CurriculumOverview/CurriculumOverview.jsx';
import GradeLevels from '../components/academics/GradeLevels/GradeLevels.jsx';

const Academics = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '2rem 0' }}>Academics</h1>
      <CurriculumOverview />
      <GradeLevels />
    </div>
  );
};

export default Academics;
