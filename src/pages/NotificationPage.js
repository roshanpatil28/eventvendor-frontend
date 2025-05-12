import React, { useState, useEffect } from 'react';
import AlertNotification from '../components/AlertNotification'; // ✅ Correct component name
import './NotificationPage.css';

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const mockNotifications = [
      { id: 1, message: 'New booking request for Tent A', type: 'info', time: '2 hours ago' },
      { id: 2, message: 'Payment received for Booking #123', type: 'success', time: '1 day ago' }
    ];
    setNotifications(mockNotifications);
  }, []);

  const handleDismiss = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="notification-page">
      <h2>Notifications</h2>
      <div className="notification-list">
        {notifications.map(notification => (
          <AlertNotification
            key={notification.id}
            message={`${notification.message} (${notification.time})`}
            type={notification.type}
            onClose={() => handleDismiss(notification.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationPage;
