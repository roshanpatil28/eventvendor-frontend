import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await authService.login(username, password);
      if (user.role === 'ADMIN') {
        navigate('/admin');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-page">
      <h1>Welcome to Tent Booking System</h1>
      <p className="subtitle">Book your perfect tent for any occasion</p>

      <div className="login-box">
        <h2>User Login</h2>
        <div className="underline" />

        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Password</label>
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>

          <div className="forgot">Forgot password?</div>

          {error && <p className="error">{error}</p>}

          <button type="submit">Sign In</button>
        </form>

        <p className="register-link">
          Don’t have an account? <a href="/register">Register here</a>
        </p>
      </div>

      <div className="admin-login">
        <span role="img" aria-label="lock">🔒</span> <a href="/">Admin Login</a>
      </div>
    </div>
  );
};

export default Login;
