import React from 'react';
import MissionStatement from '../components/about/MissionStatement/MissionStatement.jsx';
import StaffDirectory from '../components/about/StaffDirectory/StaffDirectory.jsx';
import SchoolGallery from '../components/common/SchoolGallery/SchoolGallery.jsx';
import './About.css';

const SchoolHistory = () => (
  <section className="school-history section">
    <div className="container">
      <h2 className="section-title">Our Legacy</h2>
      <div className="history-content">
        <div className="history-text">
          <h3>Founded with Vision</h3>
          <p>
            R.K. Public School was founded in <strong>2012</strong> by <strong>Late Ramphere Kurmi</strong>,
            a visionary educationist who believed in the transformative power of quality education.
            With the motto <em>"Education for Enlightenment,"</em> our school was established with the
            mission to provide value-based education to the children of Basti and surrounding areas.
          </p>
          <p>
            Located in Sikandarpur, near PP Petrol Pump in District Basti, Uttar Pradesh, our school
            has been serving the community for over a decade, nurturing young minds and building
            future leaders through comprehensive education.
          </p>
        </div>
        <div className="founder-tribute">
          <div className="tribute-card">
            <h4>In Memory of Late Ramphere Kurmi</h4>
            <p>
              Our founder's vision continues to inspire us as we strive to provide quality education
              that empowers students with knowledge, discipline, and values to excel in life.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SchoolFeatures = () => (
  <section className="school-features section" style={{ background: 'var(--bg-secondary)' }}>
    <div className="container">
      <h2 className="section-title">Why Choose R.K. Public School?</h2>
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">🎓</div>
          <h3>CBSE Curriculum</h3>
          <p>Comprehensive education from Pre-Nursery to Class 8 following CBSE guidelines</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🏫</div>
          <h3>Modern Facilities</h3>
          <p>20 classrooms including smart classrooms, science lab, and computer lab</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🚌</div>
          <h3>Safe Transport</h3>
          <p>School transport service available across major localities in Basti</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🏃‍♂️</div>
          <h3>Sports & Activities</h3>
          <p>Cricket, Football, Kabaddi, and various cultural activities</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">👨‍🏫</div>
          <h3>Qualified Faculty</h3>
          <p>18+ experienced teachers with B.Ed/M.Ed qualifications</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📹</div>
          <h3>Safety & Security</h3>
          <p>CCTV surveillance and RO drinking water for student safety</p>
        </div>
      </div>
    </div>
  </section>
);

const About = () => {
  // Custom gallery images for About page - replace with actual Facebook photos
  const aboutGalleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "R.K. Public School Main Building",
      caption: "Our Beautiful School Campus in Basti"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Science Laboratory",
      caption: "Well-Equipped Science Laboratory"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Smart Classroom",
      caption: "Modern Smart Classrooms with Technology"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Students Learning",
      caption: "Students Engaged in Learning Activities"
    }
  ];

  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1>About R.K. Public School</h1>
          <p>Education for Enlightenment - Empowering minds since 2012</p>
        </div>
      </div>

      <SchoolHistory />
      <MissionStatement />
      <SchoolFeatures />
      <SchoolGallery images={aboutGalleryImages} title="Our School Life" />
      <StaffDirectory />
    </div>
  );
};

export default About;
