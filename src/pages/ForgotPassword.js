import React, { useState } from 'react';
import axios from 'axios';
import Notification from '../components/AlertNotification';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [notification, setNotification] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8089/forgot-password', { email });
            if (response.data.success) {
                setNotification({
                    message: 'Password reset link sent to your email!',
                    type: 'success'
                });
            } else {
                setNotification({
                    message: response.data.message || 'Failed to send reset link',
                    type: 'error'
                });
            }
        } catch (error) {
            setNotification({
                message: error.response?.data?.message || 'Failed to process request',
                type: 'error'
            });
            console.error('Forgot password failed:', error);
        }
    };

    const closeNotification = () => {
        setNotification(null);
    };

    return (
        <div className="forgot-password-container">
            {notification && (
                <Notification
                    message={notification.message}
                    type={notification.type}
                    onClose={closeNotification}
                />
            )}
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Send Reset Link</button>
            </form>
            <p className="back-to-login">
                Remember your password? <a href="/login">Login</a>
            </p>
        </div>
    );
}

export default ForgotPassword;