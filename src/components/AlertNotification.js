import React from 'react';
import './Alert.css';

const AlertNotification = ({ message, type, onClose }) => {
  return (
    <div className={`notification ${type}`}>
      {message}
      {onClose && (
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
      )}
    </div>
  );
};

export default AlertNotification;
