import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StaffDirectory.css';

const StaffDirectory = () => {
  const [staffList, setStaffList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fallback staff data
  const fallbackStaff = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      position: "Principal",
      photo: "/images/manager.jpg.jfif",
      qualification: "M.Ed, Ph.D in Education",
      experience: "15+ years"
    },
    {
      id: 2,
      name: "Mr. Rajesh Kumar",
      position: "Vice Principal",
      photo: "/images/manager.jpg.jfif",
      qualification: "M.A, B.Ed",
      experience: "12+ years"
    },
    {
      id: 3,
      name: "Ms. Anjali Gupta",
      position: "Academic Coordinator",
      photo: "/images/manager.jpg.jfif",
      qualification: "M.Sc, B.Ed",
      experience: "10+ years"
    },
    {
      id: 4,
      name: "Mr. Suresh Patel",
      position: "Sports Coordinator",
      photo: "/images/manager.jpg.jfif",
      qualification: "M.P.Ed",
      experience: "8+ years"
    }
  ];

  useEffect(() => {
    // Try to fetch from backend, fallback to demo data if not available
    axios.get('http://localhost:8000/api/staff/')
      .then(res => {
        setStaffList(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log('Backend not available, using fallback staff data');
        setStaffList(fallbackStaff);
        setLoading(false);
      });
  }, []);

  return (
    <div className="staff-directory">
      <h2>Meet Our Dedicated Staff</h2>
      {loading ? (
        <div className="loading-state">
          <p>Loading staff information...</p>
        </div>
      ) : (
        <div className="staff-grid">
          {staffList.map(staff => (
            <div key={staff.id} className="staff-card">
              <img
                src={staff.photo}
                alt={staff.name}
                className="staff-image"
                onError={(e) => {
                  e.target.src = "/images/manager.jpg.jfif";
                }}
              />
              <h3 className="staff-name">{staff.name}</h3>
              <p className="staff-title">{staff.position}</p>
              {staff.qualification && (
                <p className="staff-qualification">{staff.qualification}</p>
              )}
              {staff.experience && (
                <p className="staff-experience">{staff.experience}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StaffDirectory;
