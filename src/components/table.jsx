import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function TableGuest() {
  const [data, setData] = useState([]);

  const refreshData = () => {
    axios.get('https://tester001.herokuapp.com/index4.php')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  // Call refreshData on component mount
  useEffect(() => {
    refreshData();
  }, []);

  const handleFormSuccess = () => {
    refreshData(); // Call refreshData after form submission
  };

  return (
    <div>
      {/* Render table using data */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Contact Number</th>
            <th>Email</th>
            <th>Check-in Date</th>
            <th>Check-out Date</th>
            <th>Room Number</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.ID}</td>
              <td>{item.name}</td>
              <td>{item.contactNumber}</td>
              <td>{item.email}</td>
              <td>{item.checkInDate}</td>
              <td>{item.checkOutDate}</td>
              <td>{item.roomNumber}</td>
              {/* Add more table cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Render other components or forms */}
    </div>
  );
}
