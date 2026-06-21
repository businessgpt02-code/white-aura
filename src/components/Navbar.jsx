import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 w-full"
      >
        <div
          className={`w-full transition-all duration-500 flex justify-center ${
            scrolled
              ? 'glass shadow-lg border-b border-white/10'
              : 'bg-transparent'
          }`}
        >
          <div
            className={`w-full max-w-6xl px-6 transition-all duration-500 ${
              scrolled ? 'py-1.5' : 'py-3'
            } flex items-center justify-between`}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img
                src="/logo1.png"
                alt="White Aura"
                className={`w-auto object-contain transition-all duration-500 group-hover:opacity-85 ${
                  scrolled ? 'h-[64px]' : 'h-[84px]'
                }`}
              />
            </Link>

            {/* Desktop Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                link.disabled ? (
                  <span
                    key={link.name}
                    className="relative text-sm font-medium tracking-wide text-[#2d4a30]/70 cursor-default"
                    aria-disabled="true"
                  >
                    {link.name}
                  </span>
                ) : (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `relative text-sm font-medium tracking-wide transition-colors duration-200 group ${
                        isActive ? 'text-[#5a7a5e]' : 'text-[#2d4a30]/70 hover:text-[#2d4a30]'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.name}
                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#7a9e7e] rounded-full transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                      </>
                    )}
                  </NavLink>
                )
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/971547965212"
                target="_blank"
                rel="noreferrer"
                className="hidden md:inline-flex btn-primary text-sm py-2.5 px-6"
              >
                Book Now
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/60 backdrop-blur-sm border border-white/40 text-[#2d4a30] hover:bg-white transition-colors"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 48px) 48px)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at calc(100% - 48px) 48px)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 48px) 48px)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #fdfcf8 0%, #e4f0e4 100%)' }}
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                >
                  {link.disabled ? (
                    <span className="font-serif text-5xl font-bold text-[#2d4a30]" aria-disabled="true">
                      {link.name}
                    </span>
                  ) : (
                    <NavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `font-serif text-5xl font-bold transition-colors ${isActive ? 'text-[#7a9e7e]' : 'text-[#2d4a30] hover:text-[#7a9e7e]'}`
                      }
                    >
                      {link.name}
                    </NavLink>
                  )}
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <a
                  href="https://wa.me/971547965212"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary mt-4"
                >
                  Book a Service
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
