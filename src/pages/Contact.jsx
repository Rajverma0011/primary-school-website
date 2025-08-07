import React from 'react';
import ContactForm from '../components/contact/ContactForm/ContactForm.jsx';
import LocationDetail from '../components/contact/LocationDetail/LocationDetail.jsx';

const Contact = () => {
  const contactPageStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '2rem auto',
    alignItems: 'start'
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Get In Touch</h1>
      <div style={contactPageStyle}>
        <LocationDetail />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
