import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Mail, MapPin, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Get Estimate', href: '#estimate' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'estimate', 'services', 'why-us', 'how-it-works', 'faqs', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 200) {
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
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.06)] border-b border-slate-200/80 py-3' 
            : 'bg-white border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Brand Logo & Name */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden bg-white shadow-sm border border-slate-200/70 p-1 flex items-center justify-center flex-shrink-0 group-hover:shadow-md transition-shadow">
                <img 
                  src="/icon-512.png" 
                  alt="Triple Task Movers Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "/logo.jpg";
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl italic tracking-tight text-slate-900 group-hover:text-[#B08D57] transition-colors leading-tight">
                  TRIPLE TASK <span className="text-[#B08D57]">MOVERS</span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  Moving • Cleaning • Junk Removal
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      isActive 
                        ? 'text-[#B08D57] bg-[#B08D57]/10' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Desktop Right CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a 
                href="tel:+13654400188"
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 font-semibold text-sm transition-all"
              >
                <div className="w-7 h-7 rounded-full bg-[#B08D57]/10 text-[#B08D57] flex items-center justify-center">
                  <Phone size={14} />
                </div>
                <span className="hidden xl:inline">+1 (365) 440-0188</span>
                <span className="xl:hidden">Call</span>
              </a>

              <a 
                href="#estimate"
                className="flex items-center gap-2 bg-[#B08D57] hover:bg-[#977647] text-white px-4 sm:px-5 py-2.5 rounded-xl font-bold text-sm shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <span>Get Estimate</span>
                <ArrowRight size={15} />
              </a>
            </div>

            {/* Mobile / Tablet Cool Animated Hamburger Button */}
            <div className="lg:hidden flex items-center gap-2.5">
              <a 
                href="tel:+13654400188"
                className="sm:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-[#B08D57] text-white shadow-sm"
                aria-label="Call Now"
              >
                <Phone size={17} />
              </a>

              {/* Animated 3-Bar Hamburger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-11 h-11 rounded-xl bg-slate-100 hover:bg-slate-200/80 active:scale-95 flex flex-col items-center justify-center gap-1.5 focus:outline-none transition-all cursor-pointer p-2 z-50 border border-slate-200/60"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                <span 
                  className={`block h-0.5 w-5 bg-slate-800 rounded-full transition-all duration-300 ease-in-out ${
                    isOpen ? 'rotate-45 translate-y-2 bg-[#B08D57]' : ''
                  }`} 
                />
                <span 
                  className={`block h-0.5 w-5 bg-slate-800 rounded-full transition-all duration-200 ease-in-out ${
                    isOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                  }`} 
                />
                <span 
                  className={`block h-0.5 w-5 bg-slate-800 rounded-full transition-all duration-300 ease-in-out ${
                    isOpen ? '-rotate-45 -translate-y-2 bg-[#B08D57]' : ''
                  }`} 
                />
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Backdrop Dimmed Blur Overlay (Guarantees menu never blends into website content) */}
      <div 
        className={`fixed inset-0 bg-slate-950/70 backdrop-blur-md z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Cool Sliding Side Drawer (Mobile & Tablet) */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-[88%] sm:w-[380px] max-w-full bg-white z-50 shadow-[0_0_60px_rgba(0,0,0,0.35)] flex flex-col justify-between transition-transform duration-300 ease-out lg:hidden border-l border-slate-200 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Top Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-white shadow-sm border border-slate-200 p-1 flex items-center justify-center flex-shrink-0">
              <img 
                src="/icon-512.png" 
                alt="Triple Task Movers" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = "/logo.jpg";
                }}
              />
            </div>
            <div>
              <span className="font-extrabold text-sm italic text-slate-900 block leading-tight">
                TRIPLE TASK <span className="text-[#B08D57]">MOVERS</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block">
                Navigation Menu
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="w-9 h-9 rounded-xl bg-slate-200/60 hover:bg-slate-200 flex items-center justify-center text-slate-700 hover:text-slate-900 transition-colors"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <div className="px-5 py-6 space-y-1.5 overflow-y-auto flex-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold transition-all duration-200 ${
                  isActive 
                    ? 'bg-[#B08D57]/15 text-[#B08D57] shadow-sm' 
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span>{link.name}</span>
                <ArrowRight 
                  size={16} 
                  className={`transition-transform duration-200 ${
                    isActive ? 'text-[#B08D57] translate-x-1' : 'text-slate-300'
                  }`} 
                />
              </a>
            );
          })}
        </div>

        {/* Drawer Bottom Actions & Contacts */}
        <div className="p-5 border-t border-slate-100 bg-slate-50/80 space-y-3">
          
          <a 
            href="#estimate"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-[#B08D57] hover:bg-[#977647] text-white px-5 py-3.5 rounded-xl font-bold text-sm shadow-md transition-colors"
          >
            <span>Request Free Estimate</span>
            <ArrowRight size={16} />
          </a>

          <div className="grid grid-cols-2 gap-2.5">
            <a 
              href="tel:+13654400188"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white px-3 py-3 rounded-xl font-bold text-xs shadow-sm transition-colors"
            >
              <Phone size={14} className="text-[#B08D57]" />
              <span>Call Us</span>
            </a>

            <a 
              href="mailto:Tripletaskmovers@gmail.com"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-1.5 bg-[#B08D57] hover:bg-[#977647] text-white px-3 py-3 rounded-xl font-bold text-xs shadow-sm transition-colors"
            >
              <Mail size={15} />
              <span>Email Us</span>
            </a>
          </div>

          {/* 24/7 Status Line */}
          <div className="pt-2 text-center text-xs text-slate-500 font-medium">
            <span>24/7 Service Across Central Alberta</span>
          </div>

        </div>
      </div>
    </>
  );
}
