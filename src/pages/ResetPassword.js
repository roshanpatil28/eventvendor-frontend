import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Notification from '../components/AlertNotification';

function ResetPassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [notification, setNotification] = useState(null);
    const navigate = useNavigate();
    const { token } = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setNotification({
                message: 'Passwords do not match',
                type: 'error'
            });
            return;
        }

        try {
            const response = await axios.post('http://localhost:8089/reset-password', { 
                token, 
                newPassword: password 
            });
            if (response.data.success) {
                setNotification({
                    message: 'Password reset successful! Redirecting to login...',
                    type: 'success'
                });
                setTimeout(() => {
                    navigate('/login');
                }, 1500);
            } else {
                setNotification({
                    message: response.data.message || 'Failed to reset password',
                    type: 'error'
                });
            }
        } catch (error) {
            setNotification({
                message: error.response?.data?.message || 'Failed to process request',
                type: 'error'
            });
            console.error('Reset password failed:', error);
        }
    };

    const closeNotification = () => {
        setNotification(null);
    };

    return (
        <div className="reset-password-container">
            {notification && (
                <Notification
                    message={notification.message}
                    type={notification.type}
                    onClose={closeNotification}
                />
            )}
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    placeholder="New Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Confirm New Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
}

export default ResetPassword;