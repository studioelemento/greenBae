import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/home/Home';
import OurStory from './pages/ourstory/OurStory';
import Products from './pages/Products/Products';
import WellnessJournal from './pages/WellnessJournal';
import HealthyLiving from './pages/HealthyLiving';
import ContactUs from './pages/contactus/ContactUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="our-story" element={<OurStory />} />
          <Route path="products" element={<Products />} />
          <Route path="wellness-journal" element={<WellnessJournal />} />
          <Route path="healthy-living" element={<HealthyLiving />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
