import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import './NewsLetter.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validateEmail = (email) => {
    return email.endsWith('@gmail.com');
  };
  const validatePassword = (password) => {
    return password.length >= 6; 
  };

  const validateFullName = (name) => {
    return name.trim().length > 0; 
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!validateFullName(fullName)) {
      Swal.fire({
        title: 'Error!',
        text: 'Please enter a valid full name.',
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: {
          popup: 'custom-popup',
          title: 'custom-title',
          content: 'custom-content',
          confirmButton: 'custom-confirm-button',
        }
      });
    }
    // Email Validation
    else if (!email) {
      Swal.fire({
        title: 'Error!',
        text: 'Please enter your email.',
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: {
          popup: 'custom-popup',
          title: 'custom-title',
          content: 'custom-content',
          confirmButton: 'custom-confirm-button',
        }
      });
    } 
    else if (!validateEmail(email)) {
      Swal.fire({
        title: 'Error!',
        text: 'Please enter a valid Gmail address.',
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: {
          popup: 'custom-popup',
          title: 'custom-title',
          content: 'custom-content',
          confirmButton: 'custom-confirm-button',
        }
      });
    } 
    else if (!validatePassword(password)) {
      Swal.fire({
        title: 'Error!',
        text: 'Password must be at least 6 characters long.',
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: {
          popup: 'custom-popup',
          title: 'custom-title',
          content: 'custom-content',
          confirmButton: 'custom-confirm-button',
        }
      });
    } 
    else {
      Swal.fire({
        title: 'Success!',
        text: 'Registration successful!',
        icon: 'success',
        confirmButtonText: 'OK',
        customClass: {
          popup: 'custom-popup',
          title: 'custom-title',
          content: 'custom-content',
          confirmButton: 'custom-confirm-button',
        }
      });
      setEmail('');
      setPassword('');
      setFullName('');
    }
  };

  return (
    <div className="signup-form">
      <p className="form-text">Register now to receive personalized updates, special offers, and more!</p>
      <form onSubmit={handleSignup} className="signup-form-container">
        <div className="form-fields-wrapper">
          <label htmlFor="">Full Name:</label>
          <input
            type="text"
            className="input-fields"
            placeholder='Enter your full name'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-fields-wrapper">
          <label htmlFor="">Email Address:</label>
          <input
            type="email"
            className="input-fields"
            placeholder='Enter your email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-fields-wrapper">
          <label htmlFor="">Password:</label>
          <div className="password-container">
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              aria-describedby="passwordHelp"
              className="input-fields"
            />
            {passwordVisible ? (
              <BsEyeSlash
                onClick={togglePasswordVisibility}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                }}
              />
            ) : (
              <BsEye
                onClick={togglePasswordVisibility}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                }}
              />
            )}
          </div>
        </div>
        <button type="submit" className="register-btn">Sign Up</button>
        <div className="acct-wrapper">
          <p id="acct-text">Already have an account?</p>
          <Link to="/login" className="acct-wrapper-a">LogIn</Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;

