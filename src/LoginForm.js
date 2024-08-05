import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';

const LoginForm = ({ onLogin }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLogin) {
      onLogin(); // Simulate successful login
      navigate('/home'); // Redirect to homepage
    }
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className='input-box'>
          <input type="text" placeholder='Username' required aria-label="Username" />
          <FaUser className='icon' />
        </div>
        <div className='input-box'>
          <input type="password" placeholder='Password' required aria-label="Password" />
          <FaLock className='icon' />
        </div>
        <div className='remember-forgot'>
          <label>
            <input type='checkbox' /> Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>
        <br/>
        <button type='submit'>Login</button>
        <div className='register-link'>
          <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
