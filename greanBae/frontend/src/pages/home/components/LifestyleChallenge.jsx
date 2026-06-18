import React from 'react';
import { Leaf, Clock, Utensils, Laptop, Smartphone, Zap, ShieldAlert, Brain, HeartPulse } from 'lucide-react';

const LifestyleChallenge = () => {
  return (
    <section className="relative w-full py-10 md:py-16 bg-white overflow-hidden">
      {/* Decorative corner leaves */}
      <div className="absolute top-0 left-0 opacity-40 pointer-events-none hidden lg:block transform -translate-x-1/2 -translate-y-1/2 z-0">
        <svg width="200" height="200" viewBox="0 0 100 100" fill="none" className="text-[#4d8745]">
           <path d="M10,90 Q40,50 90,10" stroke="currentColor" strokeWidth="2" fill="none" />
           <path d="M30,70 Q20,40 50,40 Q60,60 30,70" fill="currentColor" opacity="0.6" />
           <path d="M50,40 Q50,10 80,20 Q80,50 50,40" fill="currentColor" opacity="0.6" />
           <path d="M70,30 Q90,10 90,30 Q70,50 70,30" fill="currentColor" opacity="0.6" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 opacity-40 pointer-events-none hidden lg:block transform translate-x-1/4 -translate-y-1/4 z-0">
        <svg width="200" height="200" viewBox="0 0 100 100" fill="none" className="text-[#4d8745]" style={{ transform: 'scaleX(-1)' }}>
           <path d="M10,90 Q40,50 90,10" stroke="currentColor" strokeWidth="2" fill="none" />
           <path d="M30,70 Q20,40 50,40 Q60,60 30,70" fill="currentColor" opacity="0.6" />
           <path d="M50,40 Q50,10 80,20 Q80,50 50,40" fill="currentColor" opacity="0.6" />
           <path d="M70,30 Q90,10 90,30 Q70,50 70,30" fill="currentColor" opacity="0.6" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 relative z-10 pb-1">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-10">
          <div className="inline-flex items-center gap-2 text-[#4d8745] font-bold tracking-widest text-[10px] sm:text-xs uppercase mb-4">
            <Leaf size={14} className="text-[#61a355]" style={{ transform: 'scaleX(-1)' }} />
            THE MODERN LIFESTYLE CHALLENGE
            <Leaf size={14} className="text-[#61a355]" />
          </div>
          
          <h2 className="font-serif text-[36px] md:text-[46px] lg:text-[54px] text-[#1c3e1e] font-bold leading-tight mb-6 max-w-2xl">
            Why Healthy Living<br className="hidden md:block"/> Is Becoming Difficult
          </h2>
          
          <div className="w-16 h-[2px] bg-[#4d8745] mb-6"></div>
          
          <p className="text-gray-700 text-[15px] md:text-[17px] leading-relaxed max-w-[700px] font-medium">
            Modern lifestyles bring convenience, but they also create challenges that make it harder to stay healthy and nourished every day.
          </p>
        </div>

        {/* Cards Split */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          
          {/* Left Card: Today's Reality */}
          <div className="flex-1 bg-[#fffcf9] rounded-[24px] p-8 md:p-12 border border-[#fceddb]">
            <h3 className="text-[#d8632e] font-bold text-[22px] md:text-[26px] text-center mb-10">Today's Reality</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-12 h-12 rounded-full border-2 border-[#fceddb] flex items-center justify-center text-[#d8632e] bg-white">
                  <Clock size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1c3e1e] text-[16px] mb-1">Busy Schedules</h4>
                  <p className="text-gray-600 text-[14px] leading-snug">Long work hours and endless to-do lists leave little time for healthy choices.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-12 h-12 rounded-full border-2 border-[#fceddb] flex items-center justify-center text-[#d8632e] bg-white">
                  <Utensils size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1c3e1e] text-[16px] mb-1">Junk Food Culture</h4>
                  <p className="text-gray-600 text-[14px] leading-snug">Quick, processed and unhealthy options have become the default.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-12 h-12 rounded-full border-2 border-[#fceddb] flex items-center justify-center text-[#d8632e] bg-white">
                  <Laptop size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1c3e1e] text-[16px] mb-1">Nutrition Gaps</h4>
                  <p className="text-gray-600 text-[14px] leading-snug">Lack of essential nutrients affects energy, immunity and overall wellbeing.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-12 h-12 rounded-full border-2 border-[#fceddb] flex items-center justify-center text-[#d8632e] bg-white">
                  <Smartphone size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1c3e1e] text-[16px] mb-1">Less Physical Activity</h4>
                  <p className="text-gray-600 text-[14px] leading-snug">Sedentary habits and screen time reduce our daily movement.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card: The Impact */}
          <div className="flex-1 bg-[#f4f7f0] rounded-[24px] p-8 md:p-12 border border-[#e2ead9] flex flex-col items-center">
            <h3 className="text-[#345920] font-bold text-[22px] md:text-[26px] text-center mb-16">The Impact</h3>
            
            <div className="relative w-full max-w-[360px] aspect-square flex items-center justify-center mt-4 mx-auto">
              
              {/* Dashed Circle */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[#a3c495] pointer-events-none"></div>

              {/* Center Image */}
              <div className="relative w-[220px] h-[220px] rounded-full overflow-hidden border-8 border-[#f4f7f0] shadow-sm z-10">
                <img src="https://images.unsplash.com/photo-1590650153855-864da2db2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Stressed woman at laptop" className="w-full h-full object-cover" />
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.06)] p-3 flex flex-col items-center z-20 w-[110px] text-center border border-[#f0f4ea]">
                <div className="w-8 h-8 rounded text-white bg-[#4d8745] flex items-center justify-center mb-2">
                  <Zap size={18} fill="currentColor" />
                </div>
                <span className="text-[11px] font-bold text-[#1c3e1e] leading-tight">Low Energy<br/>Levels</span>
              </div>
              
              <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.06)] p-3 flex flex-col items-center z-20 w-[100px] text-center border border-[#f0f4ea]">
                <div className="w-8 h-8 rounded text-[#4d8745] bg-white border border-[#4d8745] flex items-center justify-center mb-2">
                  <ShieldAlert size={18} />
                </div>
                <span className="text-[11px] font-bold text-[#1c3e1e] leading-tight">Weaker<br/>Immunity</span>
              </div>

              <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.06)] p-3 flex flex-col items-center z-20 w-[100px] text-center border border-[#f0f4ea]">
                <div className="w-8 h-8 rounded text-[#4d8745] bg-white border border-[#4d8745] flex items-center justify-center mb-2">
                  <Brain size={18} />
                </div>
                <span className="text-[11px] font-bold text-[#1c3e1e] leading-tight">Stress &<br/>Fatigue</span>
              </div>

              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.06)] p-3 flex flex-col items-center z-20 w-[120px] text-center border border-[#f0f4ea]">
                <div className="w-8 h-8 rounded text-[#4d8745] bg-white border border-[#4d8745] flex items-center justify-center mb-2">
                  <HeartPulse size={18} />
                </div>
                <span className="text-[11px] font-bold text-[#1c3e1e] leading-tight">Long-term Health<br/>Concerns</span>
              </div>
              
            </div>
          </div>
          
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#f4f7f0] border border-[#e2ead9] rounded-[24px] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 relative overflow-hidden mt-6">
          <div className="shrink-0 w-14 h-14 rounded-full bg-[#e8eedd] flex items-center justify-center text-[#4d8745] z-10">
            <Leaf size={28} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col z-10">
            <h4 className="font-serif text-[#1c3e1e] text-[18px] md:text-[22px] font-bold leading-tight mb-1">
              Our bodies still need proper nourishment every day.
            </h4>
            <p className="text-gray-700 text-[13px] md:text-[15px] font-medium">
              The challenge is finding simple, natural and consistent ways to make it happen.
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

export default LifestyleChallenge;
