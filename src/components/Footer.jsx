import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { HiOutlineHeart } from 'react-icons/hi';
import { scrollToSection } from '../utils/scrollToSection';
import ScrollAnimate from './ScrollAnimate';

const quickLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Vision', id: 'vision' },
  { label: 'Initiatives', id: 'initiatives' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Contact', id: 'contact' },
];

const socialLinks = [
  { icon: FaFacebookF, label: 'Facebook' },
  { icon: FaTwitter, label: 'Twitter' },
  { icon: FaInstagram, label: 'Instagram' },
  { icon: FaLinkedinIn, label: 'LinkedIn' },
  { icon: FaYoutube, label: 'YouTube' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollAnimate animation="fade-up">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-lg font-bold text-white">
                RK
              </span>
              <div>
                <p className="text-lg font-bold text-white">Rizwana Khan</p>
                <p className="text-sm text-emerald-400">Social Leader</p>
              </div>
            </div>
            <p className="mb-6 max-w-md text-sm leading-relaxed text-gray-400">
              Dedicated to community welfare, women empowerment, and social
              progress. Building an inclusive, empowered, and progressive
              society for all.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <button
                  key={social.label}
                  type="button"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-all hover:bg-emerald-600 hover:text-white"
                >
                  <social.icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-gray-400 transition-colors hover:text-emerald-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Get Involved
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-400">
              Support our initiatives and be part of the change. Together, we
              can make a lasting difference.
            </p>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="inline-block rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:from-amber-500 hover:to-amber-600"
            >
              Contact Us
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Rizwana Khan. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-gray-500">
            Made with{' '}
            <HiOutlineHeart className="h-4 w-4 text-amber-500" /> for the
            community
          </p>
        </div>
        </ScrollAnimate>
      </div>
    </footer>
  );
};

export default Footer;
