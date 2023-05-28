import React from 'react';
import Header from './Header/header';
import Hero from './Hero/hero';
import Aboutus from './AboutUs/aboutus';
import Aboutus2 from './AboutUs/aboutus2';
import Footer from './Footer/footer';
import { AuthProvider } from './authenticator';

export default function Landingpage() {
  return (
    <AuthProvider>
      <div className="mx-0 px-0 container-fluid body-landing">
        <div className="mx-0 px-0 row header-row">
          <Header />
          <Hero />
        </div>

        <hr className="ruler" />

        <div className="mx-0 px-0 row body-row">
          <Aboutus />
        </div>

        <hr className="ruler2" />

        <div className="mx-0 px-0 row body-row">
          <Aboutus2 />
        </div>

        <hr className="ruler2" />

        <div className="mx-0 px-0 row footer-row">
          <Footer />
        </div>
      </div>
    </AuthProvider>
  );
}
