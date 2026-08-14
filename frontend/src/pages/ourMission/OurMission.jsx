import MissionHero from "./components/MissionHero";
import Generation from "./components/Generation";
import Philosophy from "./components/Philosophy";
import LifestyleChallenge from "./components/LifestyleChallenge";

const OurMission = () => {
    return (
        <div className="flex flex-col w-full relative">
            <MissionHero />
            <LifestyleChallenge />
            <Philosophy />
            <Generation />
        </div>
    );
};

export default OurMission;

