import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Droplets, Heart, Award, Users, Target, Sparkles, Clock, ShieldCheck, Truck, CheckCircle, ArrowRight } from 'lucide-react';
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

const features = [
  {
    icon: <Clock size={28} />,
    title: '24-Hour Express Laundry Dubai',
    desc: 'Get everyday laundry, workwear, and selected garments cleaned, pressed, and ready quickly with reliable express laundry service in Dubai.'
  },
  {
    icon: <Sparkles size={28} />,
    title: 'Eco-Friendly Dry Cleaning Quality',
    desc: 'We use gentle, fabric-safe cleaning methods that protect colors, textures, and delicate garments while delivering a premium dry cleaning finish.'
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'Expert Garment Care Specialists',
    desc: 'Our team handles suits, abayas, dresses, linens, wedding garments, and delicate fabrics with inspection-led care and professional stain treatment.'
  },
  {
    icon: <Truck size={28} />,
    title: 'Free Laundry Pickup and Delivery',
    desc: 'Book convenient door-to-door laundry and dry cleaning pickup across Dubai, with careful handling from collection to delivery.'
  },
];

const aboutBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.whiteaura.ae/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'About White Aura Laundry Services',
      item: 'https://www.whiteaura.ae/about',
    },
  ],
};

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://www.whiteaura.ae/about#about-page',
  url: 'https://www.whiteaura.ae/about',
  name: 'About White Aura Laundry Services',
  headline: 'About White Aura Premium Laundry and Dry Cleaning in Dubai',
  description: 'White Aura is a premium Dubai laundry and dry cleaning company offering expert garment care, eco-friendly cleaning, free pickup and delivery, and express laundry service.',
  image: 'https://www.whiteaura.ae/laundry.png',
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://www.whiteaura.ae/#website',
  },
  about: {
    '@type': 'LocalBusiness',
    '@id': 'https://www.whiteaura.ae/#business',
    name: 'White Aura Laundry Services',
    telephone: '+971502524034',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
    areaServed: [
      'Dubai Marina',
      'Palm Jumeirah',
      'Downtown Dubai',
      'JBR',
      'Business Bay',
      'Jumeirah Lakes Towers',
      'Dubai Hills',
    ],
    knowsAbout: [
      'Laundry Service Dubai',
      'Dry Cleaning Dubai',
      'Garment Care',
      'Wedding Dress Cleaning',
      'Suit Dry Cleaning',
      'Eco-Friendly Laundry',
      'Laundry Pickup and Delivery',
    ],
  },
};

const aboutServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.whiteaura.ae/about#premium-garment-care',
  name: 'Premium Laundry and Dry Cleaning in Dubai',
  serviceType: 'Laundry, dry cleaning, garment care, steam ironing, and pickup delivery',
  provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://www.whiteaura.ae/#business',
    name: 'White Aura Laundry Services',
  },
  areaServed: {
    '@type': 'City',
    name: 'Dubai',
  },
  description: 'Professional laundry and dry cleaning service in Dubai with fabric-specific treatment, eco-certified cleaning solutions, free garment inspection, WhatsApp order tracking, and door-to-door pickup and delivery.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'White Aura Garment Care Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dry Cleaning Dubai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Laundry Pickup and Delivery Dubai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Steam Ironing Dubai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wedding Dress Cleaning Dubai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Express Laundry Dubai' } },
    ],
  },
};

const whoWeAreSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.whiteaura.ae/about#who-we-are',
  name: 'White Aura Premium Laundry and Dry Cleaning',
  url: 'https://www.whiteaura.ae/about',
  logo: 'https://www.whiteaura.ae/logo1.png',
  image: 'https://www.whiteaura.ae/laundry.png',
  foundingDate: '2016',
  description: 'White Aura is a Dubai-based premium laundry, dry cleaning, and garment care company specializing in eco-friendly fabric cleaning, express laundry, wedding dress cleaning, suit dry cleaning, steam ironing, and door-to-door laundry pickup and delivery.',
  telephone: '+971502524034',
  areaServed: [
    'Dubai',
    'Dubai Marina',
    'Palm Jumeirah',
    'Downtown Dubai',
    'Business Bay',
    'JBR',
    'JLT',
    'Dubai Hills',
  ],
  knowsAbout: [
    'Premium Laundry Dubai',
    'Dry Cleaning Dubai',
    'Eco-Friendly Garment Care',
    'Express Laundry Service',
    'Wedding Dress Cleaning',
    'Suit Dry Cleaning',
    'Steam Ironing',
    'Laundry Pickup and Delivery',
  ],
  slogan: 'Setting a New Standard in Fabric Care',
};

const whyChooseSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': 'https://www.whiteaura.ae/about#why-choose-white-aura',
  name: 'Why Choose White Aura Laundry Services in Dubai',
  description: 'Reasons Dubai customers choose White Aura for premium laundry, dry cleaning, garment care, pickup and delivery, express turnaround, and trusted fabric expertise.',
  keywords: 'why choose White Aura laundry Dubai, best laundry service Dubai, dry cleaning Dubai, laundry pickup and delivery Dubai, express laundry Dubai, eco friendly dry cleaning Dubai',
  numberOfItems: features.length,
  itemListElement: features.map((feature, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: feature.title,
    item: {
      '@type': 'Service',
      name: `${feature.title} Laundry and Dry Cleaning Advantage`,
      serviceType: 'Premium laundry and dry cleaning in Dubai',
      description: feature.desc,
      keywords: 'Dubai laundry service, dry cleaning Dubai, garment care Dubai, laundry pickup and delivery',
      provider: {
        '@type': 'LocalBusiness',
        '@id': 'https://www.whiteaura.ae/#business',
        name: 'White Aura Laundry Services',
      },
      areaServed: {
        '@type': 'City',
        name: 'Dubai',
      },
    },
  })),
};

const About = () => {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <AnimatedPage className="about-page">
      <SEO
        title="About White Aura Laundry Services Dubai"
        description="About White Aura Laundry Services in Dubai: premium dry cleaning, laundry pickup and delivery, eco-friendly garment care, express laundry, and specialist fabric treatment."
        keywords="about White Aura laundry, premium laundry Dubai, dry cleaning Dubai, laundry pickup delivery Dubai, garment care Dubai, eco friendly laundry Dubai"
        canonical="https://www.whiteaura.ae/about"
        ogImage="https://www.whiteaura.ae/laundry.png"
        schema={[aboutBreadcrumbSchema, aboutPageSchema, aboutServiceSchema, whoWeAreSchema, whyChooseSchema]}
      />      {/* ── PAGE HEADER ── */}
      <section
        id="about-hero"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ backgroundImage: `url('/about.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        aria-labelledby="about-hero-heading"
        itemScope
        itemType="https://schema.org/AboutPage"
      >
        <link itemProp="url" href="https://www.whiteaura.ae/about" />
        <meta itemProp="name" content="About White Aura Laundry Services" />
        <meta itemProp="description" content="Premium dry cleaning, laundry pickup and delivery, eco-friendly garment care, and express laundry service in Dubai." />
        <meta itemProp="primaryImageOfPage" content="https://www.whiteaura.ae/laundry.png" />
        
        {/* Soft gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fdfcf8] via-[#fdfcf8]/95 to-[#fdfcf8]/35 md:from-[#fdfcf8] md:via-[#fdfcf8]/90 md:to-transparent z-0" aria-hidden="true" />

        {/* Decorative background elements */}
        <div className="absolute top-1/3 right-[5%] w-72 h-72 rounded-full border border-[#7a9e7e]/20 pointer-events-none z-10" aria-hidden="true" />
        <div className="absolute top-1/3 right-[5%] w-56 h-56 rounded-full border border-[#7a9e7e]/15 pointer-events-none z-10" aria-hidden="true" style={{ margin: '2rem' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-20 w-full">
          <div className="max-w-3xl">
            
            {/* Left Column - Content */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              itemProp="mainEntity"
              itemScope
              itemType="https://schema.org/LocalBusiness"
            >
              <meta itemProp="name" content="White Aura Laundry Services" />
              <meta itemProp="alternateName" content="White Aura" />
              <meta itemProp="telephone" content="+971502524034" />
              <meta itemProp="priceRange" content="$$" />
              <meta itemProp="image" content="https://www.whiteaura.ae/laundry.png" />
              <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="hidden">
                <meta itemProp="addressLocality" content="Dubai" />
                <meta itemProp="addressCountry" content="AE" />
              </div>
              <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating" className="hidden">
                <meta itemProp="ratingValue" content="4.9" />
                <meta itemProp="reviewCount" content="2000" />
                <meta itemProp="bestRating" content="5" />
              </div>

              {/* Tag / Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#7a9e7e]/10 border border-[#7a9e7e]/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7a9e7e] animate-pulse" aria-hidden="true" />
                <span className="text-xs font-semibold text-[#5a7a5e] tracking-widest uppercase">
                  About White Aura Laundry Services Dubai
                </span>
              </div>

              {/* Main Heading */}
              <h1
                id="about-hero-heading"
                className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-[#1c2b1d] leading-[1.05] mb-6"
                itemProp="slogan"
              >
                Premium Laundry{' '}
                <span className="italic text-[#7a9e7e]">and Dry Cleaning</span>{' '}
                in Dubai.
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-[#2d4a30]/70 leading-relaxed mb-8 max-w-2xl md:ml-2" itemProp="description">
                White Aura is a premium laundry and dry cleaning service in Dubai, built for expert garment care, eco-friendly fabric treatment, free pickup and delivery, and reliable express laundry for homes, professionals, and delicate wardrobe pieces.
              </p>

              {/* Highlights List */}
              <ul className="grid sm:grid-cols-2 gap-4 text-sm font-medium text-[#2d4a30]/80" aria-label="White Aura laundry service highlights">
                {[
                  'Premium dry cleaning in Dubai',
                  'Free laundry pickup and delivery',
                  'Eco-friendly garment care',
                  'Express 24-hour laundry options',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 bg-white/65 backdrop-blur-sm px-4 py-3.5 rounded-2xl border border-[#e4f0e4]">
                    <CheckCircle size={18} className="text-[#7a9e7e] shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 60L480 20C720 0 960 40 1440 20V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── BRAND STORY ── */}
      <section 
        id="who-we-are"
        className="pt-12 pb-16 bg-white relative overflow-hidden"
        itemProp="mainEntity"
        itemScope
        itemType="https://schema.org/LocalBusiness"
        aria-labelledby="who-we-are-heading"
      >
        {/* Hidden Schema Details for crawler identification */}
        <meta itemProp="name" content="White Aura Premium Laundry and Dry Cleaning Dubai" />
        <meta itemProp="alternateName" content="White Aura Laundry Services" />
        <meta itemProp="foundingDate" content="2016" />
        <meta itemProp="telephone" content="+971502524034" />
        <meta itemProp="priceRange" content="$$" />
        <meta itemProp="url" content="https://www.whiteaura.ae/about#book-laundry-pickup-dubai" />
        <meta itemProp="areaServed" content="Dubai" />
        <meta itemProp="description" content="Book premium laundry, dry cleaning, steam ironing, stain treatment, and door-to-door pickup and delivery with White Aura Laundry Services in Dubai." />
        <meta itemProp="url" content="https://www.whiteaura.ae/about" />
        <meta itemProp="logo" content="https://www.whiteaura.ae/logo1.png" />
        <meta itemProp="slogan" content="Setting a New Standard in Fabric Care" />
        <meta itemProp="knowsAbout" content="Premium laundry Dubai, dry cleaning Dubai, eco-friendly garment care, express laundry service, wedding dress cleaning, suit dry cleaning, steam ironing, laundry pickup and delivery" />
        <meta itemProp="areaServed" content="Dubai, Dubai Marina, Palm Jumeirah, Downtown Dubai, Business Bay, JBR, JLT, Dubai Hills" />
        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="hidden">
          <meta itemProp="streetAddress" content="Dubai Marina" />
          <meta itemProp="addressLocality" content="Dubai" />
          <meta itemProp="addressCountry" content="AE" />
        </div>
        <div itemProp="makesOffer" itemScope itemType="https://schema.org/Offer" className="hidden">
          <meta itemProp="availability" content="https://schema.org/InStock" />
          <meta itemProp="areaServed" content="Dubai" />
          <div itemProp="itemOffered" itemScope itemType="https://schema.org/Service">
            <meta itemProp="name" content="Laundry Pickup and Dry Cleaning Delivery in Dubai" />
            <meta itemProp="serviceType" content="Laundry pickup, dry cleaning, steam ironing, stain treatment, and garment care" />
            <meta itemProp="areaServed" content="Dubai" />
            <meta itemProp="provider" content="White Aura Laundry Services" />
          </div>
        </div>
        <div itemProp="hasOfferCatalog" itemScope itemType="https://schema.org/OfferCatalog" className="hidden">
          <meta itemProp="name" content="White Aura Premium Laundry and Dry Cleaning Services" />
          {['Dry Cleaning Dubai', 'Laundry Pickup and Delivery Dubai', 'Express Laundry Dubai', 'Wedding Dress Cleaning Dubai', 'Steam Ironing Dubai', 'Premium Garment Care Dubai'].map((serviceName) => (
            <div key={serviceName} itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
              <div itemProp="itemOffered" itemScope itemType="https://schema.org/Service">
                <meta itemProp="name" content={serviceName} />
                <meta itemProp="areaServed" content="Dubai" />
              </div>
            </div>
          ))}
        </div>

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
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl bg-[#fdfcf8]">
                <motion.img
                  style={{ y: imageY }}
                  src="/whoweare.png"
                  alt="Premium laundry facility"
                  className="w-full h-full object-cover"
                  itemProp="image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c2b1d]/50 via-transparent to-transparent" />
                {/* Overlay badge */}
                <div className="absolute bottom-8 left-8 right-8 glass rounded-2xl p-5">
                  <p className="font-serif text-lg font-bold text-[#1c2b1d] mb-1">"Setting a new standard in fabric care."</p>
                  <p className="text-xs text-[#2d4a30]/60">— White Aura Founding Principle</p>
                </div>
              </div>

            </motion.div>

            {/* Text */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <p className="text-[#7a9e7e] text-xs font-semibold tracking-[0.3em] uppercase mb-5">Who We Are</p>
              <h2
                id="who-we-are-heading"
                className="font-serif text-4xl md:text-5xl font-bold text-[#1c2b1d] leading-tight mb-8"
              >
                Dubai's Premium Laundry<br />
                <span className="italic text-[#7a9e7e]">and Dry Cleaning Specialists</span>
              </h2>
              <div className="space-y-6 text-[#2d4a30]/65 leading-relaxed text-base">
                <p itemProp="description">
                  Founded with a passion for pristine fabrics and impeccable service, White Aura is a premium laundry and dry cleaning company in Dubai created to modernize garment care for busy homes, professionals, and families. We specialize in fabric-specific cleaning, delicate garment restoration, suit dry cleaning, wedding dress cleaning, and door-to-door laundry pickup and delivery.
                </p>
                <p>
                  Today, our state-of-the-art laundry facility combines eco-friendly cleaning solutions, advanced stain treatment, professional steam ironing, and careful quality checks to ensure every thread is cleaned, pressed, and returned with the respect it deserves.
                </p>
              </div>
              <ul className="grid sm:grid-cols-2 gap-3 mt-8 text-sm font-medium text-[#2d4a30]/70" aria-label="White Aura specialist laundry and dry cleaning services">
                {[
                  'Dry cleaning for suits and luxury garments',
                  'Eco-friendly laundry and fabric care',
                  'Wedding dress and delicate item cleaning',
                  'Free pickup and delivery across Dubai',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={17} className="text-[#7a9e7e] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-[#c8dfc9]/50" aria-label="White Aura trust statistics">
                {[
                  { n: '50K+', l: 'Garments Cleaned', prop: 'numberOfItems' },
                  { n: '2K+', l: 'Happy Customers', prop: 'interactionCount' },
                  { n: '99%', l: 'Satisfaction Rate', prop: 'ratingValue' },
                ].map((s, i) => (
                  <div key={i} itemProp={s.prop === 'ratingValue' ? 'aggregateRating' : undefined} itemScope={s.prop === 'ratingValue' ? true : undefined} itemType={s.prop === 'ratingValue' ? 'https://schema.org/AggregateRating' : undefined}>
                    {s.prop === 'ratingValue' && (
                      <>
                        <meta itemProp="ratingValue" content="4.9" />
                        <meta itemProp="reviewCount" content="2000" />
                        <meta itemProp="bestRating" content="5" />
                      </>
                    )}
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
      <section
        id="mission-vision"
        className="py-12 section-gradient relative overflow-hidden"
        aria-labelledby="mission-vision-heading"
        itemScope
        itemType="https://schema.org/AboutPage"
      >
        <meta itemProp="name" content="White Aura Laundry Mission and Vision" />
        <meta itemProp="description" content="White Aura's mission and vision for everyday laundry, dry cleaning, eco-friendly garment care, and door-to-door pickup and delivery in Dubai." />
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-[#7a9e7e] text-xs font-semibold tracking-[0.3em] uppercase mb-4">Our Purpose</p>
            <h2
              id="mission-vision-heading"
              className="font-serif text-4xl md:text-5xl font-bold text-[#1c2b1d] leading-tight"
            >
              Mission and Vision for <span className="italic text-[#7a9e7e]">Everyday Laundry in Dubai</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                label: 'Our Mission',
                icon: '◎',
                heading: 'To deliver trusted laundry and dry cleaning in Dubai with eco-conscious garment care.',
                seoDesc: 'White Aura makes premium laundry, dry cleaning, steam ironing, stain treatment, and doorstep pickup and delivery accessible to Dubai homes, professionals, and businesses through reliable service and careful fabric handling.',
                meta: 'Mission for premium laundry and dry cleaning services in Dubai',
                desc: 'We make premium laundry accessible to every household — combining convenience, sustainability, and excellence into every service we offer.'
              },
              {
                label: 'Our Vision',
                icon: '◈',
                heading: "To take Dubai's day-to-day laundry needs off customers' hands.",
                seoDesc: 'Our vision is to take day-to-day laundry needs off every customer\'s hands with reliable, affordable, eco-friendly cleaning, consistent quality checks, express laundry options, and customer-first pickup and delivery.',
                meta: 'Vision for sustainable fabric care and laundry pickup delivery in Dubai',
                desc: "We envision White Aura as the laundry partner that takes everyday washing, ironing, and garment care off your hands, making reliable service accessible for families, professionals, and the wider community, not only premium customers."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.2}
                className="premium-card p-10"
                itemScope
                itemProp="about"
                itemType="https://schema.org/CreativeWork"
              >
                <meta itemProp="name" content={item.meta} />
                <meta itemProp="description" content={item.seoDesc} />
                <div className="text-4xl mb-6 text-[#7a9e7e]" aria-hidden="true">{item.icon}</div>
                <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4 text-[#7a9e7e]">{item.label}</p>
                <h3 className="font-serif text-2xl font-bold mb-5 leading-tight text-[#1c2b1d]" itemProp="headline">{item.heading}</h3>
                <p className="leading-relaxed text-[#2d4a30]/60" itemProp="text">{item.seoDesc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section
        id="why-choose-white-aura"
        className="pt-16 pb-8 bg-white relative overflow-hidden"
        aria-labelledby="why-choose-heading"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <meta itemProp="name" content="Why Choose White Aura Laundry Services in Dubai" />
        <meta itemProp="description" content="Why Dubai customers choose White Aura for premium laundry, dry cleaning, express turnaround, eco-friendly garment care, expert stain treatment, and free pickup and delivery." />
        <meta itemProp="keywords" content="best laundry service Dubai, dry cleaning Dubai, laundry pickup and delivery Dubai, express laundry Dubai, eco-friendly garment care Dubai" />
        <meta itemProp="numberOfItems" content={features.length} />
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage: 'radial-gradient(circle, #2d4a30 1px, transparent 1px)',
            backgroundSize: '28px 28px'
          }}
        />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-30 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #c8dfc9, transparent)', transform: 'translate(30%, -30%)' }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #e4f0e4, transparent)', transform: 'translate(-35%, 35%)' }} />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-14"
          >
            <p className="text-[#7a9e7e] text-xs font-semibold tracking-[0.3em] uppercase mb-5">Why Choose Us</p>
            <h2
              id="why-choose-heading"
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#1c2b1d] leading-[0.98] mb-6"
            >
              Why Choose White Aura for<br />
              <span className="italic text-[#7a9e7e]">Laundry in Dubai?</span>
            </h2>
            <p className="text-[#2d4a30]/60 text-lg leading-relaxed max-w-2xl mx-auto">
              We combine modern technology with old-world care to deliver an unmatched laundry experience — every single time.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute inset-0 hidden lg:block pointer-events-none" aria-hidden="true">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#c8dfc9] to-transparent" />
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8dfc9] to-transparent" />
              <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c8dfc9]/70" />
              <div className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e4f0e4]" />
            </div>

            <div className="grid lg:grid-cols-[1fr_18rem_1fr] gap-8 lg:gap-10 items-center">
              <div className="space-y-8">
                {features.slice(0, 2).map((f, i) => (
                  <motion.div
                    key={f.title}
                    itemProp="itemListElement"
                    itemScope
                    itemType="https://schema.org/ListItem"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    custom={i * 0.12}
                    className="group relative border-l border-[#c8dfc9] pl-6 lg:text-right lg:border-l-0 lg:border-r lg:pl-0 lg:pr-8"
                  >
                    <meta itemProp="position" content={i + 1} />
                    <div itemProp="item" itemScope itemType="https://schema.org/Service">
                      <meta itemProp="serviceType" content="Premium laundry and dry cleaning in Dubai" />
                      <meta itemProp="provider" content="White Aura Laundry Services" />
                      <meta itemProp="areaServed" content="Dubai" />
                    <div className="mb-4 flex items-center gap-3 lg:justify-end">
                      <span className="font-serif text-4xl font-bold text-[#1c2b1d]/10">{String(i + 1).padStart(2, '0')}</span>
                      <span className="text-[#5a7a5e] transition-transform duration-300 group-hover:scale-110" aria-hidden="true">{f.icon}</span>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1c2b1d] mb-3 group-hover:text-[#5a7a5e] transition-colors" itemProp="name">
                      {f.title}
                    </h3>
                    <p className="text-[#2d4a30]/60 leading-relaxed" itemProp="description">
                      {f.desc}
                    </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.2}
                className="relative mx-auto flex h-72 w-72 items-center justify-center rounded-full border border-[#c8dfc9] bg-[#fdfcf8]/65 shadow-[0_28px_80px_rgba(90,122,94,0.12)]"
              >
                <div className="absolute inset-4 rounded-full border border-dashed border-[#7a9e7e]/35" aria-hidden="true" />
                <div className="absolute inset-10 rounded-full bg-gradient-to-br from-[#e4f0e4] to-[#fdfcf8]" aria-hidden="true" />
                <div className="relative text-center px-10">
                  <p className="text-[#7a9e7e] text-[10px] font-bold tracking-[0.28em] uppercase mb-3">White Aura</p>
                  <p className="font-serif text-5xl font-bold text-[#1c2b1d] leading-none mb-3">4</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2d4a30]/55 leading-relaxed">
                    Care Standards
                  </p>
                </div>
              </motion.div>

              <div className="space-y-8">
                {features.slice(2).map((f, i) => (
                  <motion.div
                    key={f.title}
                    itemProp="itemListElement"
                    itemScope
                    itemType="https://schema.org/ListItem"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    custom={(i + 2) * 0.12}
                    className="group relative border-l border-[#c8dfc9] pl-6 lg:pl-8"
                  >
                    <meta itemProp="position" content={i + 3} />
                    <div itemProp="item" itemScope itemType="https://schema.org/Service">
                      <meta itemProp="serviceType" content="Premium laundry and dry cleaning in Dubai" />
                      <meta itemProp="provider" content="White Aura Laundry Services" />
                      <meta itemProp="areaServed" content="Dubai" />
                    <div className="mb-4 flex items-center gap-3">
                      <span className="text-[#5a7a5e] transition-transform duration-300 group-hover:scale-110" aria-hidden="true">{f.icon}</span>
                      <span className="font-serif text-4xl font-bold text-[#1c2b1d]/10">{String(i + 3).padStart(2, '0')}</span>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1c2b1d] mb-3 group-hover:text-[#5a7a5e] transition-colors" itemProp="name">
                      {f.title}
                    </h3>
                    <p className="text-[#2d4a30]/60 leading-relaxed" itemProp="description">
                      {f.desc}
                    </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.ul
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.3}
              className="mt-14 grid gap-4 border-y border-[#c8dfc9]/70 py-6 sm:grid-cols-2 lg:grid-cols-4"
              aria-label="White Aura quality promises"
            >
              {['Eco-certified cleaning solutions', 'Fabric-specific treatment programs', 'Free garment inspection with every order', 'Real-time order tracking via WhatsApp'].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-medium text-[#2d4a30]/72">
                  <CheckCircle size={17} className="text-[#7a9e7e] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="py-8 section-gradient relative overflow-hidden border-y border-[#e4f0e4]">
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage: 'radial-gradient(circle, #2d4a30 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-[0.75fr_1fr] gap-4 lg:gap-10 items-end border-b border-[#c8dfc9]/70 pb-5 mb-3"
          >
            <div>
              <p className="text-[#7a9e7e] text-xs font-semibold tracking-[0.3em] uppercase mb-2">Our Principles</p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1c2b1d] leading-[0.98]">
                The Values We <span className="italic text-[#7a9e7e]">Live By</span>
              </h2>
            </div>
            <p className="text-[#2d4a30]/60 text-base leading-relaxed max-w-xl lg:ml-auto">
              Six quiet standards guide every order, every inspection, and every finished garment before it returns to your door.
            </p>
          </motion.div>

          <ol className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#c8dfc9]/55" aria-label="White Aura core principles">
            {values.map((v, i) => (
              <motion.li
                key={v.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                custom={i * 0.06}
                className="group relative min-h-[190px] border-r border-b border-[#c8dfc9]/55 p-5 md:p-6 overflow-hidden"
              >
                <span className="absolute right-4 top-3 font-serif text-6xl font-bold text-[#1c2b1d]/[0.045] leading-none select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="relative z-10 flex items-center gap-3 mb-5">
                  <span className="w-11 h-11 rounded-full border border-[#c8dfc9] bg-[#fdfcf8] flex items-center justify-center text-[#5a7a5e] transition-transform duration-300 group-hover:scale-110">
                    {v.icon}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-[#c8dfc9] to-transparent" aria-hidden="true" />
                </div>
                <h3 className="relative z-10 font-serif font-bold text-xl md:text-2xl text-[#1c2b1d] mb-2 group-hover:text-[#5a7a5e] transition-colors duration-300">
                  {v.title}
                </h3>
                <p className="relative z-10 text-sm text-[#2d4a30]/60 leading-relaxed">
                  {v.desc}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section
        id="book-laundry-pickup-dubai"
        className="pt-10 pb-10 section-gradient relative overflow-hidden"
        aria-labelledby="about-cta-heading"
        itemScope
        itemType="https://schema.org/LocalBusiness"
      >
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
            <p className="text-[#7a9e7e] text-xs font-semibold tracking-[0.3em] uppercase mb-4">Book Laundry Pickup in Dubai</p>
            <h2
              id="about-cta-heading"
              className="font-serif text-5xl md:text-7xl font-bold text-[#1c2b1d] leading-tight mb-4"
            >
              Expert Garment Care,<br />
              <span className="italic text-[#7a9e7e]">Collected From Your Door.</span>
            </h2>
            <p className="text-[#2d4a30]/60 text-lg mb-8 max-w-xl mx-auto leading-relaxed" itemProp="description">
              Schedule your first pickup today and experience the White Aura difference — premium dry cleaning and laundry, delivered to your door in Dubai.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                to="/contact" 
                className="btn-primary"
                aria-label="Schedule a pickup for laundry service with White Aura"
              >
                Schedule Pickup Now <ArrowRight size={18} />
              </Link>
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

export default About;
