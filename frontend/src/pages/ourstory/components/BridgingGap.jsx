import React from 'react';
import { Leaf, Clock, CheckCircle, ShoppingBag, Droplets, Users, FlaskConical, Heart } from 'lucide-react';

const BridgingGap = () => {
  const challenges = [
    {
      icon: <Clock className="w-5 h-5 text-white" />,
      title: "Time",
      desc: "Busy schedules leave little time to plan, cook or make the right nutritional choices every day."
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-white" />,
      title: "Consistency",
      desc: "Staying consistent with healthy habits is tough when routines, travel and distractions get in the way."
    },
    {
      icon: <ShoppingBag className="w-5 h-5 text-white" />,
      title: "Convenience",
      desc: "Finding truly natural, nutritious and convenient options you can trust—is still a challenge."
    }
  ];

  const bottomIcons = [
    { icon: <Droplets className="w-6 h-6" />, title: "Real Ingredients", sub: "Real Nutrition" },
    { icon: <Users className="w-6 h-6" />, title: "Rooted In Care", sub: "Driven By Purpose" },
    { icon: <FlaskConical className="w-6 h-6" />, title: "Backed By Research", sub: "Inspired By Nature" },
    { icon: <Heart className="w-6 h-6" />, title: "Created For Families", sub: "Trusted For Life" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-primary-800"><Leaf className="w-4 h-4" /></span>
              <span className="uppercase tracking-widest text-xs font-semibold text-primary-900">Our Story</span>
              <span className="text-primary-800"><Leaf className="w-4 h-4" /></span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 leading-tight mb-6">
              Bridging The Gap<br />Between Life And Nutrition
            </h2>
            
            <p className="text-gray-700 text-lg mb-10 max-w-md">
              In today's fast-paced world, people know that healthy living is important—but putting it into practice isn't easy.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {challenges.map((item, idx) => (
                <div key={idx} className="bg-[#f9faf7] p-6 rounded-xl border border-gray-100 flex flex-col items-start relative overflow-hidden group hover:border-primary-200 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-primary-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#f2f4e8] p-8 rounded-xl flex gap-6 items-start">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0">
                <Leaf className="w-6 h-6 text-primary-800" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-primary-900 mb-2">Greenbae exists to make wellness easier.</h3>
                <p className="text-gray-700 leading-relaxed">
                  We bring together nature, nutrition and innovation to create solutions that fit real life—so every family can live healthier, happier and more naturally, every day.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-xl">
             <img 
              src="https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&q=80&w=1200" 
              alt="Healthy green smoothie on a table" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
        </div>

        {/* Bottom Icons Section */}
        <div className="mt-20 pt-12 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-8">
          {bottomIcons.map((item, idx) => (
             <div key={idx} className="flex items-center gap-4 justify-center">
               <div className="text-primary-800">{item.icon}</div>
               <div>
                 <div className="font-bold text-primary-900 text-sm">{item.title}</div>
                 <div className="text-xs text-gray-500">{item.sub}</div>
               </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BridgingGap;
