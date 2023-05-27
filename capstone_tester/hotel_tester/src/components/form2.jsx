import React, { useState } from 'react';

import axios from 'axios';

const Form2 = ({ onSuccess }) => {
  
  const [name, setname] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [numberOfDays, setnumberOfDays] = useState("");
 

  const handleSubmit = event => {
    event.preventDefault();

    axios.post('http://localhost/capstone/add2.php', {
     
     name: name,
      room_number: roomNumber,
      number_of_days:numberOfDays,
     
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
            <input type="text" placeholder="Name" value={name} onChange={e => setname(e.target.value)} />
            <input type="text" placeholder="Room Number" value={roomNumber} onChange={e => setRoomNumber(e.target.value)} />
            <input type="text" placeholder="Number of Days" value={numberOfDays} onChange={e => setnumberOfDays(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form2;
