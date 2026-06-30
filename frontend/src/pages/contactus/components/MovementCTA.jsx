import React from "react";
import { Leaf, ArrowRight, Send, Users, Sprout } from "lucide-react";
import movementImage from "../../../assets/img-contactus/movement.png";

const MovementCTA = () => {
  return (
    <section className="bg-white lg:py-10">
      <div className="container mx-auto sm:px-6 lg:px-12 xl:px-24">
        <div className="relative overflow-hidden rounded-[12px] pb-1 bg-[#f8f5ee] lg:pb-10">
          <div className="grid lg:grid-cols-2">
            {/* Left Column: Centered Text Content */}
            <div className="relative z-20 lg:-mr-12 p-8 py-14 md:p-12 lg:p-16 flex flex-col justify-center items-center text-center">
              {/* Leaf + Header label */}
              <div className="flex flex-col items-center gap-1.5 text-[#0B3B24] font-sans font-semibold tracking-widest text-[13px] uppercase mb-2">
                <Leaf className="w-6 h-5" />
                <span>JOIN THE HEALTHY LIVING MOVEMENT</span>
              </div>

              {/* Serif Title */}
              <h2 className="font-serif text-[#0B3B24] text-4xl sm:text-4xl lg:text-[48px] leading-tight font-semibold mt-[0.05rem] mb-0 sm:mb-6 lg:mb-[0.05rem]">
                Healthy Living
                <br /> Begins With Small <br /> Daily Choices
              </h2>

              {/* Leaf Divider/leaf between title & description */}
              <div className="relative flex items-center justify-center my-4 z-10">
                <div className="flex items-center justify-center w-full gap-1">
                  <div className="w-full border-t border-[#E5DFD5] flex "></div>

                  <Leaf className="h-5 w-35 text-[#0B3B24]" />

                  <div className="w-full border-t border-[#E5DFD5]"></div>
                </div>
              </div>

              <p className="text-gray-700 mb:text-lg leading-relaxed max-w-lg mb-10">
                We're building a community that believes
                <br /> wellness should be natural, practical, and <br />
                accessible for every family.
              </p>

              {/* DesktopFEATURES */}

              <div className="hidden lg:grid lg:grid-cols-2 gap-4 mb-6 -ml-22 -mr-14">
                <div>
                  <div className="flex flex-col items-center text-center ml-17">
                    <div className="w-17 h-17 rounded-full bg-[#eef0e3] flex items-center justify-center mb-4">
                      <Users size={34} className="text-[#345920]" />
                    </div>

                    <h3 className="font-serif text-[#1c3e1e] text-[22px] font-semibold mb-3">
                      A Community
                      <br />
                      That Cares
                    </h3>

                    <p className="text-gray-700 leading-relaxed">
                      Join thousands of families
                      <br /> choosing natural wellness
                      <br /> every day.
                    </p>
                  </div>
                </div>

                <div className="border-l border-[#ddd7c8] px-1 pl-14  ">
                  <div className="flex flex-col items-center text-center -ml-20 ">
                    <div className="w-17 h-17 rounded-full bg-[#eef0e3] flex items-center justify-center mb-4 ml-9">
                      <Sprout size={34} className="text-[#345920]" />
                    </div>

                    <h3 className="font-serif text-[#1c3e1e] text-[22px] font-semibold mb-3 -mr-12">
                      Inspired by Nature.
                      <br />
                      Driven by Purpose.
                    </h3>

                    <div className="max-w-[400px] mx-auto">
                      <p className="text-gray-700 leading-relaxed -mr-12">
                        Everything we do is rooted in
                        <br />
                        nature and guided by a simple
                        <br />
                        purpose — your well-being.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile FEATURES */}
              <div className="block lg:hidden space-y-4 mb-6">
                <div className="rounded-2xl border border-[#E8DFD0] bg-[#F9F5ED] p-5">
                  <div className="flex items-center gap-w4">
                    <div className="w-12 h-12 rounded-full bg-[#EEF0E3] flex items-center justify-center flex-shrink-0">
                      <Users size={20} className=" text-[#345920]" />
                    </div>

                    <div>
                      <h3 className="font-serif text-[#1C3E1E] text-[18px] font-semibold px-6">
                        A Community That Cares
                      </h3>

                      <p className="text-[15px] text-gray-600 mt-1 ml-6 text-justify">
                        Join thousands of families
                        <br /> choosing natural wellness <br />
                        every day.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-[350px] rounded-2xl border border-[#E8DFD0] bg-[#F9F5ED] p-4 ">
                  <div className="flex items-center gap-w4">
                    <div className="w-12 h-12 rounded-full bg-[#EEF0E3] flex items-center justify-center">
                      <Sprout size={20} className="text-[#345920]" />
                    </div>

                    <div>
                      <h3 className="font-serif text-[#1C3E1E] text-[18px] font-semibold px-7">
                        Inspired by Nature.
                        <br />
                        Driven by Purpose.
                      </h3>

                      <p className="text-[15px] text-gray-600 mt-1 ml-2 text-justify px-5">
                        Everything we do is rooted in
                        <br />
                        nature and guided by a simple
                        <br />
                        purpose — your well-being.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* DEsktop BUTTONS */}

              <div className="hidden lg:flex flex-col md:flex-row gap-5 py-4">
                <button
                  className="
                    bg-[#345920]
                    hover:bg-[#2b4c18]
                    text-white
                    px-10
                    h-16
                    rounded-xl
                    font-semibold
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    ml-50
                    whitespace-nowrap
                    w-fit
                    transition-colors
                  "
                >
                  <Send size={18} />
                  <span className="whitespace-nowrap">Join The Movement</span>
                </button>

                <button
                  className="
                  bg-white
                    border
                    border-[#345920]
                    text-[#345920]
                    px-10
                    h-16
                    rounded-xl
                    font-semibold
                    flex
                    items-center
                    justify-center
                    gap-2
                mr-16
                    whitespace-nowrap
                    w-fit
                    hover:bg-[#345920]
                    hover:text-white
                    transition-colors
                  "
                >
                  Explore Healthy Living Hub
                  <ArrowRight size={18} />
                </button>
              </div>
              {/* Mobile BUTTONS */}

              <div className="block lg:hidden flex flex-col gap-4 py-4 items-center">
                <button
                  className="
      w-full
      max-w-sm
      h-16
      rounded-xl
      bg-[#345920]
      hover:bg-[#2b4c18]
      text-white
      font-semibold
      flex
      items-center
      justify-center
      gap-2
      transition-colors
    "
                >
                  <Send size={18} />
                  Join The Movement
                </button>

                <button
                  className="
      w-[300px]
      max-w-sm
      h-16
      rounded-xl
      border
      border-[#345920]
      bg-white
      text-[#345920]
      font-semibold
      flex
      items-center
      justify-center
      gap-2
      hover:bg-[#345920]
      hover:text-white
      transition-colors
    "
                >
                  Explore Healthy Living Hub
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}

            <div className=" hidden lg:block relative bg-[#f8f5ee] ">
              <img
                src={movementImage}
                alt="Healthy Family"
                className="w-full h-auto"
                style={{
                  WebkitMaskImage: `
                    linear-gradient(to right, transparent 0%, black 20%, black 100%),
                    linear-gradient(to top, transparent 0%, black 18%, black 100%)
                    `,
                  WebkitMaskComposite: "intersect",
                  maskImage: `
                    linear-gradient(to right, transparent 0%, black 20%, black 100%),
                    linear-gradient(to top, transparent 0%, black 18%, black 100%)
                  `,
                  maskComposite: "intersect",
                }}
              />
              {/* Left fade */}
              <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-[#f8f5ee] via-[#FCF8F2]/40 to-transparent pointer-events-none"></div>
              {/* Bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f8f5ee] via-[#FCF8F2]/70 to-transparent pointer-events-none"></div>
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

export default MovementCTA;
