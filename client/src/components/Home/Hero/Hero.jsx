import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.scss';

const Hero = () => {
  // Use the useNavigate hook for navigation
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div>
        <h1>Better Training Better You</h1>
      </div>
      <div className="images">
        <img src="/path-to-your-image-1.png" alt="Training Image 1" />
        <img src="/path-to-your-image-2.png" alt="Training Image 2" />
        <img src="/path-to-your-image-3.png" alt="Training Image 3" />
      </div>
      <div className="action">
        <button onClick={() => navigate('/shop')}>Shop</button>
      </div>
     </div>
  
  );
};

export default Hero;
