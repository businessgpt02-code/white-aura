import { motion } from 'framer-motion';
import { Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
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
  { icon: <Phone size={20} />, label: 'Call Us', value: '+971 54 796 5212', sub: 'Mon–Sat, 8am–8pm' },
  { icon: <Mail size={20} />, label: 'Email Us', value: 'connect@whiteauralaundry.com', sub: 'We reply within 2 hours' },
  { icon: <Clock size={20} />, label: 'Business Hours', value: 'Mon–Sat: 8am – 8pm', sub: 'Sunday: Closed' },
];

const Contact = () => {
  return (
    <AnimatedPage className="contact-page">
      <SEO
        title="Contact Us"
        description="Get in touch with White Aura Laundry Services. Book a pickup, ask about our services, or find our location."
      />

      {/* ── HEADER ── */}
      <section className="relative pt-40 pb-28 hero-gradient overflow-hidden">
        <div className="orb orb-1" style={{ opacity: 0.25 }} />
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <p className="text-[#7a9e7e] text-xs font-semibold tracking-[0.3em] uppercase mb-5">Contact Us</p>
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-[#1c2b1d] leading-[1.05]">
              Let's Talk<br />
              <span className="italic text-[#7a9e7e]">Laundry Care.</span>
            </h1>
            <p className="text-xl text-[#2d4a30]/60 leading-relaxed mt-8 max-w-2xl mx-auto">
              Book a pickup, ask about our services, or send us a message. We are here to help keep every garment fresh.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 60L480 20C720 0 960 40 1440 20V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── MAIN CONTACT SECTION ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* ── LEFT: Info + Map ── */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0.2}
              className="lg:col-span-2 flex flex-col gap-6"
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
                    <p className="text-xs text-[#2d4a30]/45 mt-0.5">{info.sub}</p>
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
                className="flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-bold text-white shadow-xl transition-all"
                style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
              >
                <MessageCircle size={22} />
                Chat on WhatsApp
              </motion.a>
            </motion.div>

            {/* ── RIGHT: Form ── */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0.3}
              className="lg:col-span-3 relative overflow-hidden rounded-[2.5rem] p-10 md:p-14"
              style={{ background: 'linear-gradient(135deg, #1c2b1d 0%, #2d4a30 100%)' }}
            >
              {/* BG orb */}
              <div className="absolute top-[-20%] right-[-20%] w-72 h-72 rounded-full opacity-20 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #7a9e7e, transparent)' }} />
              <div className="absolute bottom-[-15%] left-[-10%] w-60 h-60 rounded-full opacity-10 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #c8dfc9, transparent)' }} />

              <div className="relative z-10">
                <p className="text-[#a8c5aa] text-xs font-semibold tracking-[0.25em] uppercase mb-3">Send a Message</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-10">
                  We'd Love to<br /><span className="italic text-[#a8c5aa]">Hear from You.</span>
                </h2>

                <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-[#a8c5aa]/60 text-xs font-medium tracking-widest uppercase">First Name</label>
                      <input
                        type="text"
                        placeholder="John"
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#7a9e7e] focus:bg-white/8 transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[#a8c5aa]/60 text-xs font-medium tracking-widest uppercase">Last Name</label>
                      <input
                        type="text"
                        placeholder="Doe"
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#7a9e7e] transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[#a8c5aa]/60 text-xs font-medium tracking-widest uppercase">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#7a9e7e] transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[#a8c5aa]/60 text-xs font-medium tracking-widest uppercase">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+971 54 796 5212"
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#7a9e7e] transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[#a8c5aa]/60 text-xs font-medium tracking-widest uppercase">Service Required</label>
                    <div className="relative">
                      <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#7a9e7e] transition-all appearance-none cursor-pointer">
                        <option value="" className="text-[#1c2b1d] bg-white">Select a service…</option>
                        <option value="washing" className="text-[#1c2b1d] bg-white">Washing & Folding</option>
                        <option value="dry" className="text-[#1c2b1d] bg-white">Dry Cleaning</option>
                        <option value="ironing" className="text-[#1c2b1d] bg-white">Ironing & Pressing</option>
                        <option value="stain" className="text-[#1c2b1d] bg-white">Stain Removal</option>
                        <option value="pickup" className="text-[#1c2b1d] bg-white">Pickup & Delivery</option>
                        <option value="express" className="text-[#1c2b1d] bg-white">Express Service</option>
                        <option value="premium" className="text-[#1c2b1d] bg-white">Premium Garment Care</option>
                        <option value="other" className="text-[#1c2b1d] bg-white">Other</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">▾</div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[#a8c5aa]/60 text-xs font-medium tracking-widest uppercase">Message</label>
                    <textarea
                      rows="4"
                      placeholder="Tell us how we can help…"
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#7a9e7e] transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full justify-center mt-2"
                    type="submit"
                  >
                    Send Message <Send size={18} />
                  </motion.button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 section-gradient">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-[#7a9e7e] text-xs font-semibold tracking-[0.3em] uppercase mb-5">Join Thousands</p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#1c2b1d] mb-6">
              Experience the<br />
              <span className="italic text-[#7a9e7e]">White Aura Difference.</span>
            </h2>
            <p className="text-[#2d4a30]/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Over 2,000 customers trust White Aura to care for their most cherished garments. Join the family today.
            </p>
            <a href="tel:+971547965212" className="btn-primary inline-flex">
              Call to Book: +971 54 796 5212
            </a>
          </motion.div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Contact;
