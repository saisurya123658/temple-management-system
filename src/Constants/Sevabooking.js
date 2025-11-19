const handleSubmit = (e) => {
    e.preventDefault();
  
    const newBooking = {
      name,
      phone,
      date,
      sevaType,
    };
  
    const existingBookings = JSON.parse(localStorage.getItem("sevaBookings")) || [];
    existingBookings.push(newBooking);
    localStorage.setItem("sevaBookings", JSON.stringify(existingBookings));
  
    alert("Booking submitted successfully!");
  };
  