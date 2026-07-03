import React from 'react';
import { Leaf, Clock, Check, ShoppingBag, Droplets, Users, FlaskConical, Heart, CalendarDays, Users2, Beaker, Sprout } from 'lucide-react';

const BridgingGap = () => {
  const challenges = [
    {
      icon: <Clock className="w-4 h-4 text-white" />,
      title: "Time",
      desc: "Busy schedules leave little time to plan, cook or make the right nutritional choices every day.",
      bgArt: <Users2 className="w-20 h-20 md:w-16 md:h-16 text-[#8b9876]" strokeWidth={1} />
    },
    {
      icon: <Check className="w-4 h-4 text-white" />,
      title: "Consistency",
      desc: "Staying consistent with healthy habits is tough when routines, travel and distractions get in the way.",
      bgArt: <CalendarDays className="w-20 h-20 md:w-16 md:h-16 text-[#8b9876]" strokeWidth={1} />
    },
    {
      icon: <ShoppingBag className="w-4 h-4 text-white" />,
      title: "Convenience",
      desc: "Finding truly natural, nutritious and convenient options you can trust—is still a challenge.",
      bgArt: <Beaker className="w-20 h-20 md:w-16 md:h-16 text-[#8b9876]" strokeWidth={1} />
    }
  ];

  const bottomIcons = [
    { icon: <Sprout className="w-5 h-5 text-[#2c4c3b]" />, title: "Real ingredients", sub: "Real Nutrition" },
    { icon: <Users className="w-5 h-5 text-[#2c4c3b]" />, title: "Rooted In Care", sub: "Driven By Purpose" },
    { icon: <FlaskConical className="w-5 h-5 text-[#2c4c3b]" />, title: "Backed By Research", sub: "Inspired By Nature" },
    { icon: <Heart className="w-5 h-5 text-[#2c4c3b]" />, title: "Created For Families", sub: "Trusted For Life" }
  ];

  return (
    <section className="relative w-full bg-[#FAF9F5] overflow-hidden flex flex-col pt-12 lg:pt-16">
      {/* Background Image Container (Hidden on mobile) */}
      <div className="absolute top-0 right-0 w-full lg:w-[45%] h-[85%] z-0 hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F5] via-[#FAF9F5]/90 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&q=80&w=1200" 
          alt="Healthy green smoothie on a table" 
          className="w-full h-full object-cover object-left"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 relative z-10 flex-grow">
        <div className="max-w-2xl lg:max-w-3xl lg:pr-8 mx-auto lg:mx-0">
          {/* Header */}
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
            <div className="w-6 h-[1px] bg-[#2c4c3b] hidden lg:block"></div>
            <Leaf className="w-3 h-3 text-[#2c4c3b]" />
            <span className="uppercase tracking-widest text-[10px] md:text-xs font-bold text-[#1a3622]">Our Story</span>
            <Leaf className="w-3 h-3 text-[#2c4c3b]" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-serif font-bold text-[#1a3622] leading-[1.15] mb-5 text-center lg:text-left">
            Bridging The Gap<br />Between Life And Nutrition
          </h2>
          
          <div className="w-10 h-[2px] bg-[#1a3622] mb-5 mx-auto lg:mx-0"></div>

          <p className="text-gray-800 text-base md:text-lg font-medium mb-10 max-w-lg leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
            In today's fast-paced world, people know that healthy living is important—but putting it into practice isn't easy.
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {challenges.map((item, idx) => (
              <div key={idx} className="bg-[#F8F6F0] rounded-xl p-5 md:p-5 relative overflow-hidden flex flex-col h-full border border-[#e2e5d5]/50 hover:border-[#d9dfc2] transition-colors shadow-sm">
                
                {/* Mobile: Icon & Title in row | Desktop: Stacked */}
                <div className="flex items-center gap-3 mb-2 md:block md:mb-0">
                  <div className="w-10 h-10 md:w-10 md:h-10 rounded-full bg-[#2c4c3b] flex items-center justify-center shrink-0 z-10 md:mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-[#1a3622] text-lg md:text-lg z-10">{item.title}</h3>
                </div>
                
                <div className="flex-grow w-[70%] md:w-full">
                  <p className="text-[14px] md:text-sm text-gray-700 leading-relaxed relative z-10 pb-4 md:mt-1">{item.desc}</p>
                </div>
                
                {/* The faded background icon */}
                <div className="absolute bottom-0 right-0 opacity-[0.15] transform translate-x-2 md:translate-x-0 translate-y-2 md:translate-y-0">
                   {item.bgArt}
                </div>
              </div>
            ))}
          </div>

          {/* Callout */}
          <div className="bg-[#EFEFDE] p-6 md:p-6 rounded-xl flex flex-col md:flex-row gap-4 md:gap-5 items-center md:items-start shadow-sm mb-10 lg:mb-16 text-center md:text-left">
            <div className="w-12 h-12 rounded-full border border-[#2c4c3b]/20 flex items-center justify-center shrink-0 bg-transparent mx-auto md:mx-0">
               <Leaf className="w-5 h-5 md:w-6 md:h-6 text-[#2c4c3b]" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-serif font-bold text-[#1a3622] mb-2">Greenbae exists to make wellness easier.</h3>
              <p className="text-gray-700 leading-relaxed text-[14px] md:text-[15px]">
                We bring together nature, nutrition and innovation to create solutions that fit real life—so every family can live healthier, happier and more naturally, every day.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Icons Section */}
      <div className="relative bg-[#FAF9F5] z-10 py-6 md:py-8 w-full border-t border-[#e2e5d5]/60 mt-auto">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {bottomIcons.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 md:gap-4 justify-start lg:justify-start">
                <div className="bg-[#EFEFDE] p-3 rounded-full shrink-0 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <div className="font-semibold text-[#1a3622] text-[13px] md:text-[14px] leading-tight">{item.title}</div>
                  <div className="text-[11px] md:text-[12px] text-gray-600 mt-1">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BridgingGap;

