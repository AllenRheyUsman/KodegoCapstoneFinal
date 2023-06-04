import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function Abouttext2({ data }) {
  return (
    <div className="center-align-items carousel-text2">
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

Abouttext2.defaultProps = {
  data: [
    {
      title: 'Paradise Unveiled - Bud Bongao',
      description: " Immerse yourself in the majestic beauty of Bud Bongao, a sacred mountain that offers breathtaking panoramic views of Tawi-Tawi's lush landscapes and azure waters. Embark on an enchanting hike through lush trails, where tranquility meets awe-inspiring natural wonders.",
    },
    {
      title: 'Serenity by the Sea - Panampangan Island',
      description: "Discover the allure of Panampangan Island, a hidden gem with pristine white sands and crystal-clear turquoise waters. Dive into a world of vibrant marine life as you snorkel amidst coral gardens or simply relax under the swaying palms, indulging in a serene coastal paradise.",
    },
    {
      title: 'Island Heritage Unveiled - Simunul Island',
      description: "Step back in time and explore the rich heritage of Simunul Island, where echoes of the past reverberate through its ancient mosques and historical sites. Immerse yourself in the local culture, witness traditional craftsmanship, and embrace the warm hospitality of the island's inhabitants.",
    },
    {
        title: "Nature's Oasis - Sanga-Sanga Mangrove Forest",
        description: "Delve into the tranquil embrace of Sanga-Sanga Mangrove Forest, a lush oasis teeming with biodiversity. Traverse elevated walkways as you immerse yourself in the serenity of nature, witnessing a vibrant ecosystem of mangroves, exotic bird species, and elusive marine creatures.",
      },
      {
        title: 'Coastal Splendor - Bongao Peak',
        description: "Ascend to new heights at Bongao Peak, the highest point in Tawi-Tawi, offering captivating panoramic vistas of the surrounding islands and coastal wonders. Indulge in a scenic trek, embracing the refreshing sea breeze as you marvel at the untouched beauty that lies beneath.",
      },
      {title: "ranquil Haven - Sitangkai Island",
      description: "Escape to Sitangkai Island, a tranquil haven nestled amidst emerald waters, where time slows down and worries dissipate. Immerse yourself in the simplicity of island life, wander through colorful stilt houses, and witness the vibrant marine life thriving in its pristine coral reefs.",
    },
    {title: "Enchanting Lagoons - Tawi-Tawi Pearl Farm",
    description: " Enter a realm of enchantment at the Tawi-Tawi Pearl Farm, where shimmering lagoons and iridescent pearls await. Experience the artistry of pearl cultivation, learn about the island's rich heritage, and bask in the serene beauty of this captivating sanctuary.",
  },
  ],
};
