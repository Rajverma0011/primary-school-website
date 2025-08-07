import React from 'react';
import './Admissions.css';

const AdmissionHero = () => (
  <section className="admission-hero">
    <div className="container">
      <div className="hero-content">
        <h1>Admissions Open</h1>
        <p>Join R.K. Public School - Where Education Meets Enlightenment</p>
        <div className="admission-highlights">
          <div className="highlight-item">
            <span className="highlight-number">Pre-8</span>
            <span className="highlight-text">Grade Levels</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-number">CBSE</span>
            <span className="highlight-text">Curriculum</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-number">18+</span>
            <span className="highlight-text">Qualified Teachers</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AdmissionProcess = () => (
  <section className="admission-process section">
    <div className="container">
      <h2 className="section-title">Admission Process</h2>
      <div className="process-steps">
        <div className="step-item">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>Visit Campus</h3>
            <p>Visit our school campus to explore facilities and meet our faculty</p>
          </div>
        </div>
        
        <div className="step-item">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>Collect Application Form</h3>
            <p>Obtain the admission form from the school office</p>
          </div>
        </div>
        
        <div className="step-item">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>Submit Documents</h3>
            <p>Submit completed form with all required documents</p>
          </div>
        </div>
        
        <div className="step-item">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3>Interaction/Test</h3>
            <p>Attend basic interaction or entrance test for selected classes</p>
          </div>
        </div>
        
        <div className="step-item">
          <div className="step-number">5</div>
          <div className="step-content">
            <h3>Admission Confirmation</h3>
            <p>Complete fee payment and secure your child's admission</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const RequiredDocuments = () => (
  <section className="required-documents section" style={{ background: 'var(--bg-secondary)' }}>
    <div className="container">
      <h2 className="section-title">Required Documents</h2>
      <div className="documents-grid">
        <div className="document-card">
          <div className="document-icon">📋</div>
          <h3>Birth Certificate</h3>
          <p>Original birth certificate as age proof</p>
        </div>
        
        <div className="document-card">
          <div className="document-icon">🆔</div>
          <h3>Aadhar Cards</h3>
          <p>Aadhar cards of student and both parents</p>
        </div>
        
        <div className="document-card">
          <div className="document-icon">📊</div>
          <h3>Previous Report Card</h3>
          <p>Last academic year's report card (if applicable)</p>
        </div>
        
        <div className="document-card">
          <div className="document-icon">📜</div>
          <h3>Transfer Certificate</h3>
          <p>TC from previous school (for Class 1 and above)</p>
        </div>
        
        <div className="document-card">
          <div className="document-icon">📸</div>
          <h3>Photographs</h3>
          <p>Recent passport-size photographs of the student</p>
        </div>
      </div>
    </div>
  </section>
);

const AdmissionInfo = () => (
  <section className="admission-info section">
    <div className="container">
      <div className="info-grid">
        <div className="info-card">
          <h3>📅 Admission Timeline</h3>
          <div className="info-content">
            <p><strong>Rolling Admissions:</strong> No strict deadlines</p>
            <p><strong>Subject to:</strong> Seat availability</p>
            <p><strong>Best Time:</strong> February to May for next session</p>
          </div>
        </div>
        
        <div className="info-card">
          <h3>🎯 Entrance Requirements</h3>
          <div className="info-content">
            <p><strong>Pre-Nursery to UKG:</strong> No formal test</p>
            <p><strong>Class 1 onwards:</strong> Basic assessment</p>
            <p><strong>Focus Areas:</strong> Communication & basic skills</p>
          </div>
        </div>
        
        <div className="info-card">
          <h3>💰 Fee Structure</h3>
          <div className="info-content">
            <p><strong>Fee Details:</strong> Available at school office</p>
            <p><strong>Payment:</strong> Flexible payment options</p>
            <p><strong>Contact:</strong> For detailed fee structure</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ContactAdmissions = () => (
  <section className="contact-admissions section" style={{ background: 'var(--primary-color)', color: 'white' }}>
    <div className="container">
      <div className="contact-content">
        <div className="contact-text">
          <h2>Ready to Join Our School Family?</h2>
          <p>Contact us today to begin your child's educational journey at R.K. Public School</p>
        </div>
        
        <div className="contact-details">
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div>
              <h4>Visit Us</h4>
              <p>Sikandarpur, near PP Petrol Pump<br />District Basti, Uttar Pradesh</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div>
              <h4>Call Us</h4>
              <p>8400006780<br />9648505296</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <div>
              <h4>Email Us</h4>
              <p>rkpublicbasti@gmail.com</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">🕒</div>
            <div>
              <h4>Office Hours</h4>
              <p>Monday - Saturday<br />8:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Admissions = () => {
  return (
    <div className="admissions-page">
      <AdmissionHero />
      <AdmissionProcess />
      <RequiredDocuments />
      <AdmissionInfo />
      <ContactAdmissions />
    </div>
  );
};

export default Admissions;
