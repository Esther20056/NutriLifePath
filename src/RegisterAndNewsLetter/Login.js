import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import './NewsLetter.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const validateEmail = (email) => {
    return email.endsWith('@gmail.com');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email) {
      Swal.fire({
        title: 'Error!',
        text: 'Please enter your email address.',
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
        text: 'Please enter a valid email address.',
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
    // Check if password is empty
    else if (!password) {
      Swal.fire({
        title: 'Error!',
        text: 'Please enter your password.',
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
        text: 'Login successful!',
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
    }
  };

  return (
    <div className="signup-form">
      <p className="form-text">Welcome Back</p>
      <form onSubmit={handleLogin} className="signup-form-container">
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
        <button type="submit" className="register-btn">Sign In</button>
        <div className="acct-wrapper">
          <p id="acct-text">Don't have an account?</p>
          <Link to="/signup" className="acct-wrapper-a">SignUp</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
