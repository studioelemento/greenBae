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
  Heart,
  Leaf,
  Shield,
  Droplet,
  FlaskConical
} from "lucide-react";

// Inline Icons for badges and features to match the premium design exactly
const FSSAI = () => (
  <svg className="w-8 h-8 text-[#4d8745]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="20" cy="20" r="16" strokeDasharray="3 3" />
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
    <path d="M10 280 C20 220, 25 160, 45 100" strokeWidth="2" />
    <path d="M45 100 C20 80, 5 90, 2 120 C15 130, 35 115, 45 100Z" fill="currentColor" fillOpacity="0.1" />
    <path d="M45 100 C65 70, 85 80, 90 110 C75 120, 55 110, 45 100Z" fill="currentColor" fillOpacity="0.15" />
    <path d="M35 160 C15 145, 2 155, 0 180 C12 190, 30 180, 35 160Z" fill="currentColor" fillOpacity="0.1" />
    <path d="M38 175 C58 160, 72 170, 74 190 C60 200, 45 190, 38 175Z" fill="currentColor" fillOpacity="0.12" />
  </svg>
);

const DecorativePlantRight = () => (
  <svg viewBox="0 0 120 280" fill="none" className="w-full h-full text-[#4d8745]/20" stroke="currentColor" strokeWidth="1.2">
    <path d="M110 280 C100 220, 95 160, 75 100" strokeWidth="2" />
    <path d="M75 100 C100 80, 115 90, 118 120 C105 130, 85 115, 75 100Z" fill="currentColor" fillOpacity="0.1" />
    <path d="M75 100 C55 70, 35 80, 30 110 C45 120, 65 110, 75 100Z" fill="currentColor" fillOpacity="0.15" />
    <path d="M85 160 C105 145, 118 155, 120 180 C108 190, 90 180, 85 160Z" fill="currentColor" fillOpacity="0.1" />
    <path d="M82 175 C62 160, 48 170, 46 190 C60 200, 75 190, 82 175Z" fill="currentColor" fillOpacity="0.12" />
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
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    if (window.innerWidth < 1024) {
      setOpenSection(openSection === section ? null : section);
    }
  };

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-[#1c3e1e] antialiased pb-0">

      {/* ──────────────────────────────────────────────────────── */}
      {/* SECTION 1: PRODUCT HERO & MAIN DETAILS                   */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-10 pb-8 md:pb-16">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 items-start">

          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6 flex flex-col md:flex-row gap-4 items-stretch lg:max-w-[550px]">
            {/* Gallery Thumbnails - Hidden on Mobile */}
            <div className="hidden md:flex flex-col items-center justify-center gap-4 w-[104px] order-1">
              <button
                onClick={prevImage}
                className="text-[#1c3e1e] hover:text-[#4d8745] transition-colors flex items-center justify-center"
              >
                <ChevronUp className="w-6 h-6 stroke-[2.5]" />
              </button>

              <div className="flex flex-col gap-4 overflow-y-auto py-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-[104px] h-[104px] rounded-xl border-2 overflow-hidden bg-white p-1 transition-all ${activeImage === idx ? "border-[#4d8745]" : "border-gray-200 hover:border-gray-300"
                      }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover rounded-lg" />
                  </button>
                ))}
              </div>

              <button
                onClick={nextImage}
                className="text-[#1c3e1e] hover:text-[#4d8745] transition-colors flex items-center justify-center"
              >
                <ChevronDown className="w-6 h-6 stroke-[2.5]" />
              </button>
            </div>

            {/* Main Image View */}
            <div className="flex-1 w-full relative aspect-square md:aspect-[4/5] rounded-3xl border border-gray-100 bg-white md:bg-[#f4f5f2] flex flex-col items-center justify-center overflow-hidden order-1 md:order-2 shadow-sm">
              <span className="absolute top-4 left-4 bg-[#1c3e1e] text-white text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded-md z-10">
                Bestseller
              </span>

              <img
                src={images[activeImage]}
                alt="Product main view"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />

              <button className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors z-10 border border-gray-100">
                <Search className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Dots */}
            <div className="flex md:hidden justify-center items-center gap-2 order-2 mt-2 w-full">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`rounded-full transition-all ${activeImage === idx ? "w-2 h-2 bg-[#1c3e1e]" : "w-1.5 h-1.5 bg-[#d1e6d3]"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Details & Actions */}
          <div className="lg:col-span-6 flex flex-col pt-2 lg:pl-4">
            <h1 className="font-serif text-[26px] md:text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1c3e1e] leading-tight mb-1">
              {product.name}
            </h1>
            <p className="text-[15px] md:text-lg font-bold text-[#1c3e1e] tracking-wide mb-3 md:mb-4">
              {product.shortDesc}
            </p>

            <p className="text-[#556858] text-[13px] md:text-[15px] leading-[1.6] mb-6">
              {product.desc}
            </p>

            {/* Key Benefits List */}
            <div className="space-y-3 mb-8">
              {product.benefits.map((benefit, i) => {
                let IconToUse = Leaf;
                if (i === 1) IconToUse = Droplet; // No added preservatives
                if (i === 3) IconToUse = ShieldCheck; // Tested for purity
                if (i === 4) IconToUse = FlaskConical; // Suitable for daily use

                return (
                  <div key={i} className="flex items-center gap-3">
                    <IconToUse className="w-[18px] h-[18px] text-[#4d8745]" strokeWidth={2} />
                    <span className="text-[13px] md:text-[14.5px] font-medium text-[#2d482e]">{benefit}</span>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 mb-10 md:mb-8">
              {/* Button: Buy from website */}
              <div className="flex flex-col items-center w-full">
                <button className="w-full bg-[#1c3e1e] hover:bg-[#2b5229] text-white py-3.5 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-sm font-bold text-[14px]">
                  <ShoppingBag className="w-4 h-4" />
                  <span>Buy From Our Website</span>
                </button>
                <span className="text-[11px] text-[#556858] mt-2 text-center">Secure purchase through our official store.</span>
              </div>

              {/* Button: Buy from Amazon */}
              <div className="flex flex-col items-center w-full">
                <a
                  href="https://amazon.in"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full border border-orange-200 bg-white hover:bg-orange-50/20 py-3.5 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-sm font-bold text-[14px]"
                >
                  <span className="font-serif italic font-extrabold text-lg text-black pr-1">a</span>
                  <span className="text-[#ff9900]">Buy From Amazon</span>
                </a>
                <span className="text-[11px] text-[#556858] mt-2 text-center">Shop on Amazon with customer reviews and fast delivery.</span>
              </div>
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
      <section className="relative bg-[#f4f5ed] border-y border-[#e2ead9] py-8 md:py-16 overflow-hidden">
        {/* Side Decorative Leaf Sprigs */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-28 md:w-36 pointer-events-none opacity-80">
          <DecorativePlantLeft />
        </div>
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-28 md:w-36 pointer-events-none opacity-80">
          <DecorativePlantRight />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold mb-10 text-[#1c3e1e]">
            Why Choose Greenbae?
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="flex flex-col items-center p-4 bg-[#f4f5ed] md:backdrop-blur-sm rounded-xl md:rounded-2xl border border-gray-100 md:border-white/50 shadow-sm md:shadow-none text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full md:bg-[#f4f7f0] flex items-center justify-center text-[#4d8745] mb-2 md:mb-4">
                <Leaf className="w-6 h-6 md:w-6 md:h-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-[13px] md:text-base mb-1 md:mb-2 leading-tight">Clean<br />Ingredients</h3>
              <p className="hidden md:block text-xs text-[#556858] leading-relaxed max-w-[180px]">Carefully selected natural ingredients.</p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center p-4 bg-[#f4f5ed] md:backdrop-blur-sm rounded-xl md:rounded-2xl border border-gray-100 md:border-white/50 shadow-sm md:shadow-none text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full md:bg-[#f4f7f0] flex items-center justify-center text-[#4d8745] mb-2 md:mb-4">
                <ShieldCheck className="w-6 h-6 md:w-6 md:h-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-[13px] md:text-base mb-1 md:mb-2 leading-tight">Thoughtfully<br />Formulated</h3>
              <p className="hidden md:block text-xs text-[#556858] leading-relaxed max-w-[180px]">Balanced blends for everyday wellness.</p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center p-4 bg-[#f4f5ed] md:backdrop-blur-sm rounded-xl md:rounded-2xl border border-gray-100 md:border-white/50 shadow-sm md:shadow-none text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full md:bg-[#f4f7f0] flex items-center justify-center text-[#4d8745] mb-2 md:mb-4">
                <FlaskConical className="w-6 h-6 md:w-6 md:h-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-[13px] md:text-base mb-1 md:mb-2 leading-tight">Quality<br />Assured</h3>
              <p className="hidden md:block text-xs text-[#556858] leading-relaxed max-w-[180px]">Lab tested for purity and safety.</p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center p-4 bg-[#f4f5ed] md:backdrop-blur-sm rounded-xl md:rounded-2xl border border-gray-100 md:border-white/50 shadow-sm md:shadow-none text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full md:bg-[#f4f7f0] flex items-center justify-center text-[#4d8745] mb-2 md:mb-4">
                <Users className="w-6 h-6 md:w-6 md:h-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-[13px] md:text-base mb-1 md:mb-2 leading-tight">Made For<br />Everyone</h3>
              <p className="hidden md:block text-xs text-[#556858] leading-relaxed max-w-[180px]">Suitable for the whole family.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* SECTION 3: HOW TO USE                                    */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="py-8 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-center mb-12 text-[#1c3e1e]">
          How To Use
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto relative px-2">

          {/* Step 1 */}
          <div className="flex flex-row md:flex-col items-center text-left md:text-center relative group gap-4 md:gap-0 md:bg-transparent md:p-0">
            <div className="relative flex items-center justify-center md:mb-4 shrink-0">
              <span className="absolute -top-2 -left-2 w-5 h-5 md:w-7 md:h-7 bg-[#1c3e1e] text-white rounded-full flex items-center justify-center text-[10px] md:text-xs font-bold shadow-sm z-10">1</span>
              <img src="https://tse1.mm.bing.net/th/id/OIF.jbVeRizeBqta0DF2Q4dsdw?pid=Api&P=0&h=180" alt="Spoon Icon" className="w-[60px] h-[60px] md:w-28 md:h-28 object-contain" />
            </div>
            <div className="md:hidden shrink-0 text-[#4d8745] mr-2">
              <ArrowRight className="w-4 h-4 opacity-50" />
            </div>
            <p className="text-xs font-medium text-[#2d482e] md:max-w-[180px] flex-1">Take the recommended serving.</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-row md:flex-col items-center text-left md:text-center relative group gap-4 md:gap-0 md:bg-transparent md:p-0">
            <div className="relative flex items-center justify-center md:mb-4 shrink-0">
              <span className="absolute -top-2 -left-2 w-5 h-5 md:w-7 md:h-7 bg-[#1c3e1e] text-white rounded-full flex items-center justify-center text-[10px] md:text-xs font-bold shadow-sm z-10">2</span>
              <img src="https://assets.goodhousekeeping.co.uk/main/embedded/25836/glass_water.jpg" alt="Glass of Water Icon" className="w-[60px] h-[60px] md:w-28 md:h-28 object-contain" />
            </div>
            <div className="md:hidden shrink-0 text-[#4d8745] mr-2">
              <ArrowRight className="w-4 h-4 opacity-50" />
            </div>
            <p className="text-xs font-medium text-[#2d482e] md:max-w-[180px] flex-1">Mix with water or your favorite beverage.</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-row md:flex-col items-center text-left md:text-center relative group gap-4 md:gap-0 md:bg-transparent md:p-0">
            <div className="relative flex items-center justify-center md:mb-4 shrink-0">
              <span className="absolute -top-2 -left-2 w-5 h-5 md:w-7 md:h-7 bg-[#1c3e1e] text-white rounded-full flex items-center justify-center text-[10px] md:text-xs font-bold shadow-sm z-10">3</span>
              <img src="https://thumbs.dreamstime.com/b/pouring-matcha-green-tea-golden-milk-latte-beverage-being-prepared-frothy-glass-jug-containing-397725806.jpg" alt="Stirring Icon" className="w-[60px] h-[60px] md:w-28 md:h-28 object-contain" />
            </div>
            <div className="md:hidden shrink-0 text-[#4d8745] mr-2">
              <ArrowRight className="w-4 h-4 opacity-50" />
            </div>
            <p className="text-xs font-medium text-[#2d482e] md:max-w-[180px] flex-1">Stir well until dissolved.</p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-row md:flex-col items-center text-left md:text-center relative group gap-4 md:gap-0 md:bg-transparent md:p-0">
            <div className="relative flex items-center justify-center md:mb-4 shrink-0">
              <span className="absolute -top-2 -left-2 w-5 h-5 md:w-7 md:h-7 bg-[#1c3e1e] text-white rounded-full flex items-center justify-center text-[10px] md:text-xs font-bold shadow-sm z-10">4</span>
              <img src="https://wallpapers.com/images/hd/energizing-spinach-juice-png-93-tiujwz8x42jph9lx.jpg" alt="Drinking Glass Icon" className="w-[60px] h-[60px] md:w-28 md:h-28 object-contain" />
            </div>
            <div className="md:hidden shrink-0 text-[#4d8745] mr-2">
              <ArrowRight className="w-4 h-4 opacity-50" />
            </div>
            <p className="text-xs font-medium text-[#2d482e] md:max-w-[180px] flex-1">Enjoy daily for better well-being.</p>
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* SECTION 4: WHO IS IT FOR?                                */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="bg-[#f4f7f0] border-y border-[#e2ead9] py-8 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[40px] font-bold mb-6 md:mb-14 text-[#1c3e1e]">
            Who Is It For?
          </h2>

          <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8 max-w-6xl mx-auto">
            {/* Group 1 */}
            <div className="flex flex-col items-center p-4 md:p-6 bg-[#f4f7f0] rounded-2xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#f4f7f0] flex items-center justify-center text-[#4d8745] mb-3 md:mb-4">
                <Briefcase className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <span className="text-xs md:text-sm font-bold leading-tight">Working Professionals</span>
            </div>

            {/* Group 2 */}
            <div className="flex flex-col items-center p-4 md:p-6 bg-[#f4f7f0] rounded-2xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#f4f7f0] flex items-center justify-center text-[#4d8745] mb-3 md:mb-4">
                <HeartPulse className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <span className="text-xs md:text-sm font-bold leading-tight">Health Conscious Adults</span>
            </div>

            {/* Group 3 */}
            <div className="flex flex-col items-center p-4 md:p-6 bg-[#f4f7f0] rounded-2xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#f4f7f0] flex items-center justify-center text-[#4d8745] mb-3 md:mb-4">
                <Users className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <span className="text-xs md:text-sm font-bold leading-tight">Seniors</span>
            </div>

            {/* Group 4 */}
            <div className="flex flex-col items-center p-4 md:p-6 bg-[#f4f7f0] rounded-2xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#f4f7f0] flex items-center justify-center text-[#4d8745] mb-3 md:mb-4">
                <GraduationCap className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <span className="text-xs md:text-sm font-bold leading-tight">Students</span>
            </div>

            {/* Group 5 */}
            <div className="flex flex-col items-center p-4 md:p-6 bg-[#f4f7f0] rounded-2xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#f4f7f0] flex items-center justify-center text-[#4d8745] mb-3 md:mb-4">
                <HomeIcon className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <span className="text-xs md:text-sm font-bold leading-tight">Homemakers</span>
            </div>

            {/* Group 6 */}
            <div className="flex flex-col items-center p-4 md:p-6 bg-[#f4f7f0] rounded-2xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#f4f7f0] flex items-center justify-center text-[#4d8745] mb-3 md:mb-4">
                <Heart className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <span className="text-xs md:text-sm font-bold leading-tight">Fitness Enthusiasts</span>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* SECTION 5: WHY FAMILIES TRUST & CUSTOMERS SAY            */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-16">

          {/* Left Column: Why Families Trust */}
          <div className="border-b border-gray-200 md:border-none py-4 md:py-0">
            <div
              className="flex justify-between items-center cursor-pointer lg:cursor-default"
              onClick={() => toggleSection('trust')}
            >
              <h2 className="font-serif text-[15px] sm:text-3xl font-bold text-[#1c3e1e] md:mb-8">
                Why Families Trust Greenbae
              </h2>
              <ChevronDown className={`w-5 h-5 lg:hidden text-gray-500 transition-transform ${openSection === 'trust' ? 'rotate-180' : ''}`} />
            </div>

            <div className={`${openSection === 'trust' ? 'block' : 'hidden'} lg:block mt-6 md:mt-0`}>
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
                        <h4 className="font-bold text-sm text-[#1c3e1e]">{item.title}</h4>
                        <p className="text-xs text-[#556858] mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Customer Reviews */}
          <div className="border-b border-gray-200 md:border-none py-4 md:py-0">
            <div
              className="flex justify-between items-center cursor-pointer lg:cursor-default"
              onClick={() => toggleSection('reviews')}
            >
              <h2 className="font-serif text-[15px] sm:text-3xl font-bold text-[#1c3e1e] md:mb-8">
                What Our Customers Say
              </h2>
              <ChevronDown className={`w-5 h-5 lg:hidden text-gray-500 transition-transform ${openSection === 'reviews' ? 'rotate-180' : ''}`} />
            </div>

            <div className={`${openSection === 'reviews' ? 'block' : 'hidden'} lg:block mt-6 md:mt-0 space-y-6`}>
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
      {/* BOTTOM PURCHASE BANNER / SECTION                         */}
      {/* ──────────────────────────────────────────────────────── */}
      <div className="relative w-full bg-[#f4f7f0] py-8 md:py-10 shadow-[0_-8px_30px_rgb(0,0,0,0.04)] z-10 border-t border-[#e2ead9] mt-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-6">
          <div className="text-center md:text-left w-full md:w-auto shrink-0">
            <h4 className="font-serif font-bold text-[#1c3e1e] text-[18px] md:text-[20px] mb-1">Choose your preferred<br className="md:hidden" /> purchase option</h4>
            <p className="text-[13px] md:text-sm text-[#556858]">Your wellness journey, your way.</p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-5 w-full md:w-auto">
            {/* Website full button */}
            <div className="flex flex-col items-center w-full md:w-auto">
              <button className="w-full md:w-[300px] bg-[#1c3e1e] hover:bg-[#2b5229] text-white py-4 md:py-5 px-6 rounded-lg text-[14px] md:text-[15px] font-bold flex items-center justify-center gap-2.5 transition-colors">
                <ShoppingBag className="w-4 h-4 md:w-4 md:h-4" />
                <span>Buy From Our Website</span>
              </button>
              <span className="text-[10px] md:text-[11px] text-[#556858] mt-1.5 text-center">Secure purchase through our official store.</span>
            </div>

            {/* Amazon full button */}
            <div className="flex flex-col items-center w-full md:w-auto">
              <a
                href="https://amazon.in"
                target="_blank"
                rel="noreferrer"
                className="w-full md:w-[300px] border border-gray-200 bg-white hover:bg-orange-50/20 py-4 md:py-5 px-6 rounded-lg text-[14px] md:text-[15px] font-bold flex items-center justify-center gap-2.5 transition-colors"
              >
                <span className="font-serif italic font-extrabold text-[#ff9900] text-xl md:text-lg leading-none">a</span>
                <span className="text-[#1c3e1e]">Buy From Amazon</span>
              </a>
              <span className="text-[10px] md:text-[11px] text-[#556858] mt-1.5 text-center">Shop on Amazon with customer reviews and fast delivery.</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SingleProduct;
