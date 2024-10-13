import React, { useState } from 'react';
import HealthyFood from '../Assets/HealthyFood.png'
import './NewsLetter.css'

function NewsLetter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email submitted: ${email}`);
    setEmail('');
  };

  return (
    <div className="newsletter-mainwrapper">
      <div className="text-container">
        <p className="header-text">
        Subscribe to our newsletter for the latest updates on delicious smoothies, nutritious fruit recipes, local and international healthy dishes, and tips for a healthy lifestyle!
        </p>
        <form onSubmit={handleSubmit}>
          <div className="newsletter-form">
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
          </div>
        </form>
      </div>
      <div className="img-container">
        <img src={HealthyFood} alt="" />
      </div>
    </div>
  );
}

export default NewsLetter;
