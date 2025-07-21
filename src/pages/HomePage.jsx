import React from 'react';
import Hero from './Hero';
import ServicesPage from './ServicesPage';
import Portfolio from './Portfolio'
import Wlcome from './Wlcome';
import ClientsPartners from './ClientsPartners';
import Testimonials from './Testimonials';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Wlcome/>
      <ServicesPage/>
      <Portfolio/>
      <ClientsPartners/>
      <Testimonials/>
    </>
  );
};

export default HomePage;
