import React from 'react';
import { Leaf, Heart, Users, Globe, ArrowRight } from 'lucide-react';

const StoryHero = () => {
  const icons = [
    { icon: <Leaf className="w-6 h-6 text-primary-800" />, title: "Rooted in Family" },
    { icon: <Heart className="w-6 h-6 text-primary-800" />, title: "Driven by Care" },
    { icon: <Users className="w-6 h-6 text-primary-800" />, title: "Focused on Wellness" },
    { icon: <Globe className="w-6 h-6 text-primary-800" />, title: "For a Better Tomorrow" },
  ];

  return (
    <section className="relative w-full bg-[#FAF9F5] flex flex-col md:block overflow-hidden">
      
      {/* Mobile Text Section: Stacked above image on mobile */}
      <div className="md:hidden flex flex-col items-center justify-center px-6 pt-12 pb-6 text-center z-20">
        <div className="flex items-center gap-3 mb-4">
          <Leaf className="w-4 h-4 text-primary-800" />
          <span className="uppercase tracking-widest text-xs font-semibold text-primary-900">Our Story</span>
          <Leaf className="w-4 h-4 text-primary-800" />
        </div>
        <h1 className="text-4xl font-serif font-bold text-primary-900 leading-[1.1] mb-4">
          Born From<br /> A Family's Love
        </h1>
        <p className="text-gray-700 leading-relaxed mb-6 max-w-xs">
          What began as a simple effort by loving parents to ensure better nutrition for their children eventually grew into Greenbae—a movement dedicated to healthier living.
        </p>
        <button className="bg-primary-800 hover:bg-primary-900 text-white px-8 py-3 rounded flex items-center gap-3 text-sm font-medium transition-colors">
          Our Journey <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Main Hero Container (Image + Desktop Text + Desktop Bottom Curve) */}
      <div className="relative w-full h-[350px] md:h-[calc(100vh-80px)] md:min-h-[600px] md:max-h-[850px] z-10 flex flex-col">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&q=80&w=2000"
          alt="Happy family outdoors"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        {/* Gradient for Desktop ONLY */}
        <div 
          className="hidden md:block absolute inset-0 z-10" 
          style={{backgroundImage: 'linear-gradient(to right, #FAF9F5 0%, #FAF9F5 30%, rgba(250,249,245,0.85) 48%, rgba(250,249,245,0.1) 68%, transparent 100%)'}} 
        />

        {/* Desktop Text Overlay */}
        <div className="hidden md:flex absolute top-0 left-0 h-full w-[55%] lg:w-[48%] z-20 flex-col justify-center px-12 lg:pl-24 pb-20">
          <div className="flex items-center gap-3 mb-5">
            <Leaf className="w-4 h-4 text-primary-800" />
            <span className="uppercase tracking-widest text-xs font-semibold text-primary-900">Our Story</span>
            <Leaf className="w-4 h-4 text-primary-800" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-primary-900 leading-[1.08] mb-6">
            Born From<br /> A Family's Love
          </h1>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-sm text-lg">
            What began as a simple effort by loving parents to ensure better nutrition for their children eventually grew into Greenbae—a movement dedicated to healthier living.
          </p>
          <div>
            <button className="bg-primary-800 hover:bg-primary-900 text-white px-8 py-3 rounded flex items-center gap-3 text-sm font-medium transition-colors">
              Our Journey <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Desktop Bottom Icons - Inside Hero Container to "fit in hero view" */}
        <div className="hidden md:block absolute bottom-0 left-0 right-0 z-30">
          <svg viewBox="0 0 1440 90" className="w-full h-[60px] lg:h-[90px] block" preserveAspectRatio="none">
            <path d="M0,55 C360,110 1080,0 1440,45 L1440,90 L0,90 Z" fill="white" />
          </svg>
          <div className="bg-white px-4 pb-8 pt-2 relative">
            <div className="container mx-auto px-4 lg:px-16">
              <div className="grid grid-cols-4 divide-x divide-gray-100">
                {icons.map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center px-6 group">
                    <div className="w-16 h-16 rounded-full bg-[#f4f5f2] flex items-center justify-center mb-3 transition-transform group-hover:scale-105 text-primary-800">
                      {item.icon}
                    </div>
                    <span className="font-semibold text-primary-900 text-sm">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Decorative Leaves */}
            <div className="absolute bottom-0 left-0 w-24 h-24 pointer-events-none opacity-30 overflow-hidden">
              <Leaf className="absolute -bottom-6 -left-6 w-20 h-20 text-primary-800 rotate-45" />
            </div>
            <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none opacity-30 overflow-hidden">
              <Leaf className="absolute -bottom-6 -right-6 w-20 h-20 text-primary-800 -rotate-45" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Icons - Stacked below Image */}
      <div className="md:hidden relative w-full z-20 -mt-8">
        <svg viewBox="0 0 1440 60" className="w-full h-[40px] block" preserveAspectRatio="none">
           <path d="M0,40 C400,60 1000,0 1440,20 L1440,60 L0,60 Z" fill="white" />
        </svg>
        <div className="bg-white px-4 pb-10 pt-2 relative">
          <div className="grid grid-cols-2 gap-y-8 gap-x-4">
            {icons.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center px-2 group">
                <div className="w-14 h-14 rounded-full bg-[#f4f5f2] flex items-center justify-center mb-3 text-primary-800">
                  {item.icon}
                </div>
                <span className="font-semibold text-primary-900 text-[13px]">{item.title}</span>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-24 h-24 pointer-events-none opacity-30 overflow-hidden">
            <Leaf className="absolute -bottom-6 -left-6 w-20 h-20 text-primary-800 rotate-45" />
          </div>
          <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none opacity-30 overflow-hidden">
            <Leaf className="absolute -bottom-6 -right-6 w-20 h-20 text-primary-800 -rotate-45" />
          </div>
        </div>
      </div>

    </section>
  );
};

export default StoryHero;
