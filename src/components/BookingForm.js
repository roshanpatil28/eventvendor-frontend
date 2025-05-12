import React, { useState } from 'react';
import bookingService from '../services/bookingService';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const BookingForm = () => {
  const [tentId, setTentId] = useState('');
  const [date, setDate] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    bookingService.createBooking({ tentId, date })
      .then(() => {
        alert('Booked Successfully');
        setTentId('');
        setDate('');
      })
      .catch((error) => {
        console.error('Booking failed:', error);
        alert('Booking failed. Please try again.');
      });
  };

  return (                 
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tent ID"
        value={tentId}
        onChange={(e) => setTentId(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      
       
      
      <button type="submit">Book Tent</button>
    </form>
  );
};

export default BookingForm;