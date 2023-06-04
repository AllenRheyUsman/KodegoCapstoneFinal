import React from 'react';
import Logo from './logo';
import Navbar from './navbar';

export default function Header() {
  return (
    <div className='row  mx-0 px-0 adminhead1'>
      <div className='col-5 mx-0 px-0 text-center adminlinks'>
        <Logo text="My Logo" />
      </div>
      <div className='col-7  mx-0 px-0 '>
        <Navbar/>
      </div>
    </div>
  )
}
