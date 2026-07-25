import React from 'react';
import { Leaf, FlaskConical, ShieldCheck, Users, ArrowRight } from 'lucide-react';

const OurProducts = () => {
  const rangeData = [
    {
      title: "Veggie Vitals",
      desc: "Daily nutrition through a carefully formulated blend of vegetables, herbs, and spices.",
      image: "/veggie_vitals.png",
      link: "/products/veggie-vitals"
    },
    {
      title: "Nutri Mix",
      desc: "A fiber-rich nutritional blend for everyday wellness and better living.",
      image: "/nutri_mix.png",
      link: "/products/nutri-mix"
    },
    {
      title: "Single Ingredient Products",
      desc: "Pure. Natural. Versatile. Made from handpicked ingredients.",
      image: "/single_ingredient.png",
      link: "/products/single-ingredient"
    }
  ];

  const featuresData = [
    {
      title: "Inspired by Nature",
      desc: "Ingredients chosen with care",
      icon: Leaf
    },
    {
      title: "Backed by Research",
      desc: "Years of formulation and refinement",
      icon: FlaskConical
    },
    {
      title: "Made with Integrity",
      desc: "Clean, safe and transparent",
      icon: ShieldCheck
    },
    {
      title: "For Every Family",
      desc: "Practical solutions for everyday wellness",
      icon: Users
    }
  ];

  const getCellClasses = (idx) => {
    const base = "flex gap-3 items-center sm:items-start transition-all duration-300";
    let border = "border-[#e2ead9]";
    let padding = "";
    
    if (idx === 0) {
      border += " border-r border-b lg:border-b-0 lg:border-r";
      padding = "pb-5 pr-4 lg:pb-0 lg:pr-8";
    } else if (idx === 1) {
      border += " border-b lg:border-b-0 lg:border-r";
      padding = "pb-5 pl-4 lg:pb-0 lg:px-8";
    } else if (idx === 2) {
      border += " border-r lg:border-r";
      padding = "pt-5 pr-4 lg:pt-0 lg:px-8";
    } else if (idx === 3) {
      border += " border-none";
      padding = "pt-5 pl-4 lg:pt-0 lg:pl-8";
    }
    
    return `${base} ${border} ${padding}`;
  };

  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 relative z-10">
        
        {/* 1. Main Hero Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Left Column: Heading & Text */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Label */}
            <div className="inline-flex items-center gap-2 text-[#4d8745] font-bold tracking-widest text-[10px] sm:text-xs uppercase mb-4">
              <Leaf size={14} className="text-[#61a355]" style={{ transform: 'scaleX(-1)' }} />
              OUR PRODUCTS
              <Leaf size={14} className="text-[#61a355]" />
            </div>

            {/* Title */}
            <h2 className="font-serif text-[36px] md:text-[46px] lg:text-[54px] text-[#1c3e1e] font-bold leading-tight mb-4">
              Nature-Inspired <br className="hidden md:block" />
              Wellness Solutions
            </h2>

            {/* Underline */}
            <div className="w-16 h-[2px] bg-[#4d8745] mb-6 mx-auto md:mx-0"></div>

            {/* Paragraph */}
            <p className="text-gray-700 text-sm lg:text-base leading-relaxed max-w-[500px] mx-auto md:mx-0">
              Thoughtfully crafted with natural ingredients and backed by research, our products are made to support your family's daily nutrition and overall wellness.
            </p>

            {/* View All Button */}
            <a href="/products" className="mt-8 bg-[#345920] hover:bg-[#2b4c18] text-white px-8 py-3.5 rounded text-[14px] lg:text-[15px] font-bold transition-all duration-300 flex items-center gap-2 group shadow-sm border border-[#345920] w-fit">
              View All Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right Column: Large Setup Image - Hidden on Mobile */}
          <div className="hidden md:block w-full h-[280px] sm:h-[350px] md:h-[420px] rounded-[24px] overflow-hidden shadow-sm">
            <img 
              src="/products_hero.png" 
              alt="Greenbae Veggie Vitals and Nutri Mix supplement pouches setup" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* 2. Our Range Section */}
        <div className="mb-16">
          {/* Section Sub-Header - Hidden on Mobile to match screenshot layout */}
          <div className="hidden md:flex flex-col items-center text-center mb-10">
            <div className="inline-flex items-center gap-2 text-[#4d8745] font-bold tracking-widest text-[10px] sm:text-xs uppercase mb-3">
              <Leaf size={12} className="text-[#61a355]" style={{ transform: 'scaleX(-1)' }} />
              OUR RANGE
              <Leaf size={12} className="text-[#61a355]" />
            </div>
            <div className="w-12 h-[1px] bg-[#d1e6d3]"></div>
          </div>

          {/* 3-Column Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {rangeData.map((item, idx) => (
              <div 
                key={idx} 
                className={`flex flex-row items-center bg-[#fcfbf7] border border-[#f3f0e7] rounded-[24px] p-5 gap-5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)] transition-all duration-300 ${
                  idx === 2 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Left/Right Product Image */}
                <div className="w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] md:w-[125px] md:h-[125px] shrink-0 overflow-hidden rounded-xl bg-white border border-gray-100 flex items-center justify-center">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>

                {/* Content */}
                <div className="flex-1 text-left flex flex-col items-start justify-between h-full">
                  <h4 className="font-serif font-bold text-base md:text-lg text-[#1c3e1e] mb-1 leading-tight">{item.title}</h4>
                  <p className="text-gray-600 text-xs md:text-[13px] leading-relaxed mb-3">{item.desc}</p>
                  <button className="inline-flex items-center gap-1.5 text-[11px] md:text-xs font-bold text-[#345920] hover:text-[#2b4c18] bg-[#f4f7f0] hover:bg-[#e2ead9] rounded-md px-3.5 py-1.5 transition-colors duration-200 group">
                    Learn More
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Bottom Features Banner */}
        <div className="bg-[#f4f7f0] border border-[#e2ead9] rounded-[24px] p-5 md:p-8 lg:p-10 lg:pr-56 relative overflow-hidden flex flex-col lg:flex-row items-center gap-6">
          
          {/* Left: 4 Features Grid (2x2 on Mobile/Tablet, 4 Columns on Desktop) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 w-full z-10">
            {featuresData.map((item, idx) => (
              <div key={idx} className={getCellClasses(idx)}>
                {/* Icon in border circle */}
                <div className="shrink-0 w-9 h-9 rounded-full bg-white border border-[#e2ead9] flex items-center justify-center text-[#4d8745] shadow-sm">
                  <item.icon size={16} strokeWidth={1.5} />
                </div>
                <div className="text-left">
                  <h5 className="font-serif font-bold text-[#1c3e1e] text-xs lg:text-[14px] leading-tight mb-0.5">{item.title}</h5>
                  <p className="text-gray-500 text-[10px] lg:text-[12px] leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Family photo sticking up from bottom edge (Desktop only) */}
          <div className="absolute bottom-0 right-10 xl:right-16 w-[180px] h-[130px] z-10 hidden lg:block pointer-events-none">
            <img 
              src="/banner_family.png" 
              alt="Smiling family" 
              className="w-full h-full object-cover object-bottom"
            />
          </div>

          {/* Decorative Leaf SVG (Bottom Right, behind photo or on the side, Desktop only) */}
          <div className="absolute -bottom-4 -right-4 opacity-40 transform scale-50 pointer-events-none hidden lg:block">
            <svg width="200" height="200" viewBox="0 0 100 100" fill="none" className="text-[#4d8745]">
               <path d="M10,90 Q40,50 90,10" stroke="currentColor" strokeWidth="2" fill="none" />
               <path d="M30,70 Q20,40 50,40 Q60,60 30,70" fill="currentColor" opacity="0.6" />
               <path d="M50,40 Q50,10 80,20 Q80,50 50,40" fill="currentColor" opacity="0.6" />
               <path d="M70,30 Q90,10 90,30 Q70,50 70,30" fill="currentColor" opacity="0.6" />
            </svg>
          </div>

          {/* Leaf Branch Decoration at bottom center (Mobile/Tablet only) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[200px] h-[20px] pointer-events-none flex items-end justify-center lg:hidden z-0">
            <svg viewBox="0 0 200 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#4d8745]/50">
              <path d="M10 22C40 20 80 18 100 18C120 18 160 20 190 22" stroke="currentColor" strokeWidth="1" />
              {/* Left leaves */}
              <path d="M30 21C26 12 36 8 42 15C36 19 32 20 30 21Z" fill="currentColor" />
              <path d="M55 20C50 11 60 7 67 14C61 18 57 19 55 20Z" fill="currentColor" />
              <path d="M80 19C75 10 85 6 92 13C86 17 82 18 80 19Z" fill="currentColor" />
              {/* Right leaves */}
              <path d="M170 21C174 12 164 8 158 15C164 19 168 20 170 21Z" fill="currentColor" />
              <path d="M145 20C150 11 140 7 133 14C139 18 143 19 145 20Z" fill="currentColor" />
              <path d="M120 19C125 10 115 6 108 13C114 17 118 18 120 19Z" fill="currentColor" />
            </svg>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OurProducts;
