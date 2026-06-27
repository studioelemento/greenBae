import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  ChevronDown,
  ChevronRight,
  Send,
  Lock,
  Building,
  Clock,
  MapPin,
  Leaf,
} from "lucide-react";

// Leaf Divider (line - leaf - line)
const LeafDivider = () => (
  <div className="flex items-center justify-center gap-3 my-4">
    <div className="w-16 sm:w-24 h-[1px] bg-[#C5B395] opacity-60"></div>
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
    <div className="w-16 sm:w-24 h-[1px] bg-[#C5B395] opacity-60"></div>
  </div>
);

// Hands Holding Sprout Icon
// Hands Holding Sprout (Reference Style)
const HandsHoldingSprout = ({
  className = "w-12 h-12 text-[#3C6E37]",
}) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Stem */}
    <path d="M32 28V38" />

    {/* Left Leaf */}
    <path d="M32 28C24 28 20 20 20 13C27 13 32 18 32 28Z" />

    {/* Right Leaf */}
    <path d="M32 28C40 28 44 20 44 13C37 13 32 18 32 28Z" />

    {/* Left Hand */}
    <path d="M10 40
             C13 37 16 36 18 38
             L24 44
             C26 46 29 46 31 44" />

    <path d="M18 38
             L18 48
             C18 53 22 56 28 56" />

    {/* Right Hand */}
    <path d="M54 40
             C51 37 48 36 46 38
             L40 44
             C38 46 35 46 33 44" />

    <path d="M46 38
             L46 48
             C46 53 42 56 36 56" />
  </svg>
);
const ContactHero = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "message") {
      setFormData((prev) => ({ ...prev, [name]: value.slice(0, 1000) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting contact request:", formData);
  };

  return (
    <section className="bg-white py-2 md:py-16 lg:py-20 px-2 sm:px-4 lg:px-8 xl:px-12 max-w-[1440px] mx-auto">
      {/* Outer Card Container */}
      <div className="bg-[#FCF8F2] rounded-[12px] p-5 sm:p-8 md:p-12 lg:p-20 relative overflow-hidden ">
        {/* Main Grid Content */}
        <div className="grid lg:grid-cols-[1.35fr_0.95fr] gap-10 lg:gap-14 z-10 relative">
          {/* LEFT SIDE: GET IN TOUCH FORM */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Heading Group */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-1">
                  <Leaf className="w-6 h-6 text-[#0F4D1D]" />
                  <span className="text-[#0F4D1D] font-sans font-bold  text-s uppercase">
                    Get In Touch
                  </span>
                </div>
                <h2 className="font-serif text-[28px] px-6 lg:px-[4px] sm:text-4xl md:text-5xl text-[#0F4D1D] font-bold leading-tight mt-2">
                  We'd Love To Hear From You
                </h2>
                <LeafDivider />
                <p className="text-[#5C645A] px-8 font-sans text-sm sm:text-base max-w-md mx-auto leading-relaxed mt-2">
                  Fill out the form below and our team will get back to you as
                  soon as possible.
                </p>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="relative">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 text-[#3C6E37] w-5 h-5" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Full Name"
                      required
                      className="w-full h-14 md:h-16 rounded-xl border border-[#E5DFD3] bg-white pl-14 pr-5 text-gray-800 placeholder-[#8C8675] focus:outline-none focus:border-[#3C6E37] focus:ring-1 focus:ring-[#3C6E37] transition duration-200"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="relative">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-[#3C6E37] w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      required
                      className="w-full h-14 md:h-16 rounded-xl border border-[#E5DFD3] bg-white pl-14 pr-5 text-gray-800 placeholder-[#8C8675] focus:outline-none focus:border-[#3C6E37] focus:ring-1 focus:ring-[#3C6E37] transition duration-200"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="relative">
                  <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-[#3C6E37] w-5 h-5" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full h-14 md:h-16 rounded-xl border border-[#E5DFD3] bg-white pl-14 pr-5 text-gray-800 placeholder-[#8C8675] focus:outline-none focus:border-[#3C6E37] focus:ring-1 focus:ring-[#3C6E37] transition duration-200"
                  />
                </div>

                {/* Subject Select */}
                <div className="relative">
                  <MessageSquare className="absolute left-5 top-1/2 -translate-y-1/2 text-[#3C6E37] w-5 h-5" />
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full h-14 md:h-16 rounded-xl border border-[#E5DFD3] bg-white pl-14 pr-12 text-gray-800 placeholder-[#8C8675] focus:outline-none focus:border-[#3C6E37] focus:ring-1 focus:ring-[#3C6E37] appearance-none transition duration-200"
                  >
                    <option value="" disabled>
                      Subject
                    </option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Order Support">Order Support</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Partnership">Partnership</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-[#3C6E37] w-5 h-5 pointer-events-none" />
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <MessageSquare className="absolute left-5 top-5 text-[#3C6E37] w-5 h-5" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows={6}
                    className="w-full rounded-xl border border-[#E5DFD3] bg-white pt-4 pb-8 pl-14 pr-5 text-gray-800 placeholder-[#8C8675] focus:outline-none focus:border-[#3C6E37] focus:ring-1 focus:ring-[#3C6E37] resize-none transition duration-200"
                  />
                  <div className="absolute right-4 bottom-3 text-xs text-[#8C8675] font-sans">
                    {formData.message.length} / 1000
                  </div>
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  className="w-full h-14 md:h-16 bg-[#0E3E1E] hover:bg-[#072410] text-white font-sans font-semibold rounded-xl flex items-center justify-center gap-2.5 transition duration-300 shadow-sm cursor-pointer"
                >
                  <Send className="w-4 h-4 transform rotate-0" />
                  <span>Send Message</span>
                </button>

                {/* Security info */}
                <div className="flex items-start justify-center gap-2 text-[14px] sm:text-[16px] text-[#8C8675] pt-1 px-14">
                  <Lock className="w-3.5 h-3.5 shrink-0 mt-1" />
                  <span className="text-left ">
                    Your information is safe with us and will never be shared.
                  </span>
                </div>
              </form>
              <div className="block lg:hidden mt-6 h-px w-full bg-[#DDD7C8]/40"></div>
            </div>
            

            {/* MOBILE ONLY: CONTACT INFORMATION (placed below form) */}
            <div className="block lg:hidden mt-8">
              <div className="text-center mb-4">
                <span className="text-[#0F4D1D] font-sans font-bold text-[18px] uppercase block mb-1">
                  Contact Information
                </span>
                <LeafDivider />
              </div>

              {/* Mobile Info Cards container */}
              <div className="block lg:hiddenbg-[#F4ECE1] rounded-[24px] p-3 space-y-4">
                {/* Business Name */}
                <div className="flex items-center justify-between py-2 border-b border-[#DDD7C8]/40 last:border-0 last:pb-0">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#E5DFD3] flex items-center justify-center text-[#0E3E1E] shrink-0">
                      <Building className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-xs text-[#0F4D1D] uppercase tracking-wider">
                        Business Name
                      </h4>
                      <p className="text-sm text-[#2E352E] mt-0.5">
                        RV Brothers Business Consortium
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#8C8675] shrink-0" />
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between py-2 border-b border-[#DDD7C8]/40 last:border-0 last:pb-0">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#E5DFD3] flex items-center justify-center text-[#0E3E1E] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-xs text-[#0F4D1D] uppercase tracking-wider">
                        Phone
                      </h4>
                      <p className="text-sm text-[#2E352E]  mt-0.5">
                        +91 6235 333 800
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#8C8675] shrink-0" />
                </div>

                {/* Email */}
                <div className="flex items-center justify-between py-2 border-b border-[#DDD7C8]/40 last:border-0 last:pb-0">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#E5DFD3] flex items-center justify-center text-[#0E3E1E] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-xs text-[#0F4D1D] uppercase tracking-wider">
                        Email
                      </h4>
                      <p className="text-sm text-[#2E352E]  mt-0.5">
                        hello@greenbae.com
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#8C8675] shrink-0" />
                </div>

                {/* Business Hours */}
                <div className="flex items-center justify-between py-2 border-b border-[#DDD7C8]/40 last:border-0 last:pb-0">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#E5DFD3] flex items-center justify-center text-[#0E3E1E] shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-xs text-[#0F4D1D] uppercase tracking-wider">
                        Business Hours
                      </h4>
                      <p className="text-sm text-[#2E352E] mt-0.5">
                        Mon – Sat | 9:00 AM – 6:00 PM
                      </p>
                      <p className="text-sm text-[#2E352E] mt-0.5">
                        Sunday | Closed
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#8C8675] shrink-0" />
                </div>

                {/* Location */}
                <div className="flex items-center justify-between py-2 last:border-0">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#E5DFD3] flex items-center justify-center text-[#0E3E1E] shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-xs text-[#0F4D1D] uppercase tracking-wider">
                        Location
                      </h4>
                      <p className="text-sm text-[#2E352E] mt-0.5">
                        Kerala, India
                      </p>
                      
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#8C8675] shrink-0" />
                </div>
              </div>

              {/* Mobile Respond Banner */}
              <div className="mt-4 bg-[#E2EADF] rounded-2xl p-5 flex items-start gap-4">
                <HandsHoldingSprout className="w-10 h-10 text-[#3C6E37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans font-bold text-sm text-[#0F4D1D] leading-snug">
                    We typically respond within{" "}
                    <span className="font-extrabold">24–48 hours</span>.
                  </h4>
                  <p className="text-xs text-[#5C645A] mt-1">
                    Thank you for being part of the Greenbae family.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: DESKTOP ONLY CONTACT INFORMATION & RESPOND BANNER */}
          <div className="hidden lg:flex flex-col gap-6 p-3">
            {/* Contact Info Card */}
            <div className="bg-[#F4ECE1] rounded-[24px] p-8 flex flex-col">
              <h3 className="text-center font-sans font-bold text-[#0F4D1D] text-lg tracking-[0.05em] uppercase mt-6 mb-[0.05em]">
                Contact Information
              </h3>
              <LeafDivider />

              <div className="mt-6 space-y-6">
                {/* Business Name */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-[#E5DFD3] flex items-center justify-center text-[#0E3E1E] shrink-0">
                    <Building className="w-6 h-6" />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-sans font-bold text-sm text-[#0F4D1D] tracking-wide uppercase">
                      Business Name
                    </h4>
                    <p className="text-base text-[#2E352E]  mt-1">
                      RV Brothers Business Consortium
                    </p>
                  </div>
                </div>

                <div className="h-[1px] bg-[#DDD7C8]/60 w-full" />

                {/* Phone */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-[#E5DFD3] flex items-center justify-center text-[#0E3E1E] shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-sans font-bold text-sm text-[#0F4D1D] tracking-wide uppercase">
                      Phone
                    </h4>
                    <p className="text-base text-[#2E352E] mt-1">
                      +91 6235 333 800
                    </p>
                  </div>
                </div>

                <div className="h-[1px] bg-[#DDD7C8]/60 w-full" />

                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-[#E5DFD3] flex items-center justify-center text-[#0E3E1E] shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-sans font-bold text-sm text-[#0F4D1D] tracking-wide uppercase">
                      Email
                    </h4>
                    <p className="text-base text-[#2E352E] mt-1">
                      hello@greenbae.com
                    </p>
                  </div>
                </div>

                <div className="h-[1px] bg-[#DDD7C8]/60 w-full" />

                {/* Business Hours */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-[#E5DFD3] flex items-center justify-center text-[#0E3E1E] shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-sans font-bold text-sm text-[#0F4D1D] tracking-wide uppercase">
                      Business Hours
                    </h4>
                    <p className="text-base text-[#2E352E] mt-1">
                      Mon – Sat | 9:00 AM – 6:00 PM
                    </p>
                    <p className="text-sm text-[#5C645A] mt-0.5">
                      Sunday | Closed
                    </p>
                  </div>
                </div>

                <div className="h-[1px] bg-[#DDD7C8]/60 w-full" />

                {/* Location */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-[#E5DFD3] flex items-center justify-center text-[#0E3E1E] shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-sans font-bold text-sm text-[#0F4D1D] tracking-wide uppercase">
                      Location
                    </h4>
                    <p className="text-base text-[#2E352E] mt-1">
                      Kerala, India
                    </p>
                    <p className="text-sm text-[#5C645A] mt-0.5">
                      Proudly rooted in nature.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Respond Banner */}
            <div className="bg-[#E2EADF] rounded-[24px] p-8 flex items-center gap-6">
              <HandsHoldingSprout className="w-14 h-14 text-[#3C6E37] shrink-0" />
              <div>
                <h4 className="font-sans font-bold text-lg text-[#0F4D1D] leading-snug">
                  We typically respond <br /> within{" "}
                  <span className="font-extrabold">24–48 hours</span>.
                </h4>
                <p className="text-sm text-[#5C645A] mt-2 mb-6">
                  Thank you for being part of <br />
                  the Greenbae family.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Left Leaves Overlay */}
        <img
          src="https://static.vecteezy.com/system/resources/previews/032/621/185/non_2x/fresh-tropical-leaf-corner-border-png.png"
          alt="decorative leaves"
          className="hidden lg:block absolute -bottom-0 -left-10 rotate-[1800deg] scale-x-[1] w-48 md:w-60 lg:w-72 pointer-events-none select-none z-0 opacity-80"
        />
      </div>
    </section>
  );
};

export default ContactHero;
