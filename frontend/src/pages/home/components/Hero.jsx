import React from 'react';
import { ArrowRight, Leaf } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[900px] sm:min-h-[800px] md:min-h-[600px] lg:min-h-[650px] flex items-start md:items-center bg-white overflow-hidden pb-32 md:pb-32 pt-10 md:pt-0">
      {/* Background Image Setup */}
      <div className="absolute inset-0 md:inset-0 top-auto bottom-0 md:top-0 h-[50%] md:h-full z-0 flex justify-center md:justify-end">
        <div className="relative w-full md:w-[70%] lg:w-[65%] h-full">
          <img 
            src="/Home Page/Image Assets Home/Home Hero image.png" 
            alt="Greenbae Home Hero" 
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient from top to blend image on mobile */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent md:hidden"></div>
          {/* Gradient from left to blend image seamlessly with white background on desktop */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent w-[80%] md:w-[60%] hidden md:block"></div>
          {/* Gradient from bottom to blend with white content below */}
          <div className="absolute inset-x-0 bottom-0 h-24 md:h-48 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
        </div>
      </div>
      
      {/* Solid white background for left text area */}
      <div className="absolute top-0 left-0 w-full md:w-[45%] lg:w-[40%] h-[55%] md:h-full bg-white z-0 md:block"></div>
      
      {/* Text Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 relative z-20 mt-4 md:mt-0">
        <div className="max-w-[800px] flex flex-col items-center md:items-start text-center md:text-left md:pt-10">
          
          {/* Top Label */}
          <div className="inline-flex items-center gap-1.5 md:gap-2 bg-[#f4f7f0] border border-[#e2ead9] text-[#4d8745] font-bold tracking-widest text-[9px] sm:text-xs py-1.5 px-3 rounded uppercase mb-6 md:mb-8">
            <Leaf size={12} className="text-[#61a355] md:w-[14px] md:h-[14px]" />
            Natural. Research. Consistency.
          </div>
          
          {/* Heading */}
          <h1 className="font-serif text-[38px] sm:text-[50px] md:text-5xl lg:text-[72px] text-[#1c3e1e] font-bold leading-[1.05] mb-6 md:mb-8 relative whitespace-nowrap">
            Healthy Living <br />
            Starts With <br />
            <span className='text-[#4d8745]'>Small Daily Choices</span>
          </h1>
          
          {/* Short Underline */}
          <div className="w-12 md:w-16 h-[2px] bg-[#4d8745] mb-6 md:mb-8"></div>
          
          {/* Paragraph */}
          <p className="text-gray-700 text-[13px] md:text-[15px] lg:text-[17px] mb-8 md:mb-10 leading-relaxed max-w-[500px] font-medium bg-white/50 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-2 md:p-0 rounded px-4 md:px-0">
            Helping families embrace better wellness through nature-inspired nutrition, carefully formulated products, and healthier everyday habits.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full md:w-auto px-4 md:px-0">
            <button className="w-full md:w-auto justify-center bg-[#345920] hover:bg-[#2b4c18] text-white px-7 py-3 md:py-3.5 rounded text-[13px] md:text-[15px] font-bold transition-colors flex items-center gap-2 group shadow-sm border border-[#345920]">
              Explore Products 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full md:w-auto justify-center bg-white md:bg-transparent text-[#345920] border border-[#d1e6d3] md:border-gray-300 hover:border-[#345920] px-7 py-3 md:py-3.5 rounded text-[13px] md:text-[15px] font-bold transition-colors flex items-center gap-2 group">
              Our Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
