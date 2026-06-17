import React from 'react';
import { ArrowRight, Leaf, FlaskConical, ShieldCheck, Users, Clock, Utensils, Laptop, Smartphone, Zap, ShieldAlert, Brain, HeartPulse } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col w-full relative">
      {/* Hero Section */}
      <section className="relative w-full min-h-[900px] sm:min-h-[800px] md:min-h-[600px] lg:min-h-[650px] flex items-start md:items-center bg-white overflow-hidden pb-32 md:pb-32 pt-10 md:pt-0">
        {/* Background Image Setup */}
        <div className="absolute inset-0 md:inset-0 top-auto bottom-0 md:top-0 h-[50%] md:h-full z-0 flex justify-center md:justify-end">
          <div className="relative w-full md:w-[70%] lg:w-[65%] h-full">
            <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
              alt="Family gardening" 
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

      {/* Overlapping Features Bar */}
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
      
      {/* Spacer for content below since features bar overlaps */}
      <div className="h-8 lg:h-12 bg-white"></div>

      {/* Modern Lifestyle Challenge Section */}
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
    </div>
  );
};

export default Home;
