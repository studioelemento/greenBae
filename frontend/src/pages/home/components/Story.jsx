import React from 'react';
import { Leaf, BookOpen, Users, ArrowRight } from 'lucide-react';

const Story = () => {
  const customHouseHeart = (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="w-5 h-5 md:w-6 md:h-6 text-[#4d8745]"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M12 15.3s-2.5-1.8-2.5-3.3a1.25 1.25 0 0 1 2.5 0 1.25 1.25 0 0 1 2.5 0c0 1.5-2.5 3.3-2.5 3.3z" fill="currentColor" stroke="none" />
    </svg>
  );

  const timelineSteps = [
    {
      title: "It Started At Home",
      desc: "A simple desire to ensure our children got the nutrition they needed.",
      customIcon: customHouseHeart,
    },
    {
      title: "Years Of Learning",
      desc: "We studied, experimented and learned from nature, research and experience.",
      icon: BookOpen,
    },
    {
      title: "A Family Practice",
      desc: "Our learnings became a part of our daily lives and others began to benefit.",
      icon: Users,
    },
    {
      title: "Greenbae Today",
      desc: "A promise to help more families live healthier lives, naturally.",
      icon: Leaf,
    }
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden">
      
      {/* Top Story Section (Desktop: absolute layout with full-bleed image on the right) */}
      <div className="relative w-full min-h-[500px] md:min-h-[480px] lg:min-h-[520px] flex items-center pt-12 pb-6 md:py-0">
        
        {/* Desktop Absolute Image (Bleeds to top/right/bottom edges) */}
        <div className="absolute inset-y-0 right-0 w-[50%] lg:w-[52%] xl:w-[55%] h-full z-0 hidden md:block">
          <img 
            src="/family_story.png" 
            alt="Multi-generational family reading together" 
            className="w-full h-full object-cover"
          />
          {/* Smooth left gradient overlay to blend image seamlessly with the white text container background */}
          <div className="absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none"></div>
          {/* Subtle top/bottom gradients to ensure no hard lines at the section boundaries */}
          <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        </div>

        {/* Text Content & Mobile Image Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Story Text */}
            <div className="md:col-span-6 lg:col-span-5 flex flex-col items-center md:items-start text-center md:text-left relative pl-0 md:pl-16">
              {/* Responsive Decorative Leaf Branch (Desktop only) */}
              <div className="absolute left-0 top-6 opacity-75 pointer-events-none hidden md:block z-0 w-16 h-16">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#61a355]">
                   <path d="M10,90 Q40,50 90,10" stroke="currentColor" strokeWidth="2.5" fill="none" />
                   <path d="M30,70 Q20,40 50,40 Q60,60 30,70" fill="currentColor" opacity="0.6" />
                   <path d="M50,40 Q50,10 80,20 Q80,50 50,40" fill="currentColor" opacity="0.6" />
                   <path d="M70,30 Q90,10 90,30 Q70,50 70,30" fill="currentColor" opacity="0.6" />
                </svg>
              </div>

              {/* Label */}
              <div className="inline-flex items-center gap-2 text-[#4d8745] font-bold tracking-widest text-[10px] sm:text-xs uppercase mb-4 relative z-10">
                <Leaf size={14} className="text-[#61a355]" style={{ transform: 'scaleX(-1)' }} />
                OUR STORY
                <Leaf size={14} className="text-[#61a355]" />
              </div>

              {/* Title */}
              <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[46px] lg:text-[54px] text-[#1c3e1e] font-bold leading-tight mb-4 relative z-10">
                Born From <br />
                A Family's Love
              </h2>

              {/* Green underline */}
              <div className="w-16 h-[2px] bg-[#4d8745] mb-6 relative z-10 mx-auto md:mx-0"></div>

              {/* Paragraphs */}
              <div className="space-y-4 text-gray-700 text-sm lg:text-base leading-relaxed max-w-[500px] relative z-10 mx-auto md:mx-0">
                <p>
                  It started at home, with parents who simply wanted their children to receive the right nutrition, every single day.
                </p>
                <p>
                  Years of learning, care and countless small efforts turned into a family practice.
                </p>
                <p className="text-[#345920] font-bold text-base lg:text-lg pt-2">
                  Today, that practice is Greenbae.
                </p>
              </div>
            </div>

            {/* Mobile Image (Only rendered on mobile) */}
            <div className="md:hidden w-full h-[240px] sm:h-[300px] rounded-[24px] overflow-hidden shadow-sm mt-4">
              <img 
                src="/family_story.png" 
                alt="Multi-generational family reading together" 
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>

      </div>

      {/* Timeline & Bottom Banner Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 pb-16 md:pb-24 relative z-10">
        
        {/* Timeline sage container */}
        <div className="bg-[#f4f7f0]/60 border border-[#e2ead9]/50 rounded-[24px] p-6 lg:p-10 mb-12 md:mb-16">
          
          {/* Desktop Timeline */}
          <div className="hidden md:flex flex-row justify-between items-start gap-4">
            {timelineSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                {/* Step Block */}
                <div className="flex-1 text-center">
                  <div className="w-12 h-12 rounded-full bg-white border border-[#e2ead9] flex items-center justify-center text-[#4d8745] shadow-sm mb-4 mx-auto">
                    {step.customIcon ? step.customIcon : <step.icon size={20} className="text-[#4d8745] w-5 h-5 lg:w-6 lg:h-6" strokeWidth={1.5} />}
                  </div>
                  <h3 className="font-serif font-bold text-[#1c3e1e] text-[15px] lg:text-[17px] mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-xs lg:text-[13px] leading-relaxed max-w-[200px] mx-auto">{step.desc}</p>
                </div>

                {/* Connector Arrow */}
                {idx !== timelineSteps.length - 1 && (
                  <div className="flex items-center justify-center pt-5 shrink-0">
                    <div className="w-6 lg:w-10 h-px border-t border-dashed border-[#a3c495]"></div>
                    <div className="w-5 h-5 rounded-full bg-[#345920] flex items-center justify-center text-white mx-1 shrink-0 shadow-sm">
                       <ArrowRight size={10} strokeWidth={2.5} />
                    </div>
                    <div className="w-6 lg:w-10 h-px border-t border-dashed border-[#a3c495]"></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden flex flex-col pl-2">
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="flex gap-4 relative">
                {/* Left Line & Circle */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-9 h-9 rounded-full bg-white border border-[#e2ead9] flex items-center justify-center text-[#4d8745] z-10 shadow-sm">
                    {step.customIcon ? step.customIcon : <step.icon size={16} className="text-[#4d8745] w-4.5 h-4.5" strokeWidth={1.5} />}
                  </div>
                  {idx !== timelineSteps.length - 1 && (
                    <div className="absolute top-9 bottom-0 w-9 flex items-center justify-center -z-10">
                      <div className="h-full border-l border-dashed border-[#a3c495]"></div>
                      {/* Tiny circle indicator in middle of dashed connecting line */}
                      <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#345920] border border-white"></div>
                    </div>
                  )}
                </div>

                {/* Right content */}
                <div className="flex-1 pt-1.5 pb-6">
                  <h3 className="font-serif font-bold text-[#1c3e1e] text-[14px] mb-1">{step.title}</h3>
                  <p className="text-gray-500 text-[11px] leading-snug">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="bg-[#f4f7f0] border border-[#e2ead9] rounded-[24px] p-5 md:p-6 flex flex-row items-center gap-4 relative overflow-hidden mb-8 md:mb-12">
          {/* Leaf Circle Icon inside white circle with border */}
          <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-[#e2ead9] flex items-center justify-center text-[#4d8745] z-10 shadow-sm">
            <Leaf size={22} className="md:w-6 md:h-6" strokeWidth={1.5} />
          </div>
          
          {/* Text content */}
          <div className="flex flex-col z-10 flex-1 pr-10">
            <p className="text-[#1c3e1e] text-xs md:text-[15px] lg:text-[17px] leading-relaxed font-semibold">
              We believe that when families thrive,{' '}
              <span className="text-[#345920] font-bold">society becomes healthier and happier.</span>
            </p>
          </div>
          
          {/* Decorative Leaf SVG (Bottom Right) */}
          <div className="absolute bottom-[-10px] right-4 md:right-8 lg:right-12 opacity-50 transform scale-90 pointer-events-none hidden md:block z-0">
            <svg width="200" height="200" viewBox="0 0 100 100" fill="none" className="text-[#4d8745]">
               <path d="M10,90 Q40,50 90,10" stroke="currentColor" strokeWidth="2" fill="none" />
               <path d="M30,70 Q20,40 50,40 Q60,60 30,70" fill="currentColor" opacity="0.6" />
               <path d="M50,40 Q50,10 80,20 Q80,50 50,40" fill="currentColor" opacity="0.6" />
               <path d="M70,30 Q90,10 90,30 Q70,50 70,30" fill="currentColor" opacity="0.6" />
            </svg>
          </div>
        </div>

        {/* Centered Read Full Story Button */}
        <div className="flex justify-center">
          <button className="bg-[#345920] hover:bg-[#2b4c18] text-white px-8 py-3.5 rounded text-[14px] lg:text-[15px] font-bold transition-all duration-300 flex items-center gap-2 group shadow-sm border border-[#345920]">
            Read Our Full Story
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

    </section>
  );
};

export default Story;
