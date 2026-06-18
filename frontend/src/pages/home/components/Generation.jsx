import React from 'react';
import { Leaf, User, Users } from 'lucide-react';

const Generation = () => {
  // Custom child outline icon
  const customChildIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 md:w-6 md:h-6 text-[#4d8745]">
      <circle cx="12" cy="12" r="7.5" />
      <path d="M9 14.5c.6.8 1.8 1.2 3 1.2s2.4-.4 3-1.2" strokeLinecap="round" />
      <circle cx="9.5" cy="10.5" r="0.8" fill="currentColor" />
      <circle cx="14.5" cy="10.5" r="0.8" fill="currentColor" />
      <path d="M12 4.5a2 2 0 0 0-4 1.5M12 4.5a2 2 0 0 1 4 1.5" strokeLinecap="round" />
    </svg>
  );

  // Custom seniors icon (walking stick outline)
  const customSeniorIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 md:w-6 md:h-6 text-[#4d8745]">
      <circle cx="12" cy="4.5" r="1.5" />
      <path d="M10.5 19v-4.5l1.5-3V8.5l-2.5-1M12 11.5l1.5 2V19" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.5 10v9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );

  const generationsData = [
    {
      title: "Children",
      icon: customChildIcon,
      image: "/children_generation.png",
      description: "Supporting growing bodies and active minds with the right nutrition every day."
    },
    {
      title: "Adults",
      icon: () => <User size={22} className="text-[#4d8745] w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />,
      image: "/adults_generation.png",
      description: "Helping balance work, life and wellness with better daily choices."
    },
    {
      title: "Seniors",
      icon: customSeniorIcon,
      image: "/seniors_generation.png",
      description: "Supporting active, independent and healthy aging through natural nutrition."
    },
    {
      title: "Families",
      icon: () => <Users size={22} className="text-[#4d8745] w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />,
      image: "/family_generation.png",
      description: "Creating healthier routines and stronger bonds through better living, together."
    }
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          
          {/* Label with Leaf Icons */}
          <div className="inline-flex items-center gap-2 text-[#4d8745] font-bold tracking-widest text-[10px] sm:text-xs uppercase mb-4">
            <Leaf size={14} className="text-[#61a355]" style={{ transform: 'scaleX(-1)' }} />
            FOR EVERY GENERATION
            <Leaf size={14} className="text-[#61a355]" />
          </div>
          
          {/* Main Title with Decorative Leaves on Left/Right */}
          <div className="relative inline-block px-0 md:px-16 mb-4">
            {/* Left Decorative Leaf (Desktop only) */}
            <div className="absolute -left-10 lg:-left-12 top-1/2 -translate-y-1/2 opacity-70 pointer-events-none hidden md:block z-0">
              <svg width="60" height="60" viewBox="0 0 100 100" fill="none" className="text-[#61a355]">
                 <path d="M10,90 Q40,50 90,10" stroke="currentColor" strokeWidth="2.5" fill="none" />
                 <path d="M30,70 Q20,40 50,40 Q60,60 30,70" fill="currentColor" opacity="0.6" />
                 <path d="M50,40 Q50,10 80,20 Q80,50 50,40" fill="currentColor" opacity="0.6" />
                 <path d="M70,30 Q90,10 90,30 Q70,50 70,30" fill="currentColor" opacity="0.6" />
              </svg>
            </div>

            <h2 className="font-serif text-[36px] md:text-[46px] lg:text-[54px] text-[#1c3e1e] font-bold leading-tight relative z-10">
              Wellness For Every <br className="md:hidden" /> Stage Of Life
            </h2>

            {/* Right Decorative Leaf (Desktop only) */}
            <div className="absolute -right-10 lg:-right-12 top-1/2 -translate-y-1/2 opacity-70 pointer-events-none hidden md:block z-0">
              <svg width="60" height="60" viewBox="0 0 100 100" fill="none" className="text-[#61a355]" style={{ transform: 'scaleX(-1)' }}>
                 <path d="M10,90 Q40,50 90,10" stroke="currentColor" strokeWidth="2.5" fill="none" />
                 <path d="M30,70 Q20,40 50,40 Q60,60 30,70" fill="currentColor" opacity="0.6" />
                 <path d="M50,40 Q50,10 80,20 Q80,50 50,40" fill="currentColor" opacity="0.6" />
                 <path d="M70,30 Q90,10 90,30 Q70,50 70,30" fill="currentColor" opacity="0.6" />
              </svg>
            </div>
          </div>
          
          {/* Green underline */}
          <div className="w-16 h-[2px] bg-[#4d8745] mb-6"></div>
          
          {/* Subtitle */}
          <p className="text-gray-700 text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed max-w-[750px] font-medium">
            Wellness looks different at every stage,<br className="hidden md:block"/>
            but our purpose remains the same—helping every individual and every family live better, naturally.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {generationsData.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-[#fcfbf7] border border-[#f3f0e7] rounded-[20px] shadow-[0_12px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between overflow-hidden hover:shadow-[0_16px_40px_rgba(0,0,0,0.05)] transition-all duration-300"
            >
              
              {/* Desktop Layout */}
              <div className="hidden md:block relative">
                <div className="h-[180px] lg:h-[210px] w-full relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover rounded-t-[20px] hover:scale-105 transition-transform duration-500"
                  />
                  {/* Floating icon badge */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border border-[#e2ead9] shadow-md flex items-center justify-center text-[#4d8745] z-10">
                    {typeof item.icon === 'function' ? item.icon() : item.icon}
                  </div>
                </div>
                <div className="pt-10 px-6 pb-8 text-center flex flex-col items-center">
                  <h3 className="font-serif font-bold text-lg lg:text-[20px] text-[#1c3e1e] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-xs lg:text-[13px] leading-relaxed min-h-[72px] max-w-[210px]">{item.description}</p>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden flex items-start gap-4 p-4">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-[90px] h-[90px] object-cover rounded-xl shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="text-[#4d8745] shrink-0 bg-[#f4f7f0] w-7 h-7 rounded-full flex items-center justify-center border border-[#e2ead9]">
                      {typeof item.icon === 'function' ? item.icon() : item.icon}
                    </div>
                    <h3 className="font-bold text-[#1c3e1e] text-[15px]">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 text-[12px] leading-snug">{item.description}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Wide Summary Banner */}
        <div className="bg-[#f4f7f0] border border-[#e2ead9] rounded-[24px] p-5 md:p-6 flex flex-row items-center justify-between gap-4 relative overflow-hidden">
          
          <div className="flex flex-row items-center gap-4 z-10 flex-1 pr-0 md:pr-10">
            {/* Group/Users Icon in Dark Green Circle */}
            <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#345920] flex items-center justify-center text-white shadow-sm">
              <Users size={22} className="md:w-6 md:h-6" strokeWidth={1.5} />
            </div>
            
            {/* Text content */}
            <div className="flex flex-col">
              <h4 className="text-[#1c3e1e] font-bold text-[15px] md:text-[17px] mb-0.5 leading-tight">
                Stronger Together
              </h4>
              <p className="text-gray-700 text-xs md:text-sm leading-relaxed font-medium">
                Healthy individuals build happy families.<br className="md:hidden" />
                Happy families build a healthier society.
              </p>
            </div>
          </div>
          
          {/* Custom SVG Outline Family Illustration (Right side, Desktop only) */}
          <svg viewBox="0 0 200 80" className="text-[#345920] opacity-40 w-[180px] h-[70px] hidden md:block z-0 shrink-0">
            {/* Grass hill line */}
            <path d="M10,73 Q100,58 190,73" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            
            {/* Left decorative leaf sprig */}
            <path d="M30,71 Q22,63 17,68" stroke="currentColor" strokeWidth="1" />
            <circle cx="19" cy="65" r="1.5" fill="currentColor" />
            <circle cx="25" cy="63" r="1.5" fill="currentColor" />
            
            {/* Right decorative leaf sprig */}
            <path d="M170,71 Q178,63 183,68" stroke="currentColor" strokeWidth="1" />
            <circle cx="181" cy="65" r="1.5" fill="currentColor" />
            <circle cx="175" cy="63" r="1.5" fill="currentColor" />

            {/* Father figure line art */}
            <circle cx="85" cy="33" r="3.5" stroke="currentColor" strokeWidth="1.2" />
            <path d="M85,36.5 V52 M85,41 L77,46 M85,41 L93,46 M85,52 L81,66 M85,52 L89,66" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

            {/* Mother figure line art */}
            <circle cx="105" cy="35" r="3.5" stroke="currentColor" strokeWidth="1.2" />
            <path d="M105,38.5 V52 M105,42 L97,47 M105,42 L113,47 M105,52 L101,66 M105,52 L109,66" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

            {/* Child 1 line art */}
            <circle cx="71" cy="46" r="2.5" stroke="currentColor" strokeWidth="1" />
            <path d="M71,48.5 V58 M71,51 L66,54.5 M71,51 L76,54.5 M71,58 L68.5,67 M71,58 L73.5,67" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />

            {/* Child 2 line art */}
            <circle cx="119" cy="48" r="2.5" stroke="currentColor" strokeWidth="1" />
            <path d="M119,50.5 V60 M119,53 L114,56.5 M119,53 L124,56.5 M119,60 L116.5,69 M119,60 L121.5,69" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>

        </div>

      </div>
    </section>
  );
};

export default Generation;
