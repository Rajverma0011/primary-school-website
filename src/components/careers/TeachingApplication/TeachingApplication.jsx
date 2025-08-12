import React, { useState } from 'react';
import './TeachingApplication.css';

const TeachingApplication = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    qualification: '',
    experience: '',
    subjects: '',
    currentSalary: '',
    expectedSalary: '',
    availableFrom: '',
    resume: null,
    coverLetter: '',
    references: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const positions = [
    'Primary Teacher (Classes 1-5)',
    'Middle School Teacher (Classes 6-8)',
    'English Teacher',
    'Mathematics Teacher',
    'Science Teacher',
    'Computer Teacher',
    'Early Childhood Educator (Pre-Nursery to UKG)',
    'Physical Education Teacher',
    'Art & Craft Teacher',
    'Music Teacher',
    'Other (Please specify in cover letter)'
  ];

  const experienceLevels = [
    'Fresher (0 years)',
    '1-2 years',
    '3-5 years',
    '6-10 years',
    '10+ years'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Prepare form data for submission
      const submissionData = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        position: formData.position,
        qualification: formData.qualification,
        experience: formData.experience,
        subjects: formData.subjects,
        currentSalary: formData.currentSalary,
        expectedSalary: formData.expectedSalary,
        availableFrom: formData.availableFrom,
        coverLetter: formData.coverLetter,
        references: formData.references,
        timestamp: new Date().toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'}),
        source: 'R.K. Public School - Teaching Application',
        type: 'Teaching Application'
      };

      // Convert to URLSearchParams for proper form submission
      const params = new URLSearchParams();
      Object.keys(submissionData).forEach(key => {
        params.append(key, submissionData[key]);
      });

      const response = await fetch('https://script.google.com/macros/s/AKfycbyPXsTqv95r1maJM2YRgIYVLrLGi-t9QOAU_xl9S_L_vpYxqRHLBFRDk9kx0ejBe3tIGg/exec', {
        method: 'POST',
        body: params,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          position: '',
          qualification: '',
          experience: '',
          subjects: '',
          currentSalary: '',
          expectedSalary: '',
          availableFrom: '',
          resume: null,
          coverLetter: '',
          references: ''
        });
        // Reset file input
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) fileInput.value = '';
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="teaching-application-section">
      <div className="container">
        <div className="application-header">
          <h2 className="application-title">
            <span className="title-icon">📝</span>
            Apply for Teaching Position
          </h2>
          <p className="application-subtitle">
            Fill out the application form below and we'll get back to you within 48 hours
          </p>
        </div>

        <div className="application-content">
          <div className="application-info">
            <h3>Application Process</h3>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Submit Application</h4>
                  <p>Fill out this form with your details and qualifications</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Initial Review</h4>
                  <p>Our HR team will review your application within 48 hours</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Interview</h4>
                  <p>Selected candidates will be called for interview</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Final Selection</h4>
                  <p>Successful candidates will receive offer letter</p>
                </div>
              </div>
            </div>

            <div className="contact-info">
              <h4>Have Questions?</h4>
              <p>Contact our HR Department:</p>
              <div className="contact-details">
                <div>📧 rkpublicschoolbasti@gmail.com</div>
                <div>📞 +91 9415204356</div>
                <div>🕐 Monday - Saturday, 9:00 AM - 4:00 PM</div>
              </div>
            </div>
          </div>

          <form className="application-form" onSubmit={handleSubmit}>
            <div className="form-section">
              <h3>Personal Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your mobile number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="position">Position Applied For *</label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Position</option>
                    {positions.map((position) => (
                      <option key={position} value={position}>
                        {position}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>Educational & Professional Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="qualification">Highest Qualification *</label>
                  <input
                    type="text"
                    id="qualification"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., B.Ed in Mathematics, M.A in English"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="experience">Teaching Experience *</label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Experience</option>
                    {experienceLevels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subjects">Subjects You Can Teach *</label>
                <input
                  type="text"
                  id="subjects"
                  name="subjects"
                  value={formData.subjects}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., Mathematics, Science, English"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="currentSalary">Current Salary (if applicable)</label>
                  <input
                    type="text"
                    id="currentSalary"
                    name="currentSalary"
                    value={formData.currentSalary}
                    onChange={handleInputChange}
                    placeholder="Current salary per month"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="expectedSalary">Expected Salary</label>
                  <input
                    type="text"
                    id="expectedSalary"
                    name="expectedSalary"
                    value={formData.expectedSalary}
                    onChange={handleInputChange}
                    placeholder="Expected salary per month"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="availableFrom">Available From *</label>
                <input
                  type="date"
                  id="availableFrom"
                  name="availableFrom"
                  value={formData.availableFrom}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-section">
              <h3>Additional Information</h3>
              <div className="form-group">
                <label htmlFor="resume">Upload Resume (PDF/DOC)</label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                />
                <small>Maximum file size: 5MB</small>
              </div>

              <div className="form-group">
                <label htmlFor="coverLetter">Cover Letter / Why do you want to join us? *</label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Tell us why you want to join R.K. Public School and what makes you a great teacher..."
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="references">References (Name, Position, Contact)</label>
                <textarea
                  id="references"
                  name="references"
                  value={formData.references}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Please provide 2-3 professional references..."
                ></textarea>
              </div>
            </div>

            {submitStatus === 'success' && (
              <div className="success-message">
                <span className="success-icon">✅</span>
                <p>
                  <strong>Application Submitted Successfully!</strong><br />
                  Thank you for your interest in joining R.K. Public School. We have received your application and will review it within 48 hours. You will receive an email confirmation shortly.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="error-message">
                <span className="error-icon">❌</span>
                <p>
                  <strong>Application Submission Failed!</strong><br />
                  There was an error submitting your application. Please try again or contact us directly at rkpublicschoolbasti@gmail.com
                </p>
              </div>
            )}

            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="loading-spinner"></span>
                  <span>Submitting Application...</span>
                </>
              ) : (
                <>
                  <span className="submit-icon">📤</span>
                  <span>Submit Application</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeachingApplication;
