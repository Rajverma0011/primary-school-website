import React from 'react';
import TeachingApplication from '../components/careers/TeachingApplication/TeachingApplication.jsx';
import './Careers.css';

const Careers = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Primary Teacher",
      subjects: ["English", "Mathematics", "EVS"],
      qualification: "B.Ed with specialization in Primary Education",
      experience: "2+ years",
      classes: "Classes 1-5"
    },
    {
      id: 2,
      title: "Middle School Teacher",
      subjects: ["Science", "Mathematics", "Social Studies"],
      qualification: "B.Ed/M.Ed with subject specialization",
      experience: "3+ years",
      classes: "Classes 6-8"
    },
    {
      id: 3,
      title: "English Teacher",
      subjects: ["English Language & Literature"],
      qualification: "B.Ed with English specialization",
      experience: "2+ years",
      classes: "All Classes"
    },
    {
      id: 4,
      title: "Computer Teacher",
      subjects: ["Computer Science", "Information Technology"],
      qualification: "B.Tech/MCA with B.Ed",
      experience: "1+ years",
      classes: "Classes 3-8"
    },
    {
      id: 5,
      title: "Early Childhood Educator",
      subjects: ["Pre-Primary Education"],
      qualification: "D.Ed/B.Ed with Early Childhood specialization",
      experience: "1+ years",
      classes: "Pre-Nursery to UKG"
    }
  ];

  const benefits = [
    {
      icon: "💰",
      title: "Competitive Salary",
      description: "Attractive salary package with annual increments"
    },
    {
      icon: "🏥",
      title: "Health Benefits",
      description: "Medical insurance and healthcare facilities"
    },
    {
      icon: "📚",
      title: "Professional Development",
      description: "Regular training programs and skill enhancement"
    },
    {
      icon: "🏖️",
      title: "Work-Life Balance",
      description: "School holidays and reasonable working hours"
    },
    {
      icon: "🎯",
      title: "Career Growth",
      description: "Clear promotion pathways and leadership opportunities"
    },
    {
      icon: "🤝",
      title: "Supportive Environment",
      description: "Collaborative team and supportive management"
    }
  ];

  return (
    <div className="careers-page">
      <div className="careers-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="page-title">
              <span className="title-icon">🎓</span>
              Join Our Teaching Family
            </h1>
            <p className="hero-subtitle">
              Shape young minds and build a brighter future at R.K. Public School, Basti. 
              We're looking for passionate educators to join our dedicated team.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">18+</div>
                <div className="stat-label">Expert Teachers</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">12+</div>
                <div className="stat-label">Years Excellence</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Happy Students</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="why-join-section">
        <div className="container">
          <h2 className="section-title">Why Join R.K. Public School?</h2>
          <div className="benefits-grid">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="job-openings-section">
        <div className="container">
          <h2 className="section-title">Current Openings</h2>
          <p className="section-subtitle">
            We are currently seeking qualified and passionate teachers for the following positions
          </p>
          <div className="jobs-grid">
            {jobOpenings.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-header">
                  <h3 className="job-title">{job.title}</h3>
                  <div className="job-classes">{job.classes}</div>
                </div>
                <div className="job-details">
                  <div className="job-subjects">
                    <strong>Subjects:</strong> {job.subjects.join(", ")}
                  </div>
                  <div className="job-qualification">
                    <strong>Qualification:</strong> {job.qualification}
                  </div>
                  <div className="job-experience">
                    <strong>Experience:</strong> {job.experience}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="requirements-section">
        <div className="container">
          <div className="requirements-content">
            <div className="requirements-text">
              <h2>What We're Looking For</h2>
              <div className="requirements-list">
                <div className="requirement-item">
                  <span className="req-icon">🎓</span>
                  <div>
                    <h4>Educational Qualifications</h4>
                    <p>B.Ed/M.Ed from recognized university with subject specialization</p>
                  </div>
                </div>
                <div className="requirement-item">
                  <span className="req-icon">💡</span>
                  <div>
                    <h4>Teaching Experience</h4>
                    <p>Minimum 1-3 years of teaching experience (freshers also welcome)</p>
                  </div>
                </div>
                <div className="requirement-item">
                  <span className="req-icon">💬</span>
                  <div>
                    <h4>Communication Skills</h4>
                    <p>Excellent English communication and interpersonal skills</p>
                  </div>
                </div>
                <div className="requirement-item">
                  <span className="req-icon">❤️</span>
                  <div>
                    <h4>Passion for Teaching</h4>
                    <p>Genuine love for children and commitment to education</p>
                  </div>
                </div>
                <div className="requirement-item">
                  <span className="req-icon">���</span>
                  <div>
                    <h4>Technology Skills</h4>
                    <p>Basic computer skills and familiarity with modern teaching methods</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="requirements-image">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2Fb2db859bd0fa41d8ac710252845dd01d%2F58556c622ec34048aa073781222d03d0?format=webp&width=1200&quality=95" 
                alt="Happy Teachers and Students"
                className="feature-image"
              />
            </div>
          </div>
        </div>
      </div>

      <TeachingApplication />

      <div className="school-info-section">
        <div className="container">
          <div className="school-info-content">
            <h2>About R.K. Public School</h2>
            <div className="info-grid">
              <div className="info-card">
                <h4>🏫 Established</h4>
                <p>2012 - Over 12 years of educational excellence</p>
              </div>
              <div className="info-card">
                <h4>📍 Location</h4>
                <p>Sikandarpur, Basti, Uttar Pradesh</p>
              </div>
              <div className="info-card">
                <h4>📚 Curriculum</h4>
                <p>CBSE Board - Pre-Nursery to Class 8</p>
              </div>
              <div className="info-card">
                <h4>👨‍🏫 Leadership</h4>
                <p>Principal: K.M. Shukla (Experienced Educator)</p>
              </div>
              <div className="info-card">
                <h4>🌟 Vision</h4>
                <p>Education for Enlightenment</p>
              </div>
              <div className="info-card">
                <h4>🎯 Mission</h4>
                <p>Nurturing Tomorrow's Leaders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
