import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phonenumber: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const GOOGLE_SCRIPT_URL =
    'https://script.google.com/macros/s/AKfycbxoqjugbBYBj2mXWT-LghvsIOkbgMt3rHoMdK9Q34MpHqBYuYgrXo19sWPJpQujdQ2C/exec';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      // Create form data for Google Apps Script compatibility
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', `${formData.message}\n\nPhone: ${formData.phonenumber}`);
      formDataToSend.append('timestamp', new Date().toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'}));

      // Use no-cors mode to avoid CORS issues with Google Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataToSend
      });

      // Since we're using no-cors mode, we can't check response status
      // Assume success if no error is thrown
      setStatus('✅ Thank you for contacting R.K. Public School! We have received your inquiry and will get back to you soon.');
      setFormData({ name: '', email: '', phonenumber: '', message: '' });

    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus(
        '❌ There was an error submitting your message. Please try again or call us at 8400006780.'
      );
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
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Your Message</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
