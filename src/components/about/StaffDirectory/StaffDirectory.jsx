import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StaffDirectory.css';

const StaffDirectory = () => {
  const [staffList, setStaffList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/staff/')
      .then(res => setStaffList(res.data))
      .catch(err => console.error('Error fetching staff:', err));
  }, []);

  return (
    <div className="staff-directory">
      <h2>Meet Our Dedicated Staff</h2>
      <div className="staff-grid">
        {staffList.map(staff => (
          <div key={staff.id} className="staff-card">
            <img
              src={`http://localhost:8000${staff.photo}`}
              alt={staff.name}
              className="staff-image"
            />
            <h3 className="staff-name">{staff.name}</h3>
            <p className="staff-title">{staff.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffDirectory;
