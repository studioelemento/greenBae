import React from "react";
import { Leaf } from "lucide-react";
import rightimage from "../../../assets/img-ourproducts/rightsideimg.png";

const LeafDivider = ({ lineWidth = "w-16 sm:w-24", showLines = true }) => (
  <div className="flex items-center justify-center gap-3 my-4">
    {showLines && (
      <div className={`${lineWidth} h-[1px] bg-[#C5B395] opacity-60`} />
    )}

    <svg
      className="w-5 h-5 text-[#4D8745]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2Z" />
      <path d="M9 22v-4" />
    </svg>

    {showLines && (
      <div className={`${lineWidth} h-[1px] bg-[#C5B395] opacity-60`} />
    )}
  </div>
);

const Ingredients = () => {
  const products = [
    {
      title: "Beetroot Powder",
      desc: "Rich in natural nitrates and antioxidants. Supports energy and overall wellness.",
      img: "https://nutrigroveusa.com/cdn/shop/articles/XVcTApLgnQPj4z7OPrqe--5--hjoi7.webp?v=1698264357",
    },
    {
      title: "Carrot Powder",
      desc: "A natural source of beta-carotene. Supports eye health and immunity.",
      img: "https://fruzoeats.com/wp-content/uploads/2025/01/Carrot-Powder.jpg",
    },
    {
      title: "Moringa Powder",
      desc: "Nutrient-dense superfood packed with vitamins, minerals and antioxidants.",
      img: "https://hips.hearstapps.com/hmg-prod/images/nutritional-supplement-moringa-powder-on-rustic-royalty-free-image-1659133952.jpg?crop=0.668xw:1.00xh;0.327xw,0&resize=640:*",
    },
    {
      title: "Amla Powder",
      desc: "Rich in Vitamin C and antioxidants. Supports immunity and hair health.",
      img: "https://herbtobody.com/wp-content/uploads/2026/01/fresh-amla-and-dried-amla-powder.webp",
    },
    {
      title: "Raw Banana Powder",
      desc: "A good source of resistant starch and dietary fiber. Supports digestive wellness.",
      img: "https://5.imimg.com/data5/ANDROID/Default/2025/12/565638593/KH/GU/PV/257439351/product-jpeg-1000x1000.jpg",
    },
  ];

  return (
    <section
      id="ingredients"
      className="relative w-full bg-[#FDFBF7] py-14 lg:py-20 font-sans text-gray-800 overflow-hidden"
    >
      {/* Decorative Background Elements */}

      {/* Top right wooden board with powders - Moves down slightly on mobile */}
      <img
        src={rightimage}
        alt=""
        className="absolute top-[160px] lg:top-0 right-0 w-[180px] md:w-[350px] lg:w-[450px] opacity-80 mix-blend-multiply pointer-events-none translate-x-4 lg:translate-x-10 lg:-translate-y-5 rounded-bl-[40px] lg:rounded-bl-[100px]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 15% 100%)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10 lg:mb-16">
          <div className="flex items-center justify-center gap-2 lg:gap-3 mb-4 lg:mb-5">
            <Leaf className="w-4 h-4 text-[#173A22]" />
            <span className="text-[10px] lg:text-[12px] font-bold tracking-[0.15em] text-[#173A22] uppercase">
              Nature In Its Pure Form
            </span>
            <Leaf className="w-4 h-4 text-[#173A22]" />
          </div>

          <h2 className="text-[34px] lg:text-[52px] font-serif text-[#173A22] leading-[1.1] mb-4 lg:mb-1 max-w-[300px] lg:max-w-none">
            <span className="block lg:inline">Natural</span>{" "}
            <span className="block lg:inline">Ingredient</span>{" "}
            <span className="block lg:inline">Collection</span>
          </h2>

          <div className="flex justify-center mb-5 lg:mb-1">
            <div className="flex items-center">
              <div className="flex items-center justify-center md:justify-center gap-3 my-4 md:my-5 w-full">
                <span className="w-14 md:w-18 h-[2px] bg-[#d1e6d3]"></span>
                <Leaf className="w-3 md:w-5 h-3 md:h-5 text-[#4d8745]" />
                <span className="w-14 md:w-18 h-[2px] bg-[#d1e6d3]"></span>
              </div>
            </div>
          </div>

          <p className="text-[13px] lg:text-[15.5px] text-[#4B5563] max-w-[280px] lg:max-w-2xl mx-auto font-medium leading-[1.6] lg:leading-relaxed">
            Pure, single ingredient powders sourced from nature.{" "}
            <span className="hidden lg:inline">
              <br />
            </span>
            Nothing added, nothing taken away.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5 mb-5">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-[#F8F5EE] lg:bg-[#F5F1E7] rounded-[16px] lg:rounded-[24px] overflow-hidden flex flex-row lg:flex-col group hover:shadow-md transition-shadow duration-300 relative border border-gray-100/50 lg:border-none"
            >
              {/* Image Section */}
              <div className="w-[130px] lg:w-full shrink-0 relative lg:pt-[100%] h-auto">
                <img
                  src={product.img}
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* 100% Natural Badge */}
                <div className="absolute top-3 -right-5 lg:top-3 lg:right-3 w-[42px] h-[42px] lg:w-[46px] lg:h-[46px] bg-white rounded-full flex flex-col items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.1)] z-10">
                  <Leaf className="w-3 h-3 text-[#173A22]" />
                  <span className="text-[6.5px] lg:text-[6.5px] font-bold text-[#173A22] leading-[1.1] text-center">
                    100%
                    <br />
                    NATURAL
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4 pl-6 lg:p-6 flex flex-col flex-grow justify-center bg-transparent relative z-0">
                <h3 className="text-[17px] lg:text-[22px] font-serif text-[#173A22] mb-1.5 lg:mb-1 leading-tight pr-2 lg:pr-0">
                  {product.title}
                </h3>

                <div className="flex items-center mb-2.5 lg:mb-1 opacity-70">
                  <div className="flex items-center justify-center md:justify-center gap-3 my-4 md:my-5 w-full">
                    <span className="w-14 md:w-18 h-[1px] bg-[#d1e6d3]"></span>
                    <Leaf className="w-3 md:w-4 h-3 md:h-4 text-[#4d8745]" />
                    <span className="w-14 md:w-18 h-[1px] bg-[#d1e6d3]"></span>
                  </div>
                </div>

                <p className="text-[11.5px] lg:text-[13.5px] text-[#4B5563] leading-[1.45] lg:leading-relaxed mb-3.5 lg:mb-6 flex-grow">
                  {product.desc}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center text-[11px] lg:text-[13px] font-bold text-[#173A22] group-hover:text-[#2a663d] transition-colors mt-auto w-fit"
                >
                  View Product{" "}
                  <span className="ml-1.5 lg:ml-2 transform group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Section */}
        <div className="bg-[#EAECE4] rounded-[16px] lg:rounded-[24px] p-4 lg:p-10 flex flex-row items-center justify-between gap-3 lg:gap-10 relative overflow-hidden">
          {/* Subtle leaf watermark in banner */}
          <svg
            width="150"
            height="150"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#D1D6CA"
            strokeWidth="0.5"
            className="absolute right-0 -bottom-10 lg:-bottom-20 opacity-30 pointer-events-none transform -rotate-12 translate-x-10 lg:translate-x-20 lg:w-[300px] lg:h-[300px]"
          >
            <path d="M12 22C12 22 4 16 4 10C4 6.5 6.5 4 10 4C11.5 4 12 5 12 5C12 5 12.5 4 14 4C17.5 4 20 6.5 20 10C20 16 12 22 12 22Z" />
            <path d="M12 22V12" />
            <path d="M12 16c3-2 6-2 6-2" />
            <path d="M12 12c-3-2-6-2-6-2" />
          </svg>

          {/* Left part of Banner */}
          <div className="flex flex-row items-center lg:items-center gap-3 lg:gap-6 flex-1 z-10">
            <div className="w-[46px] h-[46px] lg:w-[84px] lg:h-[84px] rounded-full bg-[#3D5B43] flex items-center justify-center shrink-0 shadow-sm">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                className="lg:w-[36px] lg:h-[36px]"
              >
                <path
                  d="M4 10v2a8 8 0 0016 0v-2H4z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 16h10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 10v-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 4c1.5-1 3.5 0 3.5 2.5S12 10 12 10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 6C10.5 5 8.5 6 8.5 8.5S12 10 12 10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="text-left">
              <h3 className="text-[13.5px] lg:text-[28px] font-serif text-[#173A22] mb-0.5 lg:mb-2 leading-tight">
                More From Nature, Coming Soon
              </h3>
              <p className="text-[9.5px] lg:text-[15px] font-medium text-[#4B5563] leading-[1.3] lg:leading-relaxed max-w-xl pr-2 lg:pr-0">
                We are constantly exploring the best of nature to bring you more{" "}
                <br className="block" />
                pure and effective ingredient powders.
              </p>
            </div>
          </div>

          {/* Right part of Banner */}
          <div className="flex flex-col items-center justify-center gap-1.5 lg:gap-6 shrink-0 w-[70px] lg:w-auto lg:flex-row z-10 lg:-translate-x-74">
            <div className="w-10 h-10 lg:w-[60px] lg:h-[60px] rounded-full bg-[#D6DEC9] flex items-center justify-center shrink-0">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#173A22"
                strokeWidth="1.5"
                className="lg:w-[28px] lg:h-[28px]"
              >
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="18"
                  rx="2"
                  ry="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="16"
                  y1="2"
                  x2="16"
                  y2="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="8"
                  y1="2"
                  x2="8"
                  y2="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="3"
                  y1="10"
                  x2="21"
                  y2="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="12"
                  y1="14"
                  x2="12"
                  y2="18"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="10"
                  y1="16"
                  x2="14"
                  y2="16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p className="text-[8px] lg:text-[15.5px] font-medium text-[#374151] leading-[1.2] lg:leading-snug text-center lg:text-left ">
              New ingredients
              <br className="block" /> in the pipeline.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
