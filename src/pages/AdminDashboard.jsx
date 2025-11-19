

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await axios.get('http://localhost:6000/api/seva/add-seva');
      setBookings(response.data);
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <h2>All Bookings</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            {booking.name} - {booking.seva_name} on {booking.booking_date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;;
