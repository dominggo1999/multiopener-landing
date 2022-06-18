import React from 'react';
import Hero from '~/layout/Hero/Hero';
import SupportedBrowsers from '~/layout/SupportedBrowsers/SupportedBrowsers';
import Features from '~/layout/Features/Features';

const Home = () => {
  return (
    <>
      <Hero />
      <SupportedBrowsers />
      <Features />
    </>
  );
};

export default Home;
