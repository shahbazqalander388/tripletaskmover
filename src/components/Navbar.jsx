import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Mail, X } from 'lucide-react';

const NEW_LOGO_URL = "https://res.cloudinary.com/dai2g47e4/image/upload/v1784746169/WhatsApp_Image_2026-07-22_at_11.45.42_PM_pb3awd.jpg";
const PHONE_NUMBER = "587-377-24-52";
const PHONE_TEL = "tel:+15873772452";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Estimate', href: '#estimate', id: 'estimate' },
    { name: 'Why Us', href: '#why-us', id: 'why-us' },
    { name: 'Reviews', href: '#testimonials', id: 'testimonials' },
    { name: 'FAQs', href: '#faqs', id: 'faqs' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['contact', 'faqs', 'how-it-works', 'testimonials', 'why-us', 'estimate', 'services', 'home'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <nav 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#0f1418]/95 backdrop-blur-md shadow-[0_6px_25px_rgba(0,0,0,0.5)] border-b border-white/10 py-2.5' 
            : 'bg-[#121619] border-b border-white/10 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Brand Logo */}
            <a href="#home" className="flex items-center group flex-shrink-0">
              <div className="h-12 sm:h-14 lg:h-16 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="/logo-badge.png"
                  alt="Triple Task Movers Official Logo" 
                  className="h-full w-auto object-contain filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
                  onError={(e) => {
                    e.currentTarget.src = NEW_LOGO_URL;
                  }}
                />
              </div>
            </a>

            {/* Desktop Navigation Links (Centered, Matching Screenshot) */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.id || (link.name === 'Home' && activeSection === 'home');
                return (
                  <a
                    key={`${link.name}-${idx}`}
                    href={link.href}
                    className={`relative py-2 text-sm font-bold tracking-wide transition-colors duration-200 ${
                      isActive 
                        ? 'text-[#22c55e]' 
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    {/* Active Green Indicator Line Underneath */}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#22c55e] rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Desktop Right CTA: Get a Free Quote Green Pill Button */}
            <div className="hidden sm:flex items-center gap-3.5">
              <a 
                href="#estimate"
                className="inline-flex items-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-white px-5 sm:px-6 py-2.5 rounded-full font-bold text-sm tracking-wide shadow-[0_4px_16px_rgba(34,197,94,0.4)] hover:shadow-[0_6px_22px_rgba(34,197,94,0.55)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Phone size={16} className="fill-white" />
                <span>Get a Free Quote</span>
              </a>
            </div>

            {/* Mobile / Tablet Controls */}
            <div className="lg:hidden flex items-center gap-2.5">
              <a 
                href={PHONE_TEL}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white shadow-md active:scale-95 transition-all"
                aria-label="Call Now"
              >
                <Phone size={17} className="fill-white" />
              </a>

              {/* Animated 3-Bar Hamburger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-11 h-11 rounded-xl bg-white/10 hover:bg-white/15 active:scale-95 flex flex-col items-center justify-center gap-1.5 focus:outline-none transition-all cursor-pointer p-2 z-50 border border-white/15"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                <span 
                  className={`block h-0.5 w-5 bg-white rounded-full transition-all duration-300 ease-in-out ${
                    isOpen ? 'rotate-45 translate-y-2 bg-[#22c55e]' : ''
                  }`} 
                />
                <span 
                  className={`block h-0.5 w-5 bg-white rounded-full transition-all duration-200 ease-in-out ${
                    isOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                  }`} 
                />
                <span 
                  className={`block h-0.5 w-5 bg-white rounded-full transition-all duration-300 ease-in-out ${
                    isOpen ? '-rotate-45 -translate-y-2 bg-[#22c55e]' : ''
                  }`} 
                />
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Dimmed Blur Backdrop for Mobile Drawer */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-md z-50 transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer (Clean Dark Theme Matching Navbar) */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-[88%] sm:w-[380px] max-w-full bg-[#0f1418] text-white z-50 shadow-[0_0_60px_rgba(0,0,0,0.8)] flex flex-col justify-between transition-transform duration-300 ease-out lg:hidden border-l border-white/10 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-black/30">
          <div className="flex items-center gap-3">
            <div className="h-11 flex items-center justify-center flex-shrink-0">
              <img 
                src="/logo-badge.png"
                alt="Triple Task Movers" 
                className="h-full w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.src = NEW_LOGO_URL;
                }}
              />
            </div>
            <div>
              <span className="font-extrabold text-sm italic text-white block leading-tight">
                TRIPLE TASK <span className="text-[#22c55e]">MOVERS</span>
              </span>
              <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider block">
                Moving • Cleaning • Junk
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <div className="px-5 py-6 space-y-2 overflow-y-auto flex-1">
          {navLinks.map((link, idx) => {
            const isActive = activeSection === link.id || (link.name === 'Home' && activeSection === 'home');
            return (
              <a
                key={`mobile-${link.name}-${idx}`}
                href={link.href}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold transition-all duration-200 ${
                  isActive 
                    ? 'bg-[#22c55e]/20 text-[#22c55e] border border-[#22c55e]/30' 
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span>{link.name}</span>
                <ArrowRight 
                  size={16} 
                  className={`transition-transform duration-200 ${
                    isActive ? 'text-[#22c55e] translate-x-1' : 'text-white/30'
                  }`} 
                />
              </a>
            );
          })}
        </div>

        {/* Drawer Bottom Actions & Contacts */}
        <div className="p-5 border-t border-white/10 bg-black/40 space-y-3">
          
          <a 
            href="#estimate"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-[#22c55e] hover:bg-[#16a34a] text-white px-5 py-3.5 rounded-xl font-bold text-sm shadow-[0_4px_16px_rgba(34,197,94,0.4)] transition-all"
          >
            <Phone size={16} className="fill-white" />
            <span>Get a Free Quote</span>
          </a>

          <div className="grid grid-cols-2 gap-2.5">
            <a 
              href={PHONE_TEL}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 text-white border border-white/15 px-3 py-3 rounded-xl font-bold text-xs transition-colors"
            >
              <Phone size={14} className="text-[#22c55e]" />
              <span className="truncate">{PHONE_NUMBER}</span>
            </a>

            <a 
              href="mailto:Tripletaskmovers@gmail.com"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 text-white border border-white/15 px-3 py-3 rounded-xl font-bold text-xs transition-colors"
            >
              <Mail size={15} className="text-[#22c55e]" />
              <span>Email Us</span>
            </a>
          </div>

          <div className="pt-2 text-center text-xs text-white/60 font-medium">
            <span>24/7 Service Across Central Alberta</span>
          </div>

        </div>
      </div>
    </>
  );
}
