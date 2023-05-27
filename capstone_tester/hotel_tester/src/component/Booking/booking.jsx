
import React, { useState } from 'react';
import { Button, Offcanvas, Form } from 'react-bootstrap';


import Roompix from './Rooms/roompix';

import Roompix2 from './Rooms/roompix2';
import Roompix3 from './Rooms/roompix3';
import Navbar from '../Header/navbar';
import Footer from '../Footer/footer';

export default function Booking() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState('roompix');

  const handleToggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const handleRadioChange = (event) => {
    setSelectedRoom(event.target.value);
  };

  const renderRoomComponent = () => {
    if (selectedRoom === 'roompix') {
      return <Roompix />;
    } else if (selectedRoom === 'roompix2') {
      return <Roompix2 />;
    } else if (selectedRoom === 'roompix3') {
      return <Roompix3 />;
    }
  };

  return (
    <div className="container-fluid">
      <div className="row navbar-row mt-3 text-center adminlinks1">
        <Navbar />
        </div>
        <Button
          variant="primary"
          onClick={handleToggleOffcanvas}
          className="offcanvas-button text-center "
        >
          Search Rooms
        </Button>
      
      <div className="row text-center align-items-center roompix">
        <div className="col-2"></div>
        <div className="col-10">{renderRoomComponent()}</div>
      </div>
      <div className='row footer'>
            <Footer/>
          </div>
      <Offcanvas show={showOffcanvas} onHide={handleToggleOffcanvas} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Search Rooms</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <Form>
              <Form.Check
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="roompix"
                label="Economy"
                checked={selectedRoom === 'roompix'}
                onChange={handleRadioChange}
              />
              <Form.Check
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="roompix2"
                label="Deluxe"
                checked={selectedRoom === 'roompix2'}
                onChange={handleRadioChange}
              />
              <Form.Check
                type="radio"
                name="exampleRadios"
                id="exampleRadios3"
                value="roompix3"
                label="Very Expensive"
                checked={selectedRoom === 'roompix3'}
                onChange={handleRadioChange}
              />
            </Form>
          </div>

       

          <div className="dropdown mt-3">
            <Button variant="secondary" className="dropdown-toggle" data-bs-toggle="dropdown">
            Guests
            </Button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#!">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>


    
    </div>
  );
}
