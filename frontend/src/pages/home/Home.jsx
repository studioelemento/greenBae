import Hero from './components/Hero';
import Features from './components/Features';
import Story from './components/Story';
import OurProducts from './components/OurProducts';
import HealthyLivingHub from './components/HealthyLivingHub';
import WellnessBacked from './components/wellnessbacked';

const Home = () => {
  return (
    <div className="flex flex-col w-full relative">
      <Hero />
      <Features />
      {/* Spacer for content below since features bar overlaps
      <div className="h-8 lg:h-12 bg-white"></div>
       */}
   
      <OurProducts />
      <WellnessBacked/>
      <Story />
      <HealthyLivingHub />
    </div>
  );
};

export default Home;
