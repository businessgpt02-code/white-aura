import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Clock, Sparkles, Truck, CheckCircle } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import SEO from '../components/SEO';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
  })
};

const stats = [
  { number: '10+', label: 'Years of Excellence' },
  { number: '50K+', label: 'Garments Cleaned' },
  { number: '2K+', label: 'Happy Customers' },
  { number: '99%', label: 'Satisfaction Rate' },
];

const features = [
  {
    icon: <Clock size={28} />,
    title: 'Fast Turnaround',
    desc: 'Get your clothes back fresh and clean in as little as 24 hours with our express service.'
  },
  {
    icon: <Sparkles size={28} />,
    title: 'Premium Quality',
    desc: 'Eco-friendly, gentle solvents that protect fabrics and colors while ensuring deep cleaning.'
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'Trusted Expertise',
    desc: 'Over a decade of experience handling delicate garments, wedding dresses, and premium suits.'
  },
  {
    icon: <Truck size={28} />,
    title: 'Door-to-Door',
    desc: 'Hassle-free pickup and delivery service that fits seamlessly into your busy schedule.'
  },
];

const process = [
  { step: '01', title: 'Schedule', desc: 'Book a convenient pickup time online or via phone — it takes under 60 seconds.' },
  { step: '02', title: 'Pickup', desc: 'Our friendly team collects your garments directly from your doorstep.' },
  { step: '03', title: 'Clean', desc: 'Expert cleaning, careful pressing, and meticulous quality checks on every item.' },
  { step: '04', title: 'Deliver', desc: 'Fresh, perfectly folded clothes delivered back to you — on time, every time.' },
];

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <AnimatedPage>
      <SEO title="Home" description="White Aura Laundry Services — Premium garment care, dry cleaning, and laundry pickup & delivery." />

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url('/laundry.png')`
        }}
      >
        {/* Soft gradient overlay for premium look and text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fdfcf8] via-[#fdfcf8]/90 to-[#fdfcf8]/30 md:from-[#fdfcf8] md:via-[#fdfcf8]/85 md:to-transparent z-0" />

        {/* Floating decorative rings */}
        <div className="absolute top-1/3 right-[5%] w-72 h-72 rounded-full border border-[#7a9e7e]/20 pointer-events-none z-10" />
        <div className="absolute top-1/3 right-[5%] w-56 h-56 rounded-full border border-[#7a9e7e]/15 pointer-events-none z-10" style={{ margin: '2rem' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-20 w-full">
          <div className="max-w-2xl">
            {/* Left content */}
            <motion.div style={{ y: heroY, opacity: heroOpacity }}>
              <motion.h1
                variants={fadeUp} initial="hidden" animate="visible" custom={1}
                className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 text-[#1c2b1d]"
              >
                Freshness<br />
                <span className="italic text-[#7a9e7e]">You Can</span><br />
                Feel.
              </motion.h1>

              <motion.p
                variants={fadeUp} initial="hidden" animate="visible" custom={2}
                className="text-lg text-[#2d4a30]/60 mb-10 max-w-lg leading-relaxed"
              >
                Elevate your wardrobe with our premium laundry and dry cleaning services. We treat every garment with the ultimate care and precision.
              </motion.p>

              <motion.div
                variants={fadeUp} initial="hidden" animate="visible" custom={3}
                className="flex flex-wrap gap-4 mb-14"
              >
                <Link to="/contact" className="btn-primary">
                  Book Laundry Service <ArrowRight size={18} />
                </Link>
                <Link to="/services" className="btn-outline">
                  View Services
                </Link>
              </motion.div>

              {/* Social proof */}
              <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4} className="flex items-center gap-5">
                <div className="flex -space-x-3">
                  {[11, 12, 13, 14].map((n) => (
                    <img key={n} src={`https://i.pravatar.cc/60?img=${n}`} alt="Customer"
                      className="w-11 h-11 rounded-full border-2 border-white object-cover shadow-md" />
                  ))}
                </div>
                <div>
                  <div className="flex text-yellow-400 mb-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-sm text-[#2d4a30]/60"><span className="font-semibold text-[#2d4a30]">2,000+</span> satisfied customers</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 44C1200 40 1320 24 1380 16L1440 8V80H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-white pt-12 pb-6">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                className="text-center"
              >
                <p className="font-serif text-5xl font-bold text-[#7a9e7e] mb-1">{stat.number}</p>
                <p className="text-sm text-[#2d4a30]/55 tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="pt-6 pb-16 section-gradient relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-30 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #c8dfc9, transparent)', transform: 'translate(30%, -30%)' }} />

        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left text */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="text-[#7a9e7e] text-xs font-semibold tracking-[0.3em] uppercase mb-4">Why Choose Us</p>
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#1c2b1d] leading-tight mb-6">
                A Higher Standard<br />
                <span className="italic text-[#7a9e7e]">of Clean.</span>
              </h2>
              <p className="text-[#2d4a30]/60 text-lg leading-relaxed mb-10 max-w-md">
                We combine modern technology with old-world care to deliver an unmatched laundry experience — every single time.
              </p>
              <ul className="flex flex-col gap-4">
                {['Eco-certified cleaning solutions', 'Fabric-specific treatment programs', 'Free garment inspection with every order', 'Real-time order tracking via WhatsApp'].map((item, i) => (
                  <motion.li key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.5}
                    className="flex items-center gap-3 text-[#2d4a30]/70">
                    <CheckCircle size={18} className="text-[#7a9e7e] shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right grid */}
            <div className="grid grid-cols-2 gap-5 items-stretch">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.15}
                  className="flex flex-col h-full"
                >
                  <div className="premium-card p-7 h-full flex flex-col flex-grow">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 text-[#5a7a5e] shrink-0"
                      style={{ background: 'linear-gradient(135deg, #e4f0e4, #c8dfc9)' }}>
                      {f.icon}
                    </div>
                    <h3 className="font-serif font-bold text-lg text-[#1c2b1d] mb-2">{f.title}</h3>
                    <p className="text-sm text-[#2d4a30]/55 leading-relaxed flex-grow">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="pt-16 pb-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-12">
            <p className="text-[#7a9e7e] text-xs font-semibold tracking-[0.3em] uppercase mb-4">How It Works</p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#1c2b1d]">Simple as <span className="italic text-[#7a9e7e]">1, 2, 3, 4.</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#c8dfc9] to-transparent" />

            {process.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.15}
                className="relative text-center"
              >
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center relative z-10 shadow-lg"
                  style={{ background: i % 2 === 0 ? 'linear-gradient(135deg, #7a9e7e, #5a7a5e)' : 'linear-gradient(135deg, #c8dfc9, #7a9e7e)' }}>
                  <span className="font-serif font-bold text-2xl text-white">{p.step}</span>
                </div>
                <h3 className="font-serif font-bold text-xl text-[#1c2b1d] mb-3">{p.title}</h3>
                <p className="text-sm text-[#2d4a30]/55 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="pt-16 pb-16 section-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #2d4a30 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#7a9e7e]/30 to-transparent" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-[#7a9e7e] text-xs font-semibold tracking-[0.3em] uppercase mb-6">Ready to Start?</p>
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-[#1c2b1d] leading-tight mb-6">
              Your Wardrobe<br />
              <span className="italic text-[#7a9e7e]">Deserves Better.</span>
            </h2>
            <p className="text-[#2d4a30]/60 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
              Schedule your first pickup today and experience the White Aura difference — premium care, delivered to your door.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Schedule Pickup Now <ArrowRight size={18} />
              </Link>
              <a href="tel:+971502524034" className="btn-outline">
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Home;
