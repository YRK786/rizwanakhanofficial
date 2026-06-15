import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Message from './components/Message';
import VisionMission from './components/VisionMission';
import Initiatives from './components/Initiatives';
import Achievements from './components/Achievements';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { scrollToSection } from './utils/scrollToSection';

const App = () => {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      scrollToSection(hash);
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  return (
    <div className="overflow-x-hidden scroll-smooth antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Message />
        <VisionMission />
        <Initiatives />
        <Achievements />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
