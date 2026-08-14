import { RefreshCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OurMission = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full bg-[#fdfdf9] pb-12 md:pb-20 pt-20 px-4">
            <div className="relative w-full mx-auto flex justify-center">
                <div className="relative max-w-[1200px] w-full flex items-center justify-center rounded-[25px] h-[125px] md:h-[180px] overflow-hidden">
                    <img src="https://i.postimg.cc/25G9jL5w/mission.png" alt="Image" className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-6 md:mt-10 px-4">
                <div className="flex items-center justify-center gap-4">
                    <RefreshCcw className="w-4 h-4 text-primary-600" />
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-center text-green-900">Our Mission</h3>
                </div>
                <h1 className="font-serif font-medium text-3xl md:text-4xl lg:text-5xl text-[#1c3e1e] tracking-tight text-center mt-2 md:mt-6 max-w-4xl leading-tight">
                    Redefining the path to holistic wellness, one natural solution at a time.
                </h1>
                <div className="mt-6 md:mt-8 max-w-3xl mx-auto">
                    <p className="text-center text-gray-700 font-medium text-sm md:text-base leading-relaxed">
                        We believe that true well-being comes from nurturing your body with the goodness of nature. Our journey is rooted in the philosophy that nature has the power to heal, restore, and revitalize. We are committed to providing products that are free from harmful chemicals and additives, ensuring that every product you use is safe and effective.
                    </p>
                </div>
                <div className="mt-12 md:mt-16">
                    <button
                        onClick={() => navigate("/our-story")}
                        className="px-8 py-3 rounded-full bg-primary-700 text-white hover:bg-primary-800 transition-colors font-semibold shadow-[0_4px_15px_rgba(0,0,0,0.15)]"
                    >
                        Discover Our Journey
                    </button>
                </div>
            </div>
        </div>
    );
};