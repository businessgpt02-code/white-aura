import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden section-gradient">
      {/* Decorative orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #7a9e7e, transparent)', transform: 'translate(-30%, -30%)' }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #c8dfc9, transparent)', transform: 'translate(30%, 30%)' }} />

      {/* Marquee Banner */}
      <div className="border-y border-[#c8dfc9] py-5 overflow-hidden">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 shrink-0">
              {['Premium Laundry', 'Dry Cleaning', 'Ironing & Pressing', 'Pickup & Delivery', 'Stain Removal', 'Express Service', 'Garment Care', 'Bedsheets & Curtains'].map((item) => (
                <span key={item} className="flex items-center gap-3 text-[#2d4a30]/50 text-sm font-medium tracking-widest uppercase whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7a9e7e] inline-block" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-20 pb-12">
        {/* Brand logo */}
        <div className="mb-16">
          <Link to="/">
            <img
              src="/logo1.png"
              alt="White Aura"
              className="h-24 w-auto object-contain mb-4"
            />
          </Link>
          <p className="text-[#2d4a30]/65 text-base max-w-md mt-2 leading-relaxed">
            Premium laundry and garment care services tailored to keep your clothes fresh, vibrant, and perfectly maintained.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 border-t border-[#c8dfc9] pt-12 mb-12">
          {/* Quick Links */}
          <div>
            <h4 className="text-[#1c2b1d] text-xs font-semibold tracking-[0.2em] uppercase mb-6">Navigation</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((page) => (
                <li key={page}>
                  <Link to={`/${page === 'Home' ? '' : page.toLowerCase()}`} className="text-[#2d4a30]/60 hover:text-[#7a9e7e] transition-colors text-sm group flex items-center gap-2">
                    <span className="w-0 h-px bg-[#7a9e7e] group-hover:w-4 transition-all duration-300 inline-block" />
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#1c2b1d] text-xs font-semibold tracking-[0.2em] uppercase mb-6">Services</h4>
            <ul className="flex flex-col gap-4">
              {['Washing & Folding', 'Dry Cleaning', 'Ironing & Pressing', 'Premium Care', 'Pickup & Delivery'].map((s) => (
                <li key={s} className="text-[#2d4a30]/60 text-sm">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-[#1c2b1d] text-xs font-semibold tracking-[0.2em] uppercase mb-6">Contact</h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-center gap-3 text-[#2d4a30]/60 text-sm">
                <Phone size={16} className="text-[#7a9e7e] shrink-0" />
                +971 54 796 5212
              </li>
              <li className="flex items-center gap-3 text-[#2d4a30]/60 text-sm">
                <Mail size={16} className="text-[#7a9e7e] shrink-0" />
                connect@whiteauralaundry.com
              </li>
            </ul>
            <div className="flex gap-3 mt-8">
              {[FaFacebook, FaInstagram, FaTwitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-[#c8dfc9] flex items-center justify-center text-[#2d4a30]/60 hover:border-[#7a9e7e] hover:text-[#7a9e7e] transition-all duration-300 hover:scale-110">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#c8dfc9] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#2d4a30]/40 text-xs tracking-wide">&copy; {new Date().getFullYear()} White Aura Laundry Services. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="text-[#2d4a30]/40 hover:text-[#2d4a30] text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#2d4a30]/40 hover:text-[#2d4a30] text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
