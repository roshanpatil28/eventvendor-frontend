import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar({ currentUser, onLogout }) {
    const location = useLocation();

    // Hide navbar on login page
    if (location.pathname === '/login') return null;

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/" className="navbar-logo">
                    Tent Booking System
                </Link>
            </div>

            <ul className="navbar-menu">
                {currentUser ? (
                    <>
                        <li className="nav-item">
                            <Link
                                to={currentUser.role === 'admin' ? '/admin-dashboard' : '/user-dashboard'}
                                className={`nav-link ${
                                    location.pathname.includes('dashboard') ? 'active' : ''
                                }`}
                            >
                                Dashboard
                            </Link>
                        </li>
                        {currentUser.role === 'admin' && (
                            <li className="nav-item">
                                <Link 
                                    to="/tent-management" 
                                    className={`nav-link ${
                                        location.pathname === '/tent-management' ? 'active' : ''
                                    }`}
                                >
                                    Manage Tents
                                </Link>
                            </li>
                        )}
                        <li className="nav-item">
                            <Link
                                to="/notifications"
                                className={`nav-link ${
                                    location.pathname === '/notifications' ? 'active' : ''
                                }`}
                            >
                                Notifications
                            </Link>
                        </li>
                        <li className="nav-item">
                            <button
                                onClick={onLogout}
                                className="nav-button logout-button"
                                aria-label="Logout"
                            >
                                Logout ({currentUser.username})
                            </button>
                        </li>
                    </>
                ) : (
                    <>
                        <li className="nav-item">
                            <Link 
                                to="/register" 
                                className={`nav-link ${
                                    location.pathname === '/register' ? 'active' : ''
                                }`}
                            >
                                Register
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;