import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function Abouttext({ data }) {
  return (
    <div className="center-align-items carousel-text">
      <Carousel interval={null} prevIcon={<span className="carousel-prev-icon">Discover More</span>} nextIcon={<span className="carousel-next-icon">Learn More</span>}>
        {data.map((item, index) => (
          <Carousel.Item 
          className="carousel-item2"
          key={index}>
            <h2>{item.title}</h2>
            <p className='my-5'>{item.description}</p>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

Abouttext.defaultProps = {
  data: [
    {
      title: 'Tawi-Tawi Haven Hotel',
      description: 'Welcome to Tawi-Tawi Haven Hotel, your haven of tranquility nestled in the captivating province of Tawi-Tawi, Philippines. Situated in the Bangsamoro Autonomous Region in Muslim Mindanao (BARMM), our hotel offers a serene retreat amidst the breathtaking landscapes of this southernmost province. With a commitment to exceptional service and a deep appreciation for the local culture, Tawi-Tawi Haven Hotel invites you to experience true Filipino hospitality at its finest.',
    },
    {
      title: 'Relaxing Places to Visit',
      description: "Unwind and reconnect with nature at Bud Bongao, a sacred mountain offering panoramic views of the surrounding islands and sea. Immerse yourself in the rich history of Tawi-Tawi by visiting the Bongao Peak, a historical landmark that offers a glimpse into the province's past. From enchanting natural wonders to cultural treasures, Tawi-Tawi has something for every traveler seeking an authentic and unforgettable experience.",
    },
    {
      title: 'Clean Rooms with a Modern Touch',
      description: "Indulge in the comfort of our 500 meticulously designed rooms, each thoughtfully prepared to ensure a restful stay. Our rooms blend modern amenities with touches of local charm, providing a soothing ambiance for relaxation. Enjoy the convenience of complimentary Wi-Fi access, airport transfer services, and a host of other amenities that cater to your every need. Whether you're traveling for business or leisure, our hotel offers a seamless blend of comfort and functionality to enhance your stay.",
    },
  ],
};
