import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const getBookings = async () => {
  try {
    const response = await axios.get(${API_URL}/bookings);
    return response.data;
  } catch (error) {
    console.error('Error fetching bookings:', error);
    throw error;
  }
};

export const createBooking = async (newBooking) => {
  try {
    const response = await axios.post(${API_URL}/bookings, newBooking);
    return response.data;
  } catch (error) {
    console.error('Error creating booking:', error);
    throw error;
  }
};