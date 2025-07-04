import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

import HeroSection from './component/hero';
import Features from './component/features';
import MobileappSection from './component/moblie';
import Services from './component/sevices';
import Technologiespage from './component/technology';
import Footer from './component/footer';
import ContactSection from './component/contact';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);

  return (
    <>
      <HeroSection />
      <Features />
      <MobileappSection />
      <Services />
      <Technologiespage />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
