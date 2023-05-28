import React, { useState } from 'react';
import axios from 'axios';
import { Card, Form, Button, Alert } from 'react-bootstrap';

const RoomDeluxxe = ({ onSuccess }) => {
  const [roomNumber, setRoomNumber] = useState('');
  const [roomPrice, setRoomPrice] = useState('');
  const [roomAmmen, setRoomAmmen] = useState('');
  const [photo, setPhoto] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();

    axios
      .post('http://localhost/capstone/addRoomsdeluxxe.php', {
        room_number: roomNumber,
        room_price: roomPrice,
        room_ammen: roomAmmen,
        photo: photo
      })
      .then(response => {
        console.log(response);
        onSuccess(); // Call the onSuccess function passed in through props
        setShowSuccessMessage(true); // Show success message
        // Reset form values
        setRoomNumber('');
        setRoomPrice('');
        setRoomAmmen('');
        setPhoto('');
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <Card className="my-4 form2 text-start formbody">
      <Card.Body>
        <Card.Title>DeLuxxe</Card.Title>
        {showSuccessMessage && (
          <Alert variant="success" onClose={() => setShowSuccessMessage(false)} dismissible>
            Room Added
          </Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="roomNumber">
            <Form.Label>Room Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter room number"
              value={roomNumber}
              onChange={e => setRoomNumber(e.target.value)}
              className="forminput"
            />
          </Form.Group>
          <Form.Group controlId="roomPrice">
            <Form.Label>Room Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter room price"
              value={roomPrice}
              onChange={e => setRoomPrice(e.target.value)}
              className="forminput"
            />
          </Form.Group>
          <Form.Group controlId="roomAmmen">
            <Form.Label>Room Amenities</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter room amenities"
              value={roomAmmen}
              onChange={e => setRoomAmmen(e.target.value)}
              className="forminput"
            />
          </Form.Group>
          <Form.Group controlId="photo">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter photo URL"
              value={photo}
              onChange={e => setPhoto(e.target.value)}
              className="forminput"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default RoomDeluxxe;
