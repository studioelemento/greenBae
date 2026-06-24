import React from 'react';
import { Leaf, Heart, Smile, BookOpen, Lightbulb, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';

const JourneyBegins = () => {
  const pillars = [
    { icon: <Heart className="w-8 h-8" />, title: "Family Wellness", desc: "Supporting every family with natural nutrition for stronger, healthier lives." },
    { icon: <Smile className="w-8 h-8" />, title: "Kids Wellness", desc: "Nourishing children with essential nutrients for growth, immunity and bright futures." },
    { icon: <Leaf className="w-8 h-8" />, title: "Everyday Nutrition", desc: "Simple, natural and convenient nutrition that fits seamlessly into everyday life." },
    { icon: <BookOpen className="w-8 h-8" />, title: "Healthy Living\nEducation", desc: "Empowering families with knowledge, habits and choices for lifelong well-being." },
    { icon: <Lightbulb className="w-8 h-8" />, title: "Future\nInnovations", desc: "Continuously researching and innovating to bring better, cleaner and more effective solutions." }
  ];

  const bottomIcons = [
    { icon: <Leaf className="w-6 h-6" />, title: "Rooted in Nature", sub: "Inspired by real life" },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Driven by Purpose", sub: "Committed to wellness" },
    { icon: <CheckCircle className="w-6 h-6" />, title: "Backed by Research", sub: "Guided by science" },
    { icon: <Heart className="w-6 h-6" />, title: "Made for Families", sub: "Trusted for life" }
  ];

  return (
    <section className="bg-white">
      {/* Top Section with Image */}
      <div className="relative pt-24 pb-48 bg-gradient-to-br from-[#f9f9f6] to-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            <div className="w-full lg:w-5/12 z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary-800"><Leaf className="w-4 h-4" /></span>
                <span className="uppercase tracking-widest text-xs font-semibold text-primary-900">Our Story</span>
                <span className="text-primary-800"><Leaf className="w-4 h-4" /></span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-900 leading-tight mb-6">
                The Journey<br />Has Just Begun
              </h2>
              
              <p className="text-gray-700 text-lg mb-8 max-w-md">
                From families to communities, from today to tomorrow—we're building a healthier, happier world together.
              </p>
            </div>

            <div className="w-full lg:w-7/12 relative">
               <div className="rounded-3xl overflow-hidden h-[400px] shadow-xl">
                 <img 
                  src="https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&q=80&w=1200" 
                  alt="Family watching sunset" 
                  className="w-full h-full object-cover"
                 />
               </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Pillars overlapping */}
      <div className="container mx-auto px-4 md:px-8 relative -mt-32 z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {pillars.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col items-center text-center border border-gray-50 h-full">
              <div className="text-primary-700 mb-4 bg-[#f2f4e8] p-3 rounded-full">
                {item.icon}
              </div>
              <h3 className="font-bold text-primary-900 mb-3 whitespace-pre-line leading-tight">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 md:px-8 mt-20 mb-16">
        <div className="bg-primary-900 rounded-3xl p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Decorative leaves */}
          <Leaf className="absolute -bottom-10 -left-10 w-48 h-48 text-primary-800 opacity-50" />
          <Leaf className="absolute -top-10 -right-10 w-48 h-48 text-primary-800 opacity-50" />
          
          <div className="relative z-10 md:w-3/5 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight mb-2">
              Together, let's build a<br/>
              <span className="italic font-light">healthier tomorrow for <span className="font-serif">every family.</span></span>
            </h2>
          </div>
          
          <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto min-w-[280px]">
            <button className="bg-white text-primary-900 hover:bg-gray-50 w-full px-8 py-4 rounded font-semibold flex items-center justify-center gap-2 transition-colors">
              Explore Our Products <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-white/30 text-white hover:bg-white/10 w-full px-8 py-4 rounded font-medium flex items-center justify-center gap-2 transition-colors">
              Join The Healthy Living Movement <Heart className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Icons Section */}
      <div className="container mx-auto px-4 md:px-8 pb-16">
        <div className="border-t border-gray-100 pt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {bottomIcons.map((item, idx) => (
             <div key={idx} className="flex items-center gap-4 justify-center">
               <div className="text-primary-800 bg-[#f4f5f2] p-3 rounded-full">{item.icon}</div>
               <div>
                 <div className="font-bold text-gray-800 text-sm">{item.title}</div>
                 <div className="text-xs text-gray-500">{item.sub}</div>
               </div>
             </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default JourneyBegins;
