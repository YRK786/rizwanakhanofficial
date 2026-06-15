import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import { scrollToSection } from '../utils/scrollToSection';

const WHATSAPP_NUMBER = '919876543210';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Rizwana%20Khan%2C%20I%20would%20like%20to%20get%20in%20touch.`;

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Vision', id: 'vision' },
  { label: 'Initiatives', id: 'initiatives' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  const linkClass = scrolled
    ? 'text-gray-700 hover:text-emerald-600'
    : 'text-white/90 hover:text-white';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-emerald-900/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="relative mx-auto flex max-w-7xl items-center px-4 py-4 sm:px-6 lg:px-8">
        {/* Left — Logo */}
        <div className="flex flex-1 items-center justify-start">
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="group flex items-center gap-2"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-lg font-bold text-white shadow-md transition-transform group-hover:scale-105">
              RK
            </span>
            <div className="hidden text-left sm:block">
              <p
                className={`text-sm font-bold tracking-wide transition-colors ${
                  scrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                Rizwana Khan
              </p>
              <p
                className={`text-xs transition-colors ${
                  scrolled ? 'text-emerald-600' : 'text-emerald-200'
                }`}
              >
                Social Leader
              </p>
            </div>
          </button>
        </div>

        {/* Center — Menu */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => handleNavClick(link.id)}
                className={`rounded-lg px-2.5 py-2 text-sm font-medium transition-colors xl:px-3 ${linkClass}`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right — WhatsApp + Mobile toggle */}
        <div className="flex flex-1 items-center justify-end gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#20BD5A] hover:shadow-lg sm:inline-flex"
          >
            <FaWhatsapp className="h-5 w-5" />
            Get in Touch
          </a>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`rounded-lg p-2 transition-colors lg:hidden ${
              scrolled
                ? 'text-gray-800 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-gray-100 bg-white lg:hidden"
          >
            <ul className="flex flex-col px-4 py-4">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.id)}
                    className="block w-full rounded-lg px-4 py-3 text-left text-gray-700 transition-colors hover:bg-emerald-50 hover:text-emerald-600"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
              <li className="mt-2 px-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#20BD5A]"
                >
                  <FaWhatsapp className="h-5 w-5" />
                  Get in Touch on WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
