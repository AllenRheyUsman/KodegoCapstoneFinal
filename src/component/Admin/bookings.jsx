import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import CalendarInterface from './calendar';

const Bookings = () => {
  const [data, setData] = useState([]);
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get('https://tester001.herokuapp.com/rooms.php');
        const response2 = await axios.get('https://tester001.herokuapp.com/roomspremiere.php');
        const response3 = await axios.get('https://tester001.herokuapp.com/roomsdeluxxe.php');

        const combinedData = [...response1.data, ...response2.data, ...response3.data];
        setData(combinedData);
      } catch (error) {
        console.error('There was an error!', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Room Number</th>
          <th>Room Price</th>
          <th>Room Amenities</th>
          <th>Photo</th>
          <th>Available Rooms</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.ID}</td>
            <td>{item.room_number}</td>
            <td>{item.room_price}</td>
            <td>{item.room_ammen}</td>
            <td>
              <img src={item.photo} alt="Room" style={{ width: '150px', height: '150px' }} />
            </td>
            <td>
              {currentMonth}
              <div><CalendarInterface roomNumber={item.room_number} /></div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Bookings;
