// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Table } from 'react-bootstrap';
// import CalendarInterface from './calendar';

// const Bookings = () => {
//   const [data, setData] = useState([]);
//   const currentMonth = new Date().toLocaleString('default', { month: 'long' });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost/capstone/rooms.php');
//         setData(response.data);
//       } catch (error) {
//         console.error('There was an error!', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Room Number</th>
//           <th>Room Price</th>
//           <th>Room Amenities</th>
//           <th>Photo</th>
//           <th>Today's Month</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((item, index) => (
//           <tr key={index}>
//             <td>{item.ID}</td>
//             <td>{item.room_number}</td>
//             <td>{item.room_price}</td>
//             <td>{item.room_ammen}</td>
//             <td>
//               <img src={item.photo} alt="Room" style={{ width: '150px', height: '150px' }} />
//             </td>
//             <td>
//               {currentMonth}
//               <div><CalendarInterface /></div>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </Table>
//   );
// };

// export default Bookings;
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
        const response1 = await axios.get('http://localhost/capstone/rooms.php');
        const response2 = await axios.get('http://localhost/capstone/roomspremiere.php');
        const response3 = await axios.get('http://localhost/capstone/roomsdeluxxe.php');

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
          <th>Today's Month</th>
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
              <div><CalendarInterface /></div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Bookings;
