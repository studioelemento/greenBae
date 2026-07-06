import React from "react";
import { ArrowRight, Leaf } from "lucide-react";
import leftimage from "../../../assets/img-ourproducts/leftsideimg.png";
import rightimage from "../../../assets/img-ourproducts/2products.png";
import decorleaf from "../../../assets/img-ourproducts/decorativeleaf.png";

/* ─── Inline SVG Icons ─────────────────────────────── */

const NaturalIcon = ({ size = "md" }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    className={size === "sm" ? "w-7 h-7" : "w-9 h-9 md:w-10 md:h-10"}
    stroke="#4d8745"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 32 C20 20, 28 12, 36 8 C36 8, 36 22, 26 28" />
    <path d="M20 32 C20 22, 12 14, 6 10 C6 10, 6 24, 16 30" />
    <line x1="20" y1="16" x2="20" y2="34" />
  </svg>
);

const PreservativeIcon = ({ size = "md" }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    className={size === "sm" ? "w-7 h-7" : "w-9 h-9 md:w-10 md:h-10"}
    stroke="#4d8745"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 6 L14 14 L8 22 L8 34 L32 34 L32 22 L26 14 L26 6 Z" />
    <line x1="14" y1="6" x2="26" y2="6" />
    <path d="M8 22 L32 22" />
    <circle cx="20" cy="28" r="3" />
    <line x1="20" y1="25" x2="20" y2="28" strokeDasharray="2 1.5" />
  </svg>
);

const TestedIcon = ({ size = "md" }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    className={size === "sm" ? "w-7 h-7" : "w-9 h-9 md:w-10 md:h-10"}
    stroke="#4d8745"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="10" y="6" width="20" height="28" rx="2" />
    <line x1="14" y1="13" x2="26" y2="13" />
    <line x1="14" y1="19" x2="26" y2="19" />
    <polyline points="14,25 17,28 23,22" />
  </svg>
);

const ResearchIcon = ({ size = "md" }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    className={size === "sm" ? "w-7 h-7" : "w-9 h-9 md:w-10 md:h-10"}
    stroke="#4d8745"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="18" cy="18" r="9" />
    <line x1="24.5" y1="24.5" x2="33" y2="33" />
    <line x1="18" y1="12" x2="18" y2="24" />
    <line x1="12" y1="18" x2="24" y2="18" />
  </svg>
);

const FamilyIcon = ({ size = "md" }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    className={size === "sm" ? "w-7 h-7" : "w-9 h-9 md:w-10 md:h-10"}
    stroke="#4d8745"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="14" cy="11" r="4" />
    <circle cx="26" cy="11" r="4" />
    <circle cx="20" cy="23" r="3" />
    <path d="M7 30 C7 24 10 20 14 20" />
    <path d="M33 30 C33 24 30 20 26 20" />
    <path d="M14 30 C14 27 16 25 20 25" />
    <path d="M26 30 C26 27 24 25 20 25" />
  </svg>
);

const TrademarkIcon = ({ size = "md" }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    className={size === "sm" ? "w-7 h-7" : "w-9 h-9 md:w-10 md:h-10"}
    stroke="#4d8745"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 5 L23 14 L33 14 L25 20 L28 30 L20 24 L12 30 L15 20 L7 14 L17 14 Z" />
    <circle cx="20" cy="20" r="16" strokeOpacity="0.3" />
  </svg>
);

const ChatIcon = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    className="w-5 h-5"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 6 L26 6 L26 20 L18 20 L12 26 L12 20 L6 20 Z" />
  </svg>
);

/* ─── Feature Cards Data ───────────────────────────── */
const features = [
  {
    Icon: NaturalIcon,
    title: "100% Natural Ingredients",
    desc: "Carefully selected from nature. Nothing artificial, ever.",
  },
  {
    Icon: PreservativeIcon,
    title: "No Added Preservatives",
    desc: "Clean, safe and pure nutrition the way nature intended.",
  },
  {
    Icon: TestedIcon,
    title: "Tested Products",
    desc: "Rigorously tested for quality, safety and effectiveness.",
  },
  {
    Icon: ResearchIcon,
    title: "10+ Years Of Learning & Refinement",
    desc: "Years of research, understanding and real-life testing.",
  },
  {
    Icon: FamilyIcon,
    title: "Family-Inspired Formulations",
    desc: "Created for our family, made for yours.",
  },
  {
    Icon: TrademarkIcon,
    title: "Trademark Registered Brand",
    desc: "A promise of trust, authenticity and long-term commitment.",
  },
];

/* ─── Main Component ───────────────────────────────── */
const WellnessBacked = () => {
  return (
    <section
      id="wellness-backed"
      className="relative w-full bg-[#F7F5EE] py-10 md:py-20 px-5 sm:px-6 lg:px-0"
    >
      {/* ── Decorative Side Plants (desktop only) ── */}
      <div className="absolute left-0 top-70 z-0 pointer-events-none">
        <img src={leftimage} className="w-[450px]" alt="" />
      </div>

      <div className="absolute right-0 top-100 z-0 pointer-events-none">
        <img src={rightimage} className="w-[400px]" alt="" />
      </div>

      {/* ── Content Wrapper ── */}
      <div className="relative z-10 max-w-[375px] mx-auto md:max-w-5xl lg:max-w-[1200px] xl:max-w-[1400px] text-center">
        {/* ── Header ── */}
        <div className="inline-flex items-center gap-2 text-[#4d8745] font-bold tracking-widest text-[10px] md:text-[11px] uppercase mb-3">
          <Leaf className="w-3 h-3 md:w-4 md:h-4" />
          <span>Why Greenbae</span>
          <Leaf className="w-3 h-3 md:w-4 md:h-4" />
        </div>

        {/* ── Heading ── */}
        <h2 className="font-serif text-[34px] sm:text-[40px] md:text-[48px] lg:text-[52px] text-[#1c3e1e] font-bold leading-[1.1] tracking-tight mb-4">
          Wellness Backed
          <br className="md:hidden" /> By Nature
        </h2>

        <div className="flex items-center justify-center md:justify-center gap-3 my-4 md:my-5 w-full">
          <span className="w-14 md:w-18 h-[2px] bg-[#d1e6d3]"></span>
          <Leaf className="w-3 md:w-5 h-3 md:h-5 text-[#4d8745]" />
          <span className="w-14 md:w-18 h-[2px] bg-[#d1e6d3]"></span>
        </div>

        {/* ── Subtitle ── */}
        <p className="text-[#607060] text-[13px] md:text-[16px] leading-relaxed max-w-[300px] md:max-w-[560px] mx-auto mb-8 md:mb-2">
          Every Greenbae product is thoughtfully crafted with natural
          ingredients, scientific understanding and years of learning –{" "}
          <span className="hidden md:inline">
            for the wellness of your family.
          </span>
          <span className="md:hidden">for the wellness of your family.</span>
        </p>

        {/* ─────────────────────────────────────────────────────────── */}
        {/* MOBILE: vertical list of feature rows (icon left, text right) */}
        {/* DESKTOP: 3-column centered grid (icon top, text below)        */}
        {/* ─────────────────────────────────────────────────────────── */}

        {/* MOBILE LIST */}
        <div className="flex flex-col gap-0 mb-8 md:hidden">
          {features.map(({ Icon, title, desc }, i) => (
            <div
              key={i}
              className="flex items-start gap-4 py-4 border-b border-[#e8f0e4] last:border-b-0"
            >
              {/* Icon circle */}
              <div className="shrink-0 w-[52px] h-[52px] rounded-full bg-[#eef4eb] border border-[#d6e8d0] flex items-center justify-center shadow-sm">
                <Icon size="sm" />
              </div>
              {/* Text: left-aligned */}
              <div className="text-left pt-1">
                <h3 className="font-serif font-bold text-[#1c3e1e] text-[14px] leading-snug mb-1">
                  {title}
                </h3>
                <p className="text-[#607060] text-[12px] leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP GRID — boxed cards */}
        <div className="hidden md:grid grid-cols-3 lg:max-w-[4600px] xl:max-w-[960px] gap-5 mb-6 px-4 text-center p-2 ml-55">
          {features.map(({ Icon, title, desc }, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-[#F7F5EE] border border-[#e2ead9] rounded-2xl px-6 py-4 shadow-sm"
            >
              {/* Icon circle */}
              <div className="w-16 h-16 rounded-full bg-[#eef4eb] border border-[#d6e8d0] flex items-center justify-center mb-4 shadow-sm">
                <Icon />
              </div>
              {/* Title */}
              <h3 className="font-serif font-bold text-[#1c3e1e] text-[16px] leading-snug mb-1 max-w-[180px]">
                {title}
              </h3>
              {/* Leaf ornament divider */}
              <div className="flex items-center justify-center md:justify-center gap-3 my-4 md:my-5 w-full">
                <span className="w-14 md:w-12 h-[1px] bg-[#d1e6d3]"></span>
                <Leaf className="w-3 md:w-4 h-3 md:h-4 text-[#4d8745]" />
                <span className="w-14 md:w-12 h-[1px] bg-[#d1e6d3]"></span>
              </div>
              {/* Description */}
              <p className="text-[#607060] text-[14px] leading-relaxed max-w-[200px] mx-auto">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* ─────────────────────────────────────────────────────────────── */}
        {/* BOTTOM CTA BANNER                                               */}
        {/* Mobile: 2 stacked cards (Hub + Contact Us), no begin-journey    */}
        {/* Desktop: 3-column row (Begin Journey | Hub | Contact Us)        */}
        {/* ─────────────────────────────────────────────────────────────── */}

        {/* MOBILE CTA: 2 stacked cards */}
        <div className="flex flex-col gap-3 md:hidden">
          {/* Explore Healthy Living Hub — dark green */}
          <div className="bg-[#1c3e1e] rounded-2xl flex items-center gap-4 p-5 text-left cursor-pointer group hover:bg-[#2b5229] transition-colors duration-300">
            <div className="shrink-0 w-11 h-11 rounded-full border border-white/30 bg-white/10 flex items-center justify-center text-white">
              <Leaf className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h4 className="font-serif font-bold text-white text-[14px] leading-snug mb-0.5">
                Explore Healthy Living Hub
              </h4>
              <p className="text-white/70 text-[12px] leading-relaxed">
                Discover tips, insights and resources for everyday wellness.
              </p>
            </div>
            <div className="shrink-0 w-8 h-8 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white group-hover:translate-x-1 transition-transform duration-300">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Contact Us */}
          <div className="bg-white border border-[#e2ead9] rounded-2xl flex items-center gap-4 p-5 text-left cursor-pointer group hover:bg-[#f4f7f0] transition-colors duration-300">
            <div className="shrink-0 w-11 h-11 rounded-full border border-[#c8dfc4] bg-[#eef4eb] flex items-center justify-center text-[#4d8745]">
              <ChatIcon />
            </div>
            <div className="flex-1">
              <h4 className="font-serif font-bold text-[#1c3e1e] text-[14px] leading-snug mb-0.5">
                Contact Us
              </h4>
              <p className="text-[#607060] text-[12px] leading-relaxed">
                Have questions? We're here to help.
              </p>
            </div>
            <div className="shrink-0 w-8 h-8 rounded-full bg-[#eef4eb] border border-[#c8dfc4] flex items-center justify-center text-[#1c3e1e] group-hover:translate-x-1 transition-transform duration-300">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* DESKTOP CTA: 3-column card */}
        <div className="max-w-[1700px] mx-auto mt-16">
          <div className="relative bg-[#FBF8F3] border border-[#ECE5D8] rounded-[28px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden p-6">
            <div className="grid grid-cols-[1.7fr_0.75fr_0.75fr] items-center min-h-[200px]">
              {/* LEFT */}
              <div className="relative h-full px-8 py-6 flex items-center justify-center border-r border-[#E7E2D8]">
                {/* Leaf */}
                <img
                  src={decorleaf}
                  alt=""
                  className="absolute left-0 bottom-0 w-[140px]"
                />

                <div className="max-w-[520px] text-center">
                  <h2 className="font-serif font-bold text-[#1C3E1E] text-[26px] leading-tight">
                    Begin Your Wellness Journey Today
                  </h2>

                  {/* divider */}
                  <div className="flex items-center justify-center gap-3 my-5">
                    <div className="w-14 h-px bg-[#C5B68E]" />
                    <Leaf
                      className="w-4 h-4 text-[#7E8F63]"
                      strokeWidth={1.5}
                    />
                    <div className="w-14 h-px bg-[#C5B68E]" />
                  </div>

                  <p className="text-[#5F645D] text-[16px] leading-8">
                    Explore our products and take a step towards <br />a
                    healthier, happier you and your family.
                  </p>
                </div>
              </div>

              {/* MIDDLE */}
              <div className="bg-[#1C4A25] rounded-[24px] h-[200px] w-full flex flex-col justify-center px-2">
                {/* Icon + Heading */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full border border-[#C6C18A] flex items-center justify-center shrink-0 ml-8">
                    <Leaf className="w-5 h-5 text-[#D7E5C8]" />
                  </div>

                  <h3 className="font-serif text-white text-[20px] font-semibold leading-tight">
                    Explore Healthy <br />
                    Living Hub
                  </h3>
                </div>

                {/* Description */}
                <p className="text-white/80 text-[15px] leading-7">
                  Discover tips, insights and resources
                  <br />
                  for everyday wellness.
                </p>
                <div className="flex justify-center mt-2">
                  <ArrowRight className="w-6 h-6 text-[#D7E5C8]" />
                </div>
              </div>

              {/* RIGHT */}

              <div className="px-6">
                <div className="bg-[#FBF8F3] border border-[#CDB980] rounded-[24px] h-[200px] w-full flex flex-col justify-center px-2 group cursor-pointer">
                  {/* Icon + Heading */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full border border-[#CDB980] flex items-center justify-center shrink-0 ml-8">
                      <ChatIcon />
                    </div>

                    <h3 className="font-serif text-[#1C3E1E] text-[20px] font-semibold leading-tight">
                      Contact Us
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[#5E655C] text-[15px] leading-7">
                    Have questions?
                    <br />
                    We're here to help.
                  </p>

                  {/* Arrow */}
                  <div className="flex justify-center mt-2">
                    <ArrowRight className="w-6 h-6 text-[#1C3E1E] group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Green Strip */}
          <div className="h-5 bg-[#0F441C] rounded-b-xl mt-1"></div>
        </div>
      </div>
    </section>
  );
};

export default WellnessBacked;
