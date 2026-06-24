import React from 'react';
import { Leaf, ShieldCheck, Heart, Users } from 'lucide-react';

const MoreThanName = () => {
  const attributes = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "NATURAL",
      desc: "Rooted in nature, made with purity."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "TRUSTED",
      desc: "Safe, reliable and made for families."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "NOURISHING",
      desc: "Thoughtfully crafted for real nutrition."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "FRIEND FOR LIFE",
      desc: "A companion in every step of your wellness."
    }
  ];

  return (
    <section className="py-24 bg-[#f4f5f2] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-3/5">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-primary-800"><Leaf className="w-4 h-4" /></span>
              <span className="uppercase tracking-widest text-xs font-semibold text-primary-900">Our Story</span>
              <span className="text-primary-800"><Leaf className="w-4 h-4" /></span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-900 mb-4">
              More Than A Name
            </h2>

            <div className="mb-10">
              <div className="text-6xl md:text-8xl font-serif font-bold text-primary-800 tracking-tight leading-none mb-4">
                Greenbae
              </div>
              <div className="flex items-center gap-6">
                <span className="text-3xl font-light text-primary-900">=</span>
                <span className="text-4xl md:text-5xl font-serif italic text-primary-700">Natural Friend</span>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg mb-16 max-w-xl leading-relaxed">
              Just as that nutritional drink became a trusted companion in our childhood, Greenbae strives to become a natural friend in the lives of families today.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {attributes.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 text-primary-800 shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-primary-900 text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Decorative Image Area */}
          <div className="w-full lg:w-2/5 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1544885564-fa1222e9641d?auto=format&fit=crop&q=80&w=800" 
                alt="Green mug representing natural friend" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Card Overlay */}
            <div className="absolute -bottom-8 -left-8 bg-[#fdfaf5] p-8 shadow-xl max-w-[200px] border border-gray-100 transform rotate-[-4deg]">
              <p className="text-primary-900 font-serif italic text-xl text-center leading-relaxed">
                More than a drink. <br/> A friend for better living.
              </p>
              <div className="flex justify-center mt-4">
                <Leaf className="w-6 h-6 text-primary-800" />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default MoreThanName;
