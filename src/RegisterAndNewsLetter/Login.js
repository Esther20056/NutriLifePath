import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import './NewsLetter.css';

function Login() {
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="signup-form">
      <p className="form-text">Welcome Back</p>
      <form action="" className="signup-form-container">
        <div className="form-fields-wrapper">
          <label htmlFor="">Email Address:</label>
          <input type="text" className="input-fields" placeholder='Enter your email address'/>
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
        <div className="acct-wrapper">
  <p id="acct-text">Don't have an account?</p>
  <Link to="/signup" className="acct-wrapper-a">SignUp</Link>
</div>

      </form>
    </div>
  );
}

export default Login;
