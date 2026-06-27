import React, { useState } from "react";
import {
  Users,
  Soup,
  Truck,
  Award,
  Leaf,
  PackageCheck,
  Plus,
  Minus,
  MessageSquare,
} from "lucide-react";
import faqimage from "../../../assets/img-contactus/faq.png";

// Double Leaf icon for the header
const DoubleLeaf = () => (
  <div className="flex gap-1 items-center justify-center text-[#0B3B24]">
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 -rotate-45 shrink-0">
      <path d="M17 8C8 10 4 18 4 18S12 17 19 9C20 8 20 6 20 6S18 7 17 8Z" />
      <path d="M19 9L4 18" stroke="#0B3B24" strokeWidth="1.5" />
    </svg>
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 -rotate-12 opacity-80 shrink-0">
      <path d="M17 8C8 10 4 18 4 18S12 17 19 9C20 8 20 6 20 6S18 7 17 8Z" />
      <path d="M19 9L4 18" stroke="#0B3B24" strokeWidth="1.5" />
    </svg>
  </div>
);

// Custom Leaf Divider (same as ContactHero for consistency)
const LeafDivider = ({ align = "center" }) => (
  <div className={`flex items-center w-full my-6 ${align === "left" ? "justify-start" : "justify-center"}`}>
    {align === "center" && <div className="flex-1 h-[1px] bg-[#E5DFD5]"></div>}
    <div className="flex items-center justify-center pr-4 shrink-0">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <path d="M11.5 13.5C11.5 13.5 8.5 16.5 5 15.5C1.5 14.5 2 10.5 2 10.5C2 10.5 5 10 7 11.5C9 13 11.5 13.5 11.5 13.5Z" fill="#0B3B24" />
        <path d="M12.5 10.5C12.5 10.5 15.5 7.5 19 8.5C22.5 9.5 22 13.5 22 13.5C22 13.5 19 14 17 12.5C15 11 12.5 10.5 12.5 10.5Z" fill="#D2A054" />
      </svg>
    </div>
    <div className="flex-1 h-[1px] bg-[#E5DFD5]"></div>
  </div>
);

const faqs = [
  {
    icon: Users,
    question: "Is Veggie Vitals suitable for children?",
    answer:
      "Yes! Veggie Vitals is made with natural greens, fruits and essential nutrients that are gentle and safe for kids above 3 years.",
  },
  {
    icon: Truck,
    question: "Do you ship across India?",
    answer:
      "Yes, we deliver across India! Orders are usually delivered within 3–7 business days depending on your location.",
  },
  {
    icon: Soup,
    question: "How do I consume Nutri Mix?",
    answer:
      "Simply add 2 tablespoons to a glass of milk, smoothie, porridge, or your favourite recipe.",
  },
  {
    icon: Award,
    question: "How can I become a distributor?",
    answer:
      "We'd love to have you with us! You can connect through our contact form or email.",
  },
  {
    icon: Leaf,
    question: "Are Greenbae products 100% natural?",
    answer:
      "Absolutely. All our products are crafted with clean, plant-based ingredients and no artificial additives.",
  },
  {
    icon: PackageCheck,
    question: "What is your return policy?",
    answer:
      "We offer easy returns within 7 days of delivery if the product is unopened and in original condition.",
  },
];

const QuickAnswers = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FCFBF7] py-16 lg:py-24 border-t border-[#E5DFD5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
        
        {/* FAQ Outer Container */}
        <div className="bg-[#F7F4EF] rounded-3xl border border-[#E5DFD5] overflow-hidden relative shadow-sm">
          
          {/* Top Banner Area */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left text content */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
              <div className="inline-flex items-center gap-2 text-[#0B3B24] font-bold tracking-widest text-xs uppercase mb-2">
                <DoubleLeaf />
                <span>Quick Answers</span>
              </div>

              <h2 className="font-serif text-[#0B3B24] text-3xl sm:text-4xl lg:text-[48px] leading-tight font-bold mt-2">
                Frequently Asked<br className="hidden sm:inline" /> Questions
              </h2>

              <LeafDivider align="left" className="w-full max-w-xs" />

              <p className="text-[#5C5852] text-sm sm:text-base leading-relaxed max-w-md">
                Find quick answers to common questions about our products, ingredients, orders and more.
              </p>
            </div>

            {/* Right Image (Hidden on Mobile) */}
            <div className="hidden lg:block relative min-h-[350px]">
              <img
                src={faqimage}
                alt="Family choosing wellness"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

          </div>

          {/* FAQ Accordion Grid */}
          <div className="p-6 md:p-10 border-t border-[#E5DFD5] bg-[#FAF8F5]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {faqs.map((faq, index) => {
                const Icon = faq.icon;
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    onClick={() => toggleFAQ(index)}
                    className={`bg-white border rounded-2xl p-5 flex items-start gap-4 cursor-pointer transition-all duration-300 ${
                      isOpen ? "border-[#0B3B24] shadow-sm" : "border-[#E5DFD5] hover:border-[#D9D2C6]"
                    }`}
                  >
                    {/* Circular Icon Badge */}
                    <div className="w-12 h-12 rounded-full bg-[#F7F4EF] flex items-center justify-center text-[#0B3B24] shrink-0">
                      <Icon size={22} className="stroke-[1.75]" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-serif text-[#0B3B24] text-base sm:text-lg font-bold leading-snug">
                          {faq.question}
                        </h3>
                        <div className="shrink-0 text-[#0B3B24] mt-0.5">
                          {isOpen ? (
                            <Minus size={18} className="stroke-[2.5]" />
                          ) : (
                            <Plus size={18} className="stroke-[2.5]" />
                          )}
                        </div>
                      </div>

                      {isOpen && (
                        <p className="text-[#5C5852] text-sm leading-relaxed mt-3 pt-3 border-t border-[#F7F4EF] animate-fade-in">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA Banner */}
            <div className="mt-12 border-t border-[#E5DFD5] pt-8">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-white border border-[#E5DFD5] rounded-2xl p-6 sm:p-8">
                
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
                  <div className="w-14 h-14 rounded-full bg-[#F7F4EF] flex items-center justify-center text-[#0B3B24] shrink-0">
                    <Leaf size={24} className="fill-[#0B3B24] stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-[#0B3B24] text-xl sm:text-2xl font-bold">
                      Can't find what you're looking for?
                    </h3>
                    <p className="text-[#5C5852] text-sm mt-1">
                      We're here to help you on your healthy living journey.
                    </p>
                  </div>
                </div>

                <button className="w-full lg:w-auto bg-[#0B3B24] hover:bg-[#082C1B] text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors duration-200 cursor-pointer shrink-0">
                  <MessageSquare size={18} />
                  <span>Contact Us</span>
                </button>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default QuickAnswers;