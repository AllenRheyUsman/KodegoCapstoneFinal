import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landingpage from './component/landingpage';
import Booking from './component/Booking/booking';
import Admin from './component/Admin/admin';
import Settings from './component/Admin/settings';
import Bookings from './component/Admin/bookings';
import Complaints from './component/Admin/complaints';
import Walkin from './component/Admin/walkin';

import './App.css';

function App2() {
  return (
    <div className="App2 mx-0 px-0">
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/walkin" element={<Walkin />} />
        <Route path="/complaints" element={<Complaints />} />
      </Routes>
    </div>
  );
}

export default App2;
