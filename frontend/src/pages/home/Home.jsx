import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Story from './components/Story';
import Generation from './components/Generation';
import OurProducts from './components/OurProducts';
import LifestyleChallenge from './components/LifestyleChallenge';
import HealthyLivingHub from './components/HealthyLivingHub';

const Home = () => {
  return (
    <div className="flex flex-col w-full relative">
      <Hero />
      <Features />
      {/* Spacer for content below since features bar overlaps
      <div className="h-8 lg:h-12 bg-white"></div>
       */}
      <LifestyleChallenge />
      <Philosophy />
      <Story />
      <Generation/>
      <OurProducts />
      <HealthyLivingHub />
    </div>
  );
};

export default Home;
