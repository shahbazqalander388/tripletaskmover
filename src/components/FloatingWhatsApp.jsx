import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2">
      {/* Mini Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-slate-900 text-white text-xs font-semibold py-2 px-3.5 rounded-2xl shadow-xl border border-slate-800 animate-bounce duration-1000">
          <span>Need a quick quote? Chat on WhatsApp</span>
          <button 
            onClick={() => setShowTooltip(false)} 
            className="text-slate-400 hover:text-white ml-1 p-0.5"
            aria-label="Close tooltip"
          >
            <X size={12} />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href="https://wa.me/13654400188"
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20b958] text-white rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_35px_rgba(37,211,102,0.6)] transition-all duration-300 transform hover:scale-105"
        aria-label="Chat with Triple Task Movers on WhatsApp"
      >
        {/* Subtle Pulse Rings */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 group-hover:opacity-60 animate-ping pointer-events-none" />
        
        <MessageCircle size={28} className="relative z-10" />
      </a>
    </div>
  );
}
