import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Tent Booking System</h1>
        <p>Book your perfect tent for any occasion</p>
        <div className="auth-buttons">
          <Link to="/login" className="btn btn-primary">Sign In</Link>
          <Link to="/register" className="btn btn-secondary">Sign Up</Link>
        </div>
      </div>
      
      <div className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Wide Selection</h3>
            <p>Choose from our variety of tents for any event</p>
          </div>
          <div className="feature-card">
            <h3>Easy Booking</h3>
            <p>Simple and quick booking process</p>
          </div>
          <div className="feature-card">
            <h3>Affordable Prices</h3>
            <p>Competitive pricing for all budgets</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;