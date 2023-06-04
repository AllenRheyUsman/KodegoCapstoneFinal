import React, { useState } from 'react';
import Roompix from './roompix';
import Roompix2 from './roompix2';
import Roompix3 from './roompix3';

export default function Car() {
  const roomPixComponents = [<Roompix key={0} />, <Roompix2 key={1} />, <Roompix3 key={2} />];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((currentIndex + roomPixComponents.length - 1) % roomPixComponents.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % roomPixComponents.length);
  };

  return (
    <div className="d-flex mama">
      <div className="col">
        <div className="row position-absolute">
          <button className="carousel-button prev-button kaliwa bg-transparent" onClick={handlePrevious}>
            <span className="carousel-control-prev-icon nexticon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
        </div>
      </div>
      <div className="col darkblur secondcards left2">{roomPixComponents[(currentIndex + roomPixComponents.length - 1) % roomPixComponents.length]}</div>
      <div className={`maincard col card2 ${currentIndex === 0 ? 'main' : ''}`}>
        {roomPixComponents[currentIndex]}
        <button type="button" id="booknowmain" className="btn btn-outline-info text-end position-absolute" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Book now
        </button>
      </div>
      <div className="col darkblur secondcards right2">{roomPixComponents[(currentIndex + 1) % roomPixComponents.length]}</div>
      <div className="col">
        <div className="row position-absolute">
          <button className="carousel-button next-button kanan bg-transparent" onClick={handleNext}>
            <span className="carousel-control-next-icon nexticon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
