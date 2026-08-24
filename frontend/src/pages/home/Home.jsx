import SEO from '../../components/SEO';
import Hero from './components/Hero';
import Features from './components/Features';
import Story from './components/Story';
import OurProducts from './components/OurProducts';
import HealthyLivingHub from './components/HealthyLivingHub';
import WellnessBacked from './components/wellnessbacked';

const Home = () => {
  return (
    <div className="flex flex-col w-full relative">
      <SEO 
        title="Greenbae | Natural Wellness & Everyday Nutrition" 
        description="Discover Greenbae, a family wellness brand offering thoughtfully made natural food products for everyday nutrition, healthy living and mindful choices." 
        ogTitle="Greenbae | Natural Wellness & Everyday Nutrition"
        ogDescription="Natural food products thoughtfully made for everyday nutrition, mindful choices and healthy living."
        url="https://greenbae.in/" 
      />
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
