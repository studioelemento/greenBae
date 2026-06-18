import React from 'react';
import { Leaf, FlaskConical, ShieldCheck, Users } from 'lucide-react';

const Features = () => {
  return (
    <section className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 -mt-20 md:-mt-28">
      <div className="bg-white rounded-[20px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)] border border-[#f0f4ea] p-4 lg:p-8 flex flex-col">
        
        <div className="grid grid-cols-4 md:flex md:flex-row justify-between items-start md:items-center gap-2 md:gap-4 lg:gap-6 w-full">
          {[
            { icon: Leaf, title: "Inspired\nby Nature", titleDesktop: "Inspired by Nature", desc: "Goodness of nature\nin every step" },
            { icon: FlaskConical, title: "Backed by\nResearch", titleDesktop: "Backed by Research", desc: "Years of formulation\nand refinement" },
            { icon: ShieldCheck, title: "Built on\nTrust", titleDesktop: "Built on Trust", desc: "Committed to safety\nand quality" },
            { icon: Users, title: "Made for\nFamilies", titleDesktop: "Made for Families", desc: "Thoughtfully made\nfor every member" },
          ].map((item, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 flex-1 w-full text-center md:text-left ${idx !== 3 ? 'md:border-r md:border-gray-100' : ''}`}>
              <div className="text-[#4d8745] shrink-0 bg-[#fdfdf9] w-10 h-10 md:w-auto md:h-auto rounded-full flex items-center justify-center border border-[#e2ead9] md:border-none md:bg-transparent">
                <item.icon size={20} className="md:w-9 md:h-9" strokeWidth={1.25} />
              </div>
              <div className="pr-0 md:pr-2 lg:pr-4">
                {/* Mobile Title */}
                <h3 className="font-bold text-[#1c3e1e] text-[9px] sm:text-[10px] whitespace-pre-line leading-tight md:hidden">{item.title}</h3>
                {/* Desktop Title */}
                <h3 className="font-bold text-[#1c3e1e] text-[13px] lg:text-[14px] mb-0.5 hidden md:block">{item.titleDesktop}</h3>
                
                {/* Subtitle - hidden on very small screens if needed, but screenshot shows them slightly */}
                <p className="text-gray-500 text-[8px] sm:text-[9px] lg:text-[12px] leading-tight md:leading-snug hidden sm:block md:whitespace-normal whitespace-pre-line md:mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Bottom Heart Line */}
        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-center gap-2 md:hidden">
          <div className="h-px bg-gray-200 flex-1"></div>
          <div className="flex items-center gap-1.5 px-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4d8745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span className="text-[#345920] font-serif italic text-[10px] font-bold">Real ingredients. Real research. Real results.</span>
          </div>
          <div className="h-px bg-gray-200 flex-1"></div>
        </div>

      </div>
    </section>
  );
};

export default Features;
