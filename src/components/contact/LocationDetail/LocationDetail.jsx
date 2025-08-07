import React from 'react';
import './LocationDetail.css';

const LocationDetail = () => {
  return (
    <div className="location-details-container">
      <h3>Our Location</h3>
      <address>
        Sikandarpur, Near Hp petrolpump<br />
        Basti, 272129<br />
        <strong>Phone:</strong> 8400006780,9648505296<br />
        <strong>Email:</strong> rkpublicbasti@gmail.com
      </address>
      <div className="map-container">
        {/* Replace this iframe with the one you copied from Google Maps */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.9459116643916!2d82.2491804!3d26.8734595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3990aa2edb943325%3A0x3286d0a340d0b03d!2sR%20K%20Public%20School!5e0!3m2!1sen!2sin!4v1753890695661!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationDetail;
