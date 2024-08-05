import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterForm.css';
import { FaUser, FaLock, FaEnvelope, FaPhone } from 'react-icons/fa';

const RegisterForm = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    phonenumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleTermsChange = () => {
    setTermsAccepted(!termsAccepted);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted', formData);
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className='input-box'>
          <input
            type="text"
            name="username"
            placeholder='Username'
            value={formData.username}
            onChange={handleInputChange}
            required
            aria-label="Username"
          />
          <FaUser className='icon' />
        </div>
        <div className='input-box'>
          <input
            type="text"
            name="phonenumber"  // Corrected this line
            placeholder='Phone number'
            value={formData.phonenumber} // Corrected this line
            onChange={handleInputChange}
            required
            aria-label="Phonenumber"
          />
          <FaPhone className='icon' />
        </div>
        <div className='input-box'>
          <input
            type="email"
            name="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleInputChange}
            required
            aria-label="Email"
          />
          <FaEnvelope className='icon' />
        </div>
        <div className='input-box'>
          <input
            type="password"
            name="password"
            placeholder='Password'
            value={formData.password}
            onChange={handleInputChange}
            required
            aria-label="Password"
          />
          <FaLock className='icon' />
        </div>
        <div className='input-box'>
          <input
            type="password"
            name="confirmPassword"
            placeholder='Confirm Password'
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
            aria-label="Confirm Password"
          />
          <FaLock className='icon' />
        </div>
        <div className='terms-box'>
          <input
            type="checkbox"
            id="terms"
            checked={termsAccepted}
            onChange={handleTermsChange}
            required
          />
          <label htmlFor="terms">
            I agree to the <a href="/terms">Terms and Conditions</a>
          </label>
        </div>
        <button type='submit' disabled={!termsAccepted}>Register</button>
        <div className='login-link'>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
