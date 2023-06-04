import React, { useState, useEffect } from 'react';

export default function Aboutpix2({ imageUrls, activeIndexDefault, intervalDuration }) {
  const [activeIndex, setActiveIndex] = useState(activeIndexDefault);

  useEffect(() => {
    const handleSlideshow = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    };

    const interval = setInterval(handleSlideshow, intervalDuration);

    return () => clearInterval(interval);
  }, [imageUrls.length, intervalDuration]);

  return (
    <div className="aboutpix-container">
      {imageUrls.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Image ${index}`}
          className={index === activeIndex ? 'active' : ''}
        />
      ))}
    </div>
  );
}

Aboutpix2.defaultProps = {
    imageUrls: [
        'https://a0.muscache.com/im/pictures/miso/Hosting-728924394388127072/original/f72f4394-423e-49e0-ad25-8fe5315d5e47.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-719062454233650071/original/5c59d310-4a6f-4ff8-97c0-b853ba5d15ed.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-728924394388127072/original/e474fb43-f934-4a38-9b1e-5f27b11e4f71.jpeg?im_w=1200',
        'https://a0.muscache.com/im/pictures/6f6ea51a-b7b9-4c4b-93c9-629286979474.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/8f485537-5398-4d4a-b152-e7815beaa308.jpg?im_w=1200',
      ],
  activeIndexDefault: 0,
  intervalDuration: 5000,
};
