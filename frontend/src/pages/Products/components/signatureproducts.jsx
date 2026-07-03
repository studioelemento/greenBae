import React from 'react';

const SignatureProducts = () => {
  return (
    <section className="relative w-full bg-[#F9F6F0] py-20 font-sans text-gray-800 overflow-hidden">
      
      {/* Decorative Leaves Background */}
      <img 
        src="https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=600&auto=format&fit=crop" 
        alt="" 
        className="absolute top-0 left-0 w-[350px] md:w-[450px] opacity-20 mix-blend-multiply pointer-events-none -translate-x-10 -translate-y-10 blur-[3px]"
        aria-hidden="true"
      />
      <img 
        src="https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=600&auto=format&fit=crop" 
        alt="" 
        className="absolute bottom-0 right-0 w-[250px] md:w-[350px] opacity-20 mix-blend-multiply pointer-events-none translate-x-10 translate-y-10 blur-[3px] rotate-180"
        aria-hidden="true"
      />

      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#173A22" strokeWidth="1.5">
              <path d="M7 17L17 7M17 7C17 7 13 7 11 9C9 11 9 15 9 15M17 7C17 7 17 11 15 13C13 15 9 15 9 15" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[12px] font-bold tracking-[0.15em] text-[#173A22] uppercase">
              Our Signature Wellness Solutions
            </span>
            <div className="flex gap-[3px]">
              <div className="w-[3px] h-[3px] rounded-full bg-[#173A22]"></div>
              <div className="w-[3px] h-[3px] rounded-full bg-[#173A22]"></div>
            </div>
          </div>
          
          <h2 className="text-[40px] md:text-[56px] font-serif text-[#173A22] leading-[1.1] mb-5">
            Our Signature<br className="hidden md:block" /> Wellness Solutions
          </h2>
          
          <div className="flex justify-center mb-6">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C2A976" strokeWidth="1.5">
              <path d="M12 22C12 22 4 16 4 10C4 6.5 6.5 4 10 4C11.5 4 12 5 12 5C12 5 12.5 4 14 4C17.5 4 20 6.5 20 10C20 16 12 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <p className="text-[15px] text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Thoughtfully crafted blends that make daily nutrition<br className="hidden md:block" />
            simple, convenient and delicious – for you and your family.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
          
          {/* Card 1: Veggie Vitals */}
          <div className="bg-[#F4EFE6] rounded-[28px] overflow-hidden flex flex-col md:flex-row items-stretch shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
            {/* Image container */}
            <div className="w-full md:w-[46%] relative min-h-[350px]">
              <img 
                src="https://images.unsplash.com/photo-1615486171448-4ffd39891398?q=80&w=800&auto=format&fit=crop" 
                alt="Veggie Vitals Pouch" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            {/* Content container */}
            <div className="w-full md:w-[54%] p-8 lg:p-10 flex flex-col justify-center">
              <div className="mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#173A22" strokeWidth="1.5">
                   <path d="M12 2L3 7l1.5 8.5C5.5 19 9 22 12 22s6.5-3 7.5-6.5L21 7l-9-5z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-[32px] font-serif text-[#173A22] mb-1">Veggie Vitals</h3>
              <p className="text-[11px] font-semibold tracking-[0.2em] text-gray-600 uppercase mb-3">Daily Nutrition Blend</p>
              
              <div className="w-12 h-[2px] bg-[#173A22] mb-4"></div>
              
              <p className="text-[14px] text-gray-800 leading-relaxed mb-6 pr-4">
                A powerful blend of 16 vegetables, herbs and spices to help fill everyday nutritional gaps naturally.
              </p>
              
              <ul className="space-y-[14px] mb-8">
                <li className="flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#173A22" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 16a3 3 0 01-3-3c0-2 3-4 3-4s3 2 3 4a3 3 0 01-3 3z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[14px] font-medium text-gray-800">Supports Overall Wellness</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#173A22" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13 8v-4l-5 8h4v4l5-8h-4z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[14px] font-medium text-gray-800">Natural Energy Support</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#173A22" strokeWidth="1.5">
                    <path d="M4 10v2a8 8 0 0016 0v-2H4z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 2v4M8 3v3M16 3v3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[14px] font-medium text-gray-800">Easy to Use, Great Taste</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#173A22" strokeWidth="1.5">
                    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[14px] font-medium text-gray-800">For the Whole Family</span>
                </li>
              </ul>
              
              <button className="bg-[#173A22] text-white px-5 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#112a19] transition-colors w-max">
                Explore Veggie Vitals <span>&rarr;</span>
              </button>
            </div>
          </div>

          {/* Card 2: Nutri Mix */}
          <div className="bg-[#F0E7D8] rounded-[28px] overflow-hidden flex flex-col md:flex-row items-stretch shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
            {/* Image container */}
            <div className="w-full md:w-[46%] relative min-h-[350px]">
              <img 
                src="https://images.unsplash.com/photo-1581452960682-1c251d52a230?q=80&w=800&auto=format&fit=crop" 
                alt="Nutri Mix Pouch" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            {/* Content container */}
            <div className="w-full md:w-[54%] p-8 lg:p-10 flex flex-col justify-center">
              <div className="mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#624028" strokeWidth="1.5">
                   <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-[32px] font-serif text-[#624028] mb-1">Nutri Mix</h3>
              <p className="text-[11px] font-semibold tracking-[0.2em] text-gray-600 uppercase mb-3">Fiber-Rich Nutrition</p>
              
              <div className="w-12 h-[2px] bg-[#624028] mb-4"></div>
              
              <p className="text-[14px] text-gray-800 leading-relaxed mb-6 pr-4">
                A delicious blend of fiber-rich ingredients that support digestive wellness and everyday nourishment.
              </p>
              
              <ul className="space-y-[14px] mb-8">
                <li className="flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#624028" strokeWidth="1.5">
                     <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
                     <path d="M9 12c0-2 3-3 3-3s3 1 3 3-3 5-3 5-3-3-3-5z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[14px] font-medium text-gray-800">Supports Digestive Wellness</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#624028" strokeWidth="1.5">
                     <path d="M12 22C12 22 4 16 4 10C4 6.5 6.5 4 10 4C11.5 4 12 5 12 5C12 5 12.5 4 14 4C17.5 4 20 6.5 20 10C20 16 12 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[14px] font-medium text-gray-800">Rich In Dietary Fiber</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#624028" strokeWidth="1.5">
                     <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[14px] font-medium text-gray-800">Sustained Energy Naturally</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#624028" strokeWidth="1.5">
                     <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round"/>
                     <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[14px] font-medium text-gray-800">Perfect for Everyday Use</span>
                </li>
              </ul>
              
              <button className="bg-[#624028] text-white px-5 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#4d321f] transition-colors w-max">
                Explore Nutri Mix <span>&rarr;</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Banner Section */}
        <div className="bg-[#F0EBE1] rounded-[28px] p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          
          <div className="w-full lg:w-1/3 flex items-center justify-center lg:justify-start gap-5">
             <div className="w-14 h-14 rounded-full border border-[#8C9C90] flex items-center justify-center shrink-0">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#173A22" strokeWidth="1.5">
                  <path d="M12 22C12 22 4 16 4 10C4 6.5 6.5 4 10 4C11.5 4 12 5 12 5C12 5 12.5 4 14 4C17.5 4 20 6.5 20 10C20 16 12 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22V12" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
             </div>
             <p className="text-[20px] font-serif text-[#173A22] leading-[1.35]">
               Simple nutrition.<br />
               Real ingredients.<br />
               Better everyday.
             </p>
          </div>

          <div className="w-full lg:w-[40%] flex justify-center">
             <img 
               src="https://images.unsplash.com/photo-1542838686-37ed7a956102?q=80&w=800&auto=format&fit=crop" 
               alt="Happy Family" 
               className="w-full max-w-[420px] h-[180px] object-cover rounded-2xl"
             />
          </div>

          <div className="w-full lg:w-1/3 flex flex-col items-center justify-center">
             <p className="text-[14.5px] font-medium text-[#4B5563] leading-[1.6] text-center max-w-[280px] mb-4">
               Made with clean, natural ingredients and years of learning – because your family deserves the best.
             </p>
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C2A976" strokeWidth="1.5">
                <path d="M12 22C12 22 4 16 4 10C4 6.5 6.5 4 10 4C11.5 4 12 5 12 5C12 5 12.5 4 14 4C17.5 4 20 6.5 20 10C20 16 12 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SignatureProducts;
