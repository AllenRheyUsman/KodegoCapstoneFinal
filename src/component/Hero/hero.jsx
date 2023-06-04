import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link  } from 'react-router-dom';

export default function Hero() {
  return (
    <div className='col mx-0 px-0'>
      <div className='row text-center align-items-center mx-0 px-0'>
        <h1 className='hero-title'>Where Luxury Meets Tranquility</h1>
        <p className='hero-description'>Escape to serenity and indulge in opulent bliss.</p>
        <div className=' mt-5 book-now-butt'>
          

            <Link to='/booking' className='logo-link'>
            <Button variant='primary'>Book Now</Button>
      </Link>
         
      
        </div>
      </div>
    </div>
  );
}
