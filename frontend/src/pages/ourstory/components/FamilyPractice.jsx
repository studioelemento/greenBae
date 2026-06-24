import React from 'react';
import { Leaf, Users, MapPin, Smile, AlertCircle } from 'lucide-react';

const FamilyPractice = () => {
  const points = [
    { icon: <Users className="w-5 h-5" />, title: "A Family\nLike Yours" },
    { icon: <MapPin className="w-5 h-5" />, title: "Frequent\nTransfers" },
    { icon: <Smile className="w-5 h-5" />, title: "Kids Reluctant\nTo Eat Healthy" },
    { icon: <AlertCircle className="w-5 h-5" />, title: "A Real Problem\nWe Wanted To Solve" },
  ];

  return (
    <section className="relative w-full bg-[#f8f9f0] overflow-hidden min-h-[580px] flex flex-col md:block">

      {/* Decorative corner leaves */}
      <div className="absolute top-0 left-0 w-28 h-28 opacity-20 pointer-events-none z-10 hidden md:block">
        <Leaf className="absolute top-2 left-2 w-16 h-16 text-primary-800 rotate-[-30deg]" />
        <Leaf className="absolute top-10 left-10 w-10 h-10 text-primary-800 rotate-[20deg]" />
      </div>
      <div className="absolute bottom-0 left-0 w-24 h-24 opacity-20 pointer-events-none z-10 hidden md:block">
        <Leaf className="absolute bottom-2 left-2 w-14 h-14 text-primary-800 rotate-[40deg]" />
      </div>

      {/* Desktop Right full-bleed image */}
      <div className="hidden md:block absolute top-0 right-0 w-[62%] h-full z-0">
        <div
          className="absolute inset-0 z-10"
          style={{ background: 'linear-gradient(to right, #f8f9f0 0%, rgba(248,249,240,0.6) 30%, transparent 60%)' }}
        />
        <img
          src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=1200"
          alt="Mother feeding daughter healthy food"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Content Container (Stacked on mobile, Left side on desktop) */}
      <div className="relative z-20 w-full md:w-[52%] px-6 md:pl-35 py-12 md:py-14 flex flex-col items-center text-center md:items-start md:text-left gap-0">

        {/* Overline */}
        <div className="flex items-center gap-2 mb-4">
          <Leaf className="w-3.5 h-3.5 text-primary-800" />
          <span className="uppercase tracking-widest text-[11px] font-semibold text-primary-900">Our Story</span>
          <Leaf className="w-3.5 h-3.5 text-primary-800" />
        </div>

        {/* Title */}
        <h2 className="font-serif font-bold text-4xl md:text-5xl text-primary-900 leading-[1.1] mb-4 md:mb-2">
          A Simple<br className="hidden md:block" /> Family Practice
        </h2>
        <div className="w-9 h-[3px] bg-primary-700 rounded-full mb-6 md:mb-5" />

        {/* Body */}
        <div className="text-[#4a5a44] text-[13px] md:text-sm leading-relaxed max-w-[360px] space-y-4 md:space-y-3 mb-8 md:mb-6">
          <p>Like many families, we wanted the best for our children. With frequent job transfers, hostel life and busy routines, ensuring proper nutrition wasn't always easy.</p>
          <p>Our children often turned away from vegetables and healthy food. That's when we decided to find a better way—one that was natural, tasty and something they would love every day.</p>
        </div>

        {/* Icon row (Grid on mobile, flex on desktop) */}
        <div className="grid grid-cols-2 md:flex md:flex-wrap md:gap-x-4 md:gap-y-4 mb-8 w-full max-w-[320px] md:max-w-none bg-[#f4f6e6] md:bg-transparent rounded-2xl md:rounded-none">
          {points.map((item, idx) => (
            <div key={idx} className={`flex flex-col items-center justify-center p-5 md:p-0 md:min-w-[72px] ${
              idx === 0 ? 'border-b border-r border-[#e8ead4] md:border-none' : 
              idx === 1 ? 'border-b border-[#e8ead4] md:border-none' : 
              idx === 2 ? 'border-r border-[#e8ead4] md:border-none' : ''
            }`}>
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/70 border border-[#d5e2c8] flex items-center justify-center text-primary-700 mb-2.5 md:mb-1.5">
                {item.icon}
              </div>
              <span className="text-[10.5px] font-semibold text-primary-900 text-center whitespace-pre-line leading-snug">
                {item.title}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile Image */}
        <div className="md:hidden w-full max-w-[360px] rounded-xl overflow-hidden aspect-[4/3] mb-6 shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=1200"
            alt="Mother feeding daughter healthy food"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Quote bar */}
        <div className="bg-[#e4ecd4] rounded-xl px-5 py-4 md:py-3.5 flex flex-row items-center md:items-start text-left gap-3 md:gap-4 w-full max-w-[360px] md:max-w-[420px]">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:bg-white/50 flex items-center justify-center shrink-0">
            <Leaf className="w-6 h-6 md:w-5 md:h-5 text-primary-700" />
          </div>
          <p className="font-serif italic text-[14px] md:text-[13.5px] text-primary-900 leading-snug flex-grow">
            Every challenge became the beginning<br className="hidden md:block" />
            <span className="md:hidden"> </span>of <em>something meaningful.</em>
            <span className="float-right mt-1 ml-2 text-primary-700">♡</span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default FamilyPractice;