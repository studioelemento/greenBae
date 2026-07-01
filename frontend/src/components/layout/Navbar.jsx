import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingBag, Menu, X, Handbag } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Our Story', path: '/our-story' },
    { label: 'Products', path: '/products' },
    { label: 'Wellness Journal', path: '/wellness-journal' },
    { label: 'Healthy Living Movement', path: '/healthy-living' },
    { label: 'Contact Us', path: '/contact-us' }
  ];

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex flex-col items-center" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="font-serif text-3xl font-bold text-primary-800 tracking-tight">Greenbae</span>
              <span className="text-[0.6rem] uppercase tracking-[0.2em] text-primary-600 font-semibold mt-0.5">Natural & Friend</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-primary-600 font-semibold text-sm border-b-2 border-primary-500 pb-1">Home</Link>
            <Link to="/our-story" className="text-gray-600 hover:text-primary-700 font-medium text-sm transition-colors">Our Story</Link>
            <Link to="/products" className="text-gray-600 hover:text-primary-700 font-medium text-sm transition-colors flex items-center gap-1">
              Products
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </Link>
            <Link to="/wellness-journal" className="text-gray-600 hover:text-primary-700 font-medium text-sm transition-colors">Wellness Journal</Link>
            <Link to="/healthy-living" className="text-gray-600 hover:text-primary-700 font-medium text-sm transition-colors">Healthy Living Movement</Link>
            <Link to="/contact-us" className="text-gray-600 hover:text-primary-700 font-medium text-sm transition-colors">Contact Us</Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-5 text-gray-700">
            <Search/>
            <Handbag/>
            {/* Hamburger Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden hover:text-primary-700 transition-colors ml-2 focus:outline-none relative z-50"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Navigation Menu */}
      <div className={`md:hidden absolute w-full left-0 top-[100%] bg-white border-t border-gray-100 transition-all duration-300 ease-in-out origin-top shadow-lg overflow-hidden ${
        isMobileMenuOpen ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
      }`}>
        <nav className="flex flex-col py-4 px-6 space-y-4 shadow-[0_10px_20px_rgba(0,0,0,0.05)]">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-700 hover:text-primary-700 font-medium text-sm py-2 border-b border-gray-50 last:border-0 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          {/* Mobile Profile Action */}
          <Link
            to="/profile"
            onClick={() => setIsMobileMenuOpen(false)}
            className="sm:hidden text-gray-700 hover:text-primary-700 font-medium text-sm py-2 flex items-center gap-2 transition-colors border-t border-gray-50 pt-3"
          >
            <User className="w-4 h-4" />
            My Account
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
