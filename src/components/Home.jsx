import React from 'react';
import Hero from './Hero';
import Features from './Features';
import CircularEconomy from './CircularEconomy';
import Dashboard from './Dashboard';
import Contact from './Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <CircularEconomy />
      <Dashboard />
      <Contact />
    </>
  );
};

export default Home;