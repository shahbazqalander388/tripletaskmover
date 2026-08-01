import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      let current = '';
      navLinks.forEach(link => {
        const section = document.getElementById(link.href.substring(1));
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = link.href.substring(1);
          }
        }
      });

      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  useEffect(() => {
    if (activeSection) {
      window.history.replaceState(null, '', `#${activeSection}`);
    }
  }, [activeSection]);

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

  return (
    <nav className={`transition-all duration-300 bg-white ${scrolled ? 'shadow-[0_2px_10px_rgba(0,0,0,0.08)] py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center justify-center bg-white rounded-full w-20 h-20 md:w-24 md:h-24 p-1 overflow-hidden shadow-sm">
              <img src="https://res.cloudinary.com/dai2g47e4/image/upload/v1784754839/WhatsApp_Image_2026-07-23_at_1.52.49_AM_cdyvk3.jpg" alt="Triple Task Movers Logo" className="w-full h-full mix-blend-multiply object-contain" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`font-medium transition-colors ${activeSection === link.href.substring(1) ? 'text-amber-600' : 'text-slate-600 hover:text-amber-600'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:+13654400188"
              className="group flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-lg font-semibold shadow-lg hover:bg-slate-800 hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <Phone size={18} className="text-amber-500 group-hover:animate-pulse" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`block px-3 py-3 text-base font-medium rounded-md ${activeSection === link.href.substring(1) ? 'text-amber-600 bg-slate-50' : 'text-slate-700 hover:text-amber-600 hover:bg-slate-50'}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:+13654400188"
              className="mt-4 flex items-center justify-center gap-2 w-full bg-amber-500 text-slate-900 px-5 py-3 rounded-lg font-bold shadow-md hover:bg-amber-400"
            >
              <Phone size={18} />
              Call Now: +1 (365) 440-0188
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
