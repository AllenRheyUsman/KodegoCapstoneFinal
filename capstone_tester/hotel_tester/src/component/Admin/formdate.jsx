import React, { useState } from 'react';

const FormDate = ({ onUpdate }) => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate(new Date(checkInDate), new Date(checkOutDate));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="checkInDate">Check-in Date:</label>
        <input
          type="date"
          id="checkInDate"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
        />

        <label htmlFor="checkOutDate">Check-out Date:</label>
        <input
          type="date"
          id="checkOutDate"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormDate;
