import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, WashingMachine, Wind, Zap, Footprints, Layers, Blinds, Shirt } from 'lucide-react';
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
  { number: '50K+', label: 'Garments Cleaned' },
  { number: '2K+', label: 'Happy Customers' },
  { number: '99%', label: 'Satisfaction Rate' },
];

const services = [
  {
    icon: WashingMachine,
    title: 'Wash & Fold',
    slug: 'wash-and-fold',
    desc: 'Professional machine washing with premium detergents and perfectly folded delivery — ideal for everyday garments and household linen.',
    keywords: 'wash and fold laundry Dubai',
  },
  {
    icon: Shirt,
    title: 'Dry Cleaning',
    slug: 'dry-cleaning',
    desc: 'Solvent-based deep cleaning for delicate fabrics, suits, silk, and formal wear. Trusted by Dubai residents for over a decade.',
    keywords: 'dry cleaning Dubai',
  },
  {
    icon: Wind,
    title: 'Steam Ironing',
    slug: 'steam-ironing',
    desc: 'High-pressure steam ironing that removes the toughest creases and restores your garments to a crisp, wrinkle-free finish.',
    keywords: 'steam ironing service Dubai',
  },
  {
    icon: Zap,
    title: 'Express Laundry',
    slug: 'express-laundry',
    desc: 'Same-day and 24-hour express turnaround for urgent cleaning needs — because your schedule should never wait.',
    keywords: 'same day laundry Dubai, express laundry UAE',
  },
  {
    icon: Truck,
    title: 'Pickup & Delivery',
    slug: 'pickup-delivery',
    desc: 'Free door-to-door collection and return across Dubai. Book a slot and we handle everything — no hassle, no delays.',
    keywords: 'laundry pickup delivery Dubai',
  },
  {
    icon: Footprints,
    title: 'Shoe Cleaning',
    slug: 'shoe-cleaning',
    desc: 'Expert deep cleaning, deodorising, and conditioning for trainers, leather shoes, and luxury footwear brands.',
    keywords: 'shoe cleaning service Dubai',
  },
  {
    icon: Layers,
    title: 'Carpet Cleaning',
    slug: 'carpet-cleaning',
    desc: 'Deep steam extraction and stain removal for rugs and carpets of all sizes — restoring colour, texture, and hygiene.',
    keywords: 'carpet cleaning Dubai',
  },
  {
    icon: Blinds,
    title: 'Curtain Cleaning',
    slug: 'curtain-cleaning',
    desc: 'On-site or off-site professional curtain cleaning that removes dust, allergens, and odours, leaving fabrics fresh and vibrant.',
    keywords: 'curtain cleaning service Dubai',
  },
];

const process = [
  { step: '01', title: 'Schedule', desc: 'Book a convenient pickup time online or via phone — it takes under 60 seconds.' },
  { step: '02', title: 'Pickup', desc: 'Our friendly team collects your garments directly from your doorstep.' },
  { step: '03', title: 'Clean', desc: 'Expert cleaning, careful pressing, and meticulous quality checks on every item.' },
  { step: '04', title: 'Deliver', desc: 'Fresh, perfectly folded clothes delivered back to you — on time, every time.' },
];

const testimonials = [
  {
    name: 'Priya N.',
    content: 'White Aura has completely transformed how I handle my dry cleaning. The free pickup and delivery is incredibly convenient, and the quality is always outstanding.',
    rating: 5
  },
  {
    name: 'James W.',
    content: 'Their express service is a lifesaver. I got my designer suits back in pristine condition within 24 hours. The eco-friendly solvents also give me peace of mind.',
    rating: 5
  },
  {
    name: 'Mariam Al F.',
    content: 'The attention to detail is superb. They treated my delicate wedding dress with absolute perfection. I couldn\'t be happier with the results.',
    rating: 5
  },
  {
    name: 'Michael B.',
    content: 'Best laundry service in Dubai! The steam ironing is perfect, and the customer service team is highly responsive on WhatsApp.',
    rating: 5
  },
  {
    name: 'Aisha K.',
    content: 'Very professional team and highly competitive rates for premium fabric care. The door-to-door convenience saves me hours every week.',
    rating: 5
  }
];

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // ── Additional page-level schemas ──────────────────────────────────────
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.whiteaura.ae/' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How fast is White Aura\'s laundry turnaround?',
        acceptedAnswer: { '@type': 'Answer', text: 'We offer a 24-hour express turnaround for most garments, with standard service in 48 hours.' },
      },
      {
        '@type': 'Question',
        name: 'Does White Aura offer pickup and delivery in Dubai?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. We provide free door-to-door pickup and delivery across Dubai at a time that suits your schedule.' },
      },
      {
        '@type': 'Question',
        name: 'Are White Aura cleaning products eco-friendly?',
        acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We use eco-certified, biodegradable solvents that are safe for fabrics, people, and the environment.' },
      },
      {
        '@type': 'Question',
        name: 'Can White Aura clean wedding dresses and delicate garments?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. We specialise in delicate garments including wedding dresses, silk, cashmere, and premium suits with fabric-specific treatment programs.' },
      },
    ],
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': 'How to Book Laundry & Dry Cleaning with White Aura',
    'description': 'A simple 4-step process to get your garments professionally cleaned and delivered to your doorstep in Dubai.',
    'step': [
      {
        '@type': 'HowToStep',
        'position': 1,
        'name': 'Schedule',
        'text': 'Book a convenient pickup time online or via phone — it takes under 60 seconds.'
      },
      {
        '@type': 'HowToStep',
        'position': 2,
        'name': 'Pickup',
        'text': 'Our friendly team collects your garments directly from your doorstep.'
      },
      {
        '@type': 'HowToStep',
        'position': 3,
        'name': 'Clean',
        'text': 'Expert cleaning, careful pressing, and meticulous quality checks on every item.'
      },
      {
        '@type': 'HowToStep',
        'position': 4,
        'name': 'Deliver',
        'text': 'Fresh, perfectly folded clothes delivered back to you — on time, every time.'
      }
    ]
  };

  const reviewsSchema = testimonials.map((t) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    'itemReviewed': {
      '@type': 'LocalBusiness',
      'name': 'White Aura Laundry Services',
      'image': 'https://www.whiteaura.ae/laundry.png',
      'priceRange': '$$',
      'telephone': '+971502524034',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Dubai',
        'addressCountry': 'AE'
      }
    },
    'author': {
      '@type': 'Person',
      'name': t.name
    },
    'reviewRating': {
      '@type': 'Rating',
      'ratingValue': t.rating,
      'bestRating': 5
    },
    'reviewBody': t.content
  }));

  return (
    <AnimatedPage className="home-page">
      <SEO
        title="Premium Laundry & Dry Cleaning Service Dubai"
        description="White Aura — Dubai's most trusted laundry & dry cleaning service. Free pickup & delivery, 24-hour express turnaround, eco-friendly solvents, and expert care for all garments including wedding dresses & luxury suits."
        keywords="laundry Dubai, dry cleaning pickup delivery Dubai, express laundry UAE, eco dry cleaning, wedding dress cleaning Dubai, garment care service"
        canonical="https://www.whiteaura.ae/"
        schema={[breadcrumbSchema, faqSchema, howToSchema, ...reviewsSchema]}
      />

      {/* ── HERO ── */}
      {/*
        Semantic structure:
        <section> wraps the hero landmark.
        <article> + itemscope gives Google a clear content entity.
        <h1> is the primary keyword-rich heading — only one per page.
        <p> is the meta description mirrored for on-page relevance.
      */}
      <section
        ref={heroRef}
        aria-label="Hero — Premium Laundry & Dry Cleaning Dubai"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ backgroundImage: `url('/laundry.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fdfcf8] via-[#fdfcf8]/90 to-[#fdfcf8]/30 md:from-[#fdfcf8] md:via-[#fdfcf8]/85 md:to-transparent z-0" aria-hidden="true" />

        {/* Decorative rings */}
        <div className="absolute top-1/3 right-[5%] w-72 h-72 rounded-full border border-[#7a9e7e]/20 pointer-events-none z-10" aria-hidden="true" />
        <div className="absolute top-1/3 right-[5%] w-56 h-56 rounded-full border border-[#7a9e7e]/15 pointer-events-none z-10" aria-hidden="true" style={{ margin: '2rem' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-20 w-full">
          <div className="max-w-2xl">

            {/* ── Main hero content with microdata ── */}
            <article
              itemScope
              itemType="https://schema.org/Service"
              aria-labelledby="hero-heading"
            >
              {/* Hidden machine-readable service metadata */}
              <meta itemProp="name"            content="Premium Laundry & Dry Cleaning Service Dubai" />
              <meta itemProp="provider"         content="White Aura Laundry Services" />
              <meta itemProp="areaServed"       content="Dubai, United Arab Emirates" />
              <meta itemProp="serviceType"      content="Laundry, Dry Cleaning, Garment Care" />
              <meta itemProp="description"      content="Premium laundry and dry cleaning with free door-to-door pickup and delivery in Dubai. Eco-friendly, 24-hour express service." />
              <link itemProp="url"              href="https://www.whiteaura.ae/" />

              <motion.div style={{ y: heroY, opacity: heroOpacity }}>

                {/* Trust badge */}
                <motion.div
                  variants={fadeUp} initial="hidden" animate="visible" custom={0.5}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7a9e7e]/10 border border-[#7a9e7e]/20 mb-6"
                >
                  <span className="w-2 h-2 rounded-full bg-[#7a9e7e] animate-pulse" aria-hidden="true" />
                  <span className="text-xs font-semibold text-[#5a7a5e] tracking-widest uppercase">
                    Dubai's #1 Premium Laundry
                  </span>
                </motion.div>

                {/* ── H1 — single, keyword-rich, human-readable ── */}
                <motion.h1
                  id="hero-heading"
                  variants={fadeUp} initial="hidden" animate="visible" custom={1}
                  className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 text-[#1c2b1d]"
                >
                  Freshness<br />
                  <span className="inline-block -ml-2 italic text-[#7a9e7e]">You Can</span><br />
                  Feel.
                </motion.h1>

                {/* ── Meta-description mirrored as on-page copy ── */}
                <motion.p
                  variants={fadeUp} initial="hidden" animate="visible" custom={2}
                  className="ml-2 text-lg text-[#2d4a30]/60 mb-6 max-w-lg leading-relaxed"
                  itemProp="description"
                >
                  Dubai's premium <strong className="font-semibold text-[#2d4a30]/80">laundry &amp; dry cleaning</strong> service — eco-friendly solvents, expert garment care, and free <strong className="font-semibold text-[#2d4a30]/80">pickup &amp; delivery</strong> to your door.
                </motion.p>

                {/* ── USP bullets (keyword signals + E-E-A-T) ── */}
                <motion.ul
                  variants={fadeUp} initial="hidden" animate="visible" custom={2.5}
                  className="flex flex-wrap gap-x-6 gap-y-2 mb-10 text-sm text-[#2d4a30]/65"
                  aria-label="Key benefits"
                >
                  {[
                    '✓ Free Pickup & Delivery',
                    '✓ 24-Hour Express Service',
                    '✓ Eco-Certified Solvents',
                  ].map((item) => (
                    <li key={item} className="font-medium">{item}</li>
                  ))}
                </motion.ul>

                <motion.div
                  variants={fadeUp} initial="hidden" animate="visible" custom={3}
                  className="flex flex-wrap gap-4 mb-14"
                >
                  <a
                    href="https://wa.me/971547965212"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                    aria-label="Book a laundry service pickup in Dubai"
                  >
                    Book Laundry Service <ArrowRight size={18} aria-hidden="true" />
                  </a>
                  <Link
                    to="/services"
                    className="btn-outline"
                    aria-label="View all laundry and dry cleaning services"
                  >
                    View Services
                  </Link>
                </motion.div>

                {/* ── Social proof with AggregateRating microdata ── */}
                <motion.div
                  variants={fadeUp} initial="hidden" animate="visible" custom={4}
                  className="flex items-center gap-5"
                  itemScope itemType="https://schema.org/AggregateRating"
                  itemProp="aggregateRating"
                >
                  <meta itemProp="ratingValue" content="4.9" />
                  <meta itemProp="reviewCount"  content="2000" />
                  <meta itemProp="bestRating"   content="5" />

                  <div className="flex -space-x-3" aria-hidden="true">
                    {[11, 12, 13, 14].map((n) => (
                      <img
                        key={n}
                        src={`https://i.pravatar.cc/60?img=${n}`}
                        alt=""
                        width="44" height="44"
                        className="w-11 h-11 rounded-full border-2 border-white object-cover shadow-md"
                        loading="lazy"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="flex text-yellow-400 mb-0.5" aria-label="5 out of 5 stars" role="img">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" aria-hidden="true" />)}
                    </div>
                    <p className="text-sm text-[#2d4a30]/60">
                      <span className="font-semibold text-[#2d4a30]">2,000+</span> satisfied customers in Dubai
                    </p>
                  </div>
                </motion.div>

              </motion.div>
            </article>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 44C1200 40 1320 24 1380 16L1440 8V80H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-white pt-12 pb-6">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
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

      {/* ── SERVICES OVERVIEW ── */}
      <section
        id="services-overview"
        aria-labelledby="services-heading"
        className="pt-10 pb-16 bg-white relative overflow-hidden"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        {/* Background texture */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #2d4a30 1px, transparent 1px)', backgroundSize: '36px 36px' }}
        />
        {/* Radial glow top-left */}
        <div
          aria-hidden="true"
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, #e4f0e4 0%, transparent 70%)' }}
        />
        {/* Radial glow bottom-right */}
        <div
          aria-hidden="true"
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, #c8dfc9 0%, transparent 70%)' }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

          {/* ── Section heading ── */}
          <header
            className="text-center mb-16"
          >
            <p className="text-[#7a9e7e] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              What We Offer
            </p>
            <h2
              id="services-heading"
              className="font-serif text-5xl md:text-6xl font-bold text-[#1c2b1d] leading-tight mb-5"
            >
              Premium Laundry &amp; Dry{' '}
              <span className="italic text-[#7a9e7e]">Cleaning Solutions</span>
            </h2>
            <p className="text-[#2d4a30]/60 text-lg max-w-2xl mx-auto leading-relaxed">
              White Aura delivers reliable, hygienic, and high-quality fabric care solutions for homes and businesses across Dubai —
              from everyday laundry to specialist garment treatment.
            </p>
          </header>

          {/* ── Services grid ── */}
          <ol
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            aria-label="List of laundry and dry cleaning services"
            itemProp="itemListElement"
          >
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <li
                  key={svc.slug}
                  itemScope
                  itemType="https://schema.org/Service"
                  itemProp="item"
                  className="group relative flex flex-col bg-white rounded-3xl border border-[#e4f0e4] shadow-[0_4px_24px_rgba(90,122,94,0.07)] hover:shadow-[0_12px_40px_rgba(90,122,94,0.18)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Top accent bar */}
                  <div
                    aria-hidden="true"
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7a9e7e] to-[#c8dfc9] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  <div className="p-7 flex flex-col h-full">
                    {/* Icon */}
                    <div
                      aria-hidden="true"
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-[#5a7a5e] shrink-0 transition-transform duration-500 group-hover:scale-110"
                      style={{ background: 'linear-gradient(135deg, #e4f0e4, #c8dfc9)' }}
                    >
                      <Icon size={26} strokeWidth={1.8} />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-grow">
                      <meta itemProp="name" content={svc.title} />
                      <meta itemProp="provider" content="White Aura Laundry Services" />
                      <meta itemProp="areaServed" content="Dubai" />
                      <meta itemProp="keywords" content={svc.keywords} />

                      <h3 className="font-serif font-bold text-xl text-[#1c2b1d] mb-3 group-hover:text-[#5a7a5e] transition-colors duration-300">
                        {svc.title}
                      </h3>
                      <p className="text-sm text-[#2d4a30]/55 leading-relaxed flex-grow mb-6">
                        {svc.desc}
                      </p>

                      {/* CTA */}
                      <Link
                        to="/services"
                        aria-label={`Learn more about our ${svc.title} service`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#5a7a5e] hover:text-[#2d4a30] transition-colors duration-200 group/link mt-auto"
                      >
                        Learn More
                        <ArrowRight
                          size={15}
                          className="transition-transform duration-300 group-hover/link:translate-x-1"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          {/* ── CTA Banner ── */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mt-10 relative rounded-3xl overflow-hidden border border-[#c8dfc9]"
          >
            {/* Background gradient */}
            <div
              className="absolute inset-0"
              aria-hidden="true"
              style={{
                background: 'linear-gradient(135deg, #fdfcf8 0%, #e4f0e4 50%, #c8dfc9 100%)',
              }}
            />
            {/* Subtle dot pattern overlay */}
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              aria-hidden="true"
              style={{ backgroundImage: 'radial-gradient(circle, #7a9e7e 1px, transparent 1px)', backgroundSize: '28px 28px' }}
            />
            {/* Glow orbs */}
            <div aria-hidden="true" className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-30 pointer-events-none" style={{ background: 'radial-gradient(circle, #7a9e7e, transparent)', transform: 'translate(30%,-30%)' }} />
            <div aria-hidden="true" className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle, #c8dfc9, transparent)', transform: 'translate(-30%,30%)' }} />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-10 md:px-14 py-12">
              <div className="text-center md:text-left">
                <p className="text-[#5a7a5e] text-xs font-semibold tracking-[0.3em] uppercase mb-3 md:ml-1.5">
                  Ready to Experience the Difference?
                </p>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1c2b1d] leading-tight">
                  Experience Freshness &amp;{' '}
                  <span className="italic text-[#7a9e7e]">Professional Fabric Care</span>
                </h2>
                <p className="text-[#2d4a30]/75 text-base mt-4 max-w-lg leading-relaxed">
                  Join 2,000+ satisfied Dubai customers and discover why White Aura is the city's most trusted laundry &amp; dry cleaning service.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href="https://wa.me/971547965212"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Book a laundry or dry cleaning service"
                  className="btn-primary"
                >
                  Book a Service <ArrowRight size={17} aria-hidden="true" />
                </a>
                <Link
                  to="/gallery"
                  aria-label="View our premium cleaning transformations gallery"
                  className="btn-outline border-[#7a9e7e] text-[#5a7a5e] hover:bg-[#7a9e7e] hover:text-white"
                >
                  View Gallery
                </Link>
                <Link
                  to="/services"
                  aria-label="View all laundry and dry cleaning services"
                  className="btn-outline hidden lg:inline-flex"
                >
                  All Services
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── PROCESS ── */}
      <section 
        className="pt-8 pb-8 bg-white relative overflow-hidden"
        itemScope
        itemType="https://schema.org/HowTo"
      >
        <meta itemProp="name" content="How to Book Laundry & Dry Cleaning with White Aura" />
        <meta itemProp="description" content="A simple 4-step process to get your garments professionally cleaned and delivered to your doorstep in Dubai." />
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-8">
            <p className="text-[#7a9e7e] text-xs font-semibold tracking-[0.3em] uppercase mb-3">How It Works</p>
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
                itemProp="step"
                itemScope
                itemType="https://schema.org/HowToStep"
              >
                <meta itemProp="position" content={i + 1} />
                <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center relative z-10 shadow-lg"
                  style={{ background: i % 2 === 0 ? 'linear-gradient(135deg, #7a9e7e, #5a7a5e)' : 'linear-gradient(135deg, #c8dfc9, #7a9e7e)' }}>
                  <span className="font-serif font-bold text-2xl text-white">{p.step}</span>
                </div>
                <h3 className="font-serif font-bold text-xl text-[#1c2b1d] mb-2" itemProp="name">{p.title}</h3>
                <p className="text-sm text-[#2d4a30]/55 leading-relaxed" itemProp="text">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="pt-10 pb-10 bg-white relative overflow-hidden border-t border-[#e4f0e4]">
        {/* Background texture */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #2d4a30 1px, transparent 1px)', backgroundSize: '36px 36px' }}
        />
        <div
          aria-hidden="true"
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, #e4f0e4 0%, transparent 70%)' }}
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, #c8dfc9 0%, transparent 70%)' }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <motion.div 
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="text-[#7a9e7e] text-xs font-semibold tracking-[0.3em] uppercase mb-3">Testimonials</p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#1c2b1d] leading-tight">
              What Our <span className="italic text-[#7a9e7e]">Customers Say</span>
            </h2>
            <p className="text-[#2d4a30]/60 text-lg max-w-xl mx-auto mt-3 leading-relaxed">
              Discover why thousands of residents across Dubai trust White Aura for their premium garment care.
            </p>
          </motion.div>
        </div>

        {/* Free-flowing ticker track */}
        <div className="relative w-full overflow-hidden py-4 select-none">
          {/* Left and Right blur/fade overlays for premium look */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
          
          <div className="marquee-track">
            {[...testimonials, ...testimonials, ...testimonials].map((t, idx) => (
              <div 
                key={idx}
                className="w-[350px] md:w-[400px] shrink-0 bg-white rounded-3xl p-8 border border-[#e4f0e4] shadow-[0_4px_20px_rgba(90,122,94,0.04)] hover:shadow-[0_12px_32px_rgba(90,122,94,0.12)] transition-all duration-300 flex flex-col justify-between"
                itemScope
                itemType="https://schema.org/Review"
              >
                {/* Hidden Reviewed Item Metadata for Search Engine validation */}
                <div itemProp="itemReviewed" itemScope itemType="https://schema.org/LocalBusiness" className="hidden">
                  <meta itemProp="name" content="White Aura Laundry Services" />
                  <meta itemProp="telephone" content="+971502524034" />
                  <meta itemProp="priceRange" content="$$" />
                  <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                    <meta itemProp="addressLocality" content="Dubai" />
                    <meta itemProp="addressCountry" content="AE" />
                  </div>
                </div>

                <div>
                  {/* Rating stars */}
                  <div className="flex text-yellow-400 mb-4" aria-label={`${t.rating} out of 5 stars`} role="img" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                    <meta itemProp="ratingValue" content={t.rating} />
                    <meta itemProp="bestRating" content="5" />
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" aria-hidden="true" />
                    ))}
                  </div>
                  {/* Content */}
                  <p className="text-[#2d4a30]/75 text-base italic leading-relaxed mb-6" itemProp="reviewBody">
                    "{t.content}"
                  </p>
                </div>
                {/* User Info */}
                <div className="border-t border-[#f0f8f0] pt-4 mt-auto">
                  <div itemProp="author" itemScope itemType="https://schema.org/Person">
                    <h4 className="font-serif font-bold text-base text-[#1c2b1d]" itemProp="name">{t.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section 
        className="pt-10 pb-10 section-gradient relative overflow-hidden"
        itemScope
        itemType="https://schema.org/LocalBusiness"
      >
        {/* Hidden Business Schema Details to fulfill Google Rich Snippets requirements */}
        <meta itemProp="name" content="White Aura Laundry Services" />
        <meta itemProp="image" content="https://www.whiteaura.ae/laundry.png" />
        <meta itemProp="telephone" content="+971502524034" />
        <meta itemProp="priceRange" content="$$" />
        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="hidden">
          <meta itemProp="streetAddress" content="Dubai Marina" />
          <meta itemProp="addressLocality" content="Dubai" />
          <meta itemProp="addressCountry" content="AE" />
        </div>

        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #2d4a30 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#7a9e7e]/30 to-transparent" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-[#7a9e7e] text-xs font-semibold tracking-[0.3em] uppercase mb-4">Ready to Start?</p>
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-[#1c2b1d] leading-tight mb-4">
              Your Wardrobe<br />
              <span className="italic text-[#7a9e7e]">Deserves Better.</span>
            </h2>
            <p className="text-[#2d4a30]/60 text-lg mb-8 max-w-xl mx-auto leading-relaxed" itemProp="description">
              Schedule your first pickup today and experience the White Aura difference — premium dry cleaning and laundry, delivered to your door in Dubai.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="https://wa.me/971547965212" 
                target="_blank" 
                rel="noreferrer"
                className="btn-primary"
                aria-label="Schedule a pickup for laundry service with White Aura"
              >
                Schedule Pickup Now <ArrowRight size={18} />
              </a>
              <a 
                href="tel:+971502524034" 
                className="btn-outline"
                itemProp="telephone"
                aria-label="Call White Aura laundry services directly at +971502524034"
              >
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
