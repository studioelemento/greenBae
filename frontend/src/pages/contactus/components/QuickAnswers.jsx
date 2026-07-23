import React, { useState, useEffect } from "react";
import {
  Users,
  Soup,
  Truck,
  Award,
  Leaf,
  PackageCheck,
  Plus,
  Minus,
} from "lucide-react";
import faqimage from "../../../assets/img-contactus/faq.png";

// Sprout Icon for bottom card
const SproutIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 text-[#0B3B24]"
  >
    <path d="M12 20v-8" />
    <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 0 0-4 4c0 3 3 5 10 8c7-3 10-5 10-8a4 4 0 0 0-4-4c-2 0-4 1.33-6 4z" />
  </svg>
);

// Message Icon with 3 dots
const MessageIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 shrink-0"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <circle cx="9" cy="10" r="1.2" fill="currentColor" />
    <circle cx="12" cy="10" r="1.2" fill="currentColor" />
    <circle cx="15" cy="10" r="1.2" fill="currentColor" />
  </svg>
);

// FAQs in specified order for Column-Major Grid on Desktop and Natural Single-Column on Mobile
const faqs = [
  {
    icon: Users,
    question: "Is Veggie Vitals suitable for children?",
    answer:
      "Yes! Veggie Vitals is made with natural greens, fruits and essential nutrients that are gentle and safe for kids above 3 years.",
  },
  {
    icon: Soup,
    question: "How do I consume Nutri Mix?",
    answer:
      "Simply add 2 tablespoons to a glass of milk, smoothie, porridge, or your favourite recipe. Enjoy it daily for best results.",
  },
  {
    icon: Leaf,
    question: "Are Greenbae products 100% natural?",
    answer:
      "Absolutely. All our products are crafted with clean, plant-based ingredients and no artificial additives, flavours or preservatives.",
  },
  {
    icon: Truck,
    question: "Do you ship across India?",
    answer:
      "Yes, we deliver across India! Orders are usually delivered within 3–7 business days depending on your location.",
  },
  {
    icon: Award,
    question: "How can I become a distributor?",
    answer:
      "We'd love to have you with us! You can connect with our team through the contact form or reach us directly via WhatsApp.",
  },
  {
    icon: PackageCheck,
    question: "What is your return policy?",
    answer:
      "We offer easy returns within 7 days of delivery if the product is unopened and in original condition. T&C apply.",
  },
];

const QuickAnswers = () => {
  // Allow multiple accordions to be open at once
  const [openIndexes, setOpenIndexes] = useState([]);

  // Detect mobile view
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section className="bg-[#FCFBF7] py-0 md:py-16 lg:py-10 border-0  relative overflow-hidden">
      <div className="container mx-auto px-0 sm:px-6 lg:px-8 xl:px-12 max-w-[1440px]">
        {/* Main Card Container */}
        <div className="bg-[#FAF6F0] rounded-[12px] lg:rounded-[12px] border border-[#E5DFD5] overflow-hidden relative shadow-sm z-10">
          {/* Top Section: Header & Image Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            {/* Left Column: Centered Text Content */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center items-center text-center">
              {/* Leaf + Header label */}
              <div className="flex flex-col items-center gap-1.5 text-[#0B3B24] font-bold tracking-widest text-s uppercase mb-2">
                <Leaf className="w-6 h-5" />
                <span>Quick Answers</span>
              </div>

              {/* Serif Title */}
              <h2 className="font-serif text-[#0B3B24] text-3xl sm:text-4xl lg:text-[48px] leading-tight font-bold mt-[0.05rem] mb-0 sm:mb-6 lg:mb-[0.05rem]">
                Frequently Asked
                <br /> Questions
              </h2>

              {/* Leaf Divider/leaf between title & description */}
              <div className="relative flex items-center justify-center my-4 z-10">
                <div className="flex items-center justify-center w-full gap-1">
                  <div className="w-full border-t border-[#E5DFD5] flex "></div>

                  <Leaf className="h-5 w-35 text-[#0B3B24]" />

                  <div className="w-full border-t border-[#E5DFD5]"></div>
                </div>
              </div>

              {/* Description Paragraph */}
              <p className="text-[#5C5852] text-[14px] sm:text-base leading-relaxed max-w-md lg:px-8">
                Find quick answers to common questions
                <br className="block sm:hidden" /> about our products,
                ingredients, orders and more.
              </p>
            </div>

            {/* Right Column: Family Image (Hidden on Mobile) */}
            <div className="hidden lg:block relative overflow-hidden">
              <img
                src={faqimage}
                alt="Family choosing wellness"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Left fade */}
              <div className="absolute left-0 top-0 h-full w-18 bg-gradient-to-r from-[#FCF8F2] via-[#FCF8F2]/60 to-transparent"></div>
            </div>
          </div>

          {/* FAQs Accordion Grid */}
          <div className="px-6 md:px-12 lg:px-16 pb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-flow-col lg:grid-rows-3 gap-5">
              {faqs.map((faq, index) => {
                const Icon = faq.icon;
                const isOpen = openIndexes.includes(index);

                return (
                  <div
                    key={index}
                    onClick={() => isMobile && toggleFAQ(index)}
                    className={`bg-[#fdfaf5] border rounded-xl p-5 flex items-start gap-4 cursor-pointer transition-all duration-300 z-10 relative ${
                      isOpen
                        ? "border-[#0B3B24] shadow-sm"
                        : "border-[#E5DFD5] hover:border-[#D9D2C6]"
                    }`}
                  >
                    {/* Circular Icon Badge */}
                    <div className="w-12 h-12 rounded-full bg-[#f1eedf] border border-[#E5DFD5] flex items-center justify-center text-[#0B3B24] shrink-0">
                      <Icon size={20} className="stroke-[1.75]" />
                    </div>

                    {/* Question & Answer Content */}
                    <div className="flex-1 min-w-0 ">
                      <div className="flex items-center justify-between gap-3 ">
                        <h3 className="text-[#0B3B24] text-base sm:text-lg font-bold leading-snug">
                          {faq.question}
                        </h3>
                        {isMobile && (
                          <div className="shrink-0 text-[#0B3B24] mt-0.5">
                            {isOpen ? (
                              <Minus size={18} className="stroke-[2.5]" />
                            ) : (
                              <Plus size={18} className="stroke-[2.5]" />
                            )}
                          </div>
                        )}
                      </div>

                      {/* Expandable Answer */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isMobile ? "" : "max-h-none opacity-100"
                        }`}
                        style={
                          isMobile
                            ? {
                                maxHeight: isOpen ? "200px" : "0px",
                                opacity: isOpen ? 1 : 0,
                              }
                            : {}
                        }
                      >
                        <p className="text-[#5C5852] text-sm leading-relaxed mt-2.5">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Separator Divider Line with Leaf Badge */}
            <div className="hidden lg:block relative flex items-center justify-center my-8 z-10 mb-5">
              <div className="flex items-center justify-center w-full gap-4">
                <div className="w-[25%] border-t border-[#E5DFD5] flex "></div>

                <Leaf className="h-5 w-5 text-[#0B3B24]" />

                <div className="w-[25%] border-t border-[#E5DFD5]"></div>
              </div>
            </div>

            {/* Mobile version Bottom CTA Banner (Responsive Layout) */}
            <div className="block sm:hidden mt-4 bg-[#E2EADF] rounded-2xl p-[0.05rem] flex items-start gap-4">
              <div className="z-10 relative">
                <div className="flex flex-col md:flex-row items-center justify-center gap-5 lg:px-8 py-6 p-5 sm:p-6 md:p-0">
                  {/* Sprout Icon & Text Info */}
                  <div className="flex flex-row items-start text-left gap-4 w-full md:w-auto pb-[0.05rem]">
                    <div className="w-12 h-12 rounded-full bg-[#FAF6F0] border border-[#E5DFD5] flex items-center justify-center text-[#0B3B24] shrink-0">
                      <SproutIcon />
                    </div>
                    <div>
                      <h3 className="text-[#0B3B24] text-lg sm:text-xl font-bold leading-snug">
                        Can't find what you're <br /> looking for?
                      </h3>
                      <p className="text-[#5C5852] text-sm mt-0.5">
                        We're here to help you on your healthy <br /> living
                        journey.
                      </p>
                    </div>
                  </div>

                  {/* Contact Us Button */}
                  <a href="#contact-hero" className="w-full md:w-auto bg-[#0B3B24] hover:bg-[#072410] text-white px-7 py-3.5 rounded-xl flex items-center justify-center gap-2.5 transition-colors duration-200 cursor-pointer shrink-0 w-fit">
                    <MessageIcon />
                    <span className="text-sm">Contact Us</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Desktop version Bottom CTA Banner (Responsive Layout) */}

            <div className="lg:block hidden z-10 relative">
              <div className="flex flex-col md:flex-row items-center justify-center gap-5 lg:px-8 py-6 p-5 sm:p-6 md:p-0">
                {/* Sprout Icon & Text Info */}
                <div className="flex flex-row items-start text-left gap-4 w-full md:w-auto pb-4 ">
                  <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#E5DFD5] flex items-center justify-center text-[#0B3B24] shrink-0">
                    <SproutIcon />
                  </div>
                  <div>
                    <h3 className="text-[#0B3B24] text-lg sm:text-xl font-bold leading-snug">
                      Can't find what you're looking for?
                    </h3>
                    <p className="text-[#5C5852] text-sm mt-0.5">
                      We're here to help you on your healthy living journey.
                    </p>
                  </div>
                </div>

                {/* Contact Us Button */}
                <a href="#contact-hero" className="w-full md:w-auto bg-[#0B3B24] hover:bg-[#072410] text-white px-7 py-3.5 rounded-xl flex items-center justify-center gap-2.5 transition-colors duration-200 cursor-pointer shrink-0 w-fit">
                  <MessageIcon />
                  <span className="text-sm">Contact Us</span>
                </a>
              </div>
            </div>
          </div>

          {/* Decorative Corner Leaves (Absolute Positioned, Z-0) */}
          <img
            src="https://static.vecteezy.com/system/resources/previews/032/621/185/non_2x/fresh-tropical-leaf-corner-border-png.png"
            alt="decorative leaves bottom left"
            className="absolute -bottom-6 -left-6 w-32 sm:w-44 md:w-56 pointer-events-none select-none z-0 opacity-20"
          />
          <img
            src="https://static.vecteezy.com/system/resources/previews/032/621/185/non_2x/fresh-tropical-leaf-corner-border-png.png"
            alt="decorative leaves bottom right"
            className=" absolute -bottom-6 -right-6 w-32 sm:w-44 md:w-56 pointer-events-none select-none z-0 opacity-20 scale-x-[-1]"
          />
        </div>
      </div>
    </section>
  );
};

export default QuickAnswers;
