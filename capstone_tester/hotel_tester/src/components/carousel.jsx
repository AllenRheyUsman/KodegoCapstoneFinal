import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

function BootstrapCarousel({ carouselItems }) {
    console.log(carouselItems)
    return (
        <Carousel fade>
            {carouselItems.map((item, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={item.photo}
                        alt={`Slide ${index}`}
                    />
                    <Carousel.Caption style={{ color: 'black' }}>
                        <h3>{item.room_number}</h3>
                        <p>{item.room_price}</p>
                        <p>{item.room_ammen}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
        
    ); 
}

export default BootstrapCarousel;
