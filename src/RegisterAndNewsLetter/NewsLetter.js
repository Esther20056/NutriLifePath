import React, { useState } from 'react';
import HealthyFood from '../Assets/HealthyFood.png';
import './NewsLetter.css';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

function NewsLetter() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    return email.endsWith('@gmail.com');
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email) {
      const errorMessage = 'Please enter your email.';
      setError(errorMessage);
      Swal.fire({
        title: 'Error!',
        text: errorMessage,
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: {
          popup: 'custom-popup',
          title: 'custom-title',
          content: 'custom-content',
          confirmButton: 'custom-confirm-button',
        }
      });
    } else if (!validateEmail(email)) {
      const errorMessage = 'Please enter a valid Gmail address.';
      setError(errorMessage);
      Swal.fire({
        title: 'Error!',
        text: errorMessage,
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: {
          popup: 'custom-popup',
          title: 'custom-title',
          content: 'custom-content',
          confirmButton: 'custom-confirm-button',
        }
      });
    } else {
      setError('');
      Swal.fire({
        title: 'Success!',
        text: 'Subscription successful',
        icon: 'success',
        confirmButtonText: 'OK',
        customClass: {
          popup: 'custom-popup',
          title: 'custom-title',
          content: 'custom-content',
          confirmButton: 'custom-confirm-button',
        }
      });
    }
  };

  return (
    <div className="newsletter-mainwrapper">
      <div className="text-container">
        <p className="header-text">
          Subscribe to our newsletter for the latest updates on delicious smoothies, nutritious fruit recipes, local and international healthy dishes, and tips for a healthy lifestyle!
        </p>
        <form onSubmit={handleLogin}>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (e.target.value) {
                  setError('');
                }
              }}
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </div>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
      <div className="img-container">
        <img src={HealthyFood} alt="Healthy food" />
      </div>
    </div>
  );
}

export default NewsLetter;
