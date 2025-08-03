import React from 'react';

const UserView = () => {
  const handleBooking = () => {
    alert("Ticket Booked Successfully!");
  };

  return (
    <div>
      <h2>Book Your Flight</h2>
      <p>Destination: New York</p>
      <p>Departure: Delhi</p>
      <p>Time: 10:00 AM</p>
      <button onClick={handleBooking}>Book Ticket</button>
    </div>
  );
};

export default UserView;
