import React from "react";
import { useNavigate } from "react-router-dom";
import { Leaf } from "lucide-react";
import veggieimage from "../../../assets/img-ourproducts/veggie.png";
import nutriimage from "../../../assets/img-ourproducts/nutri.png";
import familyimage from "../../../assets/img-ourproducts/family.png";


const SignatureProducts = () => {
  const navigate = useNavigate();
  return (
    <section
      id="signature-products"
      className="relative w-full bg-[#F9F6F0] py-20 text-gray-800 overflow-hidden p-4 md:p-8 lg:p-12"
    >
      {/* 2 decorative leaves Section - do ;later*/}

      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 z-10 top-0]">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex items-center justify-center gap-2 md:gap-3">
              <Leaf
                className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#61a355]"
                strokeWidth={2}
              />
              <span className="text-[11px] md:text-[12px] font-bold tracking-[0.15em] text-[#173A22] uppercase">
                Our Signature Wellness Solutions
              </span>
            </div>
          </div>

          <h2 className="text-[40px] md:text-[56px] font-serif text-[#173A22] leading-[1.1] mb-1">
            Our Signature
            <br className="hidden md:block" /> Wellness Solutions
          </h2>

          <div className="flex justify-center mb-1">
            <div className="flex items-center justify-center md:justify-center gap-3 my-4 md:my-5 w-full">
              <span className="w-14 md:w-18 h-[1px] bg-[#d1e6d3]"></span>
              <Leaf className="w-3 md:w-5 h-3 md:h-5 text-[#4d8745]" />
              <span className="w-14 md:w-18 h-[1px] bg-[#d1e6d3]"></span>
            </div>
          </div>

          <p className="text-[15px] text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed mb-2">
            Thoughtfully crafted blends that make daily nutrition
            <br className="hidden md:block" />
            simple, convenient and delicious – for you and your family.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6 mb-8 max-w-[1300px] mx-auto">
          {/* Card 1: Veggie Vitals */}
          <div className="bg-[#F4EFE6] rounded-[16px] md:rounded-[28px] overflow-hidden flex flex-row items-stretch shadow-[0_4px_20px_rgba(0,0,0,0.03)] h-[250px] md:h-auto">
            {/* Image container */}
            <div className="w-[45%] md:w-[46%] relative bg-[#EAE3D4]/40 md:bg-transparent">
              <img
                src={veggieimage}
                alt="Veggie Vitals Pouch"
                className="absolute inset-0 w-full h-full object-contain object-center md:object-center p-4 md:p-6"
              />
            </div>

            {/* Content container */}
            <div className="w-[55%] md:w-[54%] p-3 py-4 md:p-6 flex flex-col justify-center">
              <div className="mb-1 md:mb-2">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#173A22"
                  strokeWidth="1.5"
                >
                  <path
                    d="M12 2L3 7l1.5 8.5C5.5 19 9 22 12 22s6.5-3 7.5-6.5L21 7l-9-5z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-[18px] md:text-[32px] font-serif text-[#173A22] mb-0 md:mb-1">
                Veggie Vitals
              </h3>
              <p className="text-[8px] md:text-[11px] font-bold tracking-[0.1em] md:tracking-[0.2em] text-gray-600 uppercase mb-1 md:mb-2">
                Daily Nutrition Blend
              </p>

              <div className="w-8 md:w-12 h-[1px] md:h-[2px] bg-[#173A22] mb-2 md:mb-3"></div>

              <p className="text-[10px] md:text-[14px] text-gray-800 leading-snug md:leading-relaxed mb-2 md:mb-4 pr-2 md:pr-4">
                A powerful blend of 16 vegetables, herbs and spices to help fill
                everyday nutritional gaps naturally.
              </p>

              <ul className="space-y-[4px] md:space-y-[8px] mb-3 md:mb-5">
                <li className="flex items-center gap-1.5 md:gap-3">
                  <svg
                    className="w-3 h-3 md:w-[18px] md:h-[18px] shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#173A22"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 16a3 3 0 01-3-3c0-2 3-4 3-4s3 2 3 4a3 3 0 01-3 3z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[9px] md:text-[14px] font-medium text-gray-800 leading-tight">
                    Supports Overall Wellness
                  </span>
                </li>
                <li className="flex items-center gap-1.5 md:gap-3">
                  <svg
                    className="w-3 h-3 md:w-[18px] md:h-[18px] shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#173A22"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13 8v-4l-5 8h4v4l5-8h-4z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[9px] md:text-[14px] font-medium text-gray-800 leading-tight">
                    Natural Energy Support
                  </span>
                </li>
                <li className="flex items-center gap-1.5 md:gap-3">
                  <svg
                    className="w-3 h-3 md:w-[18px] md:h-[18px] shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#173A22"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M4 10v2a8 8 0 0016 0v-2H4z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 2v4M8 3v3M16 3v3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[9px] md:text-[14px] font-medium text-gray-800 leading-tight">
                    Easy to Use, Great Taste
                  </span>
                </li>
                <li className="flex items-center gap-1.5 md:gap-3">
                  <svg
                    className="w-3 h-3 md:w-[18px] md:h-[18px] shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#173A22"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="9"
                      cy="7"
                      r="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[9px] md:text-[14px] font-medium text-gray-800 leading-tight">
                    For the Whole Family
                  </span>
                </li>
              </ul>

              <button
                onClick={() => navigate("/products/single", { state: { product: "veggie-vitals" } })}
                className="text-[#173A22] md:bg-[#173A22] md:text-white md:px-6 md:py-2.5 md:rounded-lg font-semibold md:font-medium text-[11px] md:text-[14px] flex items-center justify-center gap-1 md:gap-2 hover:opacity-80 transition-opacity w-max"
              >
                Explore Veggie Vitals <span className="md:text-white">&rarr;</span>
              </button>
            </div>
          </div>

          {/* Card 2: Nutri Mix */}
          <div className="bg-[#F0E7D8] rounded-[16px] md:rounded-[28px] overflow-hidden flex flex-row items-stretch shadow-[0_4px_20px_rgba(0,0,0,0.03)] h-[250px] md:h-auto">
            {/* Image container */}
            <div className="w-[45%] md:w-[46%] relative bg-[#E4D7C2]/40 md:bg-transparent">
              <img
                src={nutriimage}
                alt="Nutri Mix Pouch"
                className="absolute inset-0 w-full h-full object-contain object-center md:object-center p-4 md:p-6"
              />
            </div>

            {/* Content container */}
            <div className="w-[55%] md:w-[54%] p-3 py-4 md:p-6 flex flex-col justify-center">
              <div className="mb-1 md:mb-2">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#624028"
                  strokeWidth="1.5"
                >
                  <path
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-[18px] md:text-[32px] font-serif text-[#624028] mb-0 md:mb-1">
                Nutri Mix
              </h3>
              <p className="text-[8px] md:text-[11px] font-bold tracking-[0.1em] md:tracking-[0.2em] text-gray-600 uppercase mb-1 md:mb-2">
                Fiber-Rich Nutrition
              </p>

              <div className="w-8 md:w-12 h-[1px] md:h-[2px] bg-[#624028] mb-2 md:mb-3"></div>

              <p className="text-[10px] md:text-[14px] text-gray-800 leading-snug md:leading-relaxed mb-2 md:mb-4 pr-2 md:pr-4">
                A delicious blend of fiber-rich ingredients that support
                digestive wellness and everyday nourishment.
              </p>

              <ul className="space-y-[4px] md:space-y-[8px] mb-3 md:mb-5">
                <li className="flex items-center gap-1.5 md:gap-3">
                  <svg
                    className="w-3 h-3 md:w-[18px] md:h-[18px] shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#624028"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 12c0-2 3-3 3-3s3 1 3 3-3 5-3 5-3-3-3-5z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[9px] md:text-[14px] font-medium text-gray-800 leading-tight">
                    Supports Digestive Wellness
                  </span>
                </li>
                <li className="flex items-center gap-1.5 md:gap-3">
                  <svg
                    className="w-3 h-3 md:w-[18px] md:h-[18px] shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#624028"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M12 22C12 22 4 16 4 10C4 6.5 6.5 4 10 4C11.5 4 12 5 12 5C12 5 12.5 4 14 4C17.5 4 20 6.5 20 10C20 16 12 22 12 22Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[9px] md:text-[14px] font-medium text-gray-800 leading-tight">
                    Rich In Dietary Fiber
                  </span>
                </li>
                <li className="flex items-center gap-1.5 md:gap-3">
                  <svg
                    className="w-3 h-3 md:w-[18px] md:h-[18px] shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#624028"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[9px] md:text-[14px] font-medium text-gray-800 leading-tight">
                    Sustained Energy Naturally
                  </span>
                </li>
                <li className="flex items-center gap-1.5 md:gap-3">
                  <svg
                    className="w-3 h-3 md:w-[18px] md:h-[18px] shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#624028"
                    strokeWidth="1.5"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[9px] md:text-[14px] font-medium text-gray-800 leading-tight">
                    Perfect for Everyday Use
                  </span>
                </li>
              </ul>

              <button
                onClick={() => navigate("/products/single", { state: { product: "nutri-mix" } })}
                className="text-[#624028] md:bg-[#624028] md:text-white md:px-6 md:py-2.5 md:rounded-lg font-semibold md:font-medium text-[11px] md:text-[14px] flex items-center justify-center gap-1 md:gap-2 hover:opacity-80 transition-opacity w-max"
              >
                Explore Nutri Mix <span className="md:text-white">&rarr;</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Banner Section */}
        <div className="bg-[#F0EBE1] rounded-[16px] md:rounded-[24px] overflow-hidden flex flex-row items-stretch md:items-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] h-[110px] md:h-[150px]">
          <div className="w-[55%] md:w-1/3 flex flex-row items-center justify-center pl-3 pr-2 md:px-8 py-2 md:py-0 gap-2 md:gap-5 h-full">
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-[#8C9C90] flex items-center justify-center shrink-0">
              <Leaf className="w-4 h-4 md:w-6 md:h-6 text-[#0F4D1D]" />
            </div>
            <p className="text-[12px] md:text-[18px] font-serif text-[#173A22] leading-[1.25] md:leading-[1.35] text-left">
              Simple nutrition.
              <br />
              Real ingredients.
              <br />
              Better everyday.
            </p>
          </div>

          <div className="relative w-[45%] md:w-[33%] flex justify-end overflow-hidden h-full">
            <img
              src={familyimage}
              alt="Happy Family"
              className="w-full h-full object-cover object-left md:object-top"
            />
            {/* Left Fade */}
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#F0EBE1] via-[#F0EBE1]/80 to-transparent pointer-events-none"></div>
          </div>

          <div className="hidden md:flex w-1/3 flex-col items-center justify-center pr-8 h-full">
            <p className="text-[14.5px] font-medium text-[#4B5563] leading-[1.6] text-center max-w-[280px] mb-2">
              Made with clean, natural ingredients and years of learning –
              because your family deserves the best.
            </p>
            <div className="flex items-center justify-center gap-3 my-2 md:my-3 w-full">
              <span className="w-14 md:w-18 h-[1px] bg-[#d1e6d3]"></span>
              <Leaf className="w-3 md:w-4 h-3 md:h-4 text-[#4d8745]" />
              <span className="w-14 md:w-18 h-[1px] bg-[#d1e6d3]"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureProducts;
