import { Leaf } from 'lucide-react';
import heroBg from "../../../assets/img-ourmission/Hero image (1).png";
import section2Img from "../../../assets/img-ourmission/Section 2 image.png";

const MissionHero = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Top Banner Section */}
      <section className="relative w-full flex flex-col md:flex-row bg-[#f3efe6]">
        
        {/* Image - Top on mobile, Right Side on desktop */}
        <div className="w-full md:w-1/2 h-[300px] md:h-auto relative z-0 order-1 md:order-2">
          {/* Desktop Gradient to smooth the straight edge */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-[#f3efe6] to-transparent z-10 hidden md:block"></div>
          
          <img 
            src={heroBg}
            alt="Natural wellness ingredients" 
            className="w-full h-full object-cover object-right"
          />
        </div>

        {/* Text Content - Bottom on mobile, Left Side on desktop */}
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start py-12 md:py-24 px-6 md:pl-16 lg:pl-32 xl:pl-40 md:pr-12 relative z-10 order-2 md:order-1">
          <div className="w-full max-w-lg">
            <span className="text-[#4d8745] font-bold text-[11px] md:text-xs tracking-widest uppercase mb-3 md:mb-4 block">
              Our Mission
            </span>
            <h1 className="font-serif text-[36px] md:text-[44px] lg:text-[52px] xl:text-[56px] text-[#1a3622] font-bold leading-[1.1] mb-5 md:mb-6">
              Making everyday<br className="hidden xl:block" /> wellness simpler.
            </h1>
            <div className="w-12 h-[2px] bg-[#4d8745] mb-5 md:mb-6"></div>
            <p className="text-gray-800 text-[14px] md:text-[15px] leading-relaxed font-medium">
              Greenbae exists to help families live healthier, happier lives through natural ingredients, thoughtful products and better everyday choices.
            </p>
          </div>
        </div>
      </section>

      {/* Second Section: The way we live has changed */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-10 md:gap-12 lg:gap-20">
          
          {/* Left: Image */}
          <div className="w-full md:w-[45%] lg:w-1/2">
            <div className="relative rounded-[20px] overflow-hidden shadow-[0_8px_25px_rgba(0,0,0,0.06)] aspect-[4/3] md:aspect-auto md:h-[380px] lg:h-[420px]">
              <img 
                src={section2Img} 
                alt="Mother working with child" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="w-full md:w-[55%] lg:w-1/2 flex flex-col justify-center">
           
            <h2 className="font-serif text-[30px] md:text-[36px] lg:text-[42px] text-[#1a3622] font-bold leading-[1.15] mb-4 md:mb-5">
              The way we live<br className="hidden md:block" /> has changed.
            </h2>
            <p className="text-gray-600 text-[14px] md:text-[15px] leading-[1.7] mb-6 md:mb-8 max-w-[420px]">
              Longer work hours, stress, processed foods and endless choices have made healthy living feel complicated and out of reach.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#f4f7f0] flex items-center justify-center shrink-0">
                <Leaf className="w-4 h-4 text-[#4d8745]" />
              </div>
              <p className="text-[#1a3622] font-bold text-[14px] md:text-[15px]">
                But our need for nourishment hasn't.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default MissionHero;
