import React, { useState } from 'react';
import { 
  Leaf, FlaskConical, ShieldCheck, Sprout, Award, Users, 
  Globe, BadgeCheck, Truck, Headset, ChevronDown, ChevronUp, ArrowRight
} from 'lucide-react';

const InstagramIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const YoutubeIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const PinterestIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="12" x2="12" y2="22"></line>
    <path d="M12 22s-2-3-2-6 2-5 2-5 2 2 2 5-2 6-2 6z"></path>
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M14.5 9.5a2.5 2.5 0 0 0-5 0c0 1.5 1 2.5 1 2.5s-1 1.5-1 3.5"></path>
  </svg>
);

const WhatsappIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const FeatureItem = ({ icon: Icon, title, subtitle, isLast }) => (
  <div className={`flex flex-col items-center text-center px-4 md:px-8 ${!isLast ? 'border-r border-gray-200' : ''} flex-1 min-w-[120px] mb-4 md:mb-0`}>
    <div className="w-12 h-12 rounded-full border border-primary-700 text-primary-700 flex items-center justify-center mb-3 bg-[#fdfdf9]">
      <Icon size={24} strokeWidth={1.5} />
    </div>
    <h4 className="font-semibold text-gray-800 text-xs md:text-sm">{title}</h4>
    <p className="text-[10px] md:text-xs text-gray-600">{subtitle}</p>
  </div>
);

const AccordionLinkList = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 md:border-none py-3 md:py-0">
      <button 
        className="flex justify-between items-center w-full md:cursor-auto"
        onClick={() => setIsOpen(!isOpen)}
        disabled={window.innerWidth >= 768}
      >
        <h4 className="font-bold text-gray-900 uppercase text-xs md:text-sm tracking-wider whitespace-nowrap">{title}</h4>
        <div className="md:hidden text-gray-500">
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </button>
      <ul className={`mt-4 space-y-3 md:space-y-4 text-xs md:text-sm text-gray-700 ${isOpen ? 'block' : 'hidden md:block'}`}>
        {links.map((link, idx) => (
          <li key={idx} className="whitespace-nowrap"><a href="#" className="hover:text-primary-600 transition-colors font-medium">{link}</a></li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const topFeatures = [
    { icon: Leaf, title: "100%", subtitle: "Natural Ingredients" },
    { icon: FlaskConical, title: "No Added", subtitle: "Preservatives" },
    { icon: ShieldCheck, title: "Tested", subtitle: "Products" },
    { icon: Sprout, title: "10+ Years", subtitle: "Of Research" },
    { icon: Award, title: "Trademark", subtitle: "Registered Brand" },
    { icon: Users, title: "Real Customer", subtitle: "Experiences" },
  ];

  const aboutLinks = ["Our Story", "Our Mission", "Healthy Living Movement", "Neture & Research", "Careers", "Sustainability", "Media & Press"];
  const wellnessLinks = ["Wellness Journal", "Healthy Living Tips", "Nutrition Basics", "Ingredients Knowledge", "Lifestyle & Habits", "Wellness Resources"];
  const productLinks = ["Veggie Vitals", "Nutri Mix", "Single Ingredient Powders", "Beetroot Powder", "Raw Banana Powder", "Product Catalog", "All Products"];
  const supportLinks = ["Contact Us", "FAQs", "Shipping & Delivery", "Returns & Refunds", "Track Your Order", "Privacy Policy", "Terms & Conditions"];

  return (
    <footer className="bg-[#fcfcf7] border-t border-gray-200 pt-10 font-sans relative overflow-hidden">
      
      {/* Mountain Illustration Background Placeholder */}
      <div className="absolute bottom-[100px] left-0 w-full h-48 opacity-[0.15] pointer-events-none" style={{
        background: 'radial-gradient(ellipse at bottom left, #4d8745 0%, transparent 60%), radial-gradient(ellipse at bottom, #2b5229 0%, transparent 50%)',
        clipPath: 'polygon(0 40%, 15% 20%, 35% 50%, 60% 10%, 80% 40%, 100% 30%, 100% 100%, 0 100%)'
      }}></div>
      
      {/* Foreground Leaves Decoration */}
      <div className="absolute bottom-[90px] left-10 md:left-24 lg:left-32 w-64 h-32 opacity-80 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 100% 100%, transparent 40%, #61a355 41%, #61a355 45%, transparent 46%)'
      }}></div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1440px] relative z-10">
        
        {/* Top Features Row */}
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between pb-10 border-b border-gray-200">
          {topFeatures.map((feature, idx) => (
            <FeatureItem key={idx} {...feature} isLast={idx === topFeatures.length - 1} />
          ))}
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 pb-16">
          
          {/* Left Column - Brand & Mission */}
          <div className="md:col-span-4 lg:col-span-3 flex flex-col relative pr-4 lg:pr-6">
            <div className="mb-6 flex items-center gap-2">
              <Leaf className="text-[#345920]" size={36} fill="#4d8745" />
              <div className="flex flex-col">
                <span className="font-serif text-[32px] font-bold text-[#1c3e1e] tracking-tight leading-none">Greenbae<sup className="text-xs">®</sup></span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#345920] font-bold mt-1.5">Natural & Friend</span>
              </div>
            </div>
            
            <p className="text-sm text-gray-800 mb-6 leading-relaxed font-medium pr-2">
              We believe healthy living begins with small daily choices. Our nature-inspired wellness solutions are crafted to support every family, every day.
            </p>
            
            <div className="w-8 h-[2px] bg-gray-300 mb-8"></div>

            <div className="space-y-7 relative z-10">
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-[#f3f6ec] border border-[#e2ebd7] text-[#345920] flex items-center justify-center">
                  <Sprout size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 text-sm">Our Mission</h5>
                  <p className="text-xs text-gray-700 mt-1 font-medium leading-snug">To help families embrace better wellness through nature-inspired nutrition.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-[#f3f6ec] border border-[#e2ebd7] text-[#345920] flex items-center justify-center">
                  <BadgeCheck size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 text-sm">Our Promise</h5>
                  <p className="text-xs text-gray-700 mt-1 font-medium leading-snug">Clean ingredients. Honest formulas.<br/>Real results.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-[#f3f6ec] border border-[#e2ebd7] text-[#345920] flex items-center justify-center">
                  <Globe size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 text-sm">Our Purpose</h5>
                  <p className="text-xs text-gray-700 mt-1 font-medium leading-snug">Building a healthier tomorrow,<br/>together with families like yours.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Center Columns - Links */}
          <div className="md:col-span-5 lg:col-span-6 flex flex-col md:flex-row justify-between gap-x-2 lg:gap-x-6">
            <AccordionLinkList title="About Greenbae" links={aboutLinks} />
            <AccordionLinkList title="Wellness" links={wellnessLinks} />
            <AccordionLinkList title="Products" links={productLinks} />
            <AccordionLinkList title="Support" links={supportLinks} />
          </div>

          {/* Right Column - Connect & Card */}
          <div className="md:col-span-3 lg:col-span-3 flex flex-col pl-0 lg:pl-4">
            <h4 className="font-bold text-gray-900 uppercase text-xs md:text-sm tracking-wider mb-4">Stay Connected</h4>
            <p className="text-xs text-gray-700 mb-5 font-medium leading-relaxed">Join our community and get wellness tips, exclusive offers and updates.</p>
            
            <form className="mb-8 flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full px-4 py-2.5 text-xs border border-gray-300 rounded focus:outline-none focus:border-[#345920] bg-white font-medium text-gray-600" 
              />
              <button 
                type="submit" 
                className="w-full bg-[#345920] text-white font-bold py-2.5 rounded hover:bg-[#2b4c18] transition-colors text-xs tracking-wide"
              >
                Subscribe
              </button>
            </form>

            <h4 className="font-bold text-gray-900 uppercase text-xs md:text-sm tracking-wider mb-5">Follow Us</h4>
            <div className="flex gap-3 mb-10">
              {[InstagramIcon, FacebookIcon, YoutubeIcon, PinterestIcon, WhatsappIcon].map((Icon, idx) => (
                <a key={idx} href="#" className="w-[34px] h-[34px] rounded-full border border-gray-300 bg-transparent flex items-center justify-center text-gray-800 hover:text-[#345920] hover:border-[#345920] transition-colors">
                  <Icon size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>

            {/* Movement Card */}
            <div className="bg-[#f0f4ea] p-6 rounded-xl border border-[#e6eedd]">
              <div className="flex gap-3 mb-2 items-start">
                <div className="w-9 h-9 mt-1 rounded-full bg-transparent border border-[#345920] text-[#345920] flex items-center justify-center shrink-0">
                  <Users size={16} />
                </div>
                <h5 className="font-bold text-gray-900 text-[13px] leading-tight">Join The<br/>Healthy Living Movement</h5>
              </div>
              <p className="text-[11px] text-gray-700 mb-5 font-medium leading-relaxed">
                Together, we can build a healthier, happier and more natural tomorrow.
              </p>
              <button className="bg-[#345920] text-white text-xs font-bold py-2.5 px-5 rounded hover:bg-[#2b4c18] transition-colors flex items-center gap-2 w-max">
                Join Our Community <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar & Payments */}
      <div className="bg-white border-t border-gray-200 relative z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px] py-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full md:w-auto">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-[#4d8745] shrink-0" size={28} strokeWidth={1.5} />
              <div>
                <p className="font-bold text-gray-900 text-sm">Secure Payments</p>
                <p className="text-[11px] text-gray-600 font-medium">100% safe & trusted checkout</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="text-[#4d8745] shrink-0" size={28} strokeWidth={1.5} />
              <div>
                <p className="font-bold text-gray-900 text-sm">Pan India Delivery</p>
                <p className="text-[11px] text-gray-600 font-medium">Fast & reliable shipping</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Headset className="text-[#4d8745] shrink-0" size={28} strokeWidth={1.5} />
              <div>
                <p className="font-bold text-gray-900 text-sm">Customer Support</p>
                <p className="text-[11px] text-gray-600 font-medium">We're here to help you</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto mt-4 md:mt-0">
            <span className="text-[11px] font-bold text-gray-800 uppercase tracking-widest">We Accept</span>
            <div className="flex gap-2">
              <div className="w-14 h-9 bg-white border border-gray-200 rounded flex items-center justify-center text-xs font-bold text-blue-900 shadow-sm">VISA</div>
              <div className="w-14 h-9 bg-white border border-gray-200 rounded flex items-center justify-center shadow-sm relative overflow-hidden">
                <div className="w-4 h-4 rounded-full bg-red-500 absolute left-2 opacity-80 mix-blend-multiply"></div>
                <div className="w-4 h-4 rounded-full bg-yellow-500 absolute right-2 opacity-80 mix-blend-multiply"></div>
              </div>
              <div className="w-14 h-9 bg-white border border-gray-200 rounded flex items-center justify-center text-[10px] font-extrabold text-blue-800 italic shadow-sm">RuPay</div>
              <div className="w-14 h-9 bg-white border border-gray-200 rounded flex items-center justify-center text-[11px] font-extrabold text-gray-600 italic shadow-sm">UPI</div>
              <div className="w-14 h-9 bg-white border border-gray-200 rounded flex items-center justify-center text-[9px] font-bold text-center leading-[1.1] text-gray-800 shadow-sm">NET<br/>BANKING</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#1c3e1e] py-5 relative z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#d1e6d3]">
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <p className="font-medium whitespace-nowrap">© 2025 Greenbae. All rights reserved.</p>
            <div className="hidden md:block w-px h-3 bg-[#4d8745]"></div>
            
            <div className="flex flex-wrap justify-center items-center font-medium">
              <a href="#" className="hover:text-white transition-colors px-3 border-r border-[#4d8745]">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors px-3 border-r border-[#4d8745]">Terms & Conditions</a>
              <a href="#" className="hover:text-white transition-colors px-3 border-r border-[#4d8745]">Refund Policy</a>
              <a href="#" className="hover:text-white transition-colors px-3 border-r md:border-none border-[#4d8745]">Shipping Policy</a>
              <a href="#" className="hover:text-white transition-colors px-3 hidden md:block border-l border-[#4d8745]">Disclaimer</a>
              <a href="#" className="hover:text-white transition-colors px-3 md:hidden">Disclaimer</a>
            </div>
          </div>
          
          <div className="flex items-center gap-2 font-medium text-[#d1e6d3] mt-2 md:mt-0">
            <Leaf size={14} /> Made with love for healthier living.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
