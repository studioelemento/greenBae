



import SEO from '../../components/SEO'
import JoinMovementCTA from './components/JoinMovementCTA'
import HealthyLivingInsights from './components/HealthyLivingInsights'
  
const HealthyLivingPage = () => {
  return(
    <div className='bg-[#fcf6ee]'>
      <SEO 
        title="Healthy Living Hub | Greenbae" 
        description="Insights, articles, and tips for a healthy, natural lifestyle. Discover our wellness blog." 
        url="https://www.greenbae.in/healthy-living" 
      />
      {/* <HealthyLivingHero/>
      <ExploreByTopic/>
      <EditorsPicks/>
      <LatestInsights/> */}
      <HealthyLivingInsights/>
      <JoinMovementCTA/>
    </div>
  )
}

export default HealthyLivingPage

