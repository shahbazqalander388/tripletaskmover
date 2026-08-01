import React from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Header() {
  return (
    <div className="bg-[#B08D57] text-white py-2 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
        {/* Left Side: Email */}
        <a 
          href="mailto:info.brotherscab@gmail.com" 
          className="flex items-center gap-1.5 sm:gap-2 hover:opacity-80 transition-opacity min-w-0"
        >
          <Mail size={16} className="flex-shrink-0" />
          <span className="text-[11px] sm:text-sm font-medium truncate">
            info.brotherscab@gmail.com
          </span>
        </a>
        
        {/* Right Side: Call Button */}
        <a 
          href="tel:+13654400188" 
          className="flex items-center gap-1.5 sm:gap-2 bg-white text-slate-900 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-md hover:shadow-lg hover:bg-slate-50 transition-all flex-shrink-0"
        >
          <Phone size={14} className="text-[#B08D57]" />
          <span className="whitespace-nowrap">+1 (365) 440-0188</span>
        </a>
      </div>
    </div>
  );
}
