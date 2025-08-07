import React, { useState } from 'react';
import './ContactForm.css';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phonenumber:'',
    
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8000/api/contact/', formData);
      setStatus('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '', phonenumber: '' });
    } catch (error) {
      console.log('Backend not available, simulating form submission');
      // Simulate successful submission when backend is not available
      setStatus('Thank you for your message! We will get back to you soon. (Demo mode - form not actually submitted)');
      setFormData({ name: '', email: '', message: '', phonenumber: '' });
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
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
