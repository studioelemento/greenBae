import React from "react";
import { Leaf, ArrowRight, FlaskConical, Users, Heart } from "lucide-react";
import hero from "../../../assets/img-ourproducts/prhero.png";
import ingredient from "../../../assets/img-ourproducts/powders.png";
import signaturepr from "../../../assets/img-ourproducts/2products.png";
import leaf from "../../../assets/img-ourproducts/leaf.png";
import { useNavigate } from "react-router-dom";
import SignatureProducts from "./signatureproducts";


const ProductHero = () => {
  const navigate = useNavigate();

  const MortarIcon = () => (
    <svg
      className="w-4 h-4 md:w-5 md:h-5 text-[#4d8745]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 11c0 4.4 3.6 8 8 8h2c4.4 0 8-3.6 8-8H3z" />
      <path d="M12 11V3m0 0a3 3 0 0 1 3 3m-3-3a3 3 0 0 0-3 3" />
      <path d="M7 19h10" />
    </svg>
  );

  return (
    <section className="relative w-full bg-[#FAF9F5] pt-10 md:pt-20 pb-4 md:pb-8 px-4 sm:px-6 lg:px-8 xl:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* 1. Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-2 items-center mb-4 md:mb-8 text-center md:text-left">
          {/* Left Column: Heading & Text */}
          <div className="lg:col-span-5 flex flex-col items-center max-w-[480px] md:items-start z-10">
            {/* Label */}
            <div className="inline-flex items-center gap-2 text-[#4d8745] font-bold tracking-widest text-[10px] md:text-xs uppercase mb-3 md:mb-4">
              <Leaf size={14} className="text-[#61a355] " />
              <span>Our Products</span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-[34px] sm:text-[42px] lg:text-[56px] text-[#1c3e1e] font-bold leading-[1.15] md:leading-[1.1] tracking-tight mb-4">
              Nature-Inspired
              <br />
              Wellness Solutions
            </h1>

            {/* Divider Line with Leaf Ornament */}
            <div className="flex items-center justify-center md:justify-start gap-3 my-4 md:my-5 w-full">
              <span className="w-12 md:w-14 h-[1px] bg-[#d1e6d3]"></span>
              <Leaf className="w-3 md:w-3.5 h-3 md:h-3.5 text-[#4d8745]" />
              <span className="w-12 md:w-14 h-[1px] bg-[#d1e6d3]"></span>
            </div>

            {/* Paragraph */}
            <p className="text-[#556858] text-[14px] md:text-[17px] leading-relaxed max-w-[320px] md:max-w-[460px] mb-6 md:mb-8 mx-auto md:mx-0">
              From carefully formulated wellness blends to pure natural
              ingredient powders, Greenbae offers solutions designed to support
              healthier living.
            </p>

            {/* Explore Button */}
            <button
              onClick={() => navigate("/products")}
              className="bg-[#1c3e1e] hover:bg-[#2b5229] text-white px-6 md:px-7 py-3 md:py-3.5 rounded-[8px] text-[14px] md:text-[15px] font-bold transition-all duration-300 flex items-center gap-2 shadow-sm border border-[#1c3e1e]"
            >
              Explore All Products
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: Hero Image */}
          <div className="lg:col-span-7 relative h-[610px] -mr-50 my-[1px]">
            <img
              src={hero}
              alt="Our Products image"
              className="absolute top-[-80px] inset-0 w-full h-full object-cover object-[80%_center]"
            />
            {/* Left fade */}
            <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-[#FCF8F2] via-[#FCF8F2]/60 to-transparent"></div>
          </div>
        </div>

        {/* 2. Middle Section Divider */}
        <div className="flex items-center justify-center gap-2 md:gap-3 mt-4 md:mt-8 mb-10 md:mb-16">
          <Leaf className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#61a355]" />
          <h3 className="font-serif font-bold text-[#1c3e1e] tracking-[0.1em] md:tracking-[0.15em] text-[18px] sm:text-[20px] md:text-[18px] uppercase text-center">
            EXPLORE OUR PRODUCT FAMILIES
          </h3>
          <Leaf className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#61a355]" />
        </div>

        {/* 3. Three-Column Card Grid (Product Families) */}
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full px-0 mb-8">
            {/* Card 1: Signature Wellness Solutions */}
            <div
              onClick={() => {
                navigate("/products");
                setTimeout(() => {
                  document
                    .getElementById("signature-products")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className="group w-full h-full bg-[#f4f5ed] border border-[#e5e7df] rounded-[16px] md:rounded-[24px] p-4 md:p-6 lg:p-8 flex flex-row md:flex-col justify-between overflow-hidden relative min-h-[160px] md:min-h-[380px] hover:shadow-[0_16px_36px_rgba(28,62,30,0.05)] transition-all duration-300 cursor-pointer "
            >
              {/* Left/Top Content */}
              <div className="w-[55%] md:w-full z-10 relative">
                {/* Icon Container */}
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-transparent md:bg-white border-0 md:border border-[#e2ead9] flex items-center justify-start md:justify-center text-[#4d8745] md:shadow-sm mb-2 md:mb-6 -ml-1 md:ml-0">
                  <Leaf className="w-5 h-5 md:w-5 md:h-5" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h4 className="font-serif font-bold text-[#1c3e1e] text-[15px] md:text-xl lg:text-[22px] leading-[1.2] mb-1.5 md:mb-3">
                  Signature Wellness
                  <br className="hidden md:block" /> Solutions
                </h4>

                {/* Description */}
                <p className="text-[#556858] text-[11px] md:text-[14px] leading-[1.4] md:leading-relaxed max-w-[210px] mb-2 md:mb-6 pr-2 md:pr-0">
                  Our thoughtfully crafted blends deigned to support your
                  everyday nutrition and well-being.
                </p>
              </div>

              {/* Desktop Link (Hidden on Mobile) */}
              <div className="hidden md:flex justify-between items-end mt-4 z-10">
                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform cursor-pointer pb-2">
                  <span className="text-[13px] font-bold text-[#1c3e1e]">
                    View Products
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#dce6d5] flex items-center justify-center text-[#1c3e1e]">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Images (Absolute positioned to work on both mobile and desktop) */}
              <div className="absolute right-0 bottom-[-16px] w-[260px] h-[360px] pointer-events-none">
                <img
                  src={signaturepr}
                  alt="no"
                  className="absolute bottom-8 right-[-56px] w-[170px] h-[280px] md:w-[260px] object-contain drop-shadow-md transition-transform duration-300"
                />
              </div>

              {/* Mobile Arrow Circle - Card 1 */}
              <div className="absolute bottom-4 right-4 md:hidden w-[26px] h-[26px] rounded-full bg-[#dce6d5] flex items-center justify-center text-[#1c3e1e] z-10 pointer-events-none">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Card 2: Natural Ingredient Collection */}
            <div
              onClick={() => {
                navigate("/products");
                setTimeout(() => {
                  document
                    .getElementById("ingredients")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className="w-full h-full group bg-[#f4f5ed] border border-[#e5e7df] rounded-[16px] md:rounded-[24px] p-5 md:p-6 lg:p-8 flex flex-row md:flex-col justify-between overflow-hidden relative min-h-[160px] md:min-h-[380px] hover:shadow-[0_16px_36px_rgba(28,62,30,0.05)] transition-all duration-300 cursor-pointer"
            >
              <div className="w-[55%] md:w-full z-10 relative">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-transparent md:bg-white border-0 md:border border-[#e2ead9] flex items-center justify-start md:justify-center text-[#4d8745] md:shadow-sm mb-2 md:mb-6 -ml-1 md:ml-0">
                  <MortarIcon />
                </div>

                <h4 className="font-serif font-bold text-[#1c3e1e] text-[15px] md:text-xl lg:text-[22px] leading-[1.2] mb-1.5 md:mb-3">
                  Natural Ingredient
                  <br className="hidden md:block" /> Collection
                </h4>

                <p className="text-[#556858] text-[11px] md:text-[14px] leading-[1.4] md:leading-relaxed max-w-[210px] mb-2 md:mb-6 pr-2 md:pr-0">
                  Pure, single ingredient powders sourced from nature. Nothing
                  added, nothing taken away.
                </p>
              </div>

              <div className="hidden md:flex justify-between items-end mt-4 z-10">
                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform cursor-pointer pb-2">
                  <span className="text-[13px] font-bold text-[#1c3e1e]">
                    Explore Ingredients
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#dce6d5] flex items-center justify-center text-[#1c3e1e]">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              <div className="absolute right-[44px] md:right-[-10px] bottom-[-10px] md:bottom-[-16px] w-[90px] md:w-[160px] h-[75px] md:h-[100px] pointer-events-none z-0">
                <img
                  src={ingredient}
                  alt="Signature products"
                  className="w-full absolute bottom-20 right-0 drop-shadow-md transform group-hover:scale-[1.03] transition-transform duration-300"
                />
              </div>

              <div className="absolute bottom-4 right-4 md:hidden w-[26px] h-[26px] rounded-full bg-[#dce6d5] flex items-center justify-center text-[#1c3e1e] z-10 pointer-events-none">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Card 3: Future Wellness Innovations */}
            <div
              onClick={() => {
                navigate("/products");
                setTimeout(() => {
                  document
                    .getElementById("wellness-backed")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className="w-full h-full group bg-[#f4f5ed] border border-[#e5e7df] rounded-[16px] md:rounded-[24px] p-5 md:p-6 lg:p-8 flex flex-row md:flex-col justify-between overflow-hidden relative min-h-[160px] md:min-h-[380px] hover:shadow-[0_16px_36px_rgba(28,62,30,0.05)] transition-all duration-300 cursor-pointer"
            >
              <div className="w-[55%] md:w-full z-10 relative">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-transparent md:bg-white border-0 md:border border-[#e2ead9] flex items-center justify-start md:justify-center text-[#4d8745] md:shadow-sm mb-2 md:mb-6 -ml-1 md:ml-0">
                  <Heart className="w-5 h-5 md:w-5 md:h-5" strokeWidth={1.5} />
                </div>

                <h4 className="font-serif font-bold text-[#1c3e1e] text-[15px] md:text-xl lg:text-[22px] leading-[1.2] mb-1.5 md:mb-3">
                  Future Wellness
                  <br className="hidden md:block" /> Innovations
                </h4>

                <p className="text-[#556858] text-[11px] md:text-[14px] leading-[1.4] md:leading-relaxed max-w-[210px] mb-2 md:mb-6 pr-2 md:pr-0">
                  The next generation of Greenbae wellness solutions, coming
                  soon.
                </p>
              </div>

              <div className="hidden md:flex justify-between items-end mt-4 z-10">
                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform cursor-pointer pb-2">
                  <span className="text-[13px] font-bold text-[#1c3e1e]">
                    Discover What's Next
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#dce6d5] flex items-center justify-center text-[#1c3e1e]">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                  
                </div>
                <div className="absolute right-[44px] md:right-[-30px] bottom-[-10px] md:bottom-[-40px] w-[90px] md:w-[190px] h-[75px] md:h-[100px] pointer-events-none z-0">
                <img
                  src={leaf}
                  alt="Signature products"
                  className="w-full absolute bottom-20 right-0 drop-shadow-md transform group-hover:scale-[1.03] transition-transform duration-300"
                />
              </div>
              </div>
            </div>
            

            <div className="absolute bottom-4 right-4 md:hidden w-[26px] h-[26px] rounded-full bg-[#dce6d5] flex items-center justify-center text-[#1c3e1e] z-10 pointer-events-none">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* 4. Bottom Features Banner */}
        <div className="bg-[#f4f7f0] border border-[#e2ead9] rounded-[12px] md:rounded-[24px] py-4 px-2 md:p-8">
          <div className="flex flex-row ml-4 md:grid md:grid-cols-4 justify-between items-center md:gap-8 w-full">
            {/* Feature 1: Nature Inspired */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-1 md:gap-4 w-[24%] md:w-auto text-center md:text-left">
              <div className="shrink-0 w-auto h-auto md:w-10 md:h-10 md:rounded-full md:bg-white md:border md:border-[#e2ead9] flex items-center justify-center text-[#4d8745] md:shadow-sm">
                <Leaf
                  className="w-4 h-4 md:w-[18px] md:h-[18px]"
                  strokeWidth={1.5}
                />
              </div>
              <div className="flex flex-col justify-center mt-1 md:mt-0">
                <h5 className="font-serif font-bold text-[#1c3e1e] text-[9.5px] md:text-[15px] leading-[1.1] md:leading-tight md:mb-1 whitespace-nowrap">
                  Nature
                  <br className="md:hidden" /> Inspired
                </h5>
                <p className="hidden md:block text-[#556858] text-[13px] leading-relaxed">
                  Rooted in nature,  <br /> crafted with care.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-[1px] h-6 bg-[#d1e6d3] md:hidden"></div>

            {/* Feature 2: Thoughtful Formulation */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-1 md:gap-4 w-[24%] md:w-auto text-center md:text-left">
              <div className="shrink-0 w-auto h-auto md:w-10 md:h-10 md:rounded-full md:bg-white md:border md:border-[#e2ead9] flex items-center justify-center text-[#4d8745] md:shadow-sm">
                <FlaskConical
                  className="w-4 h-4 md:w-[18px] md:h-[18px]"
                  strokeWidth={1.5}
                />
              </div>
              <div className="flex flex-col justify-center mt-1 md:mt-0">
                <h5 className="font-serif font-bold text-[#1c3e1e] text-[9.5px] md:text-[15px] leading-[1.1] md:leading-tight md:mb-1 whitespace-nowrap">
                  Thoughtful
                  <br className="md:hidden" /> Formulation
                </h5>
                <p className="hidden md:block text-[#556858] text-[13px] leading-relaxed">
                  Years of research, learning <br /> and real-life testing.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-[1px] h-6 bg-[#d1e6d3] md:hidden"></div>
            

            {/* Feature 3: For The Whole Family */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-1 md:gap-4 w-[24%] md:w-auto text-center md:text-left">
              <div className="shrink-0 w-auto h-auto md:w-10 md:h-10 md:rounded-full md:bg-white md:border md:border-[#e2ead9] flex items-center justify-center text-[#4d8745] md:shadow-sm">
                <Users
                  className="w-4 h-4 md:w-[18px] md:h-[18px]"
                  strokeWidth={1.5}
                />
              </div>
              <div className="flex flex-col justify-center mt-1 md:mt-0">
                <h5 className="font-serif font-bold text-[#1c3e1e] text-[9.5px] md:text-[15px] leading-[1.1] md:leading-tight md:mb-1 whitespace-nowrap">
                  For The Whole
                  <br className="md:hidden" /> Family
                </h5>
                <p className="hidden md:block text-[#556858] text-[13px] leading-relaxed">
                  Solutions that fit every stage <br /> of your family's journey.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-[1px] h-6 bg-[#d1e6d3] md:hidden"></div>

            {/* Feature 4: Real Nutrition. Real Life. */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-1 md:gap-4 w-[24%] md:w-auto text-center md:text-left">
              <div className="shrink-0 w-auto h-auto md:w-10 md:h-10 md:rounded-full md:bg-white md:border md:border-[#e2ead9] flex items-center justify-center text-[#4d8745] md:shadow-sm">
                <Heart
                  className="w-4 h-4 md:w-[18px] md:h-[18px]"
                  strokeWidth={1.5}
                />
              </div>
              <div className="flex flex-col justify-center mt-1 md:mt-0">
                <h5 className="font-serif font-bold text-[#1c3e1e] text-[9.5px] md:text-[15px] leading-[1.1] md:leading-tight md:mb-1 whitespace-nowrap">
                  Real Nutrition.
                  <br className="md:hidden" /> Real Life.
                </h5>
                <p className="hidden md:block text-[#556858] text-[13px] leading-relaxed">
                  Simple choices for a <br /> healthier tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
