import React, { useState } from 'react';

import axios from 'axios';

const Form = ({ onSuccess }) => {
  const [roomNumber, setRoomNumber] = useState("");
  const [roomPrice, setRoomPrice] = useState("");
  const [roomAmmen, setRoomAmmen] = useState("");
  const [photo, setPhoto] = useState("");

  const handleSubmit = event => {
    event.preventDefault();

    axios.post('http://localhost/capstone/add.php', {
      room_number: roomNumber,
      room_price: roomPrice,
      room_ammen: roomAmmen,
      photo: photo
    })
    .then(response => {
      console.log(response);
      onSuccess();  // Call the onSuccess function passed in through props
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
  };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Room Number" value={roomNumber} onChange={e => setRoomNumber(e.target.value)} />
            <input type="text" placeholder="Room Price" value={roomPrice} onChange={e => setRoomPrice(e.target.value)} />
            <input type="text" placeholder="Room Amenities" value={roomAmmen} onChange={e => setRoomAmmen(e.target.value)} />
            <input type="text" placeholder="Photo URL" value={photo} onChange={e => setPhoto(e.target.value)} /> 
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
