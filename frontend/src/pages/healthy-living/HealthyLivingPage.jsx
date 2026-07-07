import React from 'react'
import HealthyLivingHero from './components/HealthyLivingHero'
import ExploreByTopic from './components/ExploreByTopic'
import EditorsPicks from './components/EditorsPick'
import LatestInsights from './components/LatestInsights'
import JoinMovementCTA from './components/JoinMovementCTA'

const HealthyLivingPage = () => {
  return(
    <div className='bg-[#fcf6ee]'>
      <HealthyLivingHero/>
      <ExploreByTopic/>
      <EditorsPicks/>
      <LatestInsights/>
      <JoinMovementCTA/>
    </div>
  )
}

export default HealthyLivingPage

