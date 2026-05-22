import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Leaf, Droplets, Heart, Award, Users, Target } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import SEO from '../components/SEO';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
  })
};

const values = [
  {
    icon: <Droplets size={28} />,
    title: 'Immaculate Hygiene',
    desc: 'Hospital-grade sanitization ensuring your clothes are not just visually clean, but hygienically pure.'
  },
  {
    icon: <Leaf size={28} />,
    title: 'Eco-Conscious',
    desc: 'Biodegradable detergents and efficient machines that minimize water and energy consumption.'
  },
  {
    icon: <Heart size={28} />,
    title: 'Fabric Love',
    desc: 'Every garment is inspected and treated according to its unique fabric requirements and care labels.'
  },
  {
    icon: <Award size={28} />,
    title: 'Excellence First',
    desc: 'We never compromise on quality — each item goes through our multi-point inspection process.'
  },
  {
    icon: <Users size={28} />,
    title: 'Customer-Centric',
    desc: 'Your satisfaction is our north star. We go above and beyond to make every experience exceptional.'
  },
  {
    icon: <Target size={28} />,
    title: 'Precision Care',
    desc: 'Detailed attention to every stitch, button, and seam so your garments always look their absolute best.'
  },
];

const About = () => {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <AnimatedPage>
      <SEO title="About Us" description="Learn about White Aura Laundry Services — our mission, vision, and dedication to premium garment care." />

      {/* ── PAGE HEADER ── */}
      <section className="relative pt-40 pb-24 hero-gradient overflow-hidden">
        <div className="orb orb-1" style={{ opacity: 0.3 }} />
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0} className="max-w-3xl">
            <p className="text-[#7a9e7e] text-xs font-semibold tracking-[0.3em] uppercase mb-5">Our Story</p>
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-[#1c2b1d] leading-[1.05] mb-8">
              Born From a<br />
              <span className="italic text-[#7a9e7e]">Passion for</span><br />
              Pristine.
            </h1>
            <p className="text-xl text-[#2d4a30]/60 leading-relaxed max-w-lg">
              At White Aura, we believe that clean clothes elevate your confidence and aura. We are more than a laundry service — we are your personal garment care specialists.
            </p>
          </motion.div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 60L480 20C720 0 960 40 1440 20V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── BRAND STORY ── */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            {/* Image with parallax */}
            <motion.div
              ref={imageRef}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl">
                <motion.img
                  style={{ y: imageY }}
                  src="https://images.unsplash.com/photo-1582735689146-281b378a5b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
                  alt="Premium laundry facility"
                  className="w-full h-[110%] object-cover -mt-[5%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c2b1d]/50 via-transparent to-transparent" />
                {/* Overlay badge */}
                <div className="absolute bottom-8 left-8 right-8 glass rounded-2xl p-5">
                  <p className="font-serif text-lg font-bold text-[#1c2b1d] mb-1">"Setting a new standard in fabric care."</p>
                  <p className="text-xs text-[#2d4a30]/60">— White Aura Founding Principle</p>
                </div>
              </div>

              {/* Floating stat card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                className="absolute -right-8 top-16 glass rounded-2xl p-6 shadow-xl"
              >
                <p className="font-serif text-4xl font-bold text-[#7a9e7e]">10+</p>
                <p className="text-sm text-[#2d4a30]/60 mt-1">Years of<br />Excellence</p>
              </motion.div>
            </motion.div>

            {/* Text */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <p className="text-[#7a9e7e] text-xs font-semibold tracking-[0.3em] uppercase mb-5">Who We Are</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1c2b1d] leading-tight mb-8">
                Setting a New Standard<br />
                <span className="italic text-[#7a9e7e]">in Fabric Care</span>
              </h2>
              <div className="space-y-6 text-[#2d4a30]/65 leading-relaxed text-base">
                <p>
                  Founded with a passion for pristine fabrics and impeccable service, White Aura was born out of a desire to modernize the laundry experience. We recognized that busy professionals and families needed a trustworthy partner to handle their most delicate garments.
                </p>
                <p>
                  Today, our state-of-the-art facility combines eco-friendly practices with advanced cleaning technologies to ensure that every thread is treated with the respect it deserves.
                </p>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-[#c8dfc9]/50">
                {[
                  { n: '50K+', l: 'Garments Cleaned' },
                  { n: '2K+', l: 'Happy Customers' },
                  { n: '99%', l: 'Satisfaction Rate' },
                ].map((s, i) => (
                  <div key={i}>
                    <p className="font-serif text-3xl font-bold text-[#7a9e7e] mb-1">{s.n}</p>
                    <p className="text-xs text-[#2d4a30]/50 leading-tight">{s.l}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="py-24 section-gradient relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                label: 'Our Mission',
                icon: '◎',
                heading: 'To deliver pristine garment care with eco-conscious practices.',
                desc: 'We make premium laundry accessible to every household — combining convenience, sustainability, and excellence into every service we offer.'
              },
              {
                label: 'Our Vision',
                icon: '◈',
                heading: 'To redefine the future of fabric care, one garment at a time.',
                desc: "We envision a world where every individual can confidently present their best self, supported by a laundry partner who treats every item like it's irreplaceable."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.2}
                className="premium-card p-10"
                style={i === 1 ? { background: 'linear-gradient(135deg, #1c2b1d, #2d4a30)', color: 'white' } : {}}
              >
                <div className={`text-4xl mb-6 ${i === 1 ? 'text-[#7a9e7e]' : 'text-[#7a9e7e]'}`}>{item.icon}</div>
                <p className={`text-xs font-semibold tracking-[0.25em] uppercase mb-4 ${i === 1 ? 'text-[#a8c5aa]' : 'text-[#7a9e7e]'}`}>{item.label}</p>
                <h3 className={`font-serif text-2xl font-bold mb-5 leading-tight ${i === 1 ? 'text-white' : 'text-[#1c2b1d]'}`}>{item.heading}</h3>
                <p className={`leading-relaxed ${i === 1 ? 'text-white/55' : 'text-[#2d4a30]/60'}`}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-20">
            <p className="text-[#7a9e7e] text-xs font-semibold tracking-[0.3em] uppercase mb-4">Our Principles</p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#1c2b1d]">
              The Values We <span className="italic text-[#7a9e7e]">Live By</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.1}
                className="premium-card p-8 group"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-[#5a7a5e] group-hover:scale-110 transition-transform"
                  style={{ background: 'linear-gradient(135deg, #e4f0e4, #c8dfc9)' }}>
                  {v.icon}
                </div>
                <h3 className="font-serif font-bold text-xl text-[#1c2b1d] mb-3">{v.title}</h3>
                <p className="text-sm text-[#2d4a30]/60 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LARGE QUOTE BANNER ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1c2b1d 0%, #2d4a30 100%)' }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="font-serif text-5xl md:text-6xl font-bold italic text-white/90 leading-tight mb-8">
              "We don't just clean clothes — we restore confidence."
            </p>
            <div className="w-16 h-px bg-[#7a9e7e] mx-auto mb-6" />
            <p className="text-[#a8c5aa] text-sm tracking-widest uppercase">The White Aura Promise</p>
          </motion.div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default About;
