import React from "react";
import {
  Leaf,
  ArrowRight,
  Send,
  Users,
  Sprout,
} from "lucide-react";
import movementImage from "../../../assets/img-contactus/movement.png";

const MovementCTA = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-24">

        <div className="relative overflow-hidden rounded-[32px] bg-[#f8f5ee]">

          <div className="grid lg:grid-cols-2">

            {/* LEFT CONTENT */}

            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">

              <div className="inline-flex items-center gap-2 text-[#4d8745] font-bold uppercase text-xs tracking-widest mb-6">
                <Leaf size={16} />
                Join The Healthy Living Movement
              </div>

              <h2 className="font-serif text-[#1c3e1e] text-[42px] md:text-[56px] lg:text-[72px] leading-[1.05] font-bold">
                Healthy Living
                <br />
                Begins With Small
                <br />
                Daily Choices
              </h2>

              <div className="w-24 h-[2px] bg-[#d9c59d] my-8"></div>

              <p className="text-gray-700 text-lg leading-relaxed max-w-lg mb-10">
                We're building a community that believes wellness should
                be natural, practical, and accessible for every family.
              </p>

              {/* FEATURES */}

              <div className="grid md:grid-cols-2 gap-8 mb-10">

                <div>
                  <div className="w-20 h-20 rounded-full bg-[#eef0e3] flex items-center justify-center mb-4">
                    <Users
                      size={34}
                      className="text-[#345920]"
                    />
                  </div>

                  <h3 className="font-serif text-[#1c3e1e] text-3xl font-semibold mb-3">
                    A Community
                    <br />
                    That Cares
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    Join thousands of families choosing natural wellness
                    every day.
                  </p>
                </div>

                <div className="border-l border-[#ddd7c8] pl-8">
                  <div className="w-20 h-20 rounded-full bg-[#eef0e3] flex items-center justify-center mb-4">
                    <Sprout
                      size={34}
                      className="text-[#345920]"
                    />
                  </div>

                  <h3 className="font-serif text-[#1c3e1e] text-3xl font-semibold mb-3">
                    Inspired by Nature.
                    <br />
                    Driven by Purpose.
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    Everything we do is rooted in nature and guided by a
                    simple purpose — your well-being.
                  </p>
                </div>

              </div>

              {/* BUTTONS */}

              <div className="flex flex-col md:flex-row gap-4">

                <button
                  className="
                    bg-[#345920]
                    hover:bg-[#2b4c18]
                    text-white
                    px-8
                    py-4
                    rounded-xl
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
                    border
                    border-[#345920]
                    text-[#345920]
                    px-8
                    py-4
                    rounded-xl
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

            <div className="hidden lg:block">

              <img
                src={movementImage}
                alt="Healthy Family"
                className="grid lg:grid-cols-[55%_45%]"
              />

              {/* left fade */}
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f8f5ee] to-transparent"></div>

              {/* bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f8f5ee] via-[#f8f5ee]/80 to-transparent"></div>

            </div>

          </div>

          {/* Decorative bottom landscape */}

          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#ece6d8] to-transparent opacity-60"></div>

        </div>

      </div>
    </section>
  );
};

export default MovementCTA;