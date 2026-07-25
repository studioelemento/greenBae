import React from 'react';
import { Leaf, Heart, Smile, BookOpen, Lightbulb, ArrowRight, ShieldCheck, Users, Sprout } from 'lucide-react';
import image from '../../../assets/ourstory/Journey-has-begun.avif';

const JourneyBegins = () => {
  const pillars = [
    { icon: <Users className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />, title: "Family Wellness", desc: "Supporting every family with natural nutrition for stronger, healthier lives." },
    { icon: <Smile className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />, title: "Kids Wellness", desc: "Nourishing children with essential nutrients for growth, immunity and bright futures." },
    { icon: <Sprout className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />, title: "Everyday Nutrition", desc: "Simple, natural and convenient nutrition that fits seamlessly into everyday life." },
    { icon: <BookOpen className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />, title: "Healthy Living Education", desc: "Empowering families with knowledge, habits and choices for lifelong well-being." },
    { icon: <Lightbulb className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />, title: "Future Innovations", desc: "Continuously researching and innovating to bring better, cleaner and more effective solutions." }
  ];

  const bottomIcons = [
    { icon: <Sprout className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />, title: "Rooted in\nNature" },
    { icon: <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />, title: "Driven by\nPurpose" },
    { icon: <Users className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />, title: "Backed by\nResearch" },
    { icon: <Heart className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />, title: "Made for\nFamilies" }
  ];

  return (
    <section className="bg-[#FAF9F5] relative overflow-hidden flex flex-col pt-8 md:pt-12 lg:pt-16">
      
      {/* Load Caveat font for the handwritten text */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;600&display=swap');
          .font-handwritten {
            font-family: 'Caveat', cursive;
          }
        `}
      </style>

      {/* -------------------- DESKTOP VIEW (lg and above) -------------------- */}
      <div className="hidden lg:block">
        {/* Top Section with Image */}
        <div className="relative w-full mb-6">
          <div className="absolute top-0 right-0 w-[60%] h-full z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F5] via-[#FAF9F5]/90 to-transparent z-10" />
            <img 
              src={image} 
              alt="Family watching sunset" 
              className="w-full h-full object-cover object-right"
            />
          </div>

          <div className="container mx-auto px-16 xl:px-24 relative z-10 pt-6 pb-40">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-[1px] bg-[#2c4c3b]"></div>
                <Leaf className="w-3 h-3 text-[#2c4c3b]" />
                <span className="uppercase tracking-widest text-xs font-bold text-[#1a3622]">Our Story</span>
                <Leaf className="w-3 h-3 text-[#2c4c3b]" />
              </div>
              
              <h2 className="text-5xl font-serif font-bold text-[#1a3622] leading-[1.1] mb-5">
                The Journey<br />Has Just Begun
              </h2>
              
              <div className="w-10 h-[2px] bg-[#1a3622] mb-5"></div>

              <p className="text-gray-800 text-lg font-medium leading-relaxed max-w-md">
                From families to communities, from today to tomorrow—we're building a healthier, happier world together.
              </p>
            </div>
          </div>
        </div>

        {/* Pillars overlapping */}
        <div className="container mx-auto px-16 xl:px-24 relative -mt-48 z-20 mb-10">
          <div className="grid grid-cols-5 gap-4">
            {pillars.map((item, idx) => (
              <div key={idx} className="bg-[#FAF9F5] p-5 rounded-2xl flex flex-col items-center text-center border border-[#e2e5d5]/60 shadow-sm h-full hover:border-[#d9dfc2] transition-colors">
                <div className="w-14 h-14 rounded-full border border-[#2c4c3b] flex items-center justify-center mb-4 text-[#1a3622] shrink-0 bg-transparent">
                  {item.icon}
                </div>
                <h3 className="font-bold text-[#1a3622] text-[13px] mb-2 whitespace-pre-line leading-tight">
                  {item.title.replace(' ', '\n')}
                </h3>
                <p className="text-[12px] text-gray-700 leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-16 xl:px-24 mb-10">
          <div className="bg-[#183420] rounded-2xl p-10 relative overflow-hidden flex flex-row items-center justify-between gap-8 shadow-md border border-[#1a3622]/20">
            <div className="relative z-10 w-3/5 text-left">
              <h2 className="text-[2rem] font-serif text-white leading-[1.3]">
                Together, let's build a<br/>
                healthier tomorrow for <span className="font-handwritten text-5xl text-[#d4e488] ml-1 relative">every family.<svg className="absolute w-full h-3 -bottom-1 left-0 text-[#d4e488]" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0,8 Q50,0 100,8" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg></span>
              </h2>
            </div>
            
            <div className="relative z-10 flex flex-col gap-3 w-auto min-w-[260px]">
              <a href="/products" className="bg-[#FAF9F5] text-[#1a3622] hover:bg-white w-full px-5 py-3 rounded font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-sm">
                Explore Our Products <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/healthy-living" className="border border-white/40 text-white hover:bg-white/10 w-full px-5 py-3 rounded font-medium text-sm flex items-center justify-center gap-2 transition-colors">
                Join The Healthy Living Movement <Heart className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------- MOBILE VIEW (Below lg) -------------------- */}
      <div className="flex lg:hidden flex-col w-full">
        <div className="px-5 flex flex-col items-center text-center">
          {/* Header */}
          <div className="flex items-center gap-2 mb-3">
            <Leaf className="w-3 h-3 text-[#2c4c3b]" />
            <span className="uppercase tracking-widest text-[9px] font-bold text-[#1a3622]">Our Story</span>
            <Leaf className="w-3 h-3 text-[#2c4c3b]" />
          </div>
          
          <h2 className="text-3xl font-serif font-bold text-[#1a3622] leading-tight mb-3">
            The Journey<br />Has Just Begun
          </h2>
          
          <div className="w-8 h-[1px] bg-[#1a3622] mb-4"></div>

          <p className="text-gray-800 text-[13px] font-medium leading-relaxed px-2 mb-6">
            From families to communities, from today<br/>to tomorrow— we're building a healthier,<br/>happier world together.
          </p>
        </div>

        {/* Mobile Image */}
        <div className="px-4 mb-6">
          <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&q=80&w=800" 
              alt="Family watching sunset" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Mobile Pillars Stack */}
        <div className="px-4 flex flex-col gap-3 mb-6">
          {pillars.map((item, idx) => (
            <div key={idx} className="bg-[#F3F4ED] p-4 rounded-2xl flex flex-row items-center gap-4 border border-[#e2e5d5]/40 shadow-sm">
              <div className="w-12 h-12 rounded-full border border-[#2c4c3b]/30 flex items-center justify-center shrink-0 text-[#1a3622]">
                {item.icon}
              </div>
              <div className="flex flex-col text-left">
                <h3 className="font-bold text-[#1a3622] text-[13px] mb-1">{item.title.replace('\n', ' ')}</h3>
                <p className="text-[11px] text-gray-700 leading-snug pr-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA Section */}
        <div className="px-4 mb-6">
          <div className="bg-[#183420] rounded-xl p-5 relative overflow-hidden flex flex-col items-center text-center shadow-md border border-[#1a3622]/20">
            <h2 className="text-[17px] font-serif text-white leading-tight mb-4">
              Together, let's build a<br/>
              healthier tomorrow for <span className="font-handwritten text-[28px] text-[#d4e488] relative">every family.<svg className="absolute w-full h-2 -bottom-0.5 left-0 text-[#d4e488]" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0,8 Q50,0 100,8" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg></span>
            </h2>
            
            <div className="flex flex-col gap-2.5 w-full">
              <a href="/products" className="bg-[#FAF9F5] text-[#1a3622] hover:bg-white w-full py-2.5 rounded font-semibold text-[11px] flex items-center justify-center gap-1.5 shadow-sm">
                Explore Our Products <ArrowRight className="w-3 h-3" />
              </a>
              <a href="/healthy-living" className="border border-white/40 text-white hover:bg-white/10 w-full py-2.5 rounded font-medium text-[11px] flex items-center justify-center gap-1.5">
                Join The Healthy Living Movement <Heart className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Icons Section - Shared Desktop/Mobile but adjusted grid */}
      <div className="bg-[#FAF9F5] w-full border-t border-[#e2e5d5]/60 mt-auto py-5 lg:py-8">
        <div className="container mx-auto px-2 lg:px-24">
          {/* Mobile uses flex row with small items, Desktop uses grid */}
          <div className="flex justify-between items-start lg:grid lg:grid-cols-4 lg:gap-6 px-2 lg:px-0">
            {bottomIcons.map((item, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row items-center lg:justify-start gap-2 lg:gap-4 ${idx !== 3 ? 'border-r border-[#e2e5d5]/60 pr-2 lg:border-none lg:pr-0' : ''}`}>
                <div className="bg-[#EFEFDE] p-2 lg:p-3 rounded-full shrink-0 flex items-center justify-center text-[#1a3622]">
                  {item.icon}
                </div>
                <div className="text-center lg:text-left">
                  <div className="font-semibold text-[#1a3622] text-[9px] lg:text-[14px] leading-tight whitespace-pre-line lg:whitespace-normal">
                    {/* Only use newline on mobile */}
                    <span className="lg:hidden">{item.title}</span>
                    <span className="hidden lg:inline">{item.title.replace('\n', ' ')}</span>
                  </div>
                  {/* Subtitle only shown on desktop */}
                  <div className="hidden lg:block text-[12px] text-gray-600 mt-1">Inspired by real life</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default JourneyBegins;
