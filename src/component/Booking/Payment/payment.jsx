import React, { useState } from 'react';
import { Card, Button, Form, Modal } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import Checkout from './checkout';

export default function Payment() {
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [contactNumberError, setContactNumberError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [roomNumber, setRoomNumber] = useState('');
  const [proceedToPaymentClicked, setProceedToPaymentClicked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;

    if (!name) {
      setNameError('Please enter your name.');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!contactNumber) {
      setContactNumberError('Please enter your contact number.');
      isValid = false;
    } else {
      setContactNumberError('');
    }

    if (!email) {
      setEmailError('Please enter your email.');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (isValid) {
      try {
        const response = await axios.post('https://tester001.herokuapp.com/addguestProfile.php', {
          name: name,
          contactNumber: contactNumber,
          email: email,
          checkInDate: checkInDate,
          checkOutDate: checkOutDate,
          roomNumber: roomNumber,
        });

        // Handle the response accordingly (e.g., show success message, redirect, etc.)
        console.log('Form data successfully submitted:', response.data);
        setShowModal(true);
        setProceedToPaymentClicked(true);
      } catch (error) {
        // Handle error
        console.log('Error submitting form data:', error);
      }
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {!proceedToPaymentClicked && (
        <div>
          <Card>
            <Card.Body>
              <Form.Group className="mb-3" controlId="roomNumber">
                <Form.Label>Room Name</Form.Label>
                <Form.Control
                  type="text"
                  value={roomNumber}
                  onChange={(e) => setRoomNumber(e.target.value)}
                  required
                />
              </Form.Group>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    isInvalid={!!nameError}
                    required
                  />
                  <Form.Control.Feedback type="invalid">{nameError}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="contactNumber">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    type="tel"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    isInvalid={!!contactNumberError}
                    required
                  />
                  <Form.Control.Feedback type="invalid">{contactNumberError}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    isInvalid={!!emailError}
                    required
                  />
                  <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="checkInDate">
                  <Form.Label>Check-in Date</Form.Label>
                  <DatePicker
                    selected={checkInDate}
                    onChange={(date) => setCheckInDate(date)}
                    dateFormat="MMMM d, yyyy"
                    className="form-control"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="checkOutDate">
                  <Form.Label>Check-out Date</Form.Label>
                  <DatePicker
                    selected={checkOutDate}
                    onChange={(date) => setCheckOutDate(date)}
                    dateFormat="MMMM d, yyyy"
                    className="form-control"
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Proceed to Payment
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      )}

      {proceedToPaymentClicked && (
        <Checkout handleCloseModal={handleCloseModal} />
      )}

      <Modal show={showModal} onHide={handleCloseModal} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Checkout handleCloseModal={handleCloseModal} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
