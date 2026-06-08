import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Wind, Shirt, Zap, ShieldAlert, Truck, Bed, Sparkles, Clock, ArrowRight, CheckCircle } from 'lucide-react';
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
    img: '/service-ironing-pressing.png',
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
    img: '/service-bedsheets-curtains.png',
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
    img: '/service-express.png',
    tag: '24hrs'
  },
];

const servicesBreadcrumbSchema = {
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
      name: 'Laundry and Dry Cleaning Services Dubai',
      item: 'https://www.whiteaura.ae/services',
    },
  ],
};

const servicesPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://www.whiteaura.ae/services#services-page',
  url: 'https://www.whiteaura.ae/services',
  name: 'Laundry and Dry Cleaning Services in Dubai',
  headline: 'Premium Laundry, Dry Cleaning, Ironing, Stain Removal, and Pickup Delivery Services in Dubai',
  description: 'Explore White Aura laundry and dry cleaning services in Dubai including washing and folding, premium dry cleaning, ironing and pressing, stain removal, pickup and delivery, bedsheet and curtain cleaning, luxury garment care, and express 24-hour service.',
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
  },
};

const servicesOfferCatalogSchema = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  '@id': 'https://www.whiteaura.ae/services#offer-catalog',
  name: 'White Aura Laundry and Dry Cleaning Services',
  itemListElement: services.map((service, index) => ({
    '@type': 'Offer',
    position: index + 1,
    itemOffered: {
      '@type': 'Service',
      name: `${service.title} in Dubai`,
      description: service.desc,
      serviceType: service.title,
      image: service.img,
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

const servicesHeroSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.whiteaura.ae/services#premium-laundry-dry-cleaning',
  name: 'Premium Laundry and Dry Cleaning Services in Dubai',
  serviceType: 'Laundry, dry cleaning, ironing, stain removal, garment care, pickup and delivery',
  description: 'Premium laundry and dry cleaning services in Dubai with washing and folding, dry cleaning, steam ironing, stain removal, bedsheet and curtain cleaning, luxury garment care, express 24-hour service, and door-to-door pickup and delivery.',
  provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://www.whiteaura.ae/#business',
    name: 'White Aura Laundry Services',
    telephone: '+971502524034',
  },
  areaServed: [
    'Dubai',
    'Dubai Marina',
    'Palm Jumeirah',
    'Downtown Dubai',
    'JBR',
    'Business Bay',
    'JLT',
    'Dubai Hills',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Premium Fabric Care Services',
    itemListElement: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.desc,
      },
    })),
  },
};

const servicesCtaSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.whiteaura.ae/services#book-service-consultation',
  name: 'Laundry and Dry Cleaning Service Guidance in Dubai',
  serviceType: 'Laundry service recommendation, dry cleaning guidance, garment care consultation, pickup and delivery booking',
  description: 'White Aura helps Dubai customers choose the right laundry, dry cleaning, ironing, stain removal, curtain cleaning, express laundry, or garment care service before booking pickup and delivery.',
  provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://www.whiteaura.ae/#business',
    name: 'White Aura Laundry Services',
    telephone: '+971502524034',
  },
  areaServed: {
    '@type': 'City',
    name: 'Dubai',
  },
  potentialAction: {
    '@type': 'ContactAction',
    name: 'Get a laundry service recommendation',
    target: 'https://www.whiteaura.ae/contact',
  },
};

const Services = () => {
  return (
    <AnimatedPage className="services-page">
      <SEO
        title="Laundry and Dry Cleaning Services Dubai"
        description="Explore White Aura's premium laundry and dry cleaning services in Dubai: washing and folding, dry cleaning, ironing, stain removal, pickup delivery, curtains, bedsheets, luxury garment care, and express 24-hour service."
        keywords="laundry services Dubai, dry cleaning services Dubai, laundry pickup delivery Dubai, washing folding Dubai, ironing pressing Dubai, stain removal Dubai, express laundry Dubai, curtain cleaning Dubai, premium garment care Dubai"
        canonical="https://www.whiteaura.ae/services"
        ogImage="https://www.whiteaura.ae/laundry.png"
        schema={[servicesBreadcrumbSchema, servicesPageSchema, servicesOfferCatalogSchema, servicesHeroSchema, servicesCtaSchema]}
      />

      {/* ── HEADER ── */}
      <section
        id="services-hero"
        className="relative pt-28 pb-14 hero-gradient overflow-hidden"
        aria-labelledby="services-hero-heading"
        itemScope
        itemType="https://schema.org/Service"
      >
        <meta itemProp="name" content="Premium Laundry and Dry Cleaning Services in Dubai" />
        <meta itemProp="serviceType" content="Laundry, dry cleaning, ironing, stain removal, garment care, pickup and delivery" />
        <meta itemProp="description" content="Premium laundry and dry cleaning services in Dubai with washing, folding, dry cleaning, steam ironing, stain removal, bedsheet and curtain cleaning, express service, and pickup delivery." />
        <meta itemProp="areaServed" content="Dubai" />
        <meta itemProp="provider" content="White Aura Laundry Services" />
        <div className="orb orb-2" style={{ opacity: 0.3 }} />
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <motion.div variants={fadeUp} initial="hidden" animate="visible">
              <p className="text-[#7a9e7e] text-xs font-semibold tracking-[0.3em] uppercase mb-5">Laundry Services Dubai</p>
              <h1
                id="services-hero-heading"
                className="font-serif text-6xl md:text-7xl font-bold text-[#1c2b1d] leading-[1.05]"
                itemProp="name"
              >
                Laundry &amp;<br />
                <span className="italic text-[#7a9e7e]">Dry Cleaning</span><br />
                Services Dubai.
              </h1>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}>
              <p className="text-xl text-[#2d4a30]/60 leading-relaxed" itemProp="description">
                Explore White Aura's premium laundry and dry cleaning services in Dubai, including washing and folding, dry cleaning, steam ironing, stain removal, pickup and delivery, bedsheets, curtains, luxury garment care, and express 24-hour service.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm font-medium text-[#2d4a30]/70" aria-label="White Aura service highlights">
                {['Free pickup and delivery', 'Express 24-hour service', 'Premium garment care', 'Eco-friendly fabric treatment'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={17} className="text-[#7a9e7e] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
      <section className="pt-24 pb-12 bg-white">
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
      <section className="pt-12 pb-10 section-gradient relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
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
      <section
        id="book-service-consultation"
        className="py-14 section-gradient relative overflow-hidden"
        aria-labelledby="services-cta-heading"
        itemScope
        itemType="https://schema.org/Service"
      >
        <meta itemProp="name" content="Laundry and Dry Cleaning Service Guidance in Dubai" />
        <meta itemProp="serviceType" content="Laundry service recommendation, dry cleaning guidance, garment care consultation, pickup and delivery booking" />
        <meta itemProp="areaServed" content="Dubai" />
        <meta itemProp="provider" content="White Aura Laundry Services" />
        <meta itemProp="keywords" content="laundry service Dubai, dry cleaning Dubai, garment care Dubai, laundry pickup delivery Dubai, express laundry Dubai" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #2d4a30 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#7a9e7e]/30 to-transparent" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-[#7a9e7e] text-xs font-semibold tracking-[0.3em] uppercase mb-4">Service Guidance in Dubai</p>
            <h2
              id="services-cta-heading"
              className="font-serif text-4xl md:text-5xl font-bold text-[#1c2b1d] mb-6"
              itemProp="headline"
            >
              Choose the Right Laundry or Dry Cleaning Service
            </h2>
            <p className="text-[#2d4a30]/60 text-lg mb-10" itemProp="description">
              Tell us what you need cleaned, and our Dubai garment care team will recommend the best option: washing and folding, premium dry cleaning, ironing, stain removal, curtain cleaning, express service, or door-to-door pickup and delivery.
            </p>
            <Link
              to="/contact"
              className="btn-primary"
              aria-label="Get a laundry and dry cleaning service recommendation in Dubai"
              itemProp="url"
            >
              Get Service Recommendation <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Services;
