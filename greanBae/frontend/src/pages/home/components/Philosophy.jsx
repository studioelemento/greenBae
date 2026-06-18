import React from 'react';
import { Leaf, FlaskConical, CalendarCheck, CheckCircle2, Sprout } from 'lucide-react';

const Philosophy = () => {
  const philosophyData = [
    {
      title: "Nature",
      icon: Leaf,
      image: "/nature_philosophy.png",
      descriptionDesktop: "We draw inspiration from nature's goodness. From vegetables and herbs to traditional ingredients, nature provides the foundation for real nourishment.",
      descriptionMobile: "We draw inspiration from nature's goodness. Nature provides the foundation for real nourishment.",
      bannerText: "Goodness that nature has perfected over time.",
      bannerIcon: Leaf,
    },
    {
      title: "Research",
      icon: FlaskConical,
      image: "/research_philosophy.png",
      descriptionDesktop: "Years of learning, studying and refining help us understand ingredients better and create formulations that are effective, safe and nutritionally meaningful.",
      descriptionMobile: "Years of learning and refining help us create formulations that are effective, safe and nutritionally meaningful.",
      bannerText: "Knowledge that turns ingredients into solutions.",
      bannerIcon: FlaskConical,
    },
    {
      title: "Consistency",
      icon: CalendarCheck,
      image: "/consistency_philosophy.png",
      descriptionDesktop: "Wellness is built over time through small, daily choices. We make it easy to stay consistent with practical solutions that fit effortlessly into everyday life.",
      descriptionMobile: "Wellness is built over time through small, daily choices that fit effortlessly into everyday life.",
      bannerText: "Daily choices that create lasting wellness.",
      bannerIcon: CheckCircle2,
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
            OUR PHILOSOPHY
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
              Nature. Research. Consistency.
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
            Three simple principles that guide everything we do at Greenbae.<br className="hidden md:block"/>
            Together, they help us create wellness solutions families can trust every day.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {philosophyData.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[20px] border border-[#f0f4ea] shadow-[0_12px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between overflow-hidden hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              
              {/* Desktop Layout */}
              <div className="hidden md:block relative">
                <div className="h-[200px] lg:h-[240px] w-full relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover rounded-t-[20px] hover:scale-105 transition-transform duration-500"
                  />
                  {/* Floating icon badge */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border border-[#e2ead9] shadow-md flex items-center justify-center text-[#4d8745] z-10">
                    <item.icon size={20} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="pt-10 px-6 pb-6 text-center">
                  <h3 className="font-serif font-bold text-xl lg:text-[22px] text-[#1c3e1e] mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-xs lg:text-[14px] leading-relaxed min-h-[96px]">{item.descriptionDesktop}</p>
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
                      <item.icon size={14} strokeWidth={2} />
                    </div>
                    <h3 className="font-bold text-[#1c3e1e] text-[15px]">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 text-[12px] leading-snug">{item.descriptionMobile}</p>
                </div>
              </div>

              {/* Shared Card Bottom Banner */}
              <div className="bg-[#f4f7f0]/60 border-t border-[#f0f4ea]/80 py-3 px-4 flex items-center justify-center gap-2 text-center text-[#345920] font-bold text-[11px] md:text-xs rounded-b-[20px]">
                <item.bannerIcon size={14} className="shrink-0 text-[#4d8745]" />
                <span>{item.bannerText}</span>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Wide Summary Banner */}
        <div className="bg-[#f4f7f0] border border-[#e2ead9] rounded-[24px] p-5 md:p-6 flex flex-row items-center gap-4 relative overflow-hidden">
          {/* Sprout Icon in Dark Green Circle */}
          <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#345920] flex items-center justify-center text-white z-10 shadow-sm">
            <Sprout size={22} className="md:w-6 md:h-6" strokeWidth={1.5} />
          </div>
          
          {/* Text content */}
          <div className="flex flex-col z-10 flex-1 pr-10">
            <p className="text-[#1c3e1e] text-xs md:text-[15px] lg:text-[17px] leading-relaxed font-semibold">
              When nature, research and consistency come together,{' '}
              <span className="text-[#345920] font-bold">wellness becomes simple, natural and sustainable.</span>
            </p>
          </div>
          
          {/* Bottom Right decorative leaf */}
          <div className="absolute -bottom-4 -right-4 opacity-40 transform scale-50 pointer-events-none hidden md:block">
            <svg width="200" height="200" viewBox="0 0 100 100" fill="none" className="text-[#4d8745]">
               <path d="M10,90 Q40,50 90,10" stroke="currentColor" strokeWidth="2" fill="none" />
               <path d="M30,70 Q20,40 50,40 Q60,60 30,70" fill="currentColor" opacity="0.6" />
               <path d="M50,40 Q50,10 80,20 Q80,50 50,40" fill="currentColor" opacity="0.6" />
               <path d="M70,30 Q90,10 90,30 Q70,50 70,30" fill="currentColor" opacity="0.6" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Philosophy;
