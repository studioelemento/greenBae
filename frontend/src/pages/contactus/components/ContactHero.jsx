import React from "react";
import {
  Leaf,
  User,
  Mail,
  Phone,
  MessageCircle,
  Clock3,
  MapPin,
  Building2,
  Send,
} from "lucide-react";

const ContactHero = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-24">

        <div className="bg-[#f8f5ee] rounded-[32px] p-5 md:p-8 lg:p-12">

          <div className="grid lg:grid-cols-[1.4fr_0.9fr] gap-10">

            {/* LEFT SIDE */}

            <div>

              <div className="text-center mb-10">

                <div className="inline-flex items-center gap-2 bg-[#f4f7f0] border border-[#e2ead9] text-[#4d8745] font-bold tracking-widest text-[10px] sm:text-xs py-1.5 px-3 rounded uppercase mb-5">
                  <Leaf size={12} />
                  Get In Touch
                </div>

                <h2 className="font-serif text-[34px] sm:text-[44px] lg:text-[56px] text-[#1c3e1e] font-bold leading-tight">
                  We'd Love To Hear
                  <br />
                  From You
                </h2>

                <div className="w-16 h-[2px] bg-[#4d8745] mx-auto mt-6 mb-6"></div>

                <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
                  Fill out the form below and our team will get back to you
                  as soon as possible.
                </p>
              </div>

              <form className="space-y-5">

                <div className="grid md:grid-cols-2 gap-5">

                  <div className="relative">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 text-[#345920] w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full h-16 rounded-xl border border-[#ddd7c8] bg-white pl-14 pr-4 outline-none"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-[#345920] w-5 h-5" />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full h-16 rounded-xl border border-[#ddd7c8] bg-white pl-14 pr-4 outline-none"
                    />
                  </div>

                </div>

                <div className="relative">
                  <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-[#345920] w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full h-16 rounded-xl border border-[#ddd7c8] bg-white pl-14 pr-4 outline-none"
                  />
                </div>

                <div className="relative">
                  <MessageCircle className="absolute left-5 top-1/2 -translate-y-1/2 text-[#345920] w-5 h-5" />
                    <input 
                        type="text"
                        placeholder="Subject"
                        className="w-full h-16 rounded-xl border border-[#ddd7c8] bg-white pl-14 pr-4 outline-none"
                    />
                </div>

                <div className="relative">

                  <MessageCircle className="absolute left-5 top-6 text-[#345920] w-5 h-5" />

                  <textarea
                    rows={7}
                    placeholder="Your Message"
                    className="w-full rounded-xl border border-[#ddd7c8] bg-white pt-5 pl-14 pr-4 outline-none resize-none"
                  />
                </div>

                <button
                  className="
                    w-full
                    bg-[#345920]
                    hover:bg-[#2b4c18]
                    text-white
                    py-4
                    rounded-xl
                    font-bold
                    flex
                    justify-center
                    items-center
                    gap-2
                    transition-colors
                  "
                >
                  <Send size={18} />
                  Send Message
                </button>

                <p className="text-center text-sm text-gray-500">
                  Your information is safe with us and will never be shared.
                </p>

              </form>

            </div>

            {/* RIGHT SIDE */}

            <div>

              <div className="bg-[#f4f1e8] rounded-[24px] p-6 md:p-8">

                <h3 className="text-center font-bold text-[#1c3e1e] text-xl mb-8">
                  CONTACT INFORMATION
                </h3>

                <div className="space-y-6">

                  <InfoCard
                    icon={<Building2 />}
                    title="Business Name"
                    text="RV Brothers Business Consortium"
                  />

                  <InfoCard
                    icon={<Phone />}
                    title="Phone"
                    text="+91 6235 333 800"
                  />

                  <InfoCard
                    icon={<Mail />}
                    title="Email"
                    text="hello@greenbae.com"
                  />

                  <InfoCard
                    icon={<Clock3 />}
                    title="Business Hours"
                    text="Mon - Sat | 9 AM - 6 PM"
                  />

                  <InfoCard
                    icon={<MapPin />}
                    title="Location"
                    text="Kerala, India"
                  />

                </div>

                <div className="mt-8 bg-[#e9e5d8] rounded-2xl p-5">

                  <div className="flex gap-4 items-center">

                    <Leaf className="text-[#345920]" />

                    <div>
                      <h4 className="font-semibold text-[#1c3e1e]">
                        We typically respond within 24–48 hours.
                      </h4>

                      <p className="text-sm text-gray-600">
                        Thank you for being part of the Greenbae family.
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

const InfoCard = ({ icon, title, text }) => {
  return (
    <div className="flex gap-4 border-b border-[#ddd7c8] pb-5">

      <div className="w-14 h-14 rounded-full bg-[#e9e5d8] flex items-center justify-center text-[#345920] shrink-0">
        {icon}
      </div>

      <div>
        <h4 className="font-semibold text-[#1c3e1e] mb-1">
          {title}
        </h4>

        <p className="text-gray-700 text-sm">
          {text}
        </p>
      </div>

    </div>
  );
};

export default ContactHero;