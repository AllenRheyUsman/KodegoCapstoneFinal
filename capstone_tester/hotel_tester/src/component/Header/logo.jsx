import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ text, to }) {
  return (
    <div className='iconix mx-0 px-0'>
      <Link to={to} className='logo-link'>
        {text}
      </Link>
    </div>
  );
}
