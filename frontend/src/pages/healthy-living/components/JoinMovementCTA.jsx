"use client";

import { useState } from "react";
import { ChevronRight, Mail, Users, Leaf, Bell } from "lucide-react";

const BENEFIT_CARDS = [
  {
    id: "insights",
    icon: <Mail className="w-6 h-6" />,
    title: "Expert Insights",
    description: (
      <>
        Wellness knowledge <br /> you can trust.
      </>
    ),
  },
  {
    id: "tips",
    icon: <Leaf className="w-6 h-6" />,
    title: "Practical Tips",
    description: (
      <>
        Simple habits for <br /> everyday life.
      </>
    ),
  },
  {
    id: "community",
    icon: <Users className="w-6 h-6" />,
    title: "Community First",
    description: (
      <>
        Be part of a movement <br /> that inspires better living.
      </>
    ),
  },
  {
    id: "updated",
    icon: <Bell className="w-6 h-6" />,
    title: "Stay Updated",
    description: (
      <>
        Early access to new <br /> wellness innovations.
      </>
    ),
  },
];

const SOCIAL_LINKS = [
  { id: "instagram", icon: "📷", label: "Instagram", url: "#" },
  { id: "facebook", icon: "f", label: "Facebook", url: "#" },
  { id: "youtube", icon: "▶", label: "YouTube", url: "#" },
  { id: "pinterest", icon: "P", label: "Pinterest", url: "#" },
];

export default function JoinMovementCTA() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="relative bg-[#faf8f4] overflow-hidden">
      {" "}
      <div className="  ">
        <div className="relative overflow-hidden  bg-[#faf8f4] shadow-xl">
          {/* Right Background Image */}
          <div
            className="hidden lg:block absolute top-0 right-0 w-[48%] h-[620px] xl:h-[700px]"
            style={{
              backgroundImage: "url('/images/cta-hero.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Fade image into content */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, #faf8f4 0%, rgba(250,248,244,.95) 18%, rgba(250,248,244,.65) 45%, transparent 75%)",
              }}
            />
          </div>

          <div className="relative z-10 px-5 sm:px-8 lg:px-16 py-10 sm:py-14">
            {" "}
            {/* Heading */}
            <div className="max-w-5xl">
              <div className="max-w-3xl mx-auto lg:mx-0 text-center">
                {" "}
                <div className="flex flex-col items-center gap-1.5 mb-4">
                  <Leaf className="w-5 h-5 text-[#1c3e1e]" />
                  <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#1c3e1e] uppercase">
                    Join the Healthy Living Movement
                  </p>
                </div>
                <h2 className="text-2xl text-center sm:text-4xl lg:text-5xl font-serif text-[#1c3e1e] leading-tight mb-5">
                  {" "}
                  Learn Today.
                  <br />
                  Live Better Tomorrow.
                </h2>
                {/* Leaf Divider */}
                <div className="flex items-center justify-center gap-2 mb-5">
                  <div className="h-px bg-[#4d8745] flex-1 max-w-[60px]" />
                  <Leaf className="w-4 h-4 text-[#4d8745]" />
                  <div className="h-px bg-[#4d8745] flex-1 max-w-[60px]" />
                </div>
                <p className="text-sm leading-relaxed text-center lg:text-base text-gray-700 md:leading-7 max-w-[38ch] mx-auto">
                  Greenbae believes healthier living begins with small daily
                  choices. Join our community to receive wellness insights,
                  healthy living tips, and updates on future Greenbae
                  innovations.
                </p>
              </div>
              {/* Benefits */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-8 sm:gap-6 lg:gap-10 mt-10 lg:mt-14">
                {" "}
                {BENEFIT_CARDS.map((card) => (
                  <div
                    key={card.id}
                    className="text-center px-1 sm:px-2 relative"
                  >
                    {" "}
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#e8f5e4] text-[#1c3e1e] mx-auto mb-3">
                      {card.icon}
                    </div>
                    <h3 className="font-semibold text-[#1c3e1e] text-[13px] sm:text-base mb-1.5 whitespace-nowrap">
                      {card.title}
                    </h3>
                    <p className="text-[11px] sm:text-sm text-gray-600 leading-snug px-1">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="lg:hidden mt-10 -mx-5 sm:-mx-8">
                <img
                  src="/images/cta-hero.png"
                  alt=""
                  className="w-full h-72 sm:h-96 object-cover"
                />
              </div>
            </div>
            {/* Newsletter */}
            <div className="mt-10 lg:mt-16 bg-[#e8f5e4] rounded-2xl shadow-lg border border-[#c8e6c0] p-5 sm:p-8">
              {" "}
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
                {" "}
                <div className="flex flex-row items-center sm:items-start text-left sm:text-left gap-4 flex-1">
                  {" "}
                  <div className="w-16 h-16 rounded-full bg-[#1c3e1e] flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-full">
                    <h3 className="text-xl sm:text-2xl font-serif">
                      {" "}
                      Stay Inspired. Stay Healthy.
                    </h3>

                    <p className="text-gray-600 mt-2">
                      Subscribe to get weekly wellness insights, healthy living
                      tips, and more — straight to your inbox.
                    </p>
                  </div>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-row max-w-full lg:w-auto  lg:min-w-[500px] gap-0"
                >
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white border border-gray-300 w-full rounded-xl rounded-r-none px-5 py-4 outline-none focus:ring-2 focus:ring-[#4d8745]"
                  />

                  <button
                    type="submit"
                    className="bg-[#1c3e1e] hover:bg-[#153117] text-white px-5 md:px-10 rounded-xl rounded-l-none py-4 font-semibold transition"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
              {isSubmitted && (
                <p className="text-green-600 mt-4">
                  Thank you for subscribing!
                </p>
              )}
            </div>
            {/* Social */}
            <div className="mt-14 text-center">
              <p className="text-sm font-semibold tracking-widest text-[#1c3e1e] mb-6">
                OR CONNECT WITH US
              </p>

              <div className="flex justify-center flex-wrap gap-4">
                {" "}
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    className="w-12 h-12 rounded-full border-2 border-[#1c3e1e] flex items-center justify-center text-[#1c3e1e] hover:bg-[#1c3e1e] hover:text-white transition"
                  >
                    <span className="text-lg">{link.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative Leaves */}
          <img
            src="/images/leaves-left.png"
            className="hidden lg:block absolute left-0 bottom-0 w-48 opacity-40 pointer-events-none"
            alt=""
          />

          <img
            src="/images/leaves-right.png"
            className="hidden lg:block absolute right-0 bottom-0 w-52 opacity-40 pointer-events-none"
            alt=""
          />
        </div>

        {/* Mobile Image */}
        <div className="lg:hidden mt-8">
          {/* <img
            src="/images/cta-hero.png"
            className="rounded-2xl w-full"
            alt=""
          /> */}
        </div>
      </div>
    </section>
  );
}
