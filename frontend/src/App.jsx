import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/home/Home';
import OurStory from './pages/ourstory/OurStory';
import Products from './pages/products/Products';
import SingleProduct from './pages/products/components/single product';
import ContactUs from './pages/contactus/ContactUs';
import ProductsPage from './pages/products/ProductsPage';
import './App.css'
import HealthyLivingPage from './pages/healthy-living/HealthyLivingPage';
import SingleArticle from './pages/article/SingleArticle';
import OurMission from './pages/ourMission/OurMission';
import { FaWhatsapp } from 'react-icons/fa';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="our-story" element={<OurStory />} />
          <Route path="products" element={<Products />} />
          <Route path="products/page" element={<ProductsPage />} />
          <Route path="products/single" element={<SingleProduct />} />
          <Route path="healthy-living" element={<HealthyLivingPage />} />
          <Route path="article/:id" element={<SingleArticle />} />
          <Route path="our-mission" element={<OurMission />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
      </Routes>

      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/918921767274"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-[#345920] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={32} />
      </a>
    </Router>
  );
}

export default App;
