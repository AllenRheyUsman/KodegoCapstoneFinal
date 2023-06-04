
import React, { useEffect, useState } from 'react';
import { Carousel, Card, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import Payment from '../Payment/payment';

export default function Roompix2() {
  const [carouselItems, setCarouselItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedRoomNumber, setSelectedRoomNumber] = useState('');

  const handlePaymentToggle = (roomNumber) => {
    setSelectedRoomNumber(roomNumber);
    setShowPaymentModal(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('https://tester001.herokuapp.com/roomsdeluxe.php')
      .then((response) => {
        setCarouselItems(response.data);
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  };

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  // Function to get the incremented index based on the activeIndex
  const getIncrementedIndex = (index, increment) => {
    const newIndex = index + increment;
    const numCarouselItems = carouselItems.length;
    return newIndex >= 0 ? newIndex % numCarouselItems : numCarouselItems - 1;
  };

  const handleClosePaymentModal = () => {
    setSelectedRoomNumber('');
    setShowPaymentModal(false);
  };

  return (
    <div className="carousel-wrapper">
      <h1 className='roomcards'>DeLuxxe</h1>
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        className="carousel-container"
        fade
        interval={null}
      >
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index} className="carousel-item3">
            <div className="d-flex justify-content-between">
              {[0, 1, 2].map((cardIndex) => {
                const cardItemIndex = getIncrementedIndex(activeIndex, cardIndex);
                const cardItem = carouselItems[cardItemIndex];
                return (
                  <Card key={cardItemIndex} className="main-card mx-3">
                    <Card.Img variant="top" src={cardItem.photo} className="card-image" />
                    <Card.Body className="card-body">
                      <Card.Title className="card-title">{cardItem.room_number}</Card.Title>
                      <Card.Text className="card-price">{cardItem.room_price}</Card.Text>
                      <Card.Text className="card-amenities">{cardItem.room_ammen}</Card.Text>
                      <Button
                        variant="primary"
                        className="book-button"
                        onClick={() => handlePaymentToggle(cardItem.room_number)}
                      >
                        Book Now
                      </Button>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <Modal show={showPaymentModal} onHide={handleClosePaymentModal} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>You have Chosen {selectedRoomNumber && `Room ${selectedRoomNumber}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Payment />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePaymentModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
