import React from 'react';
import { Leaf } from 'lucide-react';

const steps = [
  {
    title: "Family Nutrition Practice",
    desc: "It began at home—simple meals, better choices and a deep desire to see our children healthier.",
    img: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Learning & Refinement",
    desc: "We explored, read, consulted experts and learned everything we could about nutrition and ingredients.",
    img: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Research & Experimentation",
    desc: "Countless hours of research and kitchen experiments to find what truly works and is naturally better.",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Formula Development",
    desc: "Carefully crafted, clean and effective formulas that deliver real nutrition in the most natural way.",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Greenbae Established",
    desc: "A promise to bring clean, plant-based nutrition to families—honestly, transparently and responsibly.",
    img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Healthy Living Movement",
    desc: "Today, we continue our journey with one mission—to make healthy living simple, joyful and accessible for every family.",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=600",
  },
];

const YearsOfLearning = () => {
  return (
    <section id="years-of-learning" className="w-full bg-[#f8f9f0] overflow-hidden relative py-12 lg:py-24">
      {/* Decorative landscape for Desktop left */}
      <div className="hidden lg:block absolute bottom-0 left-0 w-[45%] h-full opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-[#f8f9f0] via-transparent to-[#f8f9f0] z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#f8f9f0] z-10" />
        <img 
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=1200" 
          alt="Landscape" 
          className="w-full h-full object-cover object-left-bottom"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row relative z-20 gap-12 lg:gap-16">
        {/* Left Section */}
        <div className="w-full lg:w-[40%] flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="lg:sticky lg:top-32 w-full flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-3.5 h-3.5 text-primary-800" />
              <span className="uppercase tracking-widest text-[11px] font-semibold text-primary-900">Our Story</span>
              <Leaf className="w-3.5 h-3.5 text-primary-800" />
            </div>
            <h2 className="font-serif font-bold text-[2rem] leading-[1.15] lg:text-[2.75rem] text-primary-900 mb-4 lg:mb-6">
              Years Of Learning.<br />One Purpose.
            </h2>
            <div className="w-10 h-[3px] bg-primary-700 rounded-full mb-6" />
            <p className="text-[#4a5a44] text-[12.5px] lg:text-sm leading-relaxed max-w-[320px] lg:max-w-sm">
              What started as a family's effort to improve daily nutrition, grew through years of learning, research and unwavering commitment—into Greenbae, a movement for healthier living.
            </p>
          </div>
        </div>

        {/* Right Section / Timeline */}
        <div className="w-full lg:w-[60%] relative">
          <div className="space-y-8 lg:space-y-12">
            {steps.map((s, i) => (
              <div key={i} className="relative flex gap-4 lg:gap-8 group">
                {/* Vertical Line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-[13px] lg:left-[19px] top-10 lg:top-12 bottom-[-2rem] lg:bottom-[-3rem] w-[1.5px] bg-[#c8dab8]" />
                )}
                
                {/* Indicator */}
                <div className="flex flex-col items-center flex-shrink-0 relative z-10 w-7 lg:w-10">
                  <div className="w-7 h-7 lg:w-10 lg:h-10 rounded-full bg-primary-800 text-white text-[12px] lg:text-[14px] font-semibold flex items-center justify-center">
                    {i + 1}
                  </div>
                  {i < steps.length - 1 && <Leaf className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-primary-700 mt-2 lg:mt-3 bg-[#f8f9f0]" />}
                </div>

                {/* Content Block */}
                <div className="flex-1 flex flex-col lg:flex-row gap-3 lg:gap-8 items-start lg:items-center">
                  <div className="flex-1">
                    <h3 className="text-[14px] lg:text-[16.5px] font-bold text-primary-900 mb-1 lg:mb-2">{s.title}</h3>
                    <p className="text-[12px] lg:text-[13.5px] text-[#4a5a44] leading-relaxed mb-1 pr-4 lg:pr-0">{s.desc}</p>
                  </div>
                  <div className="w-full lg:w-[220px] xl:w-[260px] h-[100px] lg:h-[130px] rounded-xl overflow-hidden shrink-0 border border-[#e8ead4] shadow-sm">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YearsOfLearning;