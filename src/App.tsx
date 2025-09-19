import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HotelListings from './components/HotelListings';
import Testimonials from './components/Testimonials';
import OwnerProfile from './components/OwnerProfile';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <HotelListings />
      <Testimonials />
      <OwnerProfile />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;