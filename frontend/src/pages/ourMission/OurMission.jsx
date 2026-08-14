import { RefreshCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Generation from "../ourMission/components/Generation";
import Philosophy from "../ourMission/components/Philosophy";
import LifestyleChallenge from "../ourMission/components/LifestyleChallenge";


const OurMission = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col w-full relative">
            <LifestyleChallenge />
            <Philosophy />
            <Generation />
        
        </div>
    );
};

export default OurMission;

