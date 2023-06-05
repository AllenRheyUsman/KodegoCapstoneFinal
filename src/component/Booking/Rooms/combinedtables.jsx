
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

export default function CombinedTables() {
  const [bookingData, setBookingData] = useState([]);
  const [guestData, setGuestData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchBookingData = async () => {
  //     try {
  //       const response = await axios.get('https://tester001.herokuapp.com/rooms.php');
  //       setBookingData(response.data);
  //     } catch (error) {
  //       console.error('There was an error fetching booking data:', error);
  //       setError('Error retrieving booking data');
  //     }
  //   };
  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const [roomsData, roomsDeluxxData, roomsPremiereData] = await Promise.all([
          axios.get('https://tester001.herokuapp.com/rooms.php'),
          axios.get('https://tester001.herokuapp.com/roomsdeluxxe.php'),
          axios.get('https://tester001.herokuapp.com/roomspremiere.php'),
        ]);
        
        const combinedBookingData = [
          ...roomsData.data,
          ...roomsDeluxxData.data,
          ...roomsPremiereData.data,
        ];
        
        setBookingData(combinedBookingData);
      } catch (error) {
        console.error('There was an error fetching booking data:', error);
        setError('Error retrieving booking data');
      }
    };

    const fetchGuestData = async () => {
      try {
        const response = await axios.get('https://tester001.herokuapp.com/guestProfile.php');
        setGuestData(response.data);
      } catch (error) {
        console.error('There was an error fetching guest data:', error);
        setError('Error retrieving guest data');
      }
    };

    Promise.all([fetchBookingData(), fetchGuestData()])
      .then(() => setLoading(false))
      .catch(error => {
        console.error('There was an error!', error);
        setError('Error retrieving data');
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const combinedData = guestData
    .map(guestItem => {
      const matchingBookingItem = bookingData.find(
        bookingItem => bookingItem.room_number === guestItem.roomNumber
      );
      if (matchingBookingItem) {
        return {
          guestName: guestItem.name,
          guestContact: guestItem.contact,
          guestEmail: guestItem.email,
          guestCheckInDate: guestItem.checkInDate,
          guestCheckOutDate: guestItem.checkOutDate,
          roomNumber: guestItem.roomNumber,
          roomPrice: matchingBookingItem.room_price,
          roomPhoto: matchingBookingItem.photo,
        };
      }
      return null;
    })
    .filter(Boolean);

  return (
    <div>
      <h2>Active Bookings</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Guest Name</th>
            
            <th>Email</th>
            <th>Check-in Date</th>
            <th>Check-out Date</th>
            <th>Room Number</th>
            <th>Room Price</th>
            <th>Room Photo</th>
           
          </tr>
        </thead>
        <tbody>
          {combinedData.map((item, index) => (
            <tr key={index}>
              <td>{item.guestName}</td>
             
              <td>{item.guestEmail}</td>
              <td>{item.guestCheckInDate}</td>
              <td>{item.guestCheckOutDate}</td>
              <td>{item.roomNumber}</td>
              <td>{item.roomPrice}</td>
              <td>
                <img src={item.roomPhoto} alt="Room" style={{ width: '150px', height: '150px' }} />
              </td>
              
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
