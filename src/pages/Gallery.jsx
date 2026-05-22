import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import SEO from '../components/SEO';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
  })
};

const galleryItems = [
  { id: 1, category: 'Laundry Care', img: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Fresh Folded Towels', span: 'col-span-1 row-span-2' },
  { id: 2, category: 'Dry Cleaning', img: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Professional Suit Care', span: 'col-span-2 row-span-1' },
  { id: 3, category: 'Ironing', img: 'https://images.unsplash.com/photo-1596755490453-61a7c5b651bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Perfect Steam Pressing', span: 'col-span-1 row-span-1' },
  { id: 4, category: 'Facility', img: 'https://images.unsplash.com/photo-1582735689146-281b378a5b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'State-of-the-Art Machines', span: 'col-span-1 row-span-1' },
  { id: 5, category: 'Laundry Care', img: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Whites Brightening', span: 'col-span-2 row-span-1' },
  { id: 6, category: 'Pickup Delivery', img: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Doorstep Delivery', span: 'col-span-1 row-span-2' },
  { id: 7, category: 'Dry Cleaning', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Premium Garment Handling', span: 'col-span-1 row-span-1' },
  { id: 8, category: 'Facility', img: 'https://images.unsplash.com/photo-1551836022-b06b1b27b43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Our Clean Workspace', span: 'col-span-1 row-span-1' },
];

const categories = ['All', 'Laundry Care', 'Dry Cleaning', 'Ironing', 'Pickup Delivery', 'Facility'];

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [selectedIdx, setSelectedIdx] = useState(null);

  const filtered = filter === 'All' ? galleryItems : galleryItems.filter(i => i.category === filter);

  const navigate = (dir) => {
    setSelectedIdx(prev => (prev + dir + filtered.length) % filtered.length);
  };

  return (
    <AnimatedPage>
      <SEO title="Gallery" description="Explore the White Aura Laundry Services gallery — our facilities, premium results, and service in action." />

      {/* ── HEADER ── */}
      <section className="relative pt-40 pb-24 hero-gradient overflow-hidden">
        <div className="orb orb-1" style={{ opacity: 0.25 }} />
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <p className="text-[#7a9e7e] text-xs font-semibold tracking-[0.3em] uppercase mb-5">Our Work</p>
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-[#1c2b1d] leading-[1.05]">
              The White Aura<br />
              <span className="italic text-[#7a9e7e]">Experience.</span>
            </h1>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="flex flex-wrap justify-center gap-3 mt-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? 'bg-[#7a9e7e] text-white shadow-lg shadow-[#7a9e7e]/30'
                    : 'glass text-[#2d4a30]/70 hover:text-[#2d4a30]'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 60L480 20C720 0 960 40 1440 20V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── GALLERY GRID ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 auto-rows-[260px] gap-4">
            <AnimatePresence>
              {filtered.map((item, idx) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative rounded-3xl overflow-hidden cursor-pointer ${item.span}`}
                  onClick={() => setSelectedIdx(idx)}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c2b1d]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                  {/* Hover overlay content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-[#a8c5aa] text-xs font-medium tracking-widest uppercase mb-1">{item.category}</p>
                        <h3 className="font-serif font-bold text-xl text-white">{item.title}</h3>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                        <ZoomIn size={18} color="white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedIdx(null)}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <X size={24} />
            </button>

            {/* Prev / Next */}
            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <ChevronRight size={24} />
            </button>

            <motion.div
              key={selectedIdx}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl max-h-[80vh] w-full mx-8 rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[selectedIdx]?.img}
                alt={filtered[selectedIdx]?.title}
                className="w-full h-full object-cover"
                style={{ maxHeight: '80vh' }}
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <p className="text-[#a8c5aa] text-xs tracking-widest uppercase mb-2">{filtered[selectedIdx]?.category}</p>
                <h3 className="font-serif text-3xl font-bold text-white">{filtered[selectedIdx]?.title}</h3>
              </div>
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass rounded-full px-4 py-2 text-sm text-[#2d4a30]/70">
              {selectedIdx + 1} / {filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedPage>
  );
};

export default Gallery;
