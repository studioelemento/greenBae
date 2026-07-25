import React from 'react';
import { Leaf, ShieldCheck, Heart, Users, Sprout, HeartHandshake, Quote } from 'lucide-react';
import image from '../../../assets/ourstory/More-than-a-name-image.avif';

const MoreThanName = () => {
  const desktopAttributes = [
    {
      icon: <Sprout className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />,
      title: "NATURAL",
      desc: "Rooted in nature, made with purity."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />,
      title: "TRUSTED",
      desc: "Safe, reliable and made for families."
    },
    {
      icon: <Heart className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />,
      title: "NOURISHING",
      desc: "Thoughtfully crafted for real nutrition."
    },
    {
      icon: <Users className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />,
      title: "FRIEND FOR LIFE",
      desc: "A companion in every step of your wellness."
    }
  ];

  const mobileAttributes = [
    { icon: <Sprout className="w-6 h-6 text-[#2c4c3b]" strokeWidth={1.5} />, title: "Natural", sub: "Like A Friend" },
    { icon: <HeartHandshake className="w-6 h-6 text-[#2c4c3b]" strokeWidth={1.5} />, title: "Trusted", sub: "Every Day" },
    { icon: <Users className="w-6 h-6 text-[#2c4c3b]" strokeWidth={1.5} />, title: "Made", sub: "For Families" },
    { icon: <Leaf className="w-6 h-6 text-[#2c4c3b]" strokeWidth={1.5} />, title: "Good", sub: "For Life" }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#FAF9F5] lg:py-28">
      
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
      <div className="hidden lg:flex container mx-auto px-16 xl:px-24 flex-col lg:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center text-center">
          {/* Header */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-[1px] bg-[#2c4c3b]"></div>
            <Leaf className="w-3 h-3 text-[#2c4c3b]" />
            <span className="uppercase tracking-widest text-[10px] md:text-xs font-bold text-[#1a3622]">Our Story</span>
            <Leaf className="w-3 h-3 text-[#2c4c3b]" />
          </div>
          
          <h2 className="text-3xl font-serif font-bold text-[#1a3622] mb-3">
            More Than A Name
          </h2>
          <div className="w-12 h-[1px] bg-[#1a3622] mb-8"></div>

          <div className="flex flex-col items-center mb-8 w-full">
            {/* Greenbae Logo Text */}
            <div className="text-[6rem] font-serif font-bold text-[#1a3622] tracking-tight leading-none mb-6 flex items-center justify-center">
              <span>Green</span>
              <span className="relative">
                b
                <Leaf className="absolute -top-4 -right-2 w-8 h-8 text-[#628A2F] transform -rotate-45 fill-current" />
              </span>
              <span>ae</span>
            </div>
            
            {/* Divider with equals sign */}
            <div className="flex items-center gap-4 text-[#2c4c3b] mb-4 w-[260px]">
              <div className="flex-grow h-[1px] bg-current opacity-40"></div>
              <Leaf className="w-4 h-4 opacity-80" />
              <span className="text-2xl font-medium opacity-80">=</span>
              <Leaf className="w-4 h-4 opacity-80" />
              <div className="flex-grow h-[1px] bg-current opacity-40"></div>
            </div>

            {/* Natural Friend Text */}
            <div className="text-5xl text-[#628A2F] font-handwritten font-medium tracking-wide">
              Natural Friend
            </div>
          </div>
          
          <p className="text-gray-700 text-base mb-12 max-w-[480px] leading-relaxed">
            Just as that nutritional drink became a trusted companion in our childhood, Greenbae strives to become a natural friend in the lives of families today.
          </p>

          {/* Icons Grid */}
          <div className="grid grid-cols-4 gap-6 w-full">
            {desktopAttributes.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#f0f2e9] flex items-center justify-center mb-4 text-[#1a3622]">
                  {item.icon}
                </div>
                <h3 className="font-bold text-[#1a3622] text-xs tracking-wider mb-2 uppercase">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-tight px-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Desktop Image */}
        <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={image}
              alt="Green mug representing natural friend" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* -------------------- MOBILE VIEW (Below lg) -------------------- */}
      <div className="flex lg:hidden flex-col pt-12">
        <div className="px-6 flex flex-col items-center text-center">
          
          {/* Mobile Header */}
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="w-3 h-3 text-[#2c4c3b]" />
            <span className="uppercase tracking-widest text-[10px] font-bold text-[#1a3622]">Our Story</span>
            <Leaf className="w-3 h-3 text-[#2c4c3b]" />
          </div>
          
          <div className="flex flex-col items-center mb-4">
            <h2 className="text-4xl font-serif font-bold text-[#1a3622] leading-tight">
              More Than
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-4xl text-[#1a3622] font-handwritten">A Name</span>
              <Leaf className="w-5 h-5 text-[#628A2F]" />
            </div>
          </div>
          
          <div className="w-12 h-[1px] bg-[#1a3622] mb-6"></div>

          <p className="text-[#1a3622] font-medium text-sm mb-4">
            Greenbae means <span className="font-handwritten text-lg text-[#628A2F]">Natural Friend.</span>
          </p>

          <p className="text-gray-700 text-[13px] mb-8 leading-relaxed px-4">
            Just as that nutritional drink became a trusted companion in our childhood, Greenbae strives to become a natural friend in the lives of families today.
          </p>
        </div>

        {/* Mobile Image */}
        <div className="w-full relative aspect-[4/3] mb-8">
          <img 
            src="https://images.unsplash.com/photo-1618897538865-c752df46714d?auto=format&fit=crop&q=80&w=800" 
            alt="Healthy green smoothie" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Mobile Icons Section */}
        <div className="bg-[#FAF9F5] px-6">
          <div className="grid grid-cols-2 gap-y-8 gap-x-4 border-b border-[#e2e5d5]/50 pb-8 relative">
            {/* Center cross border simulation */}
            <div className="absolute left-1/2 top-0 bottom-8 w-[1px] bg-[#e2e5d5]/50 transform -translate-x-1/2"></div>
            <div className="absolute top-1/2 left-4 right-4 h-[1px] bg-[#e2e5d5]/50 transform -translate-y-1/2"></div>

            {mobileAttributes.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center text-center z-10 pt-2">
                <div className="w-12 h-12 rounded-full border border-[#2c4c3b] flex items-center justify-center mb-3 text-[#2c4c3b] bg-[#FAF9F5]">
                  {item.icon}
                </div>
                <div className="text-[#1a3622] text-[13px] font-medium leading-tight">
                  {item.title}<br/>{item.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Quote Section */}
        <div className="relative bg-[#e9ecd6] mt-4 pt-10 pb-12 px-6 overflow-hidden">
          {/* Wavy top border using SVG */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-1/2">
             <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[200%] h-[40px] text-[#FAF9F5] fill-current">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
             </svg>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="flex gap-3 justify-center mb-2">
              <span className="text-[#8b9876] text-4xl font-serif">"</span>
              <div className="flex flex-col items-center pt-2">
                <p className="text-[#1a3622] font-serif font-bold text-lg mb-1">Not just a brand.</p>
                <p className="text-[#628A2F] font-handwritten text-2xl mb-4">A friend for life.</p>
                <Heart className="w-4 h-4 text-[#8b9876]" strokeWidth={2} />
              </div>
              <span className="text-[#8b9876] text-4xl font-serif transform translate-y-6">"</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreThanName;
