import React from 'react';
import authService from '../services/authService';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    navigate('/');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>User Dashboard</h1>
      <p>Welcome! Book tents and manage your events here.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserDashboard;
