import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, Menu, X, Handbag } from 'lucide-react';
import logo from '../../assets/logo-greenBae/logoWhite.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Our Story', path: '/our-story' },
    { label: 'Our Mission', path: '/our-mission' },
    { label: 'Healthy Living Hub', path: '/healthy-living' },
    { label: 'Contact Us', path: '/contact-us' }
  ];

  return (
    <header className="bg-[#345920] sticky top-0 z-50 border-b border-gray-100/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
              <img src={logo} alt="Greenbae Logo" className="h-16 md:h-20 w-auto object-contain py-2" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link, idx) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={idx}
                  to={link.path}
                  className={
                    isActive
                      ? "text-white font-semibold text-sm border-b-2 border-white pb-1 flex items-center gap-1"
                      : "text-white/90 hover:text-white font-medium text-sm transition-colors flex items-center gap-1"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Icons */}
          <div className="text-white flex items-center space-x-5 text-gray-700">
            {/* <Search/>
             */}
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

      {/* Mobile Menu Overlay Backdrop */}
      <div
        className={`md:hidden fixed inset-0 top-20 bg-black transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-30 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Dropdown Navigation Menu */}
      <div className={`md:hidden absolute w-full left-0 top-[100%] bg-white border-t border-green-900 transition-all duration-300 ease-in-out origin-top shadow-lg overflow-hidden z-50 ${isMobileMenuOpen ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}>
        <nav className="flex flex-col py-4 px-6 space-y-4 shadow-[0_10px_20px_rgba(0,0,0,0.05)]">
          {navLinks.map((link, idx) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={idx}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm py-2 border-b border-gray-50 last:border-0 transition-colors ${isActive
                  ? 'text-primary-600 font-semibold'
                  : 'text-gray-700 hover:text-primary-700 font-medium'
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
          {/* Mobile Profile Action */}
          {/* <Link
            to="/profile"
            onClick={() => setIsMobileMenuOpen(false)}
            className="sm:hidden text-gray-700 hover:text-primary-700 font-medium text-sm py-2 flex items-center gap-2 transition-colors border-t border-gray-50 pt-3"
          >
            <User className="w-4 h-4" />
            My Account
          </Link> */}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
