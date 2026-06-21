import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Send, MessageCircle } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import SEO from '../components/SEO';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
  })
};

const contactInfo = [
  { icon: <Phone size={20} />, label: 'Call Us', value: '+971 54 796 5212' },
  { icon: <Mail size={20} />, label: 'Email Us', value: 'connect@whiteauralaundry.com' },
];

const contactBreadcrumbSchema = {
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
      name: 'Contact White Aura Commercial Laundry Services Dubai',
      item: 'https://www.whiteaura.ae/contact',
    },
  ],
};

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://www.whiteaura.ae/contact#contact-page',
  name: 'Contact White Aura Commercial Laundry Services Dubai',
  url: 'https://www.whiteaura.ae/contact',
  description: 'Contact White Aura Laundry Services in Dubai for B2B commercial laundry, corporate uniform cleaning, hospitality linen care, dry cleaning, ironing, and recurring pickup and delivery.',
  mainEntity: {
    '@type': 'LocalBusiness',
    '@id': 'https://www.whiteaura.ae/#business',
    name: 'White Aura Laundry Services',
    telephone: '+971547965212',
    email: 'connect@whiteauralaundry.com',
    areaServed: {
      '@type': 'City',
      name: 'Dubai',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+971547965212',
        contactType: 'business customer service',
        areaServed: 'AE-DU',
        availableLanguage: ['English'],
      },
      {
        '@type': 'ContactPoint',
        url: 'https://wa.me/971547965212',
        contactType: 'business laundry booking',
        areaServed: 'AE-DU',
        availableLanguage: ['English'],
      },
    ],
  },
  potentialAction: {
    '@type': 'ReserveAction',
    name: 'Request a commercial laundry quote in Dubai',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.whiteaura.ae/contact',
      actionPlatform: [
        'https://schema.org/DesktopWebPlatform',
        'https://schema.org/MobileWebPlatform',
      ],
    },
    result: {
      '@type': 'Reservation',
      name: 'Commercial laundry service enquiry',
    },
  },
};

const contactServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.whiteaura.ae/contact#commercial-laundry-enquiry',
  name: 'Commercial Laundry Service Enquiry in Dubai',
  serviceType: 'B2B commercial laundry, corporate uniform cleaning, hospitality linen care, dry cleaning, ironing, express laundry, and recurring pickup and delivery',
  provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://www.whiteaura.ae/#business',
    name: 'White Aura Laundry Services',
  },
  areaServed: {
    '@type': 'City',
    name: 'Dubai',
  },
  description: 'Request B2B laundry service in Dubai for hotels, restaurants, salons, spas, clinics, offices, staff uniforms, linens, towels, dry cleaning, ironing, stain treatment, express turnaround, and recurring pickup and delivery.',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'AED',
    url: 'https://www.whiteaura.ae/contact',
  },
};

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState({ submitting: false, success: false, error: null });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch('https://formspree.io/f/mgojwnap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formState)
      });
      
      if (response.ok) {
        setStatus({ submitting: false, success: true, error: null });
        setFormState({
          name: '',
          company: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        const data = await response.json();
        setStatus({ 
          submitting: false, 
          success: false, 
          error: data.errors ? data.errors.map(err => err.message).join(', ') : 'Something went wrong.' 
        });
      }
    } catch (err) {
      setStatus({ submitting: false, success: false, error: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <AnimatedPage className="contact-page">
      <SEO
        title="B2B Commercial Laundry Services Dubai"
        description="Contact White Aura for B2B commercial laundry services in Dubai, including staff uniforms, hospitality linens, towels, dry cleaning, ironing, and scheduled business pickup."
        keywords="B2B laundry Dubai, commercial laundry Dubai, corporate laundry service Dubai, uniform laundry Dubai, hotel laundry service Dubai, restaurant linen laundry Dubai, salon towel laundry Dubai, business laundry pickup Dubai"
        canonical="https://www.whiteaura.ae/contact"
        ogImage="https://www.whiteaura.ae/laundry.png"
        schema={[contactBreadcrumbSchema, contactPageSchema, contactServiceSchema]}
      />

      {/* ── HEADER ── */}
      <section
        className="relative pt-40 pb-28 overflow-hidden bg-cover"
        style={{ backgroundImage: "url('/contact-hero-handshake.png')", backgroundPosition: '58% center' }}
        aria-labelledby="contact-hero-heading"
        itemScope
        itemType="https://schema.org/ContactPage"
      >
        <link itemProp="url" href="https://www.whiteaura.ae/contact" />
        <meta itemProp="name" content="Contact White Aura Commercial Laundry Services Dubai" />
        <meta itemProp="description" content="Request B2B commercial laundry service for uniforms, linens, towels, dry cleaning, ironing, and scheduled business pickup in Dubai." />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fdfcf8]/95 via-[#fdfcf8]/82 to-[#fdfcf8]/35" aria-hidden="true" />
        <div className="absolute inset-0 bg-[#e4f0e4]/20" aria-hidden="true" />
        <div className="orb orb-1" style={{ opacity: 0.18 }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <p className="text-[#7a9e7e] text-xs font-semibold tracking-[0.3em] uppercase mb-5">B2B Laundry Enquiries</p>
            <h1
              id="contact-hero-heading"
              className="font-serif text-6xl md:text-8xl font-bold text-[#1c2b1d] leading-[1.05]"
              itemProp="headline"
            >
              Commercial Laundry<br />
              <span className="italic text-[#7a9e7e]">Services in Dubai.</span>
            </h1>
            <p className="text-xl text-[#2d4a30]/60 leading-relaxed mt-8 max-w-3xl mx-auto" itemProp="description">
              Call, WhatsApp, or send a message to discuss recurring laundry solutions for hotels, restaurants, salons, spas, clinics, offices, staff uniforms, linens, towels, dry cleaning, ironing, and scheduled business pickup.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8 text-sm font-semibold text-[#2d4a30]/70" aria-label="Contact page laundry service keywords">
              {['Commercial laundry Dubai', 'Uniform laundry', 'Hotel linen care', 'Scheduled B2B pickup'].map((item) => (
                <span key={item} className="px-4 py-2 rounded-full bg-white/70 border border-[#c8dfc9]/70">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 60L480 20C720 0 960 40 1440 20V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── MAIN CONTACT SECTION ── */}
      <section className="pt-14 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid gap-8">

            {/* ── LEFT: Info + Map ── */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0.2}
              className="order-2 grid md:grid-cols-2 gap-6"
            >
              {/* Contact cards */}
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={idx * 0.1}
                  className="premium-card p-6 flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-[#5a7a5e] group-hover:scale-110 transition-transform"
                    style={{ background: 'linear-gradient(135deg, #e4f0e4, #c8dfc9)' }}>
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-[#7a9e7e] font-semibold tracking-widest uppercase mb-1">{info.label}</p>
                    <p className="font-semibold text-[#1c2b1d] text-sm">{info.value}</p>
                  </div>
                </motion.div>
              ))}

              {/* WhatsApp CTA */}
              <motion.a
                href="https://wa.me/971547965212"
                target="_blank"
                rel="noreferrer"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.6}
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-bold text-white shadow-xl transition-all md:col-span-2"
                style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
              >
                <MessageCircle size={22} />
                Chat on WhatsApp
              </motion.a>
            </motion.div>

            {/* ── RIGHT: Form ── */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0.3}
              className="order-1 relative overflow-hidden rounded-[2.5rem] p-10 md:p-14 border border-[#c8dfc9]/70 shadow-xl"
              style={{ background: 'linear-gradient(135deg, #eef7ee 0%, #dceedd 100%)' }}
            >
              {/* BG orb */}
              <div className="absolute top-[-20%] right-[-20%] w-72 h-72 rounded-full opacity-20 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #7a9e7e, transparent)' }} />
              <div className="absolute bottom-[-15%] left-[-10%] w-60 h-60 rounded-full opacity-10 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #c8dfc9, transparent)' }} />

              <div className="relative z-10">
                <p className="text-[#7a9e7e] text-xs font-semibold tracking-[0.25em] uppercase mb-3">Send a Message</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1c2b1d] mb-10">
                  We'd Love to<br /><span className="italic text-[#7a9e7e]">Hear from You.</span>
                </h2>

                {status.success ? (
                  <div className="bg-[#7a9e7e]/20 border border-[#7a9e7e] rounded-3xl p-8 text-center text-[#2d4a30]">
                    <h3 className="font-serif text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-sm">Thank you for reaching out. We will get back to you shortly.</p>
                  </div>
                ) : (
                  <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    {status.error && (
                      <div className="bg-red-50 text-red-600 border border-red-200 rounded-xl p-4 text-sm">
                        {status.error}
                      </div>
                    )}
                    <div className="grid grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-[#7a9e7e] text-xs font-medium tracking-widest uppercase">Contact Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="bg-white border border-[#c8dfc9]/70 rounded-xl px-4 py-3.5 text-[#1c2b1d] placeholder-[#2d4a30]/35 text-sm focus:outline-none focus:border-[#7a9e7e] focus:bg-[#fdfcf8] transition-all"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[#7a9e7e] text-xs font-medium tracking-widest uppercase">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          placeholder="Business name"
                          className="bg-white border border-[#c8dfc9]/70 rounded-xl px-4 py-3.5 text-[#1c2b1d] placeholder-[#2d4a30]/35 text-sm focus:outline-none focus:border-[#7a9e7e] focus:bg-[#fdfcf8] transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[#7a9e7e] text-xs font-medium tracking-widest uppercase">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        required
                        className="bg-white border border-[#c8dfc9]/70 rounded-xl px-4 py-3.5 text-[#1c2b1d] placeholder-[#2d4a30]/35 text-sm focus:outline-none focus:border-[#7a9e7e] focus:bg-[#fdfcf8] transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[#7a9e7e] text-xs font-medium tracking-widest uppercase">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="+971 54 796 5212"
                        required
                        className="bg-white border border-[#c8dfc9]/70 rounded-xl px-4 py-3.5 text-[#1c2b1d] placeholder-[#2d4a30]/35 text-sm focus:outline-none focus:border-[#7a9e7e] focus:bg-[#fdfcf8] transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[#7a9e7e] text-xs font-medium tracking-widest uppercase">Business Service Required</label>
                      <div className="relative">
                        <select
                          name="service"
                          value={formState.service}
                          onChange={handleChange}
                          required
                          className="w-full bg-white border border-[#c8dfc9]/70 rounded-xl px-4 py-3.5 text-[#1c2b1d] text-sm focus:outline-none focus:border-[#7a9e7e] focus:bg-[#fdfcf8] transition-all appearance-none cursor-pointer"
                        >
                          <option value="" className="text-[#1c2b1d] bg-white">Select a service…</option>
                          <option value="uniforms" className="text-[#1c2b1d] bg-white">Staff Uniform Laundry</option>
                          <option value="hotel-linen" className="text-[#1c2b1d] bg-white">Hotel & Hospitality Linen</option>
                          <option value="restaurant-linen" className="text-[#1c2b1d] bg-white">Restaurant Linen & Aprons</option>
                          <option value="salon-spa" className="text-[#1c2b1d] bg-white">Salon, Spa & Towel Laundry</option>
                          <option value="clinic" className="text-[#1c2b1d] bg-white">Clinic & Office Laundry</option>
                          <option value="dry" className="text-[#1c2b1d] bg-white">Corporate Dry Cleaning</option>
                          <option value="scheduled-pickup" className="text-[#1c2b1d] bg-white">Scheduled Pickup & Delivery</option>
                          <option value="express" className="text-[#1c2b1d] bg-white">Express Business Service</option>
                          <option value="other" className="text-[#1c2b1d] bg-white">Other</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#2d4a30]/45">▾</div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[#7a9e7e] text-xs font-medium tracking-widest uppercase">Message</label>
                      <textarea
                        rows="4"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us your business type, estimated laundry volume, pickup frequency, and location."
                        className="bg-white border border-[#c8dfc9]/70 rounded-xl px-4 py-3.5 text-[#1c2b1d] placeholder-[#2d4a30]/35 text-sm focus:outline-none focus:border-[#7a9e7e] focus:bg-[#fdfcf8] transition-all resize-none"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-primary w-full justify-center mt-2"
                      type="submit"
                      disabled={status.submitting}
                    >
                      {status.submitting ? 'Sending...' : 'Send Message'} <Send size={18} />
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="pt-10 pb-10 section-gradient">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-[#7a9e7e] text-xs font-semibold tracking-[0.3em] uppercase mb-5">Business Laundry Partners</p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#1c2b1d] mb-6">
              Experience the<br />
              <span className="italic text-[#7a9e7e]">White Aura Difference.</span>
            </h2>
            <p className="text-[#2d4a30]/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Partner with White Aura for reliable commercial laundry, consistent garment care, and scheduled pickup built around your business operations.
            </p>
            <a href="tel:+971547965212" className="btn-primary inline-flex">
              Request a Business Quote: +971 54 796 5212
            </a>
          </motion.div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Contact;
