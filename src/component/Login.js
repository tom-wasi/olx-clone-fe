import React, { useState } from 'react';
import axios from '../api/axiosConfig';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = axios.post('/auth/login', { email, password })
      .then(response => {
      const token = response.data.token;

      localStorage.setItem('token', token);
      setAuthToken(token);
      navigate('/home')
      })
  } catch (error) {
    console.error('Login error:', error);
  }
  };

  return (
    <div className="form">
      <div className="form-body">
      <h2>Sign in</h2>
      <form onSubmit={handleLogin}>
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
        <button className="button-17" type="submit">Sign in</button>
        <label className="reminder-label">Don't have an account? <a href="/register">Sign up</a></label>
      </form>
    </div>
    </div>
  );
};

export default Login;