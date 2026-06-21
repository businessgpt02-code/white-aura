import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, X, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import SEO from '../components/SEO';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
  })
};

// ── DATA ──
const categories = ['All', 'Dry Cleaning', 'Stain Removal', 'Folding', 'Pressing'];

const transformations = [
  // Dry Cleaning
  { id: 1, category: 'Dry Cleaning', img: '/dry cleaning/cleaning1.png' },
  { id: 2, category: 'Dry Cleaning', img: '/dry cleaning/cleaning2.png' },
  { id: 3, category: 'Dry Cleaning', img: '/dry cleaning/cleaning3.png' },
  // Stain Removal
  { id: 4, category: 'Stain Removal', img: '/stain removal/removal1.png' },
  { id: 5, category: 'Stain Removal', img: '/stain removal/removal2.png' },
  { id: 6, category: 'Stain Removal', img: '/stain removal/removal3.png' },
  // Folding
  { id: 7, category: 'Folding', img: '/folding/folding1.png' },
  { id: 8, category: 'Folding', img: '/folding/folding2.png' },
  { id: 9, category: 'Folding', img: '/folding/folding3.png' },
  // Pressing (from ironing folder)
  { id: 10, category: 'Pressing', img: '/ironing/ironing1.png' },
  { id: 11, category: 'Pressing', img: '/ironing/ironing2.png' },
  { id: 12, category: 'Pressing', img: '/ironing/ironing3.png' },
];

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [activeIdx, setActiveIdx] = useState(null);
  
  const filtered = filter === 'All' ? transformations : transformations.filter(i => i.category === filter);

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev === 0 ? filtered.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev === filtered.length - 1 ? 0 : prev + 1));
  };

  return (
    <AnimatedPage className="gallery-page bg-[#fdfcf8]">
      <SEO 
        title="Our Cleaning Gallery | White Aura Dubai" 
        description="View our premium garment care, stain removal, and dry cleaning transformations. See the White Aura difference through our interactive gallery." 
        keywords="laundry gallery Dubai, dry cleaning before and after Dubai, stain removal laundry service, premium garment care Dubai, shoe cleaning transformation"
      />

      {/* ── HEADER (UNCHANGED AS REQUESTED) ── */}
      <section
        className="relative pt-40 pb-24 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/gallery/gallery.png')` }}
      >
        <div className="orb orb-1" style={{ opacity: 0.25 }} />
        {/* Soft gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fdfcf8]/90 via-[#fdfcf8]/80 to-[#fdfcf8]/30 md:bg-gradient-to-r md:from-[#fdfcf8]/95 md:via-[#fdfcf8]/85 md:to-[#fdfcf8]/40 z-0" aria-hidden="true" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <p className="text-[#7a9e7e] text-xs font-semibold tracking-[0.3em] uppercase mb-5">Our Work</p>
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-[#1c2b1d] leading-[1.05]">
              The White Aura<br />
              <span className="italic text-[#7a9e7e]">Experience.</span>
            </h1>
          </motion.div>

          <motion.p 
            variants={fadeUp} initial="hidden" animate="visible" custom={0.5}
            className="text-lg text-[#2d4a30]/60 max-w-2xl mx-auto mt-6"
          >
            Explore our gallery to witness the exceptional fabric care and dry cleaning standards achieved by our expert artisans.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 60L480 20C720 0 960 40 1440 20V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── FILTER TABS ── */}
      <section className="bg-white pt-8 pb-4 sticky top-[72px] z-30 border-b border-[#e4f0e4]/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex overflow-x-auto no-scrollbar justify-start md:justify-center gap-3 pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat);
                  setActiveIdx(null);
                }}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? 'bg-[#5a7a5e] text-white shadow-md shadow-[#5a7a5e]/20'
                    : 'bg-[#fdfcf8] border border-[#e4f0e4] text-[#2d4a30]/70 hover:border-[#7a9e7e] hover:text-[#5a7a5e]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY GRID ── */}
      <section className="pt-12 pb-6 bg-white">
        <div className="max-w-[90vw] mx-auto px-6 md:px-8">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, idx) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setActiveIdx(idx)}
                  className="group relative rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(90,122,94,0.06)] border border-[#e4f0e4] bg-[#fdfcf8] flex flex-col aspect-[16/10] cursor-pointer"
                >
                  {/* Image container */}
                  <div className="relative w-full h-full overflow-hidden">
                    <img
                      src={item.img}
                      alt={`${item.category} sample ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Subtle Premium Hover Overlay */}
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="glass text-[#1c2b1d] font-semibold text-sm px-5 py-2.5 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                        <Eye size={16} />
                        <span>View</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {filtered.length === 0 && (
              <div className="col-span-full py-20 text-center">
                <p className="text-[#2d4a30]/50 text-lg">No items found for this category.</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── LIGHTBOX VIEWER ── */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIdx(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveIdx(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-3 rounded-full"
            >
              <X size={24} />
            </button>

            {/* Left navigation */}
            <button 
              onClick={handlePrev}
              className="absolute left-6 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-4 rounded-full z-10"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Main Image View */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-[85vw] max-h-[80vh] overflow-hidden rounded-2xl"
            >
              <img 
                src={filtered[activeIdx].img} 
                alt={`${filtered[activeIdx].category} full sample`}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl select-none"
              />
            </motion.div>

            {/* Right navigation */}
            <button 
              onClick={handleNext}
              className="absolute right-6 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-4 rounded-full z-10"
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── CTA SECTION ── */}
      <section className="pt-12 pb-12 section-gradient relative overflow-hidden border-t border-[#e4f0e4]">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #2d4a30 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-[#7a9e7e] text-xs font-semibold tracking-[0.3em] uppercase mb-4">Ready for a Transformation?</p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#1c2b1d] leading-tight mb-6">
              Experience Our Premium <br />
              <span className="italic text-[#7a9e7e]">Garment Care.</span>
            </h2>
            <p className="text-[#2d4a30]/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Book your collection today and let our artisans restore your favorite pieces to their original glory with free pickup in Dubai.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://wa.me/971547965212" target="_blank" rel="noreferrer" className="btn-primary">
                Book a Collection <ArrowRight size={18} />
              </a>
              <Link to="/services" className="btn-outline bg-white/50">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </AnimatedPage>
  );
};

export default Gallery;
