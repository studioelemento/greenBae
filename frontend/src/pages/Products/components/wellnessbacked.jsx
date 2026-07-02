import React from "react";
import { ArrowRight, Leaf } from "lucide-react";

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

/* ─── Decorative leaf divider (desktop only) ────────── */
const LeafDivider = () => (
  <div className="hidden md:flex items-center justify-center gap-2 my-3">
    <span className="w-8 h-[1px] bg-[#c8dfc4]" />
    <svg
      viewBox="0 0 20 14"
      fill="none"
      className="w-5 h-3 text-[#4d8745]"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 7 C4 2, 10 1, 19 7 C10 13, 4 12, 1 7Z" />
      <line x1="1" y1="7" x2="19" y2="7" />
    </svg>
    <span className="w-8 h-[1px] bg-[#c8dfc4]" />
  </div>
);

/* ─── Left decorative plant SVG (desktop only) ──────── */
const PlantLeft = () => (
  <svg
    viewBox="0 0 160 340"
    fill="none"
    className="w-full h-full"
    stroke="#5a9450"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M80 340 C78 300, 72 260, 68 210 C64 160, 70 120, 75 80" stroke="#4a7a40" strokeWidth="2" />
    <path d="M75 80 C45 55, 20 65, 15 100 C30 115, 60 100, 75 80Z" fill="#6aaa5a" fillOpacity="0.55" stroke="#4a7a40" />
    <path d="M15 100 L75 80" />
    <path d="M75 80 C105 50, 135 60, 140 95 C120 108, 90 95, 75 80Z" fill="#7ac060" fillOpacity="0.5" stroke="#4a7a40" />
    <path d="M140 95 L75 80" />
    <path d="M68 140 C40 125, 18 138, 15 165 C32 175, 58 165, 68 140Z" fill="#6aaa5a" fillOpacity="0.5" stroke="#4a7a40" />
    <path d="M15 165 L68 140" />
    <path d="M70 155 C98 138, 118 150, 120 175 C103 183, 80 172, 70 155Z" fill="#7ac060" fillOpacity="0.45" stroke="#4a7a40" />
    <path d="M120 175 L70 155" />
    <path d="M65 210 C38 198, 18 212, 16 238 C34 246, 58 235, 65 210Z" fill="#6aaa5a" fillOpacity="0.48" stroke="#4a7a40" />
    <path d="M16 238 L65 210" />
    <path d="M68 225 C95 210, 115 224, 116 248 C100 256, 78 244, 68 225Z" fill="#7ac060" fillOpacity="0.43" stroke="#4a7a40" />
    <path d="M116 248 L68 225" />
    <path d="M72 110 C55 100, 48 110, 50 125 C62 128, 70 118, 72 110Z" fill="#8bc870" fillOpacity="0.4" />
    <path d="M73 115 C90 105, 96 115, 95 130 C83 132, 76 122, 73 115Z" fill="#8bc870" fillOpacity="0.38" />
  </svg>
);

/* ─── Right decorative plant SVG (desktop only) ─────── */
const PlantRight = () => (
  <svg
    viewBox="0 0 160 340"
    fill="none"
    className="w-full h-full"
    stroke="#5a9450"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M80 340 C82 300, 88 260, 92 210 C96 160, 90 120, 85 80" stroke="#4a7a40" strokeWidth="2" />
    <path d="M85 80 C115 55, 140 65, 145 100 C130 115, 100 100, 85 80Z" fill="#6aaa5a" fillOpacity="0.55" stroke="#4a7a40" />
    <path d="M145 100 L85 80" />
    <path d="M85 80 C55 50, 25 60, 20 95 C40 108, 70 95, 85 80Z" fill="#7ac060" fillOpacity="0.5" stroke="#4a7a40" />
    <path d="M20 95 L85 80" />
    <path d="M92 140 C120 125, 142 138, 145 165 C128 175, 102 165, 92 140Z" fill="#6aaa5a" fillOpacity="0.5" stroke="#4a7a40" />
    <path d="M145 165 L92 140" />
    <path d="M90 155 C62 138, 42 150, 40 175 C57 183, 80 172, 90 155Z" fill="#7ac060" fillOpacity="0.45" stroke="#4a7a40" />
    <path d="M40 175 L90 155" />
    <path d="M95 210 C122 198, 142 212, 144 238 C126 246, 102 235, 95 210Z" fill="#6aaa5a" fillOpacity="0.48" stroke="#4a7a40" />
    <path d="M144 238 L95 210" />
    <path d="M92 225 C65 210, 45 224, 44 248 C60 256, 82 244, 92 225Z" fill="#7ac060" fillOpacity="0.43" stroke="#4a7a40" />
    <path d="M44 248 L92 225" />
    <path d="M88 110 C105 100, 112 110, 110 125 C98 128, 90 118, 88 110Z" fill="#8bc870" fillOpacity="0.4" />
    <path d="M87 115 C70 105, 64 115, 65 130 C77 132, 84 122, 87 115Z" fill="#8bc870" fillOpacity="0.38" />
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
    <section id="wellness-backed" className="relative w-full bg-[#F7F5EE] overflow-hidden py-10 md:py-20 px-5 sm:px-6 lg:px-0">

      {/* ── Decorative Side Plants (desktop only) ── */}
      <div className="hidden lg:block absolute left-0 top-0 w-[140px] xl:w-[170px] h-full pointer-events-none z-0 opacity-90">
        <PlantLeft />
      </div>
      <div className="hidden lg:block absolute right-0 top-0 w-[260px] xl:w-[320px] h-full pointer-events-none z-0 opacity-30">
        <PlantRight />
      </div>

      {/* ── Content Wrapper ── */}
      <div className="relative z-10 max-w-[375px] mx-auto md:max-w-4xl lg:max-w-[860px] xl:max-w-[920px] text-center">

        {/* ── Header ── */}
        <div className="inline-flex items-center gap-2 text-[#4d8745] font-bold tracking-widest text-[10px] md:text-[11px] uppercase mb-3">
          <svg
            viewBox="0 0 20 14"
            fill="none"
            className="w-4 h-3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M1 7 C4 2, 10 1, 19 7 C10 13, 4 12, 1 7Z" />
          </svg>
          <span>Why Greenbae</span>
          <span className="w-1 h-1 rounded-full bg-[#4d8745] inline-block" />
        </div>

        {/* ── Heading ── */}
        <h2 className="font-serif text-[34px] sm:text-[40px] md:text-[48px] lg:text-[52px] text-[#1c3e1e] font-bold leading-[1.1] tracking-tight mb-4">
          Wellness Backed
          <br className="md:hidden" /> By Nature
        </h2>

        {/* ── Leaf ornament divider ── */}
        <div className="flex items-center justify-center gap-3 mb-4 md:mb-5">
          <span className="w-10 h-[1.5px] bg-[#c8dfc4]" />
          <svg
            viewBox="0 0 24 16"
            fill="none"
            className="w-6 h-4 text-[#4d8745]"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 8 C5 2, 12 1, 22 8 C12 15, 5 14, 2 8Z" />
            <line x1="2" y1="8" x2="22" y2="8" />
          </svg>
          <span className="w-10 h-[1.5px] bg-[#c8dfc4]" />
        </div>

        {/* ── Subtitle ── */}
        <p className="text-[#607060] text-[13px] md:text-[16px] leading-relaxed max-w-[300px] md:max-w-[560px] mx-auto mb-8 md:mb-14">
          Every Greenbae product is thoughtfully crafted with natural ingredients,
          scientific understanding and years of learning –{" "}
          <span className="hidden md:inline">for the wellness of your family.</span>
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

        {/* DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-3 gap-x-6 gap-y-10 mb-16 text-center px-4">
          {features.map(({ Icon, title, desc }, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#eef4eb] border border-[#d6e8d0] flex items-center justify-center mb-4 shadow-sm">
                <Icon />
              </div>
              <h3 className="font-serif font-bold text-[#1c3e1e] text-[16px] leading-snug mb-1 max-w-[180px]">
                {title}
              </h3>
              <LeafDivider />
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
        <div className="hidden md:block bg-white border border-[#e2ead9] rounded-2xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-3 divide-x divide-[#e2ead9]">

            {/* Begin Wellness Journey */}
            <div className="flex flex-row items-center gap-4 p-8 text-left">
              <div className="shrink-0 w-20 h-20 opacity-70">
                <svg viewBox="0 0 80 80" fill="none" className="w-full h-full" stroke="#5a9450" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M40 78 C38 62, 34 48, 30 32 C26 18, 30 10, 38 6" stroke="#4a7a40" strokeWidth="1.5" />
                  <path d="M38 6 C18 -2, 8 10, 10 26 C22 32, 36 18, 38 6Z" fill="#6aaa5a" fillOpacity="0.5" stroke="#4a7a40" />
                  <path d="M38 6 C56 -4, 68 8, 66 22 C54 28, 40 16, 38 6Z" fill="#7ac060" fillOpacity="0.45" stroke="#4a7a40" />
                  <path d="M34 32 C16 28, 6 40, 8 54 C20 58, 32 46, 34 32Z" fill="#6aaa5a" fillOpacity="0.45" stroke="#4a7a40" />
                  <path d="M35 42 C52 37, 62 48, 60 62 C48 65, 36 54, 35 42Z" fill="#7ac060" fillOpacity="0.4" stroke="#4a7a40" />
                </svg>
              </div>
              <div>
                <h4 className="font-serif font-bold text-[#1c3e1e] text-[18px] leading-snug mb-2">
                  Begin Your Wellness Journey Today
                </h4>
                <p className="text-[#607060] text-[14px] leading-relaxed">
                  Explore our products and take a step towards a healthier, happier you and your family.
                </p>
              </div>
            </div>

            {/* Explore Healthy Living Hub — dark green */}
            <div className="bg-[#1c3e1e] flex flex-col items-center justify-center gap-3 p-8 text-center cursor-pointer group hover:bg-[#2b5229] transition-colors duration-300">
              <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white">
                <Leaf className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-serif font-bold text-white text-[17px] leading-snug mb-1">
                  Explore Healthy Living Hub
                </h4>
                <p className="text-white/70 text-[13px] leading-relaxed mb-3">
                  Discover tips, insights and resources for everyday wellness.
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col items-center justify-center gap-3 p-8 text-center cursor-pointer group hover:bg-[#f4f7f0] transition-colors duration-300">
              <div className="w-10 h-10 rounded-full border border-[#c8dfc4] bg-[#eef4eb] flex items-center justify-center text-[#4d8745]">
                <ChatIcon />
              </div>
              <div>
                <h4 className="font-serif font-bold text-[#1c3e1e] text-[17px] leading-snug mb-1">
                  Contact Us
                </h4>
                <p className="text-[#607060] text-[13px] leading-relaxed mb-3">
                  Have questions? We're here to help.
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#eef4eb] border border-[#c8dfc4] flex items-center justify-center text-[#1c3e1e] group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WellnessBacked;
