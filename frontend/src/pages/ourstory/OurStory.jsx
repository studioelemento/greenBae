import SEO from '../../components/SEO';
import StoryHero from './components/StoryHero';
import BridgingGap from './components/BridgingGap';
import FamilyPractice from './components/FamilyPractice';
import MoreThanName from './components/MoreThanName';
import YearsOfLearning from './components/YearsOfLearning';
import JourneyBegins from './components/JourneyBegins';

const OurStory = () => {
  return (
    <div className="flex flex-col w-full relative bg-[#FAF9F5]">
      <SEO 
        title="Our Story | Greenbae" 
        description="Learn about the history and family behind Greenbae. Over 55 years of traditional wellness knowledge passed down through generations." 
        url="https://www.greenbae.in/our-story" 
      />
      <StoryHero />
      <FamilyPractice />
      <YearsOfLearning />
      <BridgingGap />
      <MoreThanName />
      <JourneyBegins />
    </div>
  );
};

export default OurStory;
