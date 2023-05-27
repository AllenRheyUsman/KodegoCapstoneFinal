// import React, { useState } from 'react';
// import { Card, Form, Button, Modal } from 'react-bootstrap';

// export default function Checkout() {
//   const [showModal, setShowModal] = useState(false);
//   const [validated, setValidated] = useState(false);

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     event.preventDefault();

//     if (form.checkValidity() === false) {
//       event.stopPropagation();
//     }

//     setValidated(true);
//   };

//   const handleModalClose = () => {
//     setShowModal(false);
//   };

//   const handlePayNow = () => {
//     if (validated) {
//       setShowModal(true);
//     }
//   };

//   return (
//     <div>
//       <Card>
//         <Card.Body>
//           <Card.Title>Payment Information</Card.Title>
//           <Form noValidate validated={validated} onSubmit={handleSubmit}>
//             <Form.Group controlId="cardNumber">
//               <Form.Label>Card Number</Form.Label>
//               <Form.Control type="text" placeholder="Enter card number" required />
//               <Form.Control.Feedback type="invalid">
//                 Please enter a valid card number.
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group controlId="cardName">
//               <Form.Label>Cardholder Name</Form.Label>
//               <Form.Control type="text" placeholder="Enter cardholder name" required />
//               <Form.Control.Feedback type="invalid">
//                 Please enter the cardholder name.
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group controlId="expiryDate">
//               <Form.Label>Expiry Date</Form.Label>
//               <Form.Control type="text" placeholder="MM/YY" required />
//               <Form.Control.Feedback type="invalid">
//                 Please enter a valid expiry date.
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group controlId="cvv">
//               <Form.Label>CVV</Form.Label>
//               <Form.Control type="text" placeholder="Enter CVV" required />
//               <Form.Control.Feedback type="invalid">
//                 Please enter a valid CVV.
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group controlId="address">
//               <Form.Label>Billing Address</Form.Label>
//               <Form.Control type="text" placeholder="Enter billing address" required />
//               <Form.Control.Feedback type="invalid">
//                 Please enter the billing address.
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Button variant="primary" type="submit" onClick={handlePayNow}>
//               Pay Now
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card>

//       <Modal show={showModal} onHide={handleModalClose} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Confirmation</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p>Payment successful!</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleModalClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }
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
        await axios.post('http://localhost/capstone/add3.php', data);
        setShowModal(true);
      } catch (error) {
        console.error(error);
      }
    }

    setValidated(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handlePayNow = () => {
    if (validated) {
      setShowModal(true);
    }
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>Payment Information</Card.Title>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
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


      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Payment successful!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
