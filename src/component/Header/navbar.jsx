import React, { useState } from 'react';
import Logo from './logo';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
    setUsername('');
    setPassword('');
  };

  const handleModalSubmit = async () => {
    try {
      const response = await axios.get('https://tester001.herokuapp.com/adminAccount.php', {
        params: {
          name: username,
          password: password,
        },
      });

      const { success } = response.data;

      if (success) {
        setIsAdmin(true);
        handleModalClose();
      } else {
        // Handle incorrect credentials
        console.log('Incorrect username or password');
      }
    } catch (error) {
      // Handle error
      console.log('Error: ', error);
    }
  };

  return (
    <div className="row mx-0 px-0 adminhead1">
      <div className="col-3 mx-0 px-0 pt-3 adminlinks">
        <Logo text="Home" to="/" />
      </div>
      <div className="col-3  pt-3 adminlinks ">
        <Logo text="Rooms" to="/booking" className="adminlinks"/>
      </div>
      <div className="col-3 mx-0 px-0 pt-3 adminlinks">
        {isAdmin && <Logo text="Admin" to="/admin" className="adminlinks"/>}
      </div>
      <div className="col-3 mx-0 px-0 pt-3 adminlinks">
        {!isAdmin && (
          <Button variant="" onClick={() => setShowModal(true)}>
            Sign-Up
          </Button>
        )}
      </div>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admin Sign-Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleModalSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
