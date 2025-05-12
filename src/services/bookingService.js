import axios from 'axios';

const API_URL = 'http://localhost:8089/api/bookings/';

class BookingService {
  getAllBookings() {
    return axios.get(API_URL);
  }

  getBookingsByUserId(userId) {
    return axios.get(API_URL + 'user/' + userId);
  }

  createBooking(booking) {
    return axios.post(API_URL, booking);
  }

  updateBooking(bookingId, booking) {
    return axios.put(API_URL + bookingId, booking);
  }

  cancelBooking(bookingId) {
    return axios.delete(API_URL + bookingId);
  }
}

export default new BookingService();