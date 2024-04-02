import React, { useState } from 'react';
import axios from 'axios';

// Create an empty shipping form component
const ShippingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    country: '',
    postalCode: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/shipping', formData);
      alert('Shipping information submitted successfully!');
      // Clear form fields after submission if needed
      setFormData({
        name: '',
        email: '',
        address: '',
        country: '',
        postalCode: '',
      });
    } catch (error) {
      console.error('Error submitting shipping information:', error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Address:
        <input type="text" name="address" value={formData.address} onChange={handleChange} />
      </label>
      <label>
        Country:
        <input type="text" name="country" value={formData.country} onChange={handleChange} />
      </label>
      <label>
        Postal Code:
        <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ShippingForm;
