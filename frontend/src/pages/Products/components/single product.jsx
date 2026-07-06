import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { 
  ChevronUp, 
  ChevronDown, 
  Search, 
  ShoppingBag, 
  Check, 
  ArrowRight,
  ShieldCheck,
  Star,
  Users,
  Briefcase,
  GraduationCap,
  Home as HomeIcon,
  HeartPulse,
  Heart
} from "lucide-react";

// Inline Icons for badges and features to match the premium design exactly
const FSSAI = () => (
  <svg className="w-8 h-8 text-[#4d8745]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="20" cy="20" r="16" strokeDasharray="3 3"/>
    <path d="M12 20h16M20 12v16" />
  </svg>
);

const LabTested = () => (
  <svg className="w-8 h-8 text-[#4d8745]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M14 8h12M16 8v6l-6 12v6h20v-6l-6-12V8" />
    <line x1="16" y1="14" x2="24" y2="14" />
  </svg>
);

const MadeInIndia = () => (
  <svg className="w-8 h-8 text-[#4d8745]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="20" cy="20" r="14" />
    <path d="M10 20h20M20 10v20" />
    <circle cx="20" cy="20" r="4" fill="currentColor" fillOpacity="0.2" />
  </svg>
);

const GMP = () => (
  <svg className="w-8 h-8 text-[#4d8745]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="10" y="10" width="20" height="20" rx="3" />
    <path d="M15 15h10M15 20h10M15 25h5" />
  </svg>
);

// Watercolor Plant Decoration
const DecorativePlantLeft = () => (
  <svg viewBox="0 0 120 280" fill="none" className="w-full h-full text-[#4d8745]/20" stroke="currentColor" strokeWidth="1.2">
    <path d="M10 280 C20 220, 25 160, 45 100" strokeWidth="2"/>
    <path d="M45 100 C20 80, 5 90, 2 120 C15 130, 35 115, 45 100Z" fill="currentColor" fillOpacity="0.1"/>
    <path d="M45 100 C65 70, 85 80, 90 110 C75 120, 55 110, 45 100Z" fill="currentColor" fillOpacity="0.15"/>
    <path d="M35 160 C15 145, 2 155, 0 180 C12 190, 30 180, 35 160Z" fill="currentColor" fillOpacity="0.1"/>
    <path d="M38 175 C58 160, 72 170, 74 190 C60 200, 45 190, 38 175Z" fill="currentColor" fillOpacity="0.12"/>
  </svg>
);

const DecorativePlantRight = () => (
  <svg viewBox="0 0 120 280" fill="none" className="w-full h-full text-[#4d8745]/20" stroke="currentColor" strokeWidth="1.2">
    <path d="M110 280 C100 220, 95 160, 75 100" strokeWidth="2"/>
    <path d="M75 100 C100 80, 115 90, 118 120 C105 130, 85 115, 75 100Z" fill="currentColor" fillOpacity="0.1"/>
    <path d="M75 100 C55 70, 35 80, 30 110 C45 120, 65 110, 75 100Z" fill="currentColor" fillOpacity="0.15"/>
    <path d="M85 160 C105 145, 118 155, 120 180 C108 190, 90 180, 85 160Z" fill="currentColor" fillOpacity="0.1"/>
    <path d="M82 175 C62 160, 48 170, 46 190 C60 200, 75 190, 82 175Z" fill="currentColor" fillOpacity="0.12"/>
  </svg>
);

const SingleProduct = () => {
  const location = useLocation();
  const productId = location.state?.product || "veggie-vitals";

  const productsData = {
    "veggie-vitals": {
      name: "Veggie Vitals",
      shortDesc: "Daily Nutrition Blend",
      desc: "A powerful blend of 16 vegetables, herbs and spices to help fill everyday nutritional gaps naturally.",
      benefits: [
        "100% Natural",
        "No Added Preservatives",
        "Supports Overall Wellness",
        "Natural Energy Support",
        "For the Whole Family"
      ],
      images: [
        "/veggie_vitals.png",
        "/single_ingredient.png",
        "/family_story.png"
      ]
    },
    "nutri-mix": {
      name: "Nutri Mix",
      shortDesc: "Fiber-Rich Nutrition",
      desc: "A delicious blend of fiber-rich ingredients that support digestive wellness and everyday nourishment.",
      benefits: [
        "100% Natural",
        "Rich In Dietary Fiber",
        "Supports Digestive Wellness",
        "Sustained Energy Naturally",
        "Perfect for Everyday Use"
      ],
      images: [
        "/nutri_mix.png",
        "/single_ingredient.png",
        "/family_story.png"
      ]
    }
  };

  const product = productsData[productId] || productsData["veggie-vitals"];
  const images = product.images;
  
  const [activeImage, setActiveImage] = useState(0);

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-[#1c3e1e] font-sans antialiased pb-28">
      
      {/* ──────────────────────────────────────────────────────── */}
      {/* SECTION 1: PRODUCT HERO & MAIN DETAILS                   */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Image Gallery (cols: 5) */}
          <div className="lg:col-span-7 flex flex-col md:flex-row gap-4 items-stretch">
            {/* Gallery Thumbnails */}
            <div className="flex md:flex-col items-center justify-between gap-3 md:w-20 order-2 md:order-1">
              <button 
                onClick={prevImage}
                className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors"
              >
                <ChevronUp className="w-4 h-4 text-gray-600 hidden md:block" />
                <span className="md:hidden">&larr;</span>
              </button>
              
              <div className="flex md:flex-col gap-2 overflow-x-auto py-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-lg border-2 overflow-hidden bg-white p-1 transition-all ${
                      activeImage === idx ? "border-[#4d8745]" : "border-gray-200"
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>

              <button 
                onClick={nextImage}
                className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors"
              >
                <ChevronDown className="w-4 h-4 text-gray-600 hidden md:block" />
                <span className="md:hidden">&rarr;</span>
              </button>
            </div>

            {/* Main Image View */}
            <div className="flex-1 relative aspect-square rounded-2xl border border-gray-100 bg-[#f4f5f2] p-6 flex items-center justify-center overflow-hidden order-1 md:order-2">
              <span className="absolute top-4 left-4 bg-[#1c3e1e] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full z-10">
                Bestseller
              </span>
              
              <img 
                src={images[activeImage]} 
                alt="Product main view" 
                className="max-h-[85%] max-w-[85%] object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-105" 
              />

              <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Column: Details & Actions (cols: 5) */}
          <div className="lg:col-span-5 flex flex-col pt-2">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1c3e1e] leading-tight mb-2">
              {product.name}
            </h1>
            <p className="text-lg font-medium text-[#4d8745] tracking-wide mb-4">
              {product.shortDesc}
            </p>
            
            <p className="text-[#556858] text-[15px] leading-relaxed mb-6">
              {product.desc}
            </p>

            {/* Key Benefits List */}
            <div className="space-y-3.5 mb-8">
              {product.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#f4f7f0] border border-[#c8dfc4] flex items-center justify-center text-[#4d8745]">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <span className="text-[14.5px] font-medium text-[#2d482e]">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 mb-8">
              {/* Button: Buy from website */}
              <button className="w-full bg-[#1c3e1e] hover:bg-[#2b5229] text-white py-3.5 px-6 rounded-xl transition-all duration-300 flex flex-col items-center justify-center group shadow-md">
                <div className="flex items-center gap-2 font-bold text-[15px]">
                  <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Buy From Our Website</span>
                </div>
                <span className="text-[11px] opacity-75 mt-0.5 font-normal">Secure purchase through our official store.</span>
              </button>

              {/* Button: Buy from Amazon */}
              <a 
                href="https://amazon.in" 
                target="_blank" 
                rel="noreferrer" 
                className="w-full border-2 border-[#ff9900]/20 bg-white hover:bg-orange-50/20 py-3 px-6 rounded-xl transition-all duration-300 flex flex-col items-center justify-center group shadow-sm hover:border-[#ff9900]/40"
              >
                <div className="flex items-center gap-2 font-bold text-[15px] text-[#ff9900]">
                  <span className="font-serif italic font-extrabold text-lg text-black pr-1">a</span>
                  <span className="text-[#333]">Buy From Amazon</span>
                </div>
                <span className="text-[11px] text-gray-500 mt-0.5 font-normal">Shop on Amazon with customer reviews and fast delivery.</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-4 gap-2 pt-6 border-t border-gray-100 text-center">
              <div className="flex flex-col items-center">
                <img src="https://tse4.mm.bing.net/th/id/OIP.E9Inhk7HKsIsU8pwfgkfMwAAAA?pid=Api&P=0&h=180" alt="FSSAI Logo" className="w-8 h-8" />
                <span className="text-[10px] font-bold text-gray-500 mt-2 uppercase tracking-wider">FSSAI Approved</span>
              </div>
              <div className="flex flex-col items-center">
                <LabTested />
                <span className="text-[10px] font-bold text-gray-500 mt-2 uppercase tracking-wider">Lab Tested</span>
              </div>
              <div className="flex flex-col items-center">
                <MadeInIndia />
                <span className="text-[10px] font-bold text-gray-500 mt-2 uppercase tracking-wider">Made In India</span>
              </div>
              <div className="flex flex-col items-center">
                <GMP />
                <span className="text-[10px] font-bold text-gray-500 mt-2 uppercase tracking-wider">GMP Certified</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* SECTION 2: WHY CHOOSE GREENBAE                          */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="relative bg-[#f4f5ed] border-y border-[#e2ead9] py-16 overflow-hidden">
        {/* Side Decorative Leaf Sprigs */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-28 md:w-36 pointer-events-none opacity-80">
          <DecorativePlantLeft />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-28 md:w-36 pointer-events-none opacity-80">
          <DecorativePlantRight />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold mb-10 text-[#1c3e1e]">
            Why Choose Greenbae?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="flex flex-col items-center p-4 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#f4f7f0] flex items-center justify-center text-[#4d8745] mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 3v18M3 12h18M12 3a9 9 0 019 9c0 4.97-4.03 9-9 9s-9-4.03-9-9a9 9 0 019-9z" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-base mb-2">Clean Ingredients</h3>
              <p className="text-xs text-[#556858] leading-relaxed max-w-[180px]">Carefully selected natural ingredients.</p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center p-4 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#f4f7f0] flex items-center justify-center text-[#4d8745] mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-base mb-2">Thoughtfully Formulated</h3>
              <p className="text-xs text-[#556858] leading-relaxed max-w-[180px]">Balanced blends for everyday wellness.</p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center p-4 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#f4f7f0] flex items-center justify-center text-[#4d8745] mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-base mb-2">Quality Assured</h3>
              <p className="text-xs text-[#556858] leading-relaxed max-w-[180px]">Lab tested for purity and safety.</p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center p-4 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#f4f7f0] flex items-center justify-center text-[#4d8745] mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-base mb-2">Made For Everyone</h3>
              <p className="text-xs text-[#556858] leading-relaxed max-w-[180px]">Suitable for the whole family.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* SECTION 3: HOW TO USE                                    */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-center mb-12 text-[#1c3e1e]">
          How To Use
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
          
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center relative group">
            <div className="w-28 h-28 rounded-[1px] shadow-sm flex items-center justify-center relative mb-4">
              <span className="absolute -top-1 -left-1 w-7 h-7 bg-[#1c3e1e] text-white rounded-full flex items-center justify-center text-xs font-bold shadow-sm">1</span>
              {/* Dynamic Spoon / Serve Icon */}
              <img src="https://tse1.mm.bing.net/th/id/OIF.jbVeRizeBqta0DF2Q4dsdw?pid=Api&P=0&h=180" alt="Spoon Icon" className="w-48 h-48 object-contain" />
            </div>
            <p className="text-xs font-medium text-[#2d482e] max-w-[180px]">Take the recommended serving.</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center relative group">
            <div className="w-28 h-28 shadow-sm flex items-center justify-center relative mb-4">
              <span className="absolute -top-1 -left-1 w-7 h-7 bg-[#1c3e1e] text-white rounded-full flex items-center justify-center text-xs font-bold shadow-sm">2</span>
              {/* Glass of Water Icon */}
              <img src="https://assets.goodhousekeeping.co.uk/main/embedded/25836/glass_water.jpg" alt="Glass of Water Icon" className="w-28 h-28 object-contain" />
            </div>
            <p className="text-xs font-medium text-[#2d482e] max-w-[180px]">Mix with water or your favorite beverage.</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center relative group">
            <div className="w-28 h-28 shadow-sm flex items-center justify-center relative mb-4">
              <span className="absolute -top-1 -left-1 w-7 h-7 bg-[#1c3e1e] text-white rounded-full flex items-center justify-center text-xs font-bold shadow-sm">3</span>
              {/* Spoon Stirring Glass Icon */}
              <img src="https://thumbs.dreamstime.com/b/pouring-matcha-green-tea-golden-milk-latte-beverage-being-prepared-frothy-glass-jug-containing-397725806.jpg" alt="Stirring Icon" className="w-28 h-28 object-contain" />
            </div>
            <p className="text-xs font-medium text-[#2d482e] max-w-[180px]">Stir well until dissolved.</p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center relative group">
            <div className="w-28 h-28 shadow-sm flex items-center justify-center relative mb-4">
              <span className="absolute -top-1 -left-1 w-7 h-7 bg-[#1c3e1e] text-white rounded-full flex items-center justify-center text-xs font-bold shadow-sm">4</span>
              {/* Full/Drinking Glass Icon */}
              <img src="https://wallpapers.com/images/hd/energizing-spinach-juice-png-93-tiujwz8x42jph9lx.jpg" alt="Drinking Glass Icon" className="w-28 h-28 object-contain" />
            </div>
            <p className="text-xs font-medium text-[#2d482e] max-w-[180px]">Enjoy daily for better well-being.</p>
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* SECTION 4: WHO IS IT FOR?                                */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="bg-[#f4f7f0] border-y border-[#e2ead9] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold mb-12 text-[#1c3e1e]">
            Who Is It For?
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {/* Group 1 */}
            <div className="flex flex-col items-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-[#f4f7f0] flex items-center justify-center text-[#4d8745] mb-3">
                <Briefcase className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold leading-tight">Working Professionals</span>
            </div>

            {/* Group 2 */}
            <div className="flex flex-col items-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-[#f4f7f0] flex items-center justify-center text-[#4d8745] mb-3">
                <HeartPulse className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold leading-tight">Health Conscious Adults</span>
            </div>

            {/* Group 3 */}
            <div className="flex flex-col items-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-[#f4f7f0] flex items-center justify-center text-[#4d8745] mb-3">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold leading-tight">Seniors</span>
            </div>

            {/* Group 4 */}
            <div className="flex flex-col items-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-[#f4f7f0] flex items-center justify-center text-[#4d8745] mb-3">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold leading-tight">Students</span>
            </div>

            {/* Group 5 */}
            <div className="flex flex-col items-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-[#f4f7f0] flex items-center justify-center text-[#4d8745] mb-3">
                <HomeIcon className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold leading-tight">Homemakers</span>
            </div>

            {/* Group 6 */}
            <div className="flex flex-col items-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-[#f4f7f0] flex items-center justify-center text-[#4d8745] mb-3">
                <Heart className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold leading-tight">Fitness Enthusiasts</span>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* SECTION 5: WHY FAMILIES TRUST & CUSTOMERS SAY            */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: Why Families Trust */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-8 text-[#1c3e1e]">
              Why Families Trust Greenbae
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-stretch">
              {/* Image side */}
              <div className="sm:col-span-5 rounded-2xl overflow-hidden shadow-sm relative min-h-[220px]">
                <img 
                  src="/family_story.png" 
                  alt="Happy family" 
                  className="absolute inset-0 w-full h-full object-cover" 
                />
              </div>

              {/* Trust Details side */}
              <div className="sm:col-span-7 space-y-5">
                {[
                  {
                    title: "Backed By Science",
                    desc: "Our products are researched and scientifically formulated."
                  },
                  {
                    title: "No Compromise On Quality",
                    desc: "We use premium ingredients and follow strict quality checks."
                  },
                  {
                    title: "Transparent & Honest",
                    desc: "We believe in clean labeling and honest communication."
                  },
                  {
                    title: "Trusted By Thousands",
                    desc: "Loved by families across India for their wellness journey."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-[#f4f7f0] border border-[#c8dfc4] flex items-center justify-center text-[#4d8745] mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-[#1c3e1e]">{item.title}</h4>
                      <p className="text-xs text-[#556858] mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Customer Reviews */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-8 text-[#1c3e1e]">
              What Our Customers Say
            </h2>

            <div className="space-y-6">
              {[
                {
                  quote: "Great product! I feel more energetic and it's become a part of my daily morning routine.",
                  author: "Priya S.",
                  role: "Pratibha V."
                },
                {
                  quote: "Good quality and very effective. Highly recommend to my friends.",
                  author: "Rajesh K.",
                  role: ""
                },
                {
                  quote: "I've been using it daily and feel much better. Thank you Greenbae!",
                  author: "Meena Iyer",
                  role: ""
                }
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex gap-4 items-start">
                  {/* Avatar representation using initial/placeholder */}
                  <div className="shrink-0 w-11 h-11 rounded-full bg-[#f4f7f0] border border-[#e2ead9] flex items-center justify-center text-[#4d8745] font-bold text-sm">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-0.5 mb-1.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#ff9900] text-[#ff9900]" />
                      ))}
                    </div>
                    <p className="text-xs text-[#556858] italic leading-relaxed mb-2">"{testimonial.quote}"</p>
                    <div className="flex justify-between items-center text-[11px] text-gray-400">
                      <span>{testimonial.role && `${testimonial.role} / `}{testimonial.author}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* BOTTOM PURCHASE BANNER / BAR                             */}
      {/* ──────────────────────────────────────────────────────── */}
      <div className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-gray-100 py-3 shadow-[0_-8px_30px_rgb(0,0,0,0.04)] z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="hidden sm:block text-left">
            <h4 className="font-serif font-bold text-[#1c3e1e] text-sm">Choose your preferred purchase option</h4>
            <p className="text-[11px] text-gray-500 mt-0.5">Your wellness journey, your way.</p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* Website mini button */}
            <button className="flex-1 sm:flex-initial bg-[#1c3e1e] hover:bg-[#2b5229] text-white py-2 px-5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Buy From Website</span>
            </button>

            {/* Amazon mini button */}
            <a 
              href="https://amazon.in" 
              target="_blank" 
              rel="noreferrer" 
              className="flex-1 sm:flex-initial border border-gray-200 bg-white hover:bg-orange-50/20 py-2 px-5 rounded-lg text-xs font-bold text-gray-700 flex items-center justify-center gap-1.5 transition-colors"
            >
              <span className="font-serif italic font-extrabold text-[#ff9900]">a</span>
              <span>Buy From Amazon</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SingleProduct;
