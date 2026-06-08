import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // 1. Route Change Scroll Restoration
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant', // Instant scroll on route change for best UX
    });
  }, [pathname]);

  // 2. Scroll Progress & Button Visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-gradient-to-135 from-[#7a9e7e] to-[#5a7a5e] text-white shadow-[0_4px_20px_rgba(90,122,94,0.3)] hover:shadow-[0_8px_30px_rgba(90,122,94,0.5)] border border-white/20 transition-all cursor-pointer flex items-center justify-center group"
          aria-label="Scroll to top of page"
        >
          <ArrowUp 
            size={20} 
            strokeWidth={2.5}
            className="text-black transition-transform duration-300 group-hover:-translate-y-1" 
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
