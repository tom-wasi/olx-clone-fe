import React, { useState } from 'react';
import axios from '../api/axiosConfig';
import './style.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/auth/register', { firstName, lastName, email, password });
      
      setSuccessMessage('Registration successful! Check your email for confirmation.');

      setTimeout(() => navigate('/login'), 1000);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="form">
      <div className="form-body">
        <h2>Sign up</h2>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleRegister}>
        <label className='form__label'>First Name:</label>
          <input 
            className='form-input'
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        <br />
        <label className="form__label">Last Name:</label>
          
          <input
            className='form-input'
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        <br />
        <label className="form__label">Email:</label>
          <input
            className='form-input'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        <br />
        <label className="form__label">Password:</label>
          <input
            className='form-input'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        <br />
        <button className="button-17" type="submit">Sign up!</button>
        <label className="reminder-label">
            Already have an account? <a href="/login">Sign in</a>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Register;