import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Wind, Shirt, Zap, ShieldAlert, Truck, Bed, Sparkles, Clock, ArrowRight } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import SEO from '../components/SEO';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
  })
};

const services = [
  {
    title: 'Washing & Folding',
    desc: 'Everyday laundry washed with premium detergents, dried to perfection, and neatly folded to save your time.',
    icon: <Wind size={32} />,
    img: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    tag: 'Most Popular'
  },
  {
    title: 'Dry Cleaning',
    desc: 'Professional dry cleaning for suits, dresses, and delicate garments requiring chemical-free solvent treatment.',
    icon: <Shirt size={32} />,
    img: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    tag: 'Premium'
  },
  {
    title: 'Ironing & Pressing',
    desc: 'Crisp, wrinkle-free pressing with industrial steam irons to keep you looking sharp and professional.',
    icon: <Zap size={32} />,
    img: 'https://images.unsplash.com/photo-1596755490453-61a7c5b651bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    tag: 'Quick'
  },
  {
    title: 'Stain Removal',
    desc: 'Advanced enzymatic treatment techniques to remove the toughest stains without harming the fabric.',
    icon: <ShieldAlert size={32} />,
    img: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    tag: 'Specialist'
  },
  {
    title: 'Pickup & Delivery',
    desc: 'Hassle-free, scheduled door-to-door collection and delivery service that fits your busy lifestyle.',
    icon: <Truck size={32} />,
    img: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    tag: 'Free'
  },
  {
    title: 'Bedsheets & Curtains',
    desc: 'Deep cleaning for large household items to keep your home environment fresh, hygienic, and inviting.',
    icon: <Bed size={32} />,
    img: 'https://images.unsplash.com/photo-1582735689146-281b378a5b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    tag: 'Home Care'
  },
  {
    title: 'Premium Garment Care',
    desc: 'Specialized treatment for designer wear, silks, cashmere, and vintage fabrics requiring extra sensitivity.',
    icon: <Sparkles size={32} />,
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    tag: 'Luxury'
  },
  {
    title: 'Express Service',
    desc: 'Need it urgently? Our express turnaround ensures your garments are cleaned and returned in under 24 hours.',
    icon: <Clock size={32} />,
    img: 'https://images.unsplash.com/photo-1551836022-b06b1b27b43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    tag: '24hrs'
  },
];

const Services = () => {
  return (
    <AnimatedPage>
      <SEO title="Our Services" description="Explore White Aura's premium laundry services — washing, dry cleaning, ironing, stain removal, and more." />

      {/* ── HEADER ── */}
      <section className="relative pt-40 pb-24 hero-gradient overflow-hidden">
        <div className="orb orb-2" style={{ opacity: 0.3 }} />
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <motion.div variants={fadeUp} initial="hidden" animate="visible">
              <p className="text-[#7a9e7e] text-xs font-semibold tracking-[0.3em] uppercase mb-5">What We Offer</p>
              <h1 className="font-serif text-6xl md:text-7xl font-bold text-[#1c2b1d] leading-[1.05]">
                Premium Care<br />
                <span className="italic text-[#7a9e7e]">for Every</span><br />
                Fabric.
              </h1>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}>
              <p className="text-xl text-[#2d4a30]/60 leading-relaxed">
                From everyday essentials to your most cherished garments, our comprehensive services guarantee impeccable results every single time.
              </p>
              <Link to="/contact" className="btn-primary inline-flex mt-8">
                Book a Service <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 60L480 20C720 0 960 40 1440 20V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx * 0.08}
                className="group relative rounded-3xl overflow-hidden cursor-pointer"
                style={{ height: '420px' }}
              >
                {/* Background image */}
                <img
                  src={service.img}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c2b1d]/90 via-[#1c2b1d]/30 to-transparent" />

                {/* Tag */}
                <div className="absolute top-5 left-5">
                  <span className="glass text-[#5a7a5e] text-xs font-semibold px-3 py-1.5 rounded-full">
                    {service.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  {/* Icon — visible always */}
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-white/90 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: 'rgba(122,158,126,0.4)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                    {service.icon}
                  </div>

                  <h3 className="font-serif font-bold text-xl text-white mb-2">{service.title}</h3>

                  {/* Desc — slides up on hover */}
                  <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500">
                    <p className="text-white/70 text-sm leading-relaxed mb-5">{service.desc}</p>
                    <Link to="/contact" className="inline-flex items-center gap-2 text-[#a8c5aa] text-sm font-semibold hover:gap-3 transition-all">
                      Book Now <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-32 section-gradient relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-20">
            <p className="text-[#7a9e7e] text-xs font-semibold tracking-[0.3em] uppercase mb-4">The Process</p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#1c2b1d]">
              Effortlessly <span className="italic text-[#7a9e7e]">Simple.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-9 left-[12%] right-[12%] h-px"
              style={{ background: 'linear-gradient(90deg, transparent, #c8dfc9 20%, #c8dfc9 80%, transparent)' }} />

            {[
              { step: '01', title: 'Schedule', desc: 'Book a convenient pickup time online or via phone in under 60 seconds.' },
              { step: '02', title: 'Pickup', desc: 'Our friendly team collects garments directly from your doorstep.' },
              { step: '03', title: 'Clean', desc: 'Expert cleaning, careful pressing, and multi-point quality inspection.' },
              { step: '04', title: 'Deliver', desc: 'Fresh, perfectly wrapped clothes delivered back — on time, every time.' },
            ].map((p, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.15}
                className="text-center relative"
              >
                <div className="w-20 h-20 rounded-full mx-auto mb-7 flex items-center justify-center relative z-10 shadow-lg"
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

      {/* ── BOTTOM CTA ── */}
      <section className="py-24 section-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #2d4a30 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#7a9e7e]/30 to-transparent" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1c2b1d] mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-[#2d4a30]/60 text-lg mb-10">Our experts are happy to guide you. Reach out and we'll recommend the perfect care plan for your garments.</p>
            <Link to="/contact" className="btn-primary">
              Get in Touch <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Services;
