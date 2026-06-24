import React from 'react';
import StoryHero from './components/StoryHero';
import BridgingGap from './components/BridgingGap';
import FamilyPractice from './components/FamilyPractice';
import MoreThanName from './components/MoreThanName';
import YearsOfLearning from './components/YearsOfLearning';
import JourneyBegins from './components/JourneyBegins';

const OurStory = () => {
  return (
    <div className="flex flex-col w-full relative bg-[#FAF9F5]">
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
