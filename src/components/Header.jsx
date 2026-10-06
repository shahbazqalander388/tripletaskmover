import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-[#B08D57] text-white text-xs border-b border-[#977647]/40 shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-wrap items-center justify-between gap-y-1 gap-x-4">
          
          {/* Left: Location & 24/7 Hours */}
          <div className="flex items-center gap-3 text-white/95">
            <div className="inline-flex items-center gap-1.5 bg-black/15 px-2.5 py-1 rounded-md border border-white/20">
              <Clock size={13} className="text-white/90" />
              <span className="font-semibold text-[11px] sm:text-xs tracking-wide">24/7 Service</span>
            </div>
            
            <div className="hidden md:flex items-center gap-1.5 text-white/90 text-xs">
              <MapPin size={13} className="text-white/80" />
              <span>Red Deer, and nearby communities</span>
            </div>
          </div>

          {/* Right: Quick Contacts */}
          <div className="flex items-center gap-3 sm:gap-5 ml-auto">
            {/* Email */}
            <a 
              href="mailto:Tripletaskmovers@gmail.com" 
              className="hidden sm:flex items-center gap-1.5 text-white/90 hover:text-white transition-colors group"
            >
              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Mail size={12} />
              </div>
              <span className="font-medium text-xs">Tripletaskmovers@gmail.com</span>
            </a>

            {/* Direct Phone Pill */}
            <a 
              href="tel:+13654400188" 
              className="inline-flex items-center gap-1.5 bg-white text-slate-900 px-3.5 py-1 rounded-full font-bold text-xs shadow-sm hover:shadow-md hover:bg-slate-50 transition-all transform hover:-translate-y-0.5"
            >
              <Phone size={12} className="text-[#B08D57]" />
              <span className="whitespace-nowrap tracking-tight">+1 (365) 440-0188</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
