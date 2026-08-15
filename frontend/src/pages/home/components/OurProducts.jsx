import { Leaf, FlaskConical, ShieldCheck, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import veggieimage from "../../../assets/img-ourproducts/Greenbae Veggie Vitals.png";
import nutriimage from "../../../assets/img-ourproducts/Greenbae Diabe Nutri Mix.png";
import heroimage from "../../../assets/img-ourproducts/Greenbae products veggie vitals and NutrimixHeroImage.png";

const OurProducts = () => {
  const navigate = useNavigate();

  const rangeData = [
    {
      title: "Veggie Vitals",
      desc: "Daily nutrition through a carefully formulated blend of vegetables, herbs, and spices.",
      image: veggieimage,
      link: "/products/veggie-vitals"
    },
    {
      title: "Nutri Mix",
      desc: "A fiber-rich nutritional blend for everyday wellness and better living.",
      image: nutriimage,
      link: "/products/nutri-mix"
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
              src={heroimage} 
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

          {/* 2-Column Card Grid */}
          {/* Product Cards Grid - Copied from Products Page */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6 w-full mx-auto">
            {/* Card 1: Veggie Vitals */}
            <div 
              onClick={() => {
                if (window.innerWidth < 1024) {
                  navigate("/products/single", { state: { product: "veggie-vitals" } });
                }
              }}
              className="bg-[#F4EFE6] rounded-[16px] md:rounded-[28px] overflow-hidden flex flex-row items-stretch shadow-[0_4px_20px_rgba(0,0,0,0.03)] h-[250px] md:h-auto cursor-pointer lg:cursor-auto"
            >
              {/* Image container */}
              <div className="w-[45%] md:w-[46%] relative bg-[#EAE3D4]/40 md:bg-transparent overflow-hidden flex items-center justify-center">
                <img
                  src={veggieimage}
                  alt="Veggie Vitals Pouch"
                  className="w-full h-full object-cover object-center md:object-center"
                />
              </div>

              {/* Content container */}
              <div className="w-[55%] md:w-[54%] p-3 py-4 md:p-6 flex flex-col justify-center">
                <div className="mb-1 md:mb-2">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#173A22"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M12 2L3 7l1.5 8.5C5.5 19 9 22 12 22s6.5-3 7.5-6.5L21 7l-9-5z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-[18px] md:text-[32px] font-serif text-[#173A22] mb-0 md:mb-1">
                  Veggie Vitals
                </h3>
                <p className="text-[8px] md:text-[11px] font-bold tracking-[0.1em] md:tracking-[0.2em] text-gray-600 uppercase mb-1 md:mb-2">
                  Daily Nutrition Blend
                </p>

                <div className="w-8 md:w-12 h-[1px] md:h-[2px] bg-[#173A22] mb-2 md:mb-3"></div>

                <p className="text-[10px] md:text-[14px] text-gray-800 leading-snug md:leading-relaxed mb-2 md:mb-4 pr-2 md:pr-4">
                  A powerful blend of 16 vegetables, herbs and spices to help fill
                  everyday nutritional gaps naturally.
                </p>

                <ul className="space-y-[4px] md:space-y-[8px] mb-3 md:mb-5">
                  <li className="flex items-center gap-1.5 md:gap-3">
                    <svg
                      className="w-3 h-3 md:w-[18px] md:h-[18px] shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#173A22"
                      strokeWidth="1.5"
                    >
                      <path
                        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 16a3 3 0 01-3-3c0-2 3-4 3-4s3 2 3 4a3 3 0 01-3 3z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-[9px] md:text-[14px] font-medium text-gray-800 leading-tight">
                      Supports Overall Wellness
                    </span>
                  </li>
                  <li className="flex items-center gap-1.5 md:gap-3">
                    <svg
                      className="w-3 h-3 md:w-[18px] md:h-[18px] shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#173A22"
                      strokeWidth="1.5"
                    >
                      <path
                        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13 8v-4l-5 8h4v4l5-8h-4z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-[9px] md:text-[14px] font-medium text-gray-800 leading-tight">
                      Natural Energy Support
                    </span>
                  </li>
                  <li className="flex items-center gap-1.5 md:gap-3">
                    <svg
                      className="w-3 h-3 md:w-[18px] md:h-[18px] shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#173A22"
                      strokeWidth="1.5"
                    >
                      <path
                        d="M4 10v2a8 8 0 0016 0v-2H4z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 2v4M8 3v3M16 3v3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-[9px] md:text-[14px] font-medium text-gray-800 leading-tight">
                      Easy to Use, Great Taste
                    </span>
                  </li>
                  <li className="flex items-center gap-1.5 md:gap-3">
                    <svg
                      className="w-3 h-3 md:w-[18px] md:h-[18px] shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#173A22"
                      strokeWidth="1.5"
                    >
                      <path
                        d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="9"
                        cy="7"
                        r="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-[9px] md:text-[14px] font-medium text-gray-800 leading-tight">
                      For the Whole Family
                    </span>
                  </li>
                </ul>

                <button
                  onClick={(e) => { e.stopPropagation(); navigate("/products/single", { state: { product: "veggie-vitals" } }); }}
                  className="text-[#173A22] font-semibold md:font-semibold text-[11px] md:text-[14px] flex items-center justify-center gap-1 md:gap-2 hover:opacity-80 transition-opacity w-max"
                >
                  Explore Veggie Vitals <span>&rarr;</span>
                </button>
              </div>
            </div>

            {/* Card 2: Nutri Mix */}
            <div 
              onClick={() => {
                if (window.innerWidth < 1024) {
                  navigate("/products/single", { state: { product: "nutri-mix" } });
                }
              }}
              className="bg-[#F0E7D8] rounded-[16px] md:rounded-[28px] overflow-hidden flex flex-row items-stretch shadow-[0_4px_20px_rgba(0,0,0,0.03)] h-[250px] md:h-auto cursor-pointer lg:cursor-auto"
            >
              {/* Image container */}
              <div className="w-[45%] md:w-[46%] relative bg-[#E4D7C2]/40 md:bg-transparent overflow-hidden flex items-center justify-center">
                <img
                  src={nutriimage}
                  alt="Nutri Mix Pouch"
                  className="w-full h-full object-cover object-center md:object-center"
                />
              </div>

              {/* Content container */}
              <div className="w-[55%] md:w-[54%] p-3 py-4 md:p-6 flex flex-col justify-center">
                <div className="mb-1 md:mb-2">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#624028"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-[18px] md:text-[32px] font-serif text-[#624028] mb-0 md:mb-1">
                  Nutri Mix
                </h3>
                <p className="text-[8px] md:text-[11px] font-bold tracking-[0.1em] md:tracking-[0.2em] text-gray-600 uppercase mb-1 md:mb-2">
                  Fiber-Rich Nutrition
                </p>

                <div className="w-8 md:w-12 h-[1px] md:h-[2px] bg-[#624028] mb-2 md:mb-3"></div>

                <p className="text-[10px] md:text-[14px] text-gray-800 leading-snug md:leading-relaxed mb-2 md:mb-4 pr-2 md:pr-4">
                  A delicious blend of fiber-rich ingredients that support
                  digestive wellness and everyday nourishment.
                </p>

                <ul className="space-y-[4px] md:space-y-[8px] mb-3 md:mb-5">
                  <li className="flex items-center gap-1.5 md:gap-3">
                    <svg
                      className="w-3 h-3 md:w-[18px] md:h-[18px] shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#624028"
                      strokeWidth="1.5"
                    >
                      <path
                        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 12c0-2 3-3 3-3s3 1 3 3-3 5-3 5-3-3-3-5z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-[9px] md:text-[14px] font-medium text-gray-800 leading-tight">
                      Supports Digestive Wellness
                    </span>
                  </li>
                  <li className="flex items-center gap-1.5 md:gap-3">
                    <svg
                      className="w-3 h-3 md:w-[18px] md:h-[18px] shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#624028"
                      strokeWidth="1.5"
                    >
                      <path
                        d="M12 22C12 22 4 16 4 10C4 6.5 6.5 4 10 4C11.5 4 12 5 12 5C12 5 12.5 4 14 4C17.5 4 20 6.5 20 10C20 16 12 22 12 22Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-[9px] md:text-[14px] font-medium text-gray-800 leading-tight">
                      Rich In Dietary Fiber
                    </span>
                  </li>
                  <li className="flex items-center gap-1.5 md:gap-3">
                    <svg
                      className="w-3 h-3 md:w-[18px] md:h-[18px] shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#624028"
                      strokeWidth="1.5"
                    >
                      <path
                        d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-[9px] md:text-[14px] font-medium text-gray-800 leading-tight">
                      Sustained Energy Naturally
                    </span>
                  </li>
                  <li className="flex items-center gap-1.5 md:gap-3">
                    <svg
                      className="w-3 h-3 md:w-[18px] md:h-[18px] shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#624028"
                      strokeWidth="1.5"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-[9px] md:text-[14px] font-medium text-gray-800 leading-tight">
                      Perfect for Everyday Use
                    </span>
                  </li>
                </ul>

                <button
                  onClick={(e) => { e.stopPropagation(); navigate("/products/single", { state: { product: "nutri-mix" } }); }}
                  className="text-[#624028] font-semibold md:font-semibold text-[11px] md:text-[14px] flex items-center justify-center gap-1 md:gap-2 hover:opacity-80 transition-opacity w-max"
                >
                  Explore Nutri Mix <span>&rarr;</span>
                </button>
              </div>
            </div>
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
          <div className="absolute bottom-0 right-10 xl:right-16 w-[200px] xl:w-[240px] h-[150px] xl:h-[180px] z-10 hidden lg:block pointer-events-none">
            <img 
              src="/banner_family.png" 
              alt="Smiling family" 
              className="w-full h-full object-cover object-top pt-9 rounded-t-[16px]"
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
