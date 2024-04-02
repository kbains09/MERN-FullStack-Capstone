import React, { useState } from 'react';
import axios from 'axios';
import './Newsletter.scss';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the form from causing a page reload
    try {
      // Endpoint for newsletter subscription not active yet
      await axios.post('http://localhost:8080/newsletter', { email });
      alert('Thank you for subscribing!');
      setEmail(''); // Reset the email input field after successful submission
    } catch (error) {
      console.error('Subscription error:', error);
      alert('Failed to subscribe. Please try again later.');
    }
  };

  return (
    <div className="newsletter">
      <h2>Subscribe to Our Newsletter</h2>
      <div className="content-wrapper">
        <p className="subscription-text">Get the latest news and updates right in your inbox.</p>
        <form className="subscription-form" onSubmit={handleSubmit}>
          <input
            className="email-input"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="subscribe-button">Subscribe</button>
        </form>
      </div>
    </div>
  
  );
};

export default Newsletter;
