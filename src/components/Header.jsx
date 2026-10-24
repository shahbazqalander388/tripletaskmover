import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const PHONE_NUMBER = "587-377-24-52";
const PHONE_TEL = "tel:+15873772452";

export default function Header() {
  return (
    <header className="bg-[#0a0e11] text-white text-xs border-b border-white/10 shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-wrap items-center justify-between gap-y-1 gap-x-4">
          
          {/* Left: Location & 24/7 Hours */}
          <div className="flex items-center gap-3 text-white/90">
            <div className="inline-flex items-center gap-1.5 bg-[#22c55e]/20 text-[#22c55e] px-2.5 py-1 rounded-md border border-[#22c55e]/30">
              <Clock size={13} className="text-[#22c55e]" />
              <span className="font-semibold text-[11px] sm:text-xs tracking-wide">24/7 Service</span>
            </div>
            
            <div className="hidden md:flex items-center gap-1.5 text-white/80 text-xs">
              <MapPin size={13} className="text-[#22c55e]" />
              <span>Red Deer, and nearby communities</span>
            </div>
          </div>

          {/* Right: Quick Contacts */}
          <div className="flex items-center gap-3 sm:gap-5 ml-auto">
            {/* Email */}
            <a 
              href="mailto:Tripletaskmovers@gmail.com" 
              className="hidden sm:flex items-center gap-1.5 text-white/80 hover:text-white transition-colors group"
            >
              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#22c55e] transition-colors">
                <Mail size={12} />
              </div>
              <span className="font-medium text-xs">Tripletaskmovers@gmail.com</span>
            </a>

            {/* Direct Phone Pill */}
            <a 
              href={PHONE_TEL} 
              className="inline-flex items-center gap-1.5 bg-[#22c55e] hover:bg-[#16a34a] text-white px-3.5 py-1 rounded-full font-bold text-xs shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <Phone size={12} className="fill-white" />
              <span className="whitespace-nowrap tracking-tight">{PHONE_NUMBER}</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
