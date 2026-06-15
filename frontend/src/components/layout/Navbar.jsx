import { Link } from 'react-router-dom';
import { Search, User, ShoppingBag, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex flex-col items-center">
              <span className="font-serif text-3xl font-bold text-primary-800 tracking-tight">Greenbae</span>
              <span className="text-[0.6rem] uppercase tracking-[0.2em] text-primary-600 font-semibold mt-0.5">Natural & Friend</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-primary-600 font-medium text-sm border-b-2 border-primary-500 pb-1">Home</Link>
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
            <button className="hover:text-primary-700 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="hover:text-primary-700 transition-colors hidden sm:block">
              <User className="w-5 h-5" />
            </button>
            <button className="hover:text-primary-700 transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 bg-primary-600 text-white text-[0.65rem] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <button className="md:hidden hover:text-primary-700 transition-colors ml-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
