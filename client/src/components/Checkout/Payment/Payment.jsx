import React, { useState } from 'react';
import axios from 'axios';

// Sets up an empty form to collect payment details
const PaymentForm = () => {
  const [paymentType, setPaymentType] = useState('');
  const [approvalCode, setApprovalCode] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make API call to backend to create payment detail
      // Handle API response as needed
      const response = await axios.post('http://localhost:8080/payment-details', {
        payment_type: paymentType,
        approval_code: approvalCode,
        payment_status: paymentStatus
      });
      console.log(response.data);
      // Clear form after successful submission
      setPaymentType('');
      setApprovalCode('');
      setPaymentStatus('');
    } catch (error) {
      console.error('Error submitting payment details:', error);
    }
  };

  return (
    <div>
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Payment Type:
          <input type="text" value={paymentType} onChange={(e) => setPaymentType(e.target.value)} />
        </label>
        <label>
          Approval Code:
          <input type="text" value={approvalCode} onChange={(e) => setApprovalCode(e.target.value)} />
        </label>
        <label>
          Payment Status:
          <input type="text" value={paymentStatus} onChange={(e) => setPaymentStatus(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PaymentForm;
