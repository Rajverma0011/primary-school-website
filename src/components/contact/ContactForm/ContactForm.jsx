import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phonenumber:'',
  });

  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyPXsTqv95r1maJM2YRgIYVLrLGi-t9QOAU_xl9S_L_vpYxqRHLBFRDk9kx0ejBe3tIGg/exec';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      // Prepare data for Google Sheets with proper formatting
      const submissionData = {
        name: formData.name,
        email: formData.email,
        phonenumber: formData.phonenumber,
        message: formData.message,
        timestamp: new Date().toLocaleString('en-IN', {
          timeZone: 'Asia/Kolkata',
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        }),
        source: 'R.K. Public School Website'
      };

      console.log('Submitting data:', submissionData);

      // Create URLSearchParams for better compatibility
      const formDataToSend = new URLSearchParams();
      Object.keys(submissionData).forEach(key => {
        formDataToSend.append(key, submissionData[key]);
      });

      // Send to Google Sheets via Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend,
        mode: 'no-cors'
      });

      // Success message
      setStatus('✅ Thank you for contacting R.K. Public School! We have received your inquiry and will get back to you soon.');
      setFormData({ name: '', email: '', message: '', phonenumber: '' });

      // Optional: Also log success for debugging
      console.log('Form submitted successfully');

    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('❌ There was an error submitting your message. Please try again or call us at 8400006780.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <h3>Send Us a Message</h3>
      {status && <p className="status-message">{status}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className ="form-group">
          <label htmlFor="phonenumber">Phonenumber</label>
          <input
            type="tel"
            id="phonenumber"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
