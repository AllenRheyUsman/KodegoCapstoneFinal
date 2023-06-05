import React, { useState } from 'react';
import { Card, Form, Button, Modal } from 'react-bootstrap';
import axios from 'axios';

export default function Checkout() {
  const [showModal, setShowModal] = useState(false);
  const [validated, setValidated] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const cardNumber = form.elements.cardNumber.value;
      const cardName = form.elements.cardName.value;
      const expiryDate = form.elements.expiryDate.value;
      const cvv = form.elements.cvv.value;
      const address = form.elements.address.value;

      const data = {
        cardNumber,
        cardName,
        expiryDate,
        cvv,
        address,
      };

      try {
        await axios.post('https://tester001.herokuapp.com/addguestProfile.php', data);
        setShowModal(true);
        form.reset(); // Reset the form after successful payment
      } catch (error) {
        console.error(error);
      }
    }

    setValidated(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handlePayNow = async () => {
    if (validated) {
      const form = document.getElementById('checkoutForm');
      const isValid = form.checkValidity();

      if (isValid) {
        try {
          const cardNumber = form.elements.cardNumber.value;
          const cardName = form.elements.cardName.value;
          const expiryDate = form.elements.expiryDate.value;
          const cvv = form.elements.cvv.value;
          const address = form.elements.address.value;

          const data = {
            cardNumber,
            cardName,
            expiryDate,
            cvv,
            address,
          };

          await axios.post('https://tester001.herokuapp.com/addguestProfile.php', data);
          setShowModal(true);
          form.reset(); // Reset the form after successful payment
        } catch (error) {
          console.error(error);
        }
      }
    }
  };

  return (
    <div>
      {!showModal && (
        <Card>
          <Card.Body>
            <Card.Title>Payment Information</Card.Title>
            <Form noValidate validated={validated} onSubmit={handleSubmit} id="checkoutForm">
              <Form.Group controlId="cardNumber">
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="Enter card number"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid card number.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="cardName">
                <Form.Label>Cardholder Name</Form.Label>
                <Form.Control
                  type="text"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  placeholder="Enter cardholder name"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter the cardholder name.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="expiryDate">
                <Form.Label>Expiry Date</Form.Label>
                <Form.Control
                  type="text"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  placeholder="MM/YY"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid expiry date.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="cvv">
                <Form.Label>CVV</Form.Label>
                <Form.Control
                  type="text"
                  value={cvv}
                  onChange={(e) => setCVV(e.target.value)}
                  placeholder="Enter CVV"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid CVV.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="address">
                <Form.Label>Billing Address</Form.Label>
                <Form.Control
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter billing address"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter the billing address.
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit" onClick={handlePayNow}>
                Pay Now
              </Button>
            </Form>
          </Card.Body>
        </Card>
      )}

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Payment Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your payment has been processed successfully.</p>
          <iframe src="https://giphy.com/embed/EopV0wKH3USE9F7fhe" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/ingromania-transparent-EopV0wKH3USE9F7fhe">via GIPHY</a></p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
