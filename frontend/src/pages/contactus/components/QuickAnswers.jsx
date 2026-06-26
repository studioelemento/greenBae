import React, { useState } from "react";
import {
  Leaf,
  Users,
  Soup,
  Truck,
  BadgeCheck,
  PackageCheck,
  MessageCircle,
  Plus,
  Minus
} from "lucide-react";
import faqimage from "../../../assets/img-contactus/faq.png";

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
    icon: BadgeCheck,
    question: "How can I become a distributor?",
    answer:
      "We'd love to have you with us! You can connect through our contact form or WhatsApp.",
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
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-24">

        <div className="bg-[#f8f5ee] rounded-[32px] overflow-hidden relative">

          {/* Top Area */}

          <div className="grid lg:grid-cols-2">

            {/* Left */}

            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center text-center">

              <div className="inline-flex mx-auto items-center gap-2 text-[#4d8745] font-bold uppercase text-xs tracking-widest mb-4">
                <Leaf size={16} />
                Quick Answers
              </div>

              <h2 className="font-serif text-[#1c3e1e] text-[42px] md:text-[60px] leading-none font-bold">
                Frequently Asked
                <br />
                Questions
              </h2>

              <div className="w-24 h-[2px] bg-[#d8c49a] mx-auto my-6"></div>

              <p className="text-gray-700 max-w-md mx-auto leading-relaxed">
                Find quick answers to common questions about our products,
                ingredients, orders and more.
              </p>
            </div>

            {/* Right */}

            <div className="hidden lg:block">
              <img
                src={faqimage}
                alt="Family"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* FAQ Grid */}

          <div className="p-5 md:p-8 lg:p-10">

            <div className="grid lg:grid-cols-2 gap-4">

              {faqs.map((faq, index) => {
                const Icon = faq.icon;

                return (
                  <div
                    key={index}
                    onClick={() => toggleFAQ(index)}
                    className="
                      bg-[#faf8f3]
                      border
                      border-[#e7e1d5]
                      rounded-2xl
                      p-5
                      flex
                      items-start
                      gap-4
                      cursor-pointer
                        transition-colors
                        duration-300
                        hover:bg-[#f0e9d8]                   "
                  >
                    <div
                      className="
                        w-16
                        h-16
                        rounded-full
                        bg-[#eef0e3]
                        flex
                        items-center
                        justify-center
                        shrink-0
                      "
                    >
                      <Icon className="text-[#345920]" size={28} />
                    </div>

                    <div className="flex-1">

                    <div
                        onClick={() => toggleFAQ(index)}
                        className="flex items-start justify-between cursor-pointer"
            >
                    <h3 className="font-serif text-[#1c3e1e] text-2xl font-semibold">
                        {faq.question}
    </h3>

    {openIndex === index ? (
      <Minus
        size={22}
        className="text-[#345920] shrink-0"
      />
    ) : (
      <Plus
        size={22}
        className="text-[#345920] shrink-0"
      />
    )}
  </div>

  {openIndex === index && (
    <p className="text-gray-700 leading-relaxed mt-4">
      {faq.answer}
    </p>
  )}

</div>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA */}

            <div className="mt-12 border-t border-[#ddd7c8] pt-8">

              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

                <div className="flex items-center gap-5">

                  <div className="w-20 h-20 rounded-full bg-[#eef0e3] flex items-center justify-center">
                    <Leaf
                      size={36}
                      className="text-[#345920]"
                    />
                  </div>

                  <div>
                    <h3 className="font-serif text-[#1c3e1e] text-3xl font-semibold">
                      Can't find what you're looking for?
                    </h3>

                    <p className="text-gray-700 mt-2">
                      We're here to help you on your healthy living journey.
                    </p>
                  </div>

                </div>

                <button
                  className="
                    bg-[#345920]
                    hover:bg-[#2b4c18]
                    text-white
                    px-8
                    py-4
                    rounded-lg
                    font-semibold
                    flex
                    items-center
                    gap-2
                    transition-colors
                  "
                >
                  <MessageCircle size={18} />
                  Contact Us
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