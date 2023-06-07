import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import Settings from './settings';
import Bookings from './bookings';
import Complaints from './complaints';
import WalkIn from './walkin';
import AdminLanding from './adminlanding';



export default function Admin() {
  const location = useLocation();

  const renderPage = () => {
    const currentPath = location.pathname;
  
    if (currentPath === '/admin/settings') {
      return <Settings />;
    } else if (currentPath === '/admin/bookings') {
      return <Bookings />;
    } else if (currentPath === '/admin/complaints') {
      return <Complaints />;
    } else if (currentPath === '/admin/walkin') {
      return <WalkIn />;
    } else if (currentPath === '/admin/adminlanding') {
      return <AdminLanding />;
    } else {
      return null;
    }
  };
  

  return (
    <div className=''>
     
      <div className="row mx-0 pt-4 px-0 adminhead">
      <div className="col-2 text-center admindivs ">
      <Link to="/admin/adminlanding" className="adminlinks">Admin</Link>

        </div>
        <div className="col-2 text-center admindivs">
          <Link to="/admin/settings" className="adminlinks">Settings</Link>
        </div>
        <div className="col-2 text-center admindivs">
        <Link to="/admin/bookings" className="adminlinks">Rooms</Link>
        </div>
        <div className="col-2 text-center admindivs">
          <Link to="/admin/complaints" className="adminlinks">Bookings</Link>
        </div>
        <div className="col-2 text-center admindivs">
          <Link to="/admin/walkin" className="adminlinks">Complaints</Link>
        </div>
        <div className="col-2 text-center admindivs">
          <Link to="/" className="adminlinks">Log-out</Link>
        </div>
      
      </div>
    
    
      {/* <Outlet /> */}
      {renderPage()}

    </div>
  );
}
