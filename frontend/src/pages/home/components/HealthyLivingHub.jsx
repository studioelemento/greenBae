import React, { useState } from 'react';
import { Leaf, Heart, Smile, Soup, Sparkles, Activity, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const HealthyLivingHub = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { name: 'Nutrition', icon: Leaf },
    { name: 'Wellness', icon: Sparkles },
    { name: 'Lifestyle', icon: Heart },
    { name: 'Kids Health', icon: Smile },
    { name: 'Recipes', icon: Soup },
    { name: 'Mind & Body', icon: Activity }
  ];

  const articles = [
    {
      title: "5 Simple Habits For Better Nutrition Every Day",
      desc: "Small, consistent changes that make a big difference.",
      category: "Nutrition",
      image: "/nutrition_smoothie.png",
      readTime: "5 min read",
      date: "May 12, 2024"
    },
    {
      title: "How To Build Stronger Family Wellness Habits",
      desc: "Tips to create a healthier, happier home environment.",
      category: "Wellness",
      image: "/wellness_family.png",
      readTime: "6 min read",
      date: "May 8, 2024"
    },
    {
      title: "Nourishing Recipes The Whole Family Will Love",
      desc: "Delicious and nutritious meals made easy.",
      category: "Recipes",
      image: "/recipe_salad.png",
      readTime: "4 min read",
      date: "May 5, 2024"
    },
    {
      title: "Immunity Boosting Tips For Growing Kids",
      desc: "Natural ways to support strong immunity.",
      category: "Kids Health",
      image: "/children_generation.png",
      readTime: "5 min read",
      date: "May 1, 2024"
    }
  ];

  const filteredArticles = activeCategory === 'All'
    ? articles
    : articles.filter(article => article.category === activeCategory);

  const handleCategoryClick = (categoryName) => {
    if (activeCategory === categoryName) {
      setActiveCategory('All'); // Toggle off, showing all
    } else {
      setActiveCategory(categoryName);
    }
  };

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#fdfcf7] overflow-hidden">
      
      {/* Section Bottom-Right Leaf Decoration */}
      <div className="absolute bottom-0 right-0 h-[140px] w-[200px] pointer-events-none opacity-40 hidden lg:block z-0">
        <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#4d8745]">
          <path d="M130 -10C90 10 70 45 80 75C90 105 110 115 130 120" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M100 15C85 20 70 10 75 -5C85 -10 95 0 100 15Z" fill="currentColor" opacity="0.85" />
          <path d="M82 40C65 42 55 28 62 12C72 10 80 22 82 40Z" fill="currentColor" opacity="0.9" />
          <path d="M72 70C55 68 50 50 60 38C70 42 72 58 72 70Z" fill="currentColor" opacity="0.8" />
          <path d="M80 95C68 90 68 72 80 62C90 70 88 85 80 95Z" fill="currentColor" opacity="0.85" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 relative z-10">
        
        {/* 1. Cozy Hero Header Card */}
        <div className="bg-[#f4f7f0] border border-[#e2ead9] rounded-[32px] p-6 md:p-10 lg:p-12 relative mb-20 shadow-sm min-h-[320px] flex items-center overflow-visible">
          
          {/* Left Leaf Foliage */}
          <div className="absolute top-0 left-0 h-full w-[180px] pointer-events-none opacity-40 hidden lg:block z-0">
            <svg viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#4d8745]">
              <path d="M-10 10C30 30 50 80 40 120C30 160 0 190 -20 210" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M10 25C25 15 45 20 40 40C30 45 15 35 10 25Z" fill="currentColor" opacity="0.85" />
              <path d="M10 25C18 25 32 30 40 40" stroke="#f4f7f0" strokeWidth="0.5" />
              <path d="M28 50C48 45 58 55 52 75C40 80 32 68 28 50Z" fill="currentColor" opacity="0.9" />
              <path d="M28 50C38 52 46 62 52 75" stroke="#f4f7f0" strokeWidth="0.5" />
              <path d="M38 85C58 88 62 108 50 125C38 122 35 105 38 85Z" fill="currentColor" opacity="0.8" />
              <path d="M38 85C42 95 45 112 50 125" stroke="#f4f7f0" strokeWidth="0.5" />
              <path d="M30 128C45 138 42 158 28 172C18 162 20 145 30 128Z" fill="currentColor" opacity="0.85" />
              <path d="M30 128C30 138 28 155 28 172" stroke="#f4f7f0" strokeWidth="0.5" />
              <path d="M12 165C22 182 12 198 -2 205C-8 192 -5 178 12 165Z" fill="currentColor" opacity="0.9" />
            </svg>
          </div>

          {/* Right Column Full-Bleed Image Container with Left Gradient Fade (Desktop) */}
          <div className="absolute top-0 right-0 h-full w-[45%] pointer-events-none hidden lg:block overflow-hidden rounded-r-[32px]">
            <img 
              src="/journal_hero.png" 
              alt="Cozy tea and wellness journal setup" 
              className="w-full h-full object-cover object-center"
            />
            {/* Soft left gradient blending into the light green-cream bg */}
            <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-[#f4f7f0] to-transparent z-10" />
          </div>

          <div className="w-full lg:w-[55%] relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left pb-6 md:pb-0">
            {/* Label */}
            <div className="inline-flex items-center gap-2 text-[#4d8745] font-bold tracking-widest text-[10px] sm:text-xs uppercase mb-4">
              <Leaf size={14} className="text-[#61a355]" style={{ transform: 'scaleX(-1)' }} />
              HEALTHY LIVING HUB
              <Leaf size={14} className="text-[#61a355]" />
            </div>

            {/* Title */}
            <h2 className="font-serif text-[32px] md:text-[44px] lg:text-[48px] text-[#1c3e1e] font-bold leading-tight mb-4">
              Your Daily Dose Of <br />
              Knowledge & Inspiration
            </h2>

            {/* Leaf Divider */}
            <div className="flex items-center justify-center lg:justify-start gap-1 mb-5">
              <div className="w-8 h-[1px] bg-[#d1e6d3]"></div>
              <Leaf size={12} className="text-[#4d8745] opacity-60" />
              <div className="w-8 h-[1px] bg-[#d1e6d3]"></div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-[480px]">
              Simple tips, expert advice and real-life stories to help you and your family live healthier, naturally.
            </p>
            
            <div className="w-full h-[180px] rounded-[18px] overflow-hidden mt-6 border border-[#e2ead9] lg:hidden">
              <img src="/journal_hero.png" className="w-full h-full object-cover" alt="Wellness setup" />
            </div>
          </div>

          {/* 2. Interactive Category Tabs Card (Capsule overlapping the bottom inside the card) */}
          <div className="absolute -bottom-10 left-0 right-0 px-4 z-20">
            <div className="max-w-4xl mx-auto bg-white border border-[#e2ead9] rounded-[24px] md:rounded-full p-4 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-row items-center justify-start md:justify-around gap-6 overflow-x-auto no-scrollbar scroll-smooth">
              {categories.map((cat, idx) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.name;
                return (
                  <button
                    key={idx}
                    onClick={() => handleCategoryClick(cat.name)}
                    className="flex flex-col items-center justify-center min-w-[76px] cursor-pointer group focus:outline-none shrink-0"
                  >
                    {/* Icon Container */}
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 border ${
                      isActive 
                        ? 'bg-[#345920] border-[#345920] text-white shadow-md' 
                        : 'bg-[#f4f7f0]/60 border-[#e2ead9] text-[#4d8745] hover:bg-[#eef2e6] hover:text-[#345920]'
                    }`}>
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    {/* Label */}
                    <span className={`mt-2 text-[11px] sm:text-xs font-semibold tracking-wide transition-colors duration-200 ${
                      isActive ? 'text-[#345920] font-bold' : 'text-gray-500 group-hover:text-[#345920]'
                    }`}>
                      {cat.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* 3. Featured Reads Sub-Header */}
        <div className="flex items-center justify-between border-b border-[#f3f0e7] pb-4 mb-8">
          <div className="flex items-center gap-1.5">
            <h3 className="font-serif font-bold text-2xl md:text-3xl text-[#1c3e1e] tracking-tight">Featured Reads</h3>
            <Leaf size={18} className="text-[#61a355] mt-1 rotate-[30deg] inline-block" />
          </div>
          <Link 
            to="/wellness-journal" 
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#345920] hover:text-[#2b4c18] transition-colors group"
          >
            View All Articles
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* 4. Article Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredArticles.length === 0 ? (
            <div className="col-span-full py-16 text-center bg-white border border-[#f3f0e7] rounded-[24px] p-6 shadow-sm flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-[#f4f7f0] flex items-center justify-center text-[#4d8745] mb-3">
                <BookOpen size={20} />
              </div>
              <h4 className="font-serif font-bold text-[#1c3e1e] text-lg mb-1">More Reads Coming Soon</h4>
              <p className="text-gray-500 text-xs sm:text-sm max-w-sm leading-relaxed">
                We are currently writing expert articles for this category. Keep checking back or try another filter!
              </p>
            </div>
          ) : (
            filteredArticles.map((article, idx) => (
              <div 
                key={idx} 
                className="flex flex-col bg-white border border-[#f3f0e7] rounded-[24px] overflow-hidden shadow-sm hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
              >
                {/* Image Area */}
                <div className="relative w-full h-[180px] overflow-hidden bg-gray-100 shrink-0">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                  />
                  {/* Category tag overlay */}
                  <span className="absolute bottom-3 left-3 bg-[#eef2e6] text-[#345920] font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-[6px] shadow-sm z-10 border border-[#d1e6d3]">
                    {article.category}
                  </span>
                </div>

                {/* Content Area */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-[#1c3e1e] text-[15px] sm:text-base leading-snug group-hover:text-[#345920] transition-colors mb-2 line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed mb-4 line-clamp-2">
                      {article.desc}
                    </p>
                  </div>
                  {/* Card Meta Footer */}
                  <div className="text-[11px] text-gray-400 mt-auto pt-3 border-t border-gray-100 flex items-center justify-between font-medium">
                    <span>{article.readTime}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span>{article.date}</span>
                  </div>
                </div>

              </div>
            ))
          )}
        </div>

        {/* 5. Bottom Banner Call-To-Action */}
        <div className="bg-[#f4f7f0] border border-[#e2ead9] rounded-[24px] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden mt-16 shadow-sm">
          
          {/* Leaves SVG Peeking from bottom right corner */}
          <div className="absolute bottom-0 right-0 h-[80px] w-[120px] pointer-events-none opacity-30 z-0">
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" className="text-[#4d8745]" style={{ transform: 'scaleX(-1)' }}>
              <path d="M0,100 Q40,90 20,50 Q10,30 0,40" fill="currentColor" />
              <path d="M0,80 Q50,70 30,40" fill="currentColor" />
            </svg>
          </div>

          {/* Left Side Content */}
          <div className="flex items-center gap-4 relative z-10 text-left w-full">
            {/* Outlined Badge Leaf Icon */}
            <div className="shrink-0 w-12 h-12 rounded-full border border-[#e2ead9] bg-white flex items-center justify-center text-[#4d8745] shadow-sm">
              <Leaf size={20} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="font-serif font-bold text-[#1c3e1e] text-[15px] md:text-lg mb-1 leading-snug">
                Learning today, living better tomorrow.
              </h4>
              <p className="text-gray-600 text-xs md:text-[13px] leading-relaxed">
                Explore more insights and take a step towards a healthier you and your family.
              </p>
            </div>
          </div>

          {/* Right Side Button */}
          <Link 
            to="/wellness-journal" 
            className="bg-[#1c3e1e] hover:bg-[#2b4c18] text-white px-6 py-3.5 rounded-[8px] text-xs font-bold transition-all duration-300 flex items-center gap-1.5 shrink-0 z-10 shadow-sm border border-[#1c3e1e] group"
          >
            Explore All Articles
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>

        </div>

      </div>
    </section>
  );
};

export default HealthyLivingHub;
