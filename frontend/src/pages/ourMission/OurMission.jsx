import SEO from '../../components/SEO';
import MissionHero from "./components/MissionHero";
import Generation from "./components/Generation";
import Philosophy from "./components/Philosophy";
import LifestyleChallenge from "./components/LifestyleChallenge";

const OurMission = () => {
    return (
        <div className="flex flex-col w-full relative">
            <SEO 
              title="Our Mission | Greenbae" 
              description="Our mission to provide natural, healthy alternatives for everyday wellness and bridging the nutritional gap." 
              url="https://www.greenbae.in/our-mission" 
            />
            <MissionHero />
            <LifestyleChallenge />
            <Philosophy />
            <Generation />
        </div>
    );
};

export default OurMission;

