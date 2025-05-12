import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import TentManagement from './pages/TentManagement';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Home from './components/Home';
import AuthService from './services/authService';
import AuthPage from './pages/AuthPage';
import NotificationPage from './pages/NotificationPage';
import Login from './pages/Login';
import Register from './pages/RegisterPage';
import './App.css';

const ProtectedRoute = ({ user, role, children }) => {
  if (!user) return <Navigate to="/login" />;
  if (role && user.role !== role) return <Navigate to="/" />;
  return children;
};

const AppContent = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthService.logout();
    setCurrentUser(null);
    navigate('/login');
  };

  return (
    <>
      <Navbar currentUser={currentUser} onLogout={handleLogout} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/auth" element={<AuthPage setCurrentUser={setCurrentUser} />} />
          <Route
            path="/user-dashboard"
            element={
              <ProtectedRoute user={currentUser}>
                <UserDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute user={currentUser} role="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tent-management"
            element={
              <ProtectedRoute user={currentUser} role="admin">
                <TentManagement />
              </ProtectedRoute>
            }
          />
          <Route path="/notifications" element={<NotificationPage />} />
        </Routes>
      </div>
    </>
  );
};

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) setCurrentUser(user);
  }, []);

  return (
    <Router>
      <AppContent currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </Router>
  );
}

export default App;
