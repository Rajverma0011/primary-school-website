import React from 'react';
import MissionStatement from '../components/about/MissionStatement/MissionStatement.jsx';
import StaffDirectory from '../components/about/StaffDirectory/StaffDirectory.jsx';

const About = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '2rem 0' }}>About Our School</h1>
      <MissionStatement />
      <StaffDirectory />
    </div>
  );
};

export default About;
